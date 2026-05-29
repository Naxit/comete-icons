import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m12.78 12.57 4.594 4.592a.99.99 0 1 1-1.4 1.4l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4l4.592-4.593a1 1 0 0 1 1.414 0m0-7.135 4.594 4.593a.99.99 0 1 1-1.4 1.4l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4l4.592-4.593a1 1 0 0 1 1.414 0" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m8.993 8.58 4.07 4.07a.876.876 0 1 1-1.241 1.24l-3.455-3.455-3.455 3.455a.877.877 0 0 1-1.24-1.24L7.74 8.58a.886.886 0 0 1 1.252 0zm0-6.32 4.07 4.068a.876.876 0 0 1-.62 1.504.88.88 0 0 1-.621-.263L8.367 4.114 4.912 7.569a.877.877 0 0 1-1.24-1.24l4.068-4.07a.886.886 0 0 1 1.252 0z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m12.78 12.57 4.594 4.592a.99.99 0 1 1-1.4 1.4l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4l4.592-4.593a1 1 0 0 1 1.414 0m0-7.135 4.594 4.593a.99.99 0 1 1-1.4 1.4l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4l4.592-4.593a1 1 0 0 1 1.414 0" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m8.993 8.58 4.07 4.07a.876.876 0 1 1-1.241 1.24l-3.455-3.455-3.455 3.455a.877.877 0 0 1-1.24-1.24L7.74 8.58a.886.886 0 0 1 1.252 0zm0-6.32 4.07 4.068a.876.876 0 0 1-.62 1.504.88.88 0 0 1-.621-.263L8.367 4.114 4.912 7.569a.877.877 0 0 1-1.24-1.24l4.068-4.07a.886.886 0 0 1 1.252 0z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" fillRule="evenodd" d="m12.78 12.57 4.594 4.592a.99.99 0 1 1-1.4 1.4l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4l4.592-4.593a1 1 0 0 1 1.414 0m0-7.135 4.594 4.593a.99.99 0 1 1-1.4 1.4l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4l4.592-4.593a1 1 0 0 1 1.414 0" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" fillRule="evenodd" d="m8.993 8.58 4.07 4.07a.876.876 0 1 1-1.241 1.24l-3.455-3.455-3.455 3.455a.877.877 0 0 1-1.24-1.24L7.74 8.58a.886.886 0 0 1 1.252 0zm0-6.32 4.07 4.068a.876.876 0 0 1-.62 1.504.88.88 0 0 1-.621-.263L8.367 4.114 4.912 7.569a.877.877 0 0 1-1.24-1.24l4.068-4.07a.886.886 0 0 1 1.252 0z" clipRule="evenodd"/></> }
    }
};

export function KeyboardDoubleArrowUp({
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

KeyboardDoubleArrowUp.displayName = "KeyboardDoubleArrowUp";
