import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 5V3h18v2zm6 4V7h12v2zm-6 4v-2h18v2zm6 4v-2h12v2zm-6 4v-2h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 1.778V0h16v1.778zm5.333 3.555V3.556H16v1.777zM0 8.89V7.11h16v1.78zm5.333 3.555v-1.777H16v1.777zM0 16v-1.778h16V16z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 5V3h18v2zm6 4V7h12v2zm-6 4v-2h18v2zm6 4v-2h12v2zm-6 4v-2h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 1.778V0h16v1.778zm5.333 3.555V3.556H16v1.777zM0 8.89V7.11h16v1.78zm5.333 3.555v-1.777H16v1.777zM0 16v-1.778h16V16z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M3 5V3h18v2zm6 4V7h12v2zm-6 4v-2h18v2zm6 4v-2h12v2zm-6 4v-2h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M0 1.778V0h16v1.778zm5.333 3.555V3.556H16v1.777zM0 8.89V7.11h16v1.78zm5.333 3.555v-1.777H16v1.777zM0 16v-1.778h16V16z"/></> }
    }
};

export function FormatAlignRight({
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

FormatAlignRight.displayName = "FormatAlignRight";
