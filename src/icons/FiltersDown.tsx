import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 16.15-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4z"/><path fill="currentColor" d="m9 8.25 3 3 3-3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 11.9-6-6 1.4-1.4L8 9.1l4.6-4.6L14 5.9z"/><path fill="currentColor" d="m5 4 3 3 3-3z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 16.15-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4z"/><path fill="currentColor" d="m9 8.25 3 3 3-3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 11.9-6-6 1.4-1.4L8 9.1l4.6-4.6L14 5.9z"/><path fill="currentColor" d="m5 4 3 3 3-3z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="m12 16.15-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4z"/><path fill="#007ADA" d="m9 8.25 3 3 3-3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="m8 11.9-6-6 1.4-1.4L8 9.1l4.6-4.6L14 5.9z"/><path fill="#007ADA" d="m5 4 3 3 3-3z"/></> }
    }
};

export function FiltersDown({
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

FiltersDown.displayName = "FiltersDown";
