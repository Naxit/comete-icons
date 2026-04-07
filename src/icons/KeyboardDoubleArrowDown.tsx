import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M11.381 11.43 6.788 6.839a.99.99 0 1 1 1.4-1.4l3.9 3.9 3.9-3.9a.99.99 0 0 1 1.4 1.4l-4.592 4.593a1 1 0 0 1-1.414 0zm0 7.136-4.593-4.593a.99.99 0 1 1 1.4-1.4l3.9 3.9 3.9-3.9a.99.99 0 0 1 1.4 1.4l-4.592 4.593a1 1 0 0 1-1.414 0z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.753 7.572 3.684 3.503a.877.877 0 1 1 1.24-1.24L8.38 5.718l3.455-3.455a.877.877 0 0 1 1.24 1.24l-4.068 4.07a.886.886 0 0 1-1.252 0zm0 6.322-4.069-4.07a.877.877 0 1 1 1.24-1.24L8.38 12.04l3.455-3.456a.877.877 0 0 1 1.24 1.24l-4.068 4.07a.886.886 0 0 1-1.252 0z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M11.381 11.43 6.788 6.839a.99.99 0 1 1 1.4-1.4l3.9 3.9 3.9-3.9a.99.99 0 0 1 1.4 1.4l-4.592 4.593a1 1 0 0 1-1.414 0zm0 7.136-4.593-4.593a.99.99 0 1 1 1.4-1.4l3.9 3.9 3.9-3.9a.99.99 0 0 1 1.4 1.4l-4.592 4.593a1 1 0 0 1-1.414 0z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.753 7.572 3.684 3.503a.877.877 0 1 1 1.24-1.24L8.38 5.718l3.455-3.455a.877.877 0 0 1 1.24 1.24l-4.068 4.07a.886.886 0 0 1-1.252 0zm0 6.322-4.069-4.07a.877.877 0 1 1 1.24-1.24L8.38 12.04l3.455-3.456a.877.877 0 0 1 1.24 1.24l-4.068 4.07a.886.886 0 0 1-1.252 0z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#0076D8" fillRule="evenodd" d="M11.381 11.43 6.788 6.839a.99.99 0 1 1 1.4-1.4l3.9 3.9 3.9-3.9a.99.99 0 0 1 1.4 1.4l-4.592 4.593a1 1 0 0 1-1.414 0zm0 7.136-4.593-4.593a.99.99 0 1 1 1.4-1.4l3.9 3.9 3.9-3.9a.99.99 0 0 1 1.4 1.4l-4.592 4.593a1 1 0 0 1-1.414 0z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#0076D8" fillRule="evenodd" d="M7.753 7.572 3.684 3.503a.877.877 0 1 1 1.24-1.24L8.38 5.718l3.455-3.455a.877.877 0 0 1 1.24 1.24l-4.068 4.07a.886.886 0 0 1-1.252 0zm0 6.322-4.069-4.07a.877.877 0 1 1 1.24-1.24L8.38 12.04l3.455-3.456a.877.877 0 0 1 1.24 1.24l-4.068 4.07a.886.886 0 0 1-1.252 0z" clipRule="evenodd"/></> }
    }
};

export function KeyboardDoubleArrowDown({
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

KeyboardDoubleArrowDown.displayName = "KeyboardDoubleArrowDown";
