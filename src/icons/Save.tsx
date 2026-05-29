import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M21 7v12q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h12zm-4.85-2L19 7.85V19H5V5z" clipRule="evenodd"/><path fill="currentColor" d="M6 10h9V6H6zm6 8q1.25 0 2.125-.875A2.9 2.9 0 0 0 15 15q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 12q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 15q0 1.25.875 2.125A2.9 2.9 0 0 0 12 18"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M16 14.222V3.556L12.444 0H1.778Q1.044 0 .522.522A1.7 1.7 0 0 0 0 1.778v12.444q0 .734.522 1.256T1.778 16h12.444q.734 0 1.256-.522T16 14.222M11.689 1.778l2.533 2.533v9.911H1.778V1.778zm-1.022 4.444h-8V2.667h8z" clipRule="evenodd"/><path fill="currentColor" d="M8 13.333q1.11 0 1.889-.777a2.57 2.57 0 0 0 .778-1.89q0-1.11-.778-1.888A2.57 2.57 0 0 0 8 8q-1.11 0-1.889.778a2.57 2.57 0 0 0-.778 1.889q0 1.11.778 1.889A2.57 2.57 0 0 0 8 13.333"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M21 7v12q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h12zM6 10h9V6H6zm8.125 7.125A2.9 2.9 0 0 1 12 18a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 9 15q0-1.25.875-2.125A2.9 2.9 0 0 1 12 12q1.25 0 2.125.875T15 15t-.875 2.125" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M16 3.556v10.666q0 .734-.522 1.256a1.7 1.7 0 0 1-1.256.522H1.778q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V1.778Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0h10.666zM2.667 6.222h8V2.667h-8zm7.222 6.334A2.57 2.57 0 0 1 8 13.333q-1.11 0-1.889-.777a2.57 2.57 0 0 1-.778-1.89q0-1.11.778-1.888A2.57 2.57 0 0 1 8 8q1.11 0 1.889.778.777.777.778 1.889 0 1.11-.778 1.889" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M21 19V7l-4-4H5q-.824 0-1.412.587A1.93 1.93 0 0 0 3 5v14q0 .824.587 1.413Q4.176 21 5 21h14q.824 0 1.413-.587Q21 19.825 21 19M16.15 5 19 7.85V19H5V5zM15 10H6V6h9z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M12 18q1.25 0 2.125-.875A2.9 2.9 0 0 0 15 15q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 12q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 15q0 1.25.875 2.125A2.9 2.9 0 0 0 12 18"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M16 14.222V3.556L12.444 0H1.778Q1.044 0 .522.522A1.7 1.7 0 0 0 0 1.778v12.444q0 .734.522 1.256T1.778 16h12.444q.734 0 1.256-.522T16 14.222M11.689 1.778l2.533 2.533v9.911H1.778V1.778zm-1.022 4.444h-8V2.667h8z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M8 13.333q1.11 0 1.889-.777a2.57 2.57 0 0 0 .778-1.89q0-1.11-.778-1.888A2.57 2.57 0 0 0 8 8q-1.11 0-1.889.778a2.57 2.57 0 0 0-.778 1.889q0 1.11.778 1.889A2.57 2.57 0 0 0 8 13.333"/></> }
    }
};

export function Save({
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

Save.displayName = "Save";
