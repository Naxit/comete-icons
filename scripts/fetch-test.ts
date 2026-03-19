/**
 * fetch-test.ts
 *
 * Fetches only 2 specific icons for pipeline validation.
 * Usage:  FIGMA_TOKEN=xxx tsx scripts/fetch-test.ts
 */

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  console.error("Missing FIGMA_TOKEN env variable");
  process.exit(1);
}

const FILE_KEY = "3rYV3P1VzRh0q22HNhgCZv";
const SVG_DIR = join(import.meta.dirname!, "..", "svg");

// Only the 2 test icons — all 12 variant/spacing combos
const TEST_ICONS = [
  // ConfirmationNumber
  { nodeId: "620:2993", name: "ConfirmationNumber", variant: "outlined", file: "24" },
  { nodeId: "620:2995", name: "ConfirmationNumber", variant: "filled",   file: "24" },
  { nodeId: "620:2997", name: "ConfirmationNumber", variant: "duotone",  file: "24" },
  { nodeId: "620:2999", name: "ConfirmationNumber", variant: "outlined", file: "16" },
  { nodeId: "620:3001", name: "ConfirmationNumber", variant: "filled",   file: "16" },
  { nodeId: "620:3003", name: "ConfirmationNumber", variant: "duotone",  file: "16" },
  // InvoiceToApprovedPlatform
  { nodeId: "1472:1522", name: "InvoiceToApprovedPlatform", variant: "outlined", file: "24" },
  { nodeId: "1472:1524", name: "InvoiceToApprovedPlatform", variant: "filled",   file: "24" },
  { nodeId: "1472:1526", name: "InvoiceToApprovedPlatform", variant: "duotone",  file: "24" },
  { nodeId: "1472:1528", name: "InvoiceToApprovedPlatform", variant: "outlined", file: "16" },
  { nodeId: "1472:1530", name: "InvoiceToApprovedPlatform", variant: "filled",   file: "16" },
  { nodeId: "1472:1532", name: "InvoiceToApprovedPlatform", variant: "duotone",  file: "16" },
];

async function figmaGet<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.figma.com/v1${path}`, {
    headers: { "X-Figma-Token": FIGMA_TOKEN! },
  });
  if (!res.ok) throw new Error(`Figma API ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

async function main() {
  // Ensure dirs
  for (const variant of ["outlined", "filled", "duotone"]) {
    const dir = join(SVG_DIR, variant);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  }

  // Request SVG export for all 12 nodes
  const nodeIds = TEST_ICONS.map((i) => i.nodeId).join(",");
  console.log("📡 Requesting SVG export from Figma…");

  const result = await figmaGet<{ images: Record<string, string> }>(
    `/images/${FILE_KEY}?ids=${nodeIds}&format=svg`
  );

  console.log(`📦 Got ${Object.keys(result.images).length} SVG URLs`);

  // Download each SVG
  let saved = 0;
  for (const icon of TEST_ICONS) {
    const url = result.images[icon.nodeId];
    if (!url) {
      console.warn(`⚠️  No URL for ${icon.name} ${icon.variant}/${icon.file}`);
      continue;
    }

    const res = await fetch(url);
    const svg = await res.text();
    const filepath = join(SVG_DIR, icon.variant, `${icon.name}-${icon.file}.svg`);
    writeFileSync(filepath, svg, "utf-8");
    console.log(`  ✓ ${icon.variant}/${icon.name}-${icon.file}.svg (${svg.length} bytes)`);
    saved++;
  }

  console.log(`\n✅ Saved ${saved}/12 SVGs in svg/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
