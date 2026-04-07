import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M16 12v-2h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm-4.825-8-2-2H4v12h10v-2h2v2h4V8h-4v2h-2V8zM4 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h6l2 2h8q.824 0 1.413.588Q22 7.175 22 8v10q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M11.2 8V6.4h1.6V8zm0 1.6H9.6V8h1.6zm0 1.6V9.6h1.6v1.6zM7.34 4.8l-1.6-1.6H1.6v9.6h8v-1.6h1.6v1.6h3.2v-8h-3.2v1.6H9.6V4.8zM1.6 14.4a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 12.8V3.2q0-.66.47-1.13A1.54 1.54 0 0 1 1.6 1.6h4.8L8 3.2h6.4q.66 0 1.13.47T16 4.8v8q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.588 19.413Q3.175 20 4 20h12v-2h2v2h2q.824 0 1.413-.587Q22 18.825 22 18V8q0-.824-.587-1.412A1.93 1.93 0 0 0 20 6h-2v2h-2V6h-4l-2-2H4q-.824 0-1.412.588A1.93 1.93 0 0 0 2 6v12q0 .824.587 1.413M16 10h-2V8h2zm0 2v-2h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm0 0h-2v2h2z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.47 13.93q.47.47 1.13.47h9.6v-1.6h1.6v1.6h1.6q.66 0 1.13-.47T16 12.8v-8q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-1.6v1.6h-1.6V3.2H8L6.4 1.6H1.6q-.66 0-1.13.47A1.54 1.54 0 0 0 0 3.2v9.6q0 .66.47 1.13M11.2 6.4H9.6V4.8h1.6zm0 1.6V6.4h1.6V8zm0 1.6H9.6V8h1.6zm0 1.6V9.6h1.6v1.6zm0 0H9.6v1.6h1.6z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M20 18H4V6h5.175l2 2H20zM2.588 19.413Q3.174 20 4 20h16q.824 0 1.413-.587Q22 18.825 22 18V8q0-.824-.587-1.412A1.93 1.93 0 0 0 20 6h-8l-2-2H4q-.824 0-1.412.588A1.93 1.93 0 0 0 2 6v12q0 .824.587 1.413" clipRule="evenodd"/><path fill="#0076D8" d="M14 16v2h2v-2zm2-2v2h2v-2zm-2 0h2v-2h-2zm2-4v2h2v-2zm0 0V8h-2v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M14.4 12.8H1.6V3.2h4.14l1.6 1.6h7.06zM.47 13.93q.47.47 1.13.47h12.8q.66 0 1.13-.47T16 12.8v-8q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47H8L6.4 1.6H1.6q-.66 0-1.13.47A1.54 1.54 0 0 0 0 3.2v9.6q0 .66.47 1.13" clipRule="evenodd"/><path fill="#0076D8" d="M9.6 11.2v1.6h1.6v-1.6zm1.6-1.6v1.6h1.6V9.6zm-1.6 0h1.6V8H9.6zm1.6-3.2V8h1.6V6.4zm0 0V4.8H9.6v1.6z"/></> }
    }
};

export function Zip({
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

Zip.displayName = "Zip";
