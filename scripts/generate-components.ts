/**
 * generate-components.ts
 *
 * Reads optimised SVGs from svg/{variant}/ and generates:
 *   - src/icons/{IconName}.tsx   (one per icon, all variants+spacings inline)
 *   - src/types.ts
 *   - src/utils.ts
 *   - src/styles/icons.css
 *   - src/index.ts               (barrel export)
 *
 * Usage:  tsx scripts/generate-components.ts
 */

import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { basename, join } from "node:path";

const ROOT = join(import.meta.dirname!, "..");
const SVG_DIR = join(ROOT, "svg");
const SRC_DIR = join(ROOT, "src");
const ICONS_DIR = join(SRC_DIR, "icons");
const STYLES_DIR = join(SRC_DIR, "styles");
const VARIANTS = ["outlined", "filled", "duotone"] as const;
// SVG filenames use 24 (spacing=default, with padding) and 16 (spacing=none, no padding)
const SPACINGS = ["default", "none"] as const;
const FILE_TO_SPACING: Record<string, string> = {
  "24": "default",
  "16": "none",
};

const ICON_COLORS = [
  "default",
  "disabled",
  "inverted",
  "warning",
  "critical",
  "success",
  "brand",
  "selected",
  "information",
  "subtle",
  "subtlest",
  "accent",
  "day",
  "night",
] as const;

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Extract SVG inner content (everything between <svg> and </svg>) */
function extractSvgInner(svg: string): string {
  // Remove XML declaration if present
  const clean = svg.replace(/<\?xml[^?]*\?>\s*/g, "");

  // Extract inner content
  const match = clean.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  if (!match) return "";

  return match[1].trim();
}

/** Extract viewBox from SVG */
function extractViewBox(svg: string): string {
  const match = svg.match(/viewBox="([^"]+)"/);
  return match?.[1] ?? "0 0 24 24";
}

/** Convert SVG attributes to JSX (kebab-case → camelCase) */
function svgToJsx(svgContent: string): string {
  return svgContent
    .replace(/clip-rule/g, "clipRule")
    .replace(/fill-rule/g, "fillRule")
    .replace(/fill-opacity/g, "fillOpacity")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stroke-dasharray/g, "strokeDasharray")
    .replace(/stroke-dashoffset/g, "strokeDashoffset")
    .replace(/stroke-miterlimit/g, "strokeMiterlimit")
    .replace(/stroke-opacity/g, "strokeOpacity")
    .replace(/stop-color/g, "stopColor")
    .replace(/stop-opacity/g, "stopOpacity")
    .replace(/class="/g, 'className="')
    .replace(/xmlns:xlink="[^"]*"/g, "");
}

// ─── Build icon map ────────────────────────────────────────────────────────

interface SvgData {
  inner: string;
  viewBox: string;
}

type IconMap = Map<
  string, // IconName
  Partial<
    Record<
      (typeof VARIANTS)[number],
      Partial<Record<(typeof SPACINGS)[number], SvgData>>
    >
  >
>;

function buildIconMap(): IconMap {
  const iconMap: IconMap = new Map();

  for (const variant of VARIANTS) {
    const dir = join(SVG_DIR, variant);
    if (!existsSync(dir)) continue;

    const files = readdirSync(dir).filter((f) => f.endsWith(".svg"));

    for (const file of files) {
      // filename: IconName-24.svg or IconName-16.svg
      const match = basename(file, ".svg").match(/^(.+)-(16|24)$/);
      if (!match) {
        console.warn(`⚠️  Skipping ${file} (unexpected filename format)`);
        continue;
      }

      const [, iconName, fileSize] = match;
      const spacing = FILE_TO_SPACING[fileSize] as (typeof SPACINGS)[number];
      const svg = readFileSync(join(dir, file), "utf-8");
      const inner = extractSvgInner(svg);
      const viewBox = extractViewBox(svg);

      if (!iconMap.has(iconName)) {
        iconMap.set(iconName, {});
      }

      const entry = iconMap.get(iconName)!;
      if (!entry[variant as (typeof VARIANTS)[number]]) {
        entry[variant as (typeof VARIANTS)[number]] = {};
      }
      entry[variant as (typeof VARIANTS)[number]]![spacing] = {
        inner: svgToJsx(inner),
        viewBox,
      };
    }
  }

  return iconMap;
}

// ─── Generate types.ts ─────────────────────────────────────────────────────

