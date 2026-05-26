import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m8.9 20-1.4-1.4 4.5-4.5 4.5 4.5-1.4 1.4-3.1-3.1zM12 9.9 7.5 5.4 8.9 4 12 7.1 15.1 4l1.4 1.4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.933 13.333 5 12.4l3-3 3 3-.933.933L8 11.267zM8 6.6l-3-3 .933-.933L8 4.733l2.067-2.066L11 3.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 16.9-2.4 2.4q-.275.275-.7.275t-.7-.275-.275-.7.275-.7l3.1-3.1q.15-.15.325-.212t.375-.063.375.063.325.212l3.1 3.1q.275.275.275.7t-.275.7-.7.275-.7-.275zm0-9.8 2.4-2.4q.275-.275.7-.275t.7.275.275.7-.275.7l-3.1 3.1q-.15.15-.325.213T12 9.475t-.375-.062T11.3 9.2L8.2 6.1q-.275-.275-.275-.7t.275-.7.7-.275.7.275z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 11.267-1.6 1.6q-.183.183-.467.183t-.466-.183-.184-.467.184-.467l2.066-2.066q.1-.1.217-.142T8 9.683t.25.042.217.142l2.066 2.066q.184.184.184.467t-.184.467-.466.183-.467-.183zm0-6.534 1.6-1.6q.183-.183.467-.183t.466.183.184.467-.184.467L8.467 6.133q-.1.1-.217.142T8 6.317t-.25-.042-.217-.142L5.467 4.067q-.184-.184-.184-.467t.184-.467.466-.183.467.183z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m8.9 20-1.4-1.4 4.5-4.5 4.5 4.5-1.4 1.4-3.1-3.1zM12 9.9 7.5 5.4 8.9 4 12 7.1 15.1 4l1.4 1.4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.933 13.333 5 12.4l3-3 3 3-.933.933L8 11.267zM8 6.6l-3-3 .933-.933L8 4.733l2.067-2.066L11 3.6z"/></> }
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
