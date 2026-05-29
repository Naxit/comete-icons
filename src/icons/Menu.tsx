import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 13.667v-1.778h16v1.778zm0-4.445V7.444h16v1.778zm0-4.444V3h16v1.778z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 13.667v-1.778h16v1.778zm0-4.445V7.444h16v1.778zm0-4.444V3h16v1.778z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="M0 13.667v-1.778h16v1.778zm0-4.445V7.444h16v1.778zm0-4.444V3h16v1.778z"/></> }
    }
};

export function Menu({
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

Menu.displayName = "Menu";
