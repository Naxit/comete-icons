/**
 * optimize-svg.ts
 *
 * Runs SVGO on all SVGs in svg/ to:
 * - Remove hardcoded fill/stroke colors → replace with currentColor
 * - For duotone: only replace the primary color (icon/default = #455D84) with
 *   currentColor, keep the secondary accent color as-is
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

/**
 * The primary icon color in Figma (icon/default token in light theme).
 * In duotone SVGs this color becomes currentColor; all other colors are kept.
 */
const DUOTONE_PRIMARY_COLOR = "#455D84";

/** Base SVGO config shared by outlined/filled variants (all colors → currentColor) */
const baseConfig: Config = {
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

/**
 * SVGO config for duotone variants.
 * Does NOT use convertColors — instead uses a custom plugin to only replace
 * the primary color with currentColor and leave accent colors untouched.
 */
const duotoneConfig: Config = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIds: false,
        },
      },
    },
    "removeDimensions",
    // Custom plugin: only convert the primary color to currentColor
    {
      name: "duotone-primary-to-currentColor",
      fn: () => ({
        element: {
          enter: (node) => {
            const primaryLower = DUOTONE_PRIMARY_COLOR.toLowerCase();
            for (const attr of ["fill", "stroke"] as const) {
              const value = node.attributes[attr];
              if (value && value.toLowerCase() === primaryLower) {
                node.attributes[attr] = "currentColor";
              }
            }
          },
        },
      }),
    },
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

    const config = variant === "duotone" ? duotoneConfig : baseConfig;

    for (const file of files) {
      const filepath = join(dir, file);
      const raw = readFileSync(filepath, "utf-8");

      const result = optimize(raw, {
        ...config,
        path: filepath,
      });

      writeFileSync(filepath, result.data, "utf-8");
      total++;
    }
  }

  console.log(`✅ Optimised ${total} SVGs`);
}

main();
