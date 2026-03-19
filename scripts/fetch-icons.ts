/**
 * fetch-icons.ts
 *
 * Fetches all icon SVGs from the Figma file via the REST API.
 * Organises them into svg/{variant}/{IconName}-{size}.svg
 *
 * Usage:  FIGMA_TOKEN=xxx tsx scripts/fetch-icons.ts
 *   or:   pnpm fetch            (with .env containing FIGMA_TOKEN)
 */

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

// ─── Config ────────────────────────────────────────────────────────────────
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  console.error("Missing FIGMA_TOKEN env variable");
  process.exit(1);
}

const FILE_KEY = "3rYV3P1VzRh0q22HNhgCZv";
const FRAME_NODE_ID = "1:965"; // "Icons" frame
const SVG_DIR = join(import.meta.dirname!, "..", "svg");
const BATCH_SIZE = 100; // Figma API limit per images request

// ─── Types ─────────────────────────────────────────────────────────────────
interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
}

interface IconVariant {
  nodeId: string;
  iconName: string;
  variant: "outlined" | "filled" | "duotone";
  size: "default" | "small";
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

function parseVariantProps(name: string): { variant?: string; size?: string } {
  const props: Record<string, string> = {};
  for (const part of name.split(",")) {
    const [key, value] = part.trim().split("=");
    if (key && value) props[key.trim()] = value.trim();
  }
  return props;
}

/**
 * Recursively walks the Figma tree from node 1:965 to collect every
 * <symbol> (INSTANCE/COMPONENT) node that carries variant+size props.
 */
function collectIcons(node: FigmaNode, parentIconName?: string): IconVariant[] {
  const results: IconVariant[] = [];

  // Detect Icon/Name frames
  let iconName = parentIconName;
  if (node.name.startsWith("Icon/") && node.type === "FRAME") {
    iconName = node.name.replace("Icon/", "");
  }

  // Check if this node is a variant instance (symbol)
  if (
    iconName &&
    (node.type === "INSTANCE" || node.type === "COMPONENT") &&
    (node.name.includes("variant=") || node.name.includes("size=") || node.name.includes("spacing="))
  ) {
    const props = parseVariantProps(node.name);
    const variant = (props.variant ?? "outlined") as IconVariant["variant"];
    // Figma property is "spacing" (default/none) but maps to size (default=24, none=16)
    const spacing = props.spacing ?? props.size ?? "default";
    const size = (spacing === "none" || spacing === "small" ? "small" : "default") as IconVariant["size"];

    // Skip "Empty" and "Unused" icons
    if (iconName !== "Empty" && iconName !== "Unused") {
      results.push({ nodeId: node.id, iconName, variant, size });
    }
  }

  // Recurse
  if (node.children) {
    for (const child of node.children) {
      results.push(...collectIcons(child, iconName));
    }
  }

  return results;
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
    console.error("Could not find node", FRAME_NODE_ID);
    process.exit(1);
  }

  const icons = collectIcons(rootNode);
  console.log(`🔍 Found ${icons.length} icon variants`);

  // Ensure output dirs
  for (const variant of ["outlined", "filled", "duotone"] as const) {
    const dir = join(SVG_DIR, variant);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
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

  // Process in parallel with concurrency limit
  const CONCURRENCY = 20;
  const entries = icons.map((icon) => ({ icon, url: urlMap[icon.nodeId] }));

  for (let i = 0; i < entries.length; i += CONCURRENCY) {
    const chunk = entries.slice(i, i + CONCURRENCY);

    await Promise.all(
      chunk.map(async ({ icon, url }) => {
        if (!url) {
          console.warn(`⚠️  No URL for ${icon.iconName} (${icon.variant}/${icon.size})`);
          errors++;
          return;
        }

        try {
          const svg = await downloadSvg(url);
          const sizeLabel = icon.size === "default" ? "24" : "16";
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
