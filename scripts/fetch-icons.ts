/**
 * fetch-icons.ts
 *
 * Fetches all icon SVGs from the Figma file via the REST API.
 * Organises them into svg/{variant}/{IconName}-{24|16}.svg
 *
 * Reads FIGMA_TOKEN from .env or environment variable.
 *
 * Usage:  pnpm figma:sync
 */

import { readFileSync, writeFileSync, rmSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

// ─── .env loader (zero-dep) ────────────────────────────────────────────────
const ROOT = join(import.meta.dirname!, "..");
const envPath = join(ROOT, ".env");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf-8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = (match[2] ?? "").replace(/^["']|["']$/g, "");
    }
  }
}

// ─── Config ────────────────────────────────────────────────────────────────
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  console.error("❌ Missing FIGMA_TOKEN. Set it in .env or pass via env variable.");
  process.exit(1);
}

const FILE_KEY = "3rYV3P1VzRh0q22HNhgCZv";
const FRAME_NODE_ID = "1:965"; // "DO NOT DELETE THIS FRAME (targeted by script)"
const SVG_DIR = join(ROOT, "svg");
const BATCH_SIZE = 100; // Figma API limit per images request
const DEBUG = process.argv.includes("--debug");

// ─── Types ─────────────────────────────────────────────────────────────────
interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
}

interface IconEntry {
  nodeId: string;
  iconName: string;
  variant: "outlined" | "filled" | "duotone";
  spacing: "default" | "none";
}

// ─── Helpers ───────────────────────────────────────────────────────────────
async function figmaGet<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.figma.com/v1${path}`, {
    headers: { "X-Figma-Token": FIGMA_TOKEN! },
  });
  if (!res.ok) {
    throw new Error(`Figma API ${res.status}: ${await res.text()}`);
  }
  return res.json() as Promise<T>;
}

function parseVariantProps(name: string): Record<string, string> {
  const props: Record<string, string> = {};
  for (const part of name.split(",")) {
    const eq = part.indexOf("=");
    if (eq > 0) {
      props[part.slice(0, eq).trim()] = part.slice(eq + 1).trim();
    }
  }
  return props;
}

/**
 * Recursively walks the Figma tree to collect every leaf node that
 * represents an icon variant (has variant/spacing/size properties).
 *
 * Icon frames are named "Icon/{Name}" — can be any node type (FRAME,
 * COMPONENT_SET, GROUP, etc.). Leaf variants can be INSTANCE, COMPONENT,
 * or any type with property syntax in the name.
 */
function collectIcons(node: FigmaNode, parentIconName?: string, depth = 0): IconEntry[] {
  const results: IconEntry[] = [];

  // Detect Icon/Name containers (any type, not just FRAME)
  let iconName = parentIconName;
  if (node.name.startsWith("Icon/")) {
    iconName = node.name.replace("Icon/", "");
    if (DEBUG) console.log(`${"  ".repeat(depth)}📁 Icon/${iconName} [${node.type}] id=${node.id}`);
  }

  // Check if this node has variant properties (leaf node)
  const hasProps =
    node.name.includes("variant=") ||
    node.name.includes("size=") ||
    node.name.includes("spacing=");

  if (iconName && hasProps) {
    const props = parseVariantProps(node.name);
    const variant = (props.variant ?? "outlined") as IconEntry["variant"];

    // "spacing" property: default = with padding (24px viewBox), none = no padding (16px viewBox)
    // Also handle legacy "size" property: default/small
    const spacingRaw = props.spacing ?? props.size ?? "default";
    const spacing: IconEntry["spacing"] =
      spacingRaw === "none" || spacingRaw === "small" ? "none" : "default";

    // Skip special/placeholder icons
    if (iconName !== "Empty" && iconName !== "Unused") {
      if (DEBUG) {
        console.log(
          `${"  ".repeat(depth)}  ✓ ${node.name} [${node.type}] → ${iconName} ${variant}/${spacing}`
        );
      }
      results.push({ nodeId: node.id, iconName, variant, spacing });
    }
  }

  // Recurse into children
  if (node.children) {
    for (const child of node.children) {
      results.push(...collectIcons(child, iconName, depth + 1));
    }
  }

  return results;
}

/** Debug: print a summary of node types found at each level */
function debugTree(node: FigmaNode, depth = 0, maxDepth = 4): void {
  if (depth > maxDepth) return;
  const childCount = node.children?.length ?? 0;
  console.log(`${"  ".repeat(depth)}[${node.type}] "${node.name}" (${childCount} children) id=${node.id}`);
  if (node.children) {
    for (const child of node.children) {
      debugTree(child, depth + 1, maxDepth);
    }
  }
}

async function downloadSvg(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status}`);
  return res.text();
}

