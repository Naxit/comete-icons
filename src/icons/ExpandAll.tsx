import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 21-5.4-5.4 1.283-1.282L12 18.435l4.118-4.117L17.4 15.6zM7.905 9.66 6.6 8.4 12 3l5.4 5.4-1.305 1.26L12 5.565z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 14-3.6-3.6.855-.855L8 12.29l2.745-2.745.855.855zM5.27 6.44 4.4 5.6 8 2l3.6 3.6-.87.84L8 3.71z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 21-5.4-5.4 1.283-1.282L12 18.435l4.118-4.117L17.4 15.6zM7.905 9.66 6.6 8.4 12 3l5.4 5.4-1.305 1.26L12 5.565z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 14-3.6-3.6.855-.855L8 12.29l2.745-2.745.855.855zM5.27 6.44 4.4 5.6 8 2l3.6 3.6-.87.84L8 3.71z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M6.6 15.6 12 21l5.4-5.4-1.282-1.282L12 18.435l-4.117-4.117z" clipRule="evenodd"/><path fill="#007ADA" d="M7.905 9.66 6.6 8.4 12 3l5.4 5.4-1.305 1.26L12 5.565z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.4 10.4 8 14l3.6-3.6-.855-.855L8 12.29 5.255 9.545z" clipRule="evenodd"/><path fill="#007ADA" d="M5.27 6.44 4.4 5.6 8 2l3.6 3.6-.87.84L8 3.71z"/></> }
    }
};

export function ExpandAll({
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

ExpandAll.displayName = "ExpandAll";
