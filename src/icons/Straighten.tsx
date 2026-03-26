import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 18q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V8q0-.824.587-1.412A1.93 1.93 0 0 1 4 6h16q.824 0 1.413.588Q22 7.175 22 8v8q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18zm0-2h16V8h-3v4h-2V8h-2v4h-2V8H9v4H7V8H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 12.8a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 11.2V4.8q0-.66.47-1.13A1.54 1.54 0 0 1 1.6 3.2h12.8q.66 0 1.13.47T16 4.8v6.4q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h12.8V4.8H12V8h-1.6V4.8H8.8V8H7.2V4.8H5.6V8H4V4.8H1.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 18q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V8q0-.824.587-1.412A1.93 1.93 0 0 1 4 6h3v6h2V6h2v6h2V6h2v6h2V6h3q.824 0 1.413.588Q22 7.175 22 8v8q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 12.8a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 11.2V4.8q0-.66.47-1.13A1.54 1.54 0 0 1 1.6 3.2H4V8h1.6V3.2h1.6V8h1.6V3.2h1.6V8H12V3.2h2.4q.66 0 1.13.47T16 4.8v6.4q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M4 18q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V8q0-.824.587-1.412A1.93 1.93 0 0 1 4 6h16q.824 0 1.413.588Q22 7.175 22 8v8q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18zm0-2h16V8h-3v4h-2V8h-2v4h-2V8H9v4H7V8H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M1.6 12.8a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 11.2V4.8q0-.66.47-1.13A1.54 1.54 0 0 1 1.6 3.2h12.8q.66 0 1.13.47T16 4.8v6.4q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h12.8V4.8H12V8h-1.6V4.8H8.8V8H7.2V4.8H5.6V8H4V4.8H1.6z"/></> }
    }
};

export function Straighten({
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

Straighten.displayName = "Straighten";