function generateTypes(): string {
  return `import type { SVGAttributes } from "react";

export type IconSpacing = "default" | "none";

export type IconVariant = "outlined" | "filled" | "duotone";

export type IconColor =
${ICON_COLORS.map((c) => `  | "${c}"`).join("\n")};

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, "color"> {
  /**
   * Rendered size in pixels. SVG scales without pixelation.
   * @default 24
   */
  size?: number;
  /**
   * Internal spacing of the SVG (viewBox).
   * - "default" — icon with padding (viewBox 0 0 24 24)
   * - "none" — icon without padding (viewBox 0 0 16 16)
   * @default "default"
   */
  spacing?: IconSpacing;
  /** Icon style variant. @default "outlined" */
  variant?: IconVariant;
  /** Semantic color mapped to design tokens. @default "default" */
  color?: IconColor;
  /** Additional CSS class */
  className?: string;
}
`;
}

// ─── Generate utils.ts ─────────────────────────────────────────────────────

function generateUtils(): string {
  return `import type { IconColor } from "./types";

const PREFIX = "comete-icon";

/** Returns the CSS class that maps to the corresponding design token */
export function getIconClass(color: IconColor): string {
  return \`\${PREFIX}--\${color}\`;
}
`;
}

// ─── Generate CSS ──────────────────────────────────────────────────────────

function generateCss(): string {
  const lines = [
    "/* Auto-generated — do not edit manually */",
    "/* Maps icon color props to Comète design token CSS custom properties */",
    "",
  ];

  for (const color of ICON_COLORS) {
    lines.push(`.comete-icon--${color} { color: var(--icon-${color}); }`);
  }

  lines.push("");
  return lines.join("\n");
}

// ─── Generate component ────────────────────────────────────────────────────

function generateComponent(
  iconName: string,
  variants: IconMap extends Map<string, infer V> ? V : never,
): string {
  // Build the variant data structure keyed by spacing
  const variantEntries: string[] = [];

  for (const variant of VARIANTS) {
    const spacings = variants[variant];
    if (!spacings) continue;

    const spacingEntries: string[] = [];
    for (const spacing of SPACINGS) {
      const data = spacings[spacing];
      if (!data) continue;
      spacingEntries.push(
        `      "${spacing}": { viewBox: "${data.viewBox}", paths: <>${data.inner}</> }`,
      );
    }

    if (spacingEntries.length > 0) {
      variantEntries.push(
        `    ${variant}: {\n${spacingEntries.join(",\n")}\n    }`,
      );
    }
  }

  return `import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
${variantEntries.join(",\n")}
};

export function ${iconName}({
  size = 24,
  spacing = "default",
  variant = "outlined",
  color = "default",
  className,
  ...props
}: IconProps) {
  const data = svgData[variant]?.[spacing] ?? svgData.outlined?.["default"];
  if (!data) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={data.viewBox}
      fill="none"
      className={\`\${getIconClass(color)}\${className ? \` \${className}\` : ""}\`}
      aria-hidden="true"
      {...props}
    >
      {data.paths}
    </svg>
  );
}

${iconName}.displayName = "${iconName}";
`;
}

// ─── Generate barrel index ─────────────────────────────────────────────────

function generateIndex(iconNames: string[]): string {
  const lines = [
    "/* Auto-generated — do not edit manually */",
    "",
    "// Styles",
    'import "./styles/icons.css";',
    "",
    "// Types",
    'export type { IconProps, IconSpacing, IconVariant, IconColor } from "./types";',
    "",
    "// Utils",
    'export { getIconClass } from "./utils";',
    "",
    "// Icons",
  ];

  for (const name of iconNames.sort()) {
    lines.push(`export { ${name} } from "./icons/${name}";`);
  }

  lines.push("");
  return lines.join("\n");
}

// ─── Main ──────────────────────────────────────────────────────────────────

function main() {
  console.log("🔨 Building icon map from SVGs…");
  const iconMap = buildIconMap();
  console.log(`   Found ${iconMap.size} icons`);

  // Ensure dirs
  for (const dir of [ICONS_DIR, STYLES_DIR]) {
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  }

  // Generate types + utils
  writeFileSync(join(SRC_DIR, "types.ts"), generateTypes(), "utf-8");
  writeFileSync(join(SRC_DIR, "utils.ts"), generateUtils(), "utf-8");
  console.log("   ✓ types.ts + utils.ts");

  // Generate CSS
  writeFileSync(join(STYLES_DIR, "icons.css"), generateCss(), "utf-8");
  console.log("   ✓ styles/icons.css");

  // Generate components
  const iconNames: string[] = [];
  for (const [name, variants] of iconMap) {
    writeFileSync(
      join(ICONS_DIR, `${name}.tsx`),
      generateComponent(name, variants),
      "utf-8",
    );
    iconNames.push(name);
  }
  console.log(`   ✓ ${iconNames.length} icon components`);

  // Generate barrel
  writeFileSync(join(SRC_DIR, "index.ts"), generateIndex(iconNames), "utf-8");
  console.log("   ✓ index.ts");

  console.log(`\n✅ Generated ${iconNames.length} React icon components`);
}

main();
