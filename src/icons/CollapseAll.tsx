import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.4 22 6 20.6l6-6 6 6-1.4 1.4-4.6-4.6zM12 9.4l-6-6L7.4 2 12 6.6 16.6 2 18 3.4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.933 14.667 4 13.733l4-4 4 4-.933.934L8 11.6zM8 6.267l-4-4 .933-.934L8 4.4l3.067-3.067.933.934z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 17.4-3.9 3.9q-.275.275-.7.275t-.7-.275-.275-.7.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575L17.3 19.9q.275.275.275.7t-.275.7-.7.275-.7-.275zm0-10.8 3.9-3.9q.275-.275.7-.275t.7.275.275.7-.275.7l-3.875 3.875Q12.85 8.55 12 8.55t-1.425-.575L6.7 4.1q-.275-.275-.275-.7t.275-.7.7-.275.7.275z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 11.6-2.6 2.6q-.183.183-.467.183t-.466-.183-.184-.467.184-.466l2.583-2.584q.383-.383.95-.383t.95.383l2.583 2.584q.184.183.184.466t-.184.467-.466.183-.467-.183zm0-7.2 2.6-2.6q.183-.183.467-.183t.466.183.184.467-.184.466L8.95 5.317Q8.567 5.7 8 5.7t-.95-.383L4.467 2.733q-.184-.183-.184-.466t.184-.467.466-.183.467.183z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.4 22 6 20.6l6-6 6 6-1.4 1.4-4.6-4.6zM12 9.4l-6-6L7.4 2 12 6.6 16.6 2 18 3.4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.933 14.667 4 13.733l4-4 4 4-.933.934L8 11.6zM8 6.267l-4-4 .933-.934L8 4.4l3.067-3.067.933.934z"/></> }
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
