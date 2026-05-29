import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9 20v-6q-2.075 0-3.537-1.463Q4 11.075 4 9t1.463-3.537Q6.925 4 9 4h9v2h-2v14h-2V6h-3v14z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6 16v-6q-2.075 0-3.537-1.463Q1 7.076 1 5t1.463-3.537T6 0h9v2h-2v14h-2V2H8v14z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9 20v-6q-2.075 0-3.537-1.463Q4 11.075 4 9t1.463-3.537Q6.925 4 9 4h9v2h-2v14h-2V6h-3v14z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6 16v-6q-2.075 0-3.537-1.463Q1 7.076 1 5t1.463-3.537T6 0h9v2h-2v14h-2V2H8v14z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M9 20v-6q-2.075 0-3.537-1.463Q4 11.075 4 9t1.463-3.537Q6.925 4 9 4h9v2h-2v14h-2V6h-3v14z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="M6 16v-6q-2.075 0-3.537-1.463Q1 7.076 1 5t1.463-3.537T6 0h9v2h-2v14h-2V2H8v14z"/></> }
    }
};

export function FormatParagraph({
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
      className={`${getIconClass(color)}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
      {...props}
    >
      {data.paths}
    </svg>
  );
}

FormatParagraph.displayName = "FormatParagraph";
