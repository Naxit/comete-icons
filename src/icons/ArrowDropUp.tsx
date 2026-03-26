import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.2 14.4 12 9.6l4.8 4.8z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3 10.8 7.8 6l4.8 4.8z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.2 14.4 12 9.6l4.8 4.8z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3 10.8 7.8 6l4.8 4.8z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M7.2 14.4 12 9.6l4.8 4.8z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M3 10.8 7.8 6l4.8 4.8z"/></> }
    }
};

export function ArrowDropUp({
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

ArrowDropUp.displayName = "ArrowDropUp";
