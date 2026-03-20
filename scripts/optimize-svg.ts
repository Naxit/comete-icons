/**
 * optimize-svg.ts
 *
 * Runs SVGO on all SVGs in svg/ to:
 * - Remove hardcoded fill/stroke colors → replace with currentColor
 * - Clean up metadata, comments, editor cruft
 * - Optimise paths
 *
 * Usage:  tsx scripts/optimize-svg.ts
 */

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { type Config, optimize } from "svgo";

const SVG_DIR = join(import.meta.dirname!, "..", "svg");
const VARIANTS = ["outlined", "filled", "duotone"] as const;

const svgoConfig: Config = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // Keep viewBox for scaling
          removeViewBox: false,
          // Keep IDs — we'll namespace them
          cleanupIds: false,
        },
      },
    },
    // Remove fixed dimensions (we control size via React props)
    "removeDimensions",
    // Replace hardcoded colors with currentColor
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
    // Remove fill="none" on root svg (keep on inner elements for duotone)
    {
      name: "removeAttrs",
      params: {
        attrs: ["svg:fill:none", "svg:xmlns:xlink"],
      },
    },
  ],
};

function main() {
  let total = 0;

  for (const variant of VARIANTS) {
    const dir = join(SVG_DIR, variant);
    let files: string[];
    try {
      files = readdirSync(dir).filter((f) => f.endsWith(".svg"));
    } catch {
      console.warn(`⚠️  Skipping ${variant}/ (not found)`);
      continue;
    }

    for (const file of files) {
      const filepath = join(dir, file);
      const raw = readFileSync(filepath, "utf-8");

      const result = optimize(raw, {
        ...svgoConfig,
        path: filepath,
      });

      writeFileSync(filepath, result.data, "utf-8");
      total++;
    }
  }

  console.log(`✅ Optimised ${total} SVGs`);
}

main();
