import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m8.9 20-1.4-1.4 4.5-4.5 4.5 4.5-1.4 1.4-3.1-3.1zM12 9.9 7.5 5.4 8.9 4 12 7.1 15.1 4l1.4 1.4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.933 13.334 5 12.4l3-3 3 3-.933.934L8 11.267zM8 6.6l-3-3 .933-.933L8 4.733l2.067-2.066L11 3.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m8.9 20-1.4-1.4 4.5-4.5 4.5 4.5-1.4 1.4-3.1-3.1zM12 9.9 7.5 5.4 8.9 4 12 7.1 15.1 4l1.4 1.4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.933 13.334 5 12.4l3-3 3 3-.933.934L8 11.267zM8 6.6l-3-3 .933-.933L8 4.733l2.067-2.066L11 3.6z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m8.9 20-1.4-1.4 4.5-4.5 4.5 4.5-1.4 1.4-3.1-3.1zM12 9.9 7.5 5.4 8.9 4 12 7.1 15.1 4l1.4 1.4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.933 13.334 5 12.4l3-3 3 3-.933.934L8 11.267zM8 6.6l-3-3 .933-.933L8 4.733l2.067-2.066L11 3.6z"/></> }
    }
};

export function UnfoldLess({
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

UnfoldLess.displayName = "UnfoldLess";
