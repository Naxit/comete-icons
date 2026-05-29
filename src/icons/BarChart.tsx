import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M16 20v-7h4v7zm-6 0V4h4v16zm-6 0V9h4v11z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M12 16V9h4v7zm-6 0V0h4v16zm-6 0V5h4v11z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M16 20v-7h4v7zm-6 0V4h4v16zm-6 0V9h4v11z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M12 16V9h4v7zm-6 0V0h4v16zm-6 0V5h4v11z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M16 13v7h4v-7zM4 9v11h4V9z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M10 20V4h4v16z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M12 9v7h4V9zM0 5v11h4V5z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M6 16V0h4v16z"/></> }
    }
};

export function BarChart({
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

BarChart.displayName = "BarChart";
