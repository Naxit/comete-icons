import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M2 20 12 4l10 16zm3.6-2h12.8L12 7.75z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 13.8 8 1l8 12.8zm2.88-1.6h10.24L8 4z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M2 20 12 4l10 16z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 13.8 8 1l8 12.8z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M2 20 12 4l10 16zm3.6-2h12.8L12 7.75z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 13.8 8 1l8 12.8zm2.88-1.6h10.24L8 4z"/></> }
    }
};

export function ChangeHistory({
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

ChangeHistory.displayName = "ChangeHistory";
