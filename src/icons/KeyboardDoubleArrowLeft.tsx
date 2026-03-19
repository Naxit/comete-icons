import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m12.65 11.3 4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4l-4.593-4.592a1 1 0 0 1 0-1.414M5.515 11.3l4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4l-4.593-4.592a1 1 0 0 1 0-1.414" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m8.515 7.5 3.287-3.287a.708.708 0 1 1 1.002 1.001l-2.791 2.791 2.79 2.79a.709.709 0 0 1-1.001 1.002L8.515 8.513a.716.716 0 0 1 0-1.012M3.41 7.5l3.286-3.287a.708.708 0 1 1 1.002 1.001l-2.79 2.791 2.79 2.79a.708.708 0 0 1-1.002 1.002L3.409 8.513a.716.716 0 0 1 0-1.012" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m12.65 11.3 4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4l-4.593-4.592a1 1 0 0 1 0-1.414M5.515 11.3l4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4l-4.593-4.592a1 1 0 0 1 0-1.414" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m8.515 7.5 3.287-3.287a.708.708 0 1 1 1.002 1.001l-2.791 2.791 2.79 2.79a.709.709 0 0 1-1.001 1.002L8.515 8.513a.716.716 0 0 1 0-1.012M3.41 7.5l3.286-3.287a.708.708 0 1 1 1.002 1.001l-2.79 2.791 2.79 2.79a.708.708 0 0 1-1.002 1.002L3.409 8.513a.716.716 0 0 1 0-1.012" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m12.65 11.3 4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4l-4.593-4.592a1 1 0 0 1 0-1.414M5.515 11.3l4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4l-4.593-4.592a1 1 0 0 1 0-1.414" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m8.515 7.5 3.287-3.287a.708.708 0 1 1 1.002 1.001l-2.791 2.791 2.79 2.79a.709.709 0 0 1-1.001 1.002L8.515 8.513a.716.716 0 0 1 0-1.012M3.41 7.5l3.286-3.287a.708.708 0 1 1 1.002 1.001l-2.79 2.791 2.79 2.79a.708.708 0 0 1-1.002 1.002L3.409 8.513a.716.716 0 0 1 0-1.012" clipRule="evenodd"/></> }
    }
};

export function KeyboardDoubleArrowLeft({
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

KeyboardDoubleArrowLeft.displayName = "KeyboardDoubleArrowLeft";