// ─── Main ──────────────────────────────────────────────────────────────────
async function main() {
  console.log("📡 Fetching Figma file tree…");

  const data = await figmaGet<{ nodes: Record<string, { document: FigmaNode }> }>(
    `/files/${FILE_KEY}/nodes?ids=${FRAME_NODE_ID}&depth=10`
  );

  const rootNode = data.nodes[FRAME_NODE_ID]?.document;
  if (!rootNode) {
    // Try URL-encoded key format (1-965 vs 1:965)
    const altKey = Object.keys(data.nodes)[0];
    if (altKey) {
      console.log(`ℹ️  Node key returned as "${altKey}" (expected "${FRAME_NODE_ID}")`);
      const altNode = data.nodes[altKey]?.document;
      if (altNode) {
        return runWithRoot(altNode);
      }
    }
    console.error("❌ Could not find node", FRAME_NODE_ID);
    console.error("   Available keys:", Object.keys(data.nodes));
    process.exit(1);
  }

  return runWithRoot(rootNode);
}

async function runWithRoot(rootNode: FigmaNode) {
  console.log(`📂 Root: "${rootNode.name}" [${rootNode.type}] — ${rootNode.children?.length ?? 0} children`);

  if (DEBUG) {
    console.log("\n── Tree structure (4 levels) ──");
    debugTree(rootNode, 0, 4);
    console.log("── End tree ──\n");
  }

  const icons = collectIcons(rootNode);
  console.log(`🔍 Found ${icons.length} icon variants`);

  if (icons.length === 0) {
    console.log("\n⚠️  No icons found. Run with --debug to inspect the tree:");
    console.log("   pnpm figma:sync -- --debug");

    // Show first few leaf nodes to help diagnose
    const leaves: string[] = [];
    function findLeaves(n: FigmaNode, d = 0) {
      if (!n.children || n.children.length === 0) {
        leaves.push(`  [${n.type}] "${n.name}" id=${n.id}`);
      } else if (d < 8) {
        for (const c of n.children) findLeaves(c, d + 1);
      }
    }
    findLeaves(rootNode);
    console.log(`\n   Sample leaf nodes (${leaves.length} total):`);
    for (const l of leaves.slice(0, 20)) console.log(l);
    if (leaves.length > 20) console.log(`   … and ${leaves.length - 20} more`);
    return;
  }

  // Clean and recreate svg/ directory
  if (existsSync(SVG_DIR)) {
    rmSync(SVG_DIR, { recursive: true });
    console.log("🧹 Cleaned svg/ directory");
  }
  for (const variant of ["outlined", "filled", "duotone"] as const) {
    mkdirSync(join(SVG_DIR, variant), { recursive: true });
  }

  // Batch export SVGs via Figma images endpoint
  const allNodeIds = icons.map((i) => i.nodeId);
  const urlMap: Record<string, string> = {};

  for (let i = 0; i < allNodeIds.length; i += BATCH_SIZE) {
    const batch = allNodeIds.slice(i, i + BATCH_SIZE);
    console.log(
      `📦 Requesting SVG export batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(allNodeIds.length / BATCH_SIZE)}…`
    );

    const result = await figmaGet<{ images: Record<string, string> }>(
      `/images/${FILE_KEY}?ids=${batch.join(",")}&format=svg`
    );

    Object.assign(urlMap, result.images);
  }

  // Download and save each SVG
  let saved = 0;
  let errors = 0;

  const CONCURRENCY = 20;
  const entries = icons.map((icon) => ({ icon, url: urlMap[icon.nodeId] }));

  for (let i = 0; i < entries.length; i += CONCURRENCY) {
    const chunk = entries.slice(i, i + CONCURRENCY);

    await Promise.all(
      chunk.map(async ({ icon, url }) => {
        if (!url) {
          console.warn(`⚠️  No URL for ${icon.iconName} (${icon.variant}/${icon.spacing})`);
          errors++;
          return;
        }

        try {
          const svg = await downloadSvg(url);
          const sizeLabel = icon.spacing === "default" ? "24" : "16";
          const filename = `${icon.iconName}-${sizeLabel}.svg`;
          const filepath = join(SVG_DIR, icon.variant, filename);
          writeFileSync(filepath, svg, "utf-8");
          saved++;
        } catch (err) {
          console.warn(`⚠️  Failed to download ${icon.iconName}: ${err}`);
          errors++;
        }
      })
    );
  }

  console.log(`\n✅ Saved ${saved} SVGs (${errors} errors)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
