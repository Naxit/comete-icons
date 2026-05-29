import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4h1V2h2v2h8V2h2v2h1q.824 0 1.413.588Q21 5.175 21 6v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 22zm0-2h14V6.077H5z"/><path fill="currentColor" fillRule="evenodd" d="M17 8.087H7v10h10zm-2 2H9v6h6z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.556 16q-.641 0-1.1-.47A1.56 1.56 0 0 1 1 14.4V3.2q0-.66.457-1.13t1.099-.47h.777V0H4.89v1.6h6.222V0h1.556v1.6h.777q.642 0 1.1.47Q15 2.54 15 3.2v11.2q0 .66-.457 1.13t-1.099.47zm0-1.6h10.888V3.262H2.556z"/><path fill="currentColor" fillRule="evenodd" d="M11.889 4.87H4.11v8h7.778zm-1.556 1.6H5.667v4.8h4.666z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9 10.087h6v6H9z"/><path fill="currentColor" fillRule="evenodd" d="M3.588 21.413Q4.175 22 5 22h14q.824 0 1.413-.587Q21 20.825 21 20V6q0-.824-.587-1.412A1.93 1.93 0 0 0 19 4h-1V2h-2v2H8V2H6v2H5q-.824 0-1.412.588A1.93 1.93 0 0 0 3 6v14q0 .824.587 1.413M17 8.087H7v10h10zm-8 2h6v6H9z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.667 6.47h4.666v4.8H5.667z"/><path fill="currentColor" fillRule="evenodd" d="M1.457 15.53q.457.47 1.099.47h10.888q.642 0 1.1-.47.456-.47.456-1.13V3.2q0-.66-.457-1.13a1.48 1.48 0 0 0-1.099-.47h-.777V0H11.11v1.6H4.89V0H3.333v1.6h-.777q-.641 0-1.1.47Q1 2.54 1 3.2v11.2q0 .66.457 1.13M11.889 4.87H4.11v8h7.778zm-6.222 1.6h4.666v4.8H5.667z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4h1V2h2v2h8V2h2v2h1q.824 0 1.413.588Q21 5.175 21 6v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 22zm0-2h14V6.077H5z"/><path fill="var(--icon-information)" fillRule="evenodd" d="M7 8.087h10v10H7zm8 2H9v6h6z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.556 16q-.641 0-1.1-.47A1.56 1.56 0 0 1 1 14.4V3.2q0-.66.457-1.13t1.099-.47h.777V0H4.89v1.6h6.222V0h1.556v1.6h.777q.642 0 1.1.47Q15 2.54 15 3.2v11.2q0 .66-.457 1.13t-1.099.47zm0-1.6h10.888V3.262H2.556z"/><path fill="var(--icon-information)" fillRule="evenodd" d="M4.111 4.87h7.778v8H4.11zm6.222 1.6H5.667v4.8h4.666z" clipRule="evenodd"/></> }
    }
};

export function DateRange({
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

DateRange.displayName = "DateRange";
