import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6 18V8h3v4.75l6.8-6.8 2.2 2.2L11.15 15H16v3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4 12V5.333h2V8.5l4.533-4.533L12 5.433 7.433 10h3.234v2z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6 18V8h3v4.75l6.8-6.8 2.2 2.2L11.15 15H16v3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4 12V5.333h2V8.5l4.533-4.533L12 5.433 7.433 10h3.234v2z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M6 8v10h10v-3H9V8z" clipRule="evenodd"/><path fill="#007ADA" d="M15.8 5.95 9 12.75V15h2.15L18 8.15z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 5.333V12h6.667v-2H6V5.333z" clipRule="evenodd"/><path fill="#007ADA" d="M10.533 3.967 6 8.5V10h1.433L12 5.433z"/></> }
    }
};

export function TransitEnterExit({
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

TransitEnterExit.displayName = "TransitEnterExit";
