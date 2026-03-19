import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M6 3h2v7.126a4.002 4.002 0 0 1 0 7.748V21H6v-3.126a4.002 4.002 0 0 1 0-7.748zm1 9a2 2 0 1 1 0 4 2 2 0 1 1 0-4m11 9h-2v-7.126a4.002 4.002 0 0 1 0-7.748V3h2v3.126a4.002 4.002 0 0 1 0 7.748zm-1-9a2 2 0 1 1 0-4 2 2 0 1 1 0 4" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6.222 13.667v-1.778h3.556v1.778zM2.667 9.222V7.444h10.666v1.778zM0 4.778V3h16v1.778z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M10 18v-2h4v2zm-4-5v-2h12v2zM3 8V6h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6.222 13.667v-1.778h3.556v1.778zM2.667 9.222V7.444h10.666v1.778zM0 4.778V3h16v1.778z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M10 18v-2h4v2zm-4-5v-2h12v2zM3 8V6h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6.222 13.667v-1.778h3.556v1.778zM2.667 9.222V7.444h10.666v1.778zM0 4.778V3h16v1.778z"/></> }
    }
};

export function FilterList({
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

FilterList.displayName = "FilterList";
