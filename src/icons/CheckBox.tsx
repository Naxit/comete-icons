import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm0-2h14V5H5z"/><path fill="currentColor" d="M17.65 9.15 10.6 16.2l-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.778 16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V1.778Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0h12.444q.734 0 1.256.522T16 1.778v12.444q0 .734-.522 1.256a1.7 1.7 0 0 1-1.256.522zm0-1.778h12.444V1.778H1.778z"/><path fill="currentColor" d="m13.022 5.467-6.266 6.266-3.778-3.777L4.222 6.71l2.534 2.533 5.022-5.022z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m10.6 16.2 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4zM5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m6.756 11.733 6.266-6.266-1.244-1.245-5.022 5.022-2.534-2.533-1.244 1.245zM1.778 16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V1.778Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0h12.444q.734 0 1.256.522T16 1.778v12.444q0 .734-.522 1.256a1.7 1.7 0 0 1-1.256.522z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm0-2h14V5H5z"/><path fill="currentColor" d="M17.65 9.15 10.6 16.2l-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.778 16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V1.778Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0h12.444q.734 0 1.256.522T16 1.778v12.444q0 .734-.522 1.256a1.7 1.7 0 0 1-1.256.522zm0-1.778h12.444V1.778H1.778z"/><path fill="currentColor" d="m13.022 5.467-6.266 6.266-3.778-3.777L4.222 6.71l2.534 2.533 5.022-5.022z"/></> }
    }
};

export function CheckBox({
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

CheckBox.displayName = "CheckBox";
