import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.4 22 6 20.6l6-6 6 6-1.4 1.4-4.6-4.6zM12 9.4l-6-6L7.4 2 12 6.6 16.6 2 18 3.4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.933 14.667 4 13.734l4-4 4 4-.933.933L8 11.6zM8 6.267l-4-4 .933-.934L8 4.4l3.067-3.067.933.934z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.4 22 6 20.6l6-6 6 6-1.4 1.4-4.6-4.6zM12 9.4l-6-6L7.4 2 12 6.6 16.6 2 18 3.4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.933 14.667 4 13.734l4-4 4 4-.933.933L8 11.6zM8 6.267l-4-4 .933-.934L8 4.4l3.067-3.067.933.934z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.4 22 6 20.6l6-6 6 6-1.4 1.4-4.6-4.6zM12 9.4l-6-6L7.4 2 12 6.6 16.6 2 18 3.4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.933 14.667 4 13.734l4-4 4 4-.933.933L8 11.6zM8 6.267l-4-4 .933-.934L8 4.4l3.067-3.067.933.934z"/></> }
    }
};

export function CollapseAll({
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

CollapseAll.displayName = "CollapseAll";
