import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7 19v-2h7.1q1.576 0 2.737-1Q18 15 18 13.5T16.837 11 14.1 10H7.8l2.6 2.6L9 14 4 9l5-5 1.4 1.4L7.8 8h6.3q2.425 0 4.163 1.575Q20 11.15 20 13.5t-1.738 3.925Q16.526 19 14.1 19z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.667 12.667v-1.334H9.4q1.05 0 1.825-.666Q12 10 12 9t-.775-1.667A2.7 2.7 0 0 0 9.4 6.667H5.2L6.933 8.4 6 9.333 2.667 6 6 2.667l.933.933L5.2 5.333h4.2q1.617 0 2.775 1.05T13.333 9t-1.158 2.617-2.775 1.05z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7 19v-2h7.1q1.576 0 2.737-1Q18 15 18 13.5T16.837 11 14.1 10H7.8l2.6 2.6L9 14 4 9l5-5 1.4 1.4L7.8 8h6.3q2.425 0 4.163 1.575Q20 11.15 20 13.5t-1.738 3.925Q16.526 19 14.1 19z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.667 12.667v-1.334H9.4q1.05 0 1.825-.666Q12 10 12 9t-.775-1.667A2.7 2.7 0 0 0 9.4 6.667H5.2L6.933 8.4 6 9.333 2.667 6 6 2.667l.933.933L5.2 5.333h4.2q1.617 0 2.775 1.05T13.333 9t-1.158 2.617-2.775 1.05z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" fillRule="evenodd" d="m7.8 8 2.6-2.6L9 4 4 9l5 5 1.4-1.4L7.8 10l-1-1z" clipRule="evenodd"/><path fill="#007ADA" d="M7 17v2h7.1q2.425 0 4.163-1.575Q20 15.85 20 13.5t-1.738-3.925Q16.526 8 14.1 8H7.8l-1 1 1 1h6.3q1.576 0 2.737 1Q18 12 18 13.5T16.837 16 14.1 17z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" fillRule="evenodd" d="M5.2 5.333 6.933 3.6 6 2.667 2.667 6 6 9.333l.933-.933L5.2 6.667 4.533 6z" clipRule="evenodd"/><path fill="#007ADA" d="M4.667 11.333v1.334H9.4q1.617 0 2.775-1.05T13.333 9t-1.158-2.617T9.4 5.333H5.2L4.533 6l.667.667h4.2q1.05 0 1.825.666Q12 8 12 9t-.775 1.667a2.7 2.7 0 0 1-1.825.666z"/></> }
    }
};

export function Undo({
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

Undo.displayName = "Undo";
