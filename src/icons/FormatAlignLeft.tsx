import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 21v-2h18v2zm0-4v-2h12v2zm0-4v-2h18v2zm0-4V7h12v2zm0-4V3h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 16v-1.778h16V16zm0-3.556v-1.777h10.667v1.777zM0 8.89V7.11h16v1.78zm0-3.556V3.556h10.667v1.777zm0-3.555V0h16v1.778z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 21v-2h18v2zm0-4v-2h12v2zm0-4v-2h18v2zm0-4V7h12v2zm0-4V3h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 16v-1.778h16V16zm0-3.556v-1.777h10.667v1.777zM0 8.89V7.11h16v1.78zm0-3.556V3.556h10.667v1.777zm0-3.555V0h16v1.778z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M3 21v-2h18v2zm0-4v-2h12v2zm0-4v-2h18v2zm0-4V7h12v2zm0-4V3h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M0 16v-1.778h16V16zm0-3.556v-1.777h10.667v1.777zM0 8.89V7.11h16v1.78zm0-3.556V3.556h10.667v1.777zm0-3.555V0h16v1.778z"/></> }
    }
};

export function FormatAlignLeft({
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

FormatAlignLeft.displayName = "FormatAlignLeft";
