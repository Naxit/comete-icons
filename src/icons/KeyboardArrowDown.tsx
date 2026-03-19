import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m11.3 14.699-4.593-4.593a.989.989 0 1 1 1.4-1.4l3.9 3.9 3.9-3.9a.99.99 0 0 1 1.4 1.4l-4.592 4.593a1 1 0 0 1-1.414 0" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.5 9.946 4.212 6.659a.708.708 0 1 1 1.001-1.002l2.791 2.791 2.79-2.79a.708.708 0 0 1 1.002 1.001L8.513 9.946a.715.715 0 0 1-1.012 0" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m11.3 14.699-4.593-4.593a.989.989 0 1 1 1.4-1.4l3.9 3.9 3.9-3.9a.99.99 0 0 1 1.4 1.4l-4.592 4.593a1 1 0 0 1-1.414 0" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.5 9.946 4.212 6.659a.708.708 0 1 1 1.001-1.002l2.791 2.791 2.79-2.79a.708.708 0 0 1 1.002 1.001L8.513 9.946a.715.715 0 0 1-1.012 0" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m11.3 14.699-4.593-4.593a.989.989 0 1 1 1.4-1.4l3.9 3.9 3.9-3.9a.99.99 0 0 1 1.4 1.4l-4.592 4.593a1 1 0 0 1-1.414 0" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.5 9.946 4.212 6.659a.708.708 0 1 1 1.001-1.002l2.791 2.791 2.79-2.79a.708.708 0 0 1 1.002 1.001L8.513 9.946a.715.715 0 0 1-1.012 0" clipRule="evenodd"/></> }
    }
};

export function KeyboardArrowDown({
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

KeyboardArrowDown.displayName = "KeyboardArrowDown";
