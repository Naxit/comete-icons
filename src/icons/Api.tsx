import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11.667 13.864 9.47 11.667l2.197-2.197 2.197 2.197zM9.735 7.629 7.72 5.614l3.947-3.947 3.947 3.947-2.015 2.015-1.932-1.932zm-4.121 7.985-3.947-3.947L5.614 7.72l2.015 2.015-1.932 1.932 1.932 1.932zm12.106 0-2.015-2.015 1.932-1.932-1.932-1.932L17.72 7.72l3.947 3.947zm-6.053 6.053L7.72 17.72l2.015-2.015 1.932 1.932 1.932-1.932 2.015 2.015z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 9.648 6.352 8 8 6.352 9.648 8zM6.551 4.972 5.04 3.46 8 .5l2.96 2.96-1.51 1.512L8 3.522zm-3.09 5.988L.5 8l2.96-2.96 1.512 1.51L3.522 8l1.45 1.449zm9.079 0-1.511-1.51L12.477 8l-1.449-1.449L12.54 5.04 15.5 8zM8 15.5l-2.96-2.96 1.511-1.511L8 12.477l1.449-1.449 1.511 1.512z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11.667 13.864 9.47 11.667l2.197-2.197 2.197 2.197zM9.735 7.629 7.72 5.614l3.947-3.947 3.947 3.947-2.015 2.015-1.932-1.932zm-4.121 7.985-3.947-3.947L5.614 7.72l2.015 2.015-1.932 1.932 1.932 1.932zm12.106 0-2.015-2.015 1.932-1.932-1.932-1.932L17.72 7.72l3.947 3.947zm-6.053 6.053L7.72 17.72l2.015-2.015 1.932 1.932 1.932-1.932 2.015 2.015z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 9.648 6.352 8 8 6.352 9.648 8zM6.551 4.972 5.04 3.46 8 .5l2.96 2.96-1.51 1.512L8 3.522zm-3.09 5.988L.5 8l2.96-2.96 1.512 1.51L3.522 8l1.45 1.449zm9.079 0-1.511-1.51L12.477 8l-1.449-1.449L12.54 5.04 15.5 8zM8 15.5l-2.96-2.96 1.511-1.511L8 12.477l1.449-1.449 1.511 1.512z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m7.72 5.614 2.015 2.015 1.932-1.932 1.932 1.932 2.015-2.015-3.947-3.947zm-6.053 6.053 3.947 3.947 2.015-2.015-1.932-1.932 1.932-1.932L5.614 7.72zm14.038 1.932 2.015 2.015 3.947-3.947L17.72 7.72l-2.015 2.015 1.932 1.932zm-7.985 4.12 3.947 3.948 3.947-3.947-2.015-2.015-1.932 1.932-1.932-1.932z" clipRule="evenodd"/><path fill="currentColor" d="M11.667 13.864 9.47 11.667l2.197-2.197 2.197 2.197z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m5.04 3.46 1.51 1.512L8 3.522l1.449 1.45L10.96 3.46 8 .5zM.5 8l2.96 2.96 1.512-1.51L3.522 8l1.45-1.449L3.46 5.04zm10.529 1.449 1.51 1.511L15.5 8l-2.96-2.96-1.511 1.511L12.477 8zm-5.99 3.09L8 15.5l2.96-2.96-1.511-1.511L8 12.477l-1.449-1.449z" clipRule="evenodd"/><path fill="currentColor" d="M8 9.648 6.352 8 8 6.352 9.648 8z"/></> }
    }
};

export function Api({
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

Api.displayName = "Api";
