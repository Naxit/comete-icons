import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h7v2H5v14h7v2zm11-4-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.778 16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V1.778Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0H8v1.778H1.778v12.444H8V16zm9.778-3.556-1.223-1.288L12.6 8.889H5.333V7.11H12.6l-2.267-2.267 1.223-1.288L16 8z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h7v2H5v14h7v2zm11-4-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.778 16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V1.778Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0H8v1.778H1.778v12.444H8V16zm9.778-3.556-1.223-1.288L12.6 8.889H5.333V7.11H12.6l-2.267-2.267 1.223-1.288L16 8z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.588 20.413Q4.175 21 5 21h7v-2H5V5h7V3H5q-.824 0-1.412.587A1.93 1.93 0 0 0 3 5v14q0 .824.587 1.413" clipRule="evenodd"/><path fill="var(--icon-information)" d="m16 17-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.522 15.478Q1.044 16 1.778 16H8v-1.778H1.778V1.778H8V0H1.778Q1.044 0 .522.522A1.7 1.7 0 0 0 0 1.778v12.444q0 .734.522 1.256" clipRule="evenodd"/><path fill="var(--icon-information)" d="m11.556 12.444-1.223-1.288L12.6 8.889H5.333V7.11H12.6l-2.267-2.267 1.223-1.288L16 8z"/></> }
    }
};

export function Logout({
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

Logout.displayName = "Logout";
