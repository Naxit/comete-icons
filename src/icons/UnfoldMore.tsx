import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 21-4.5-4.5 1.45-1.45L12 18.1l3.05-3.05 1.45 1.45zM8.95 9.05 7.5 7.6 12 3.1l4.5 4.5-1.45 1.45L12 6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 14-3-3 .967-.966L8 12.067l2.034-2.033L11 11zM5.967 6.033 5 5.067l3-3 3 3-.966.966L8 4z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 21-4.5-4.5 1.45-1.45L12 18.1l3.05-3.05 1.45 1.45zM8.95 9.05 7.5 7.6 12 3.1l4.5 4.5-1.45 1.45L12 6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 14-3-3 .967-.966L8 12.067l2.034-2.033L11 11zM5.967 6.033 5 5.067l3-3 3 3-.966.966L8 4z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 21-4.5-4.5 1.45-1.45L12 18.1l3.05-3.05 1.45 1.45zM8.95 9.05 7.5 7.6 12 3.1l4.5 4.5-1.45 1.45L12 6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 14-3-3 .967-.966L8 12.067l2.034-2.033L11 11zM5.967 6.033 5 5.067l3-3 3 3-.966.966L8 4z"/></> }
    }
};

export function UnfoldMore({
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

UnfoldMore.displayName = "UnfoldMore";
