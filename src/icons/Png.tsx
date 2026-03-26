import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6.5 11.5v-1h1v1zm10 3.5h1q.625 0 1.063-.437Q19 14.125 19 13.5V12h-1.5v1.5h-1v-3H19q0-.625-.437-1.062A1.45 1.45 0 0 0 17.5 9h-1q-.625 0-1.062.438A1.45 1.45 0 0 0 15 10.5v3q0 .624.438 1.063.437.437 1.062.437M5 15h1.5v-2H8q.424 0 .713-.287A.97.97 0 0 0 9 12v-2a.97.97 0 0 0-.287-.713A.97.97 0 0 0 8 9H5zm5 0h1.5v-2.4l1 2.4H14V9h-1.5v2.35L11.5 9H10zm-6 5q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm0-2h16V6H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.6 7.6v-.8h.8v.8zm8 2.8h.8q.5 0 .85-.35t.35-.85V8h-1.2v1.2h-.8V6.8h2q0-.5-.35-.85a1.16 1.16 0 0 0-.85-.35h-.8q-.5 0-.85.35t-.35.85v2.4q0 .5.35.85t.85.35m-9.2 0h1.2V8.8h1.2a.77.77 0 0 0 .57-.23A.77.77 0 0 0 5.6 8V6.4a.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23H2.4zm4 0h1.2V8.48l.8 1.92h1.2V5.6H8.4v1.88L7.6 5.6H6.4zm-4.8 4a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 12.8V3.2q0-.66.47-1.13A1.54 1.54 0 0 1 1.6 1.6h12.8q.66 0 1.13.47T16 3.2v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h12.8V3.2H1.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6.5 11.5v-1h1v1zm10 3.5h1q.625 0 1.063-.437Q19 14.125 19 13.5V12h-1.5v1.5h-1v-3H19q0-.625-.437-1.062A1.45 1.45 0 0 0 17.5 9h-1q-.625 0-1.062.438A1.45 1.45 0 0 0 15 10.5v3q0 .624.438 1.063.437.437 1.062.437M5 15h1.5v-2H8q.424 0 .713-.287A.97.97 0 0 0 9 12v-2a.97.97 0 0 0-.287-.713A.97.97 0 0 0 8 9H5zm5 0h1.5v-2.4l1 2.4H14V9h-1.5v2.35L11.5 9H10zm-6 5q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.6 7.6v-.8h.8v.8zm8 2.8h.8q.5 0 .85-.35t.35-.85V8h-1.2v1.2h-.8V6.8h2q0-.5-.35-.85a1.16 1.16 0 0 0-.85-.35h-.8q-.5 0-.85.35t-.35.85v2.4q0 .5.35.85t.85.35m-9.2 0h1.2V8.8h1.2a.77.77 0 0 0 .57-.23A.77.77 0 0 0 5.6 8V6.4a.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23H2.4zm4 0h1.2V8.48l.8 1.92h1.2V5.6H8.4v1.88L7.6 5.6H6.4zm-4.8 4a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 12.8V3.2q0-.66.47-1.13A1.54 1.54 0 0 1 1.6 1.6h12.8q.66 0 1.13.47T16 3.2v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.588 19.413Q3.175 20 4 20h16q.824 0 1.413-.587Q22 18.825 22 18V6q0-.824-.587-1.412A1.93 1.93 0 0 0 20 4H4q-.824 0-1.412.588A1.93 1.93 0 0 0 2 6v12q0 .824.587 1.413M20 18H4V6h16z" clipRule="evenodd"/><path fill="#007ADA" d="M10 15h1.5v-2.4l1 2.4H14V9h-1.5v2.35L11.5 9H10zm6.5 0h1q.625 0 1.063-.437Q19 14.125 19 13.5V12h-1.5v1.5h-1v-3H19q0-.625-.437-1.062A1.45 1.45 0 0 0 17.5 9h-1q-.625 0-1.062.438A1.45 1.45 0 0 0 15 10.5v3q0 .624.438 1.063.437.437 1.062.437"/><path fill="#007ADA" fillRule="evenodd" d="M5 15h1.5v-2H8q.424 0 .713-.287A.97.97 0 0 0 9 12v-2a.97.97 0 0 0-.287-.713A.97.97 0 0 0 8 9H5zm1.5-4.5v1h1v-1z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.47 13.93q.47.47 1.13.47h12.8q.66 0 1.13-.47T16 12.8V3.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47H1.6q-.66 0-1.13.47A1.54 1.54 0 0 0 0 3.2v9.6q0 .66.47 1.13M14.4 12.8H1.6V3.2h12.8z" clipRule="evenodd"/><path fill="#007ADA" d="M6.4 10.4h1.2V8.48l.8 1.92h1.2V5.6H8.4v1.88L7.6 5.6H6.4zm5.2 0h.8q.5 0 .85-.35t.35-.85V8h-1.2v1.2h-.8V6.8h2q0-.5-.35-.85a1.16 1.16 0 0 0-.85-.35h-.8q-.5 0-.85.35t-.35.85v2.4q0 .5.35.85t.85.35"/><path fill="#007ADA" fillRule="evenodd" d="M2.4 10.4h1.2V8.8h1.2a.77.77 0 0 0 .57-.23A.77.77 0 0 0 5.6 8V6.4a.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23H2.4zm1.2-3.6v.8h.8v-.8z" clipRule="evenodd"/></> }
    }
};

export function Png({
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

Png.displayName = "Png";
