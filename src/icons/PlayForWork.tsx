import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 20.913q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 18.913v-14q0-.824.587-1.412A1.93 1.93 0 0 1 5 2.913h1v-2h2v2h8v-2h2v2h1q.824 0 1.413.588.587.587.587 1.412v14q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587zm0-2h14V4.99H5z"/><path fill="currentColor" d="M7 11h10v2H7zm0-4h10v2H7zm0 8h10v2H7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.556 16q-.641 0-1.1-.47A1.56 1.56 0 0 1 1 14.4V3.2q0-.66.457-1.13t1.099-.47h.777V0H4.89v1.6h6.222V0h1.556v1.6h.777q.642 0 1.1.47Q15 2.54 15 3.2v11.2q0 .66-.457 1.13t-1.099.47zm0-1.6h10.888V3.262H2.556z"/><path fill="currentColor" d="M4.111 8.07h7.778v1.6H4.11zm0-3.2h7.778v1.6H4.11zm0 6.4h7.778v1.6H4.11z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.588 20.326q.587.587 1.412.587h14q.824 0 1.413-.587.587-.588.587-1.413v-14q0-.824-.587-1.412A1.93 1.93 0 0 0 19 2.913h-1v-2h-2v2H8v-2H6v2H5q-.824 0-1.412.588A1.93 1.93 0 0 0 3 4.913v14q0 .824.587 1.413M17 17v-2H7v2zM7 13v-2h10v2zm10-4V7H7v2z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.457 15.53q.457.47 1.099.47h10.888q.642 0 1.1-.47.456-.47.456-1.13V3.2q0-.66-.457-1.13a1.48 1.48 0 0 0-1.099-.47h-.777V0H11.11v1.6H4.89V0H3.333v1.6h-.777q-.641 0-1.1.47Q1 2.54 1 3.2v11.2q0 .66.457 1.13m10.432-2.66v-1.6H4.11v1.6zM4.11 9.67v-1.6h7.778v1.6zm7.778-3.2v-1.6H4.11v1.6z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 20.913q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 18.913v-14q0-.824.587-1.412A1.93 1.93 0 0 1 5 2.913h1v-2h2v2h8v-2h2v2h1q.824 0 1.413.588.587.587.587 1.412v14q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587zm0-2h14V4.99H5z"/><path fill="var(--icon-information)" d="M7 11h10v2H7zm0-4h10v2H7zm0 8h10v2H7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.556 16q-.641 0-1.1-.47A1.56 1.56 0 0 1 1 14.4V3.2q0-.66.457-1.13t1.099-.47h.777V0H4.89v1.6h6.222V0h1.556v1.6h.777q.642 0 1.1.47Q15 2.54 15 3.2v11.2q0 .66-.457 1.13t-1.099.47zm0-1.6h10.888V3.262H2.556z"/><path fill="var(--icon-information)" d="M4.111 8.07h7.778v1.6H4.11zm0-3.2h7.778v1.6H4.11zm0 6.4h7.778v1.6H4.11z"/></> }
    }
};

export function PlayForWork({
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

PlayForWork.displayName = "PlayForWork";
