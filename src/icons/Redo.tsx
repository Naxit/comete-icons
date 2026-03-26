import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9.9 19q-2.425 0-4.163-1.575Q4 15.85 4 13.5t1.737-3.925T9.9 8h6.3l-2.6-2.6L15 4l5 5-5 5-1.4-1.4 2.6-2.6H9.9q-1.575 0-2.738 1Q6 12 6 13.5T7.162 16q1.164 1 2.738 1H17v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6.6 12.667q-1.617 0-2.775-1.05T2.667 9t1.158-2.617T6.6 5.333h4.2L9.067 3.6 10 2.667 13.333 6 10 9.333 9.067 8.4 10.8 6.667H6.6q-1.05 0-1.825.666Q4 8 4 9t.775 1.667a2.7 2.7 0 0 0 1.825.666h4.733v1.334z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9.9 19q-2.425 0-4.163-1.575Q4 15.85 4 13.5t1.737-3.925T9.9 8h6.3l-2.6-2.6L15 4l5 5-5 5-1.4-1.4 2.6-2.6H9.9q-1.575 0-2.738 1Q6 12 6 13.5T7.162 16q1.164 1 2.738 1H17v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6.6 12.667q-1.617 0-2.775-1.05T2.667 9t1.158-2.617T6.6 5.333h4.2L9.067 3.6 10 2.667 13.333 6 10 9.333 9.067 8.4 10.8 6.667H6.6q-1.05 0-1.825.666Q4 8 4 9t.775 1.667a2.7 2.7 0 0 0 1.825.666h4.733v1.334z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M9.9 19q-2.425 0-4.163-1.575Q4 15.85 4 13.5t1.737-3.925T9.9 8h6.3l-2.6-2.6L15 4l5 5-5 5-1.4-1.4 2.6-2.6H9.9q-1.575 0-2.738 1Q6 12 6 13.5T7.162 16q1.164 1 2.738 1H17v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="M6.6 12.667q-1.617 0-2.775-1.05T2.667 9t1.158-2.617T6.6 5.333h4.2L9.067 3.6 10 2.667 13.333 6 10 9.333 9.067 8.4 10.8 6.667H6.6q-1.05 0-1.825.666Q4 8 4 9t.775 1.667a2.7 2.7 0 0 0 1.825.666h4.733v1.334z"/></> }
    }
};

export function Redo({
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

Redo.displayName = "Redo";
