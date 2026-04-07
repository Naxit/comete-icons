import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m12.7 8.701 4.593 4.593a.99.99 0 0 1 .007 1.407.99.99 0 0 1-1.407-.007l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4l4.592-4.593a1 1 0 0 1 1.414 0z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m8.5 5.654 3.287 3.287a.708.708 0 1 1-1.001 1.002L7.995 7.152l-2.79 2.79a.708.708 0 0 1-1.003-1.001l3.286-3.287a.716.716 0 0 1 1.012 0" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m12.7 8.701 4.593 4.593a.99.99 0 0 1 .007 1.407.99.99 0 0 1-1.407-.007l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4l4.592-4.593a1 1 0 0 1 1.414 0z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m8.5 5.654 3.287 3.287a.708.708 0 1 1-1.001 1.002L7.995 7.152l-2.79 2.79a.708.708 0 0 1-1.003-1.001l3.286-3.287a.716.716 0 0 1 1.012 0" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#0076D8" fillRule="evenodd" d="m12.7 8.701 4.593 4.593a.99.99 0 0 1 .007 1.407.99.99 0 0 1-1.407-.007l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4l4.592-4.593a1 1 0 0 1 1.414 0z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#0076D8" fillRule="evenodd" d="m8.5 5.654 3.287 3.287a.708.708 0 1 1-1.001 1.002L7.995 7.152l-2.79 2.79a.708.708 0 0 1-1.003-1.001l3.286-3.287a.716.716 0 0 1 1.012 0" clipRule="evenodd"/></> }
    }
};

export function KeyboardArrowUp({
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

KeyboardArrowUp.displayName = "KeyboardArrowUp";
