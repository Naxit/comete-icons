import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4.952 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 2.952 20V6q0-.824.588-1.412A1.93 1.93 0 0 1 4.952 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588.587.587.587 1.412v14q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587zm0-2h14V10h-14zm0-12h14V6h-14z"/><path fill="currentColor" d="M7 12h4v4H7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.556 16q-.641 0-1.1-.47A1.56 1.56 0 0 1 1 14.4V3.2q0-.66.457-1.13t1.099-.47h.777V0H4.89v1.6h6.222V0h1.556v1.6h.777q.642 0 1.1.47Q15 2.54 15 3.2v11.2q0 .66-.457 1.13t-1.099.47zm0-1.6h10.888v-8H2.556zm0-9.6h10.888V3.2H2.556z"/><path fill="currentColor" d="M4.148 8H7.26v3.2H4.15z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4.952 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 2.952 20V6q0-.824.588-1.412A1.93 1.93 0 0 1 4.952 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588.587.587.587 1.412v14q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587zm0-2h14V10h-14z"/><path fill="currentColor" d="M7 12h4v4H7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.556 16q-.641 0-1.1-.47A1.56 1.56 0 0 1 1 14.4V3.2q0-.66.457-1.13t1.099-.47h.777V0H4.89v1.6h6.222V0h1.556v1.6h.777q.642 0 1.1.47Q15 2.54 15 3.2v11.2q0 .66-.457 1.13t-1.099.47zm0-1.6h10.888v-8H2.556z"/><path fill="currentColor" d="M4.148 8H7.26v3.2H4.15z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4.952 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 2.952 20V6q0-.824.588-1.412A1.93 1.93 0 0 1 4.952 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588.587.587.587 1.412v14q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587zm0-2h14V10h-14zm0-12h14V6h-14z"/><path fill="var(--icon-information)" d="M7 12h4v4H7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.556 16q-.641 0-1.1-.47A1.56 1.56 0 0 1 1 14.4V3.2q0-.66.457-1.13t1.099-.47h.777V0H4.89v1.6h6.222V0h1.556v1.6h.777q.642 0 1.1.47Q15 2.54 15 3.2v11.2q0 .66-.457 1.13t-1.099.47zm0-1.6h10.888v-8H2.556zm0-9.6h10.888V3.2H2.556z"/><path fill="var(--icon-information)" d="M4.148 8H7.26v3.2H4.15z"/></> }
    }
};

export function CalendarToday({
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

CalendarToday.displayName = "CalendarToday";
