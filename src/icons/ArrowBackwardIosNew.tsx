import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m7.442 11.161 7.344-7.356a1.186 1.186 0 1 1 1.677 1.678L9.95 12.009l6.558 6.512A1.186 1.186 0 0 1 14.83 20.2l-7.388-7.342a1.2 1.2 0 0 1 0-1.694z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.716 7.419 9.87 2.257a.832.832 0 1 1 1.177 1.177l-4.571 4.58 4.602 4.57A.832.832 0 0 1 9.9 13.76L4.716 8.609a.84.84 0 0 1 0-1.19" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m7.442 11.161 7.344-7.356a1.186 1.186 0 1 1 1.677 1.678L9.95 12.009l6.558 6.512A1.186 1.186 0 0 1 14.83 20.2l-7.388-7.342a1.2 1.2 0 0 1 0-1.694z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.716 7.419 9.87 2.257a.832.832 0 1 1 1.177 1.177l-4.571 4.58 4.602 4.57A.832.832 0 0 1 9.9 13.76L4.716 8.609a.84.84 0 0 1 0-1.19" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#0076D8" fillRule="evenodd" d="m7.442 11.161 7.344-7.356a1.186 1.186 0 1 1 1.677 1.678L9.95 12.009l6.558 6.512A1.186 1.186 0 0 1 14.83 20.2l-7.388-7.342a1.2 1.2 0 0 1 0-1.694z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#0076D8" fillRule="evenodd" d="M4.716 7.419 9.87 2.257a.832.832 0 1 1 1.177 1.177l-4.571 4.58 4.602 4.57A.832.832 0 0 1 9.9 13.76L4.716 8.609a.84.84 0 0 1 0-1.19" clipRule="evenodd"/></> }
    }
};

export function ArrowBackwardIosNew({
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

ArrowBackwardIosNew.displayName = "ArrowBackwardIosNew";
