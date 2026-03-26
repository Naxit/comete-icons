import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 21v-2h18v2zm4-4v-2h10v2zm-4-4v-2h18v2zm4-4V7h10v2zM3 5V3h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 16v-1.778h16V16zm3.556-3.556v-1.777h8.888v1.777zM0 8.89V7.11h16v1.78zm3.556-3.556V3.556h8.888v1.777zM0 1.778V0h16v1.778z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 21v-2h18v2zm4-4v-2h10v2zm-4-4v-2h18v2zm4-4V7h10v2zM3 5V3h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 16v-1.778h16V16zm3.556-3.556v-1.777h8.888v1.777zM0 8.89V7.11h16v1.78zm3.556-3.556V3.556h8.888v1.777zM0 1.778V0h16v1.778z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M3 21v-2h18v2zm4-4v-2h10v2zm-4-4v-2h18v2zm4-4V7h10v2zM3 5V3h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="M0 16v-1.778h16V16zm3.556-3.556v-1.777h8.888v1.777zM0 8.89V7.11h16v1.78zm3.556-3.556V3.556h8.888v1.777zM0 1.778V0h16v1.778z"/></> }
    }
};

export function FormatAlignCenter({
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

FormatAlignCenter.displayName = "FormatAlignCenter";
