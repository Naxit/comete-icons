import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V8q0-.824.587-1.412A1.93 1.93 0 0 1 4 6h4V4q0-.824.588-1.412A1.93 1.93 0 0 1 10 2h4q.825 0 1.412.587Q16 3.176 16 4v2h4q.824 0 1.413.588Q22 7.175 22 8v11q0 .824-.587 1.413A1.93 1.93 0 0 1 20 21zm0-2h16V8H4zm6-13h4V4h-4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.5 15.5q-.62 0-1.06-.44A1.45 1.45 0 0 1 0 14V5q0-.618.44-1.06.44-.44 1.06-.44H5V1.996q0-.621.441-1.058A1.45 1.45 0 0 1 6.501.5h3.004q.62 0 1.057.44Q11 1.383 11 2v1.5h3.5q.619 0 1.06.44Q16 4.383 16 5v9q0 .619-.44 1.06-.442.44-1.06.44zm0-1.5h13V5h-13zm5-10.5h3V2h-3z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V8q0-.824.587-1.412A1.93 1.93 0 0 1 4 6h4V4q0-.824.588-1.412A1.93 1.93 0 0 1 10 2h4q.825 0 1.412.587Q16 3.176 16 4v2h4q.824 0 1.413.588Q22 7.175 22 8v11q0 .824-.587 1.413A1.93 1.93 0 0 1 20 21zm6-15h4V4h-4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.5 15q-.62 0-1.06-.44A1.45 1.45 0 0 1 0 13.5v-9q0-.618.44-1.06Q.88 3 1.5 3H5V1.496q0-.621.441-1.058A1.45 1.45 0 0 1 6.501 0h3.004q.62 0 1.057.44Q11 .883 11 1.5V3h3.5q.619 0 1.06.44.44.442.44 1.06v9q0 .619-.44 1.06-.442.44-1.06.44zm5-12h3V1.5h-3z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.588 20.413Q3.175 21 4 21h16q.824 0 1.413-.587Q22 19.825 22 19V8q0-.824-.587-1.412A1.93 1.93 0 0 0 20 6H4q-.824 0-1.412.588A1.93 1.93 0 0 0 2 8v11q0 .824.587 1.413M20 19H4V8h16z" clipRule="evenodd"/><path fill="currentColor" d="M8 4v2h2V4h4v2h2V4q0-.824-.588-1.412A1.93 1.93 0 0 0 14 2h-4q-.825 0-1.412.587A1.93 1.93 0 0 0 8 4"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.44 15.06q.44.44 1.06.44h13q.619 0 1.06-.44.44-.442.44-1.06V5q0-.618-.44-1.06a1.45 1.45 0 0 0-1.06-.44h-13q-.62 0-1.06.44Q0 4.383 0 5v9q0 .619.44 1.06M14.5 14h-13V5h13z" clipRule="evenodd"/><path fill="currentColor" d="M5 1.996V3.5h1.5V2h3v1.5H11V2a1.45 1.45 0 0 0-.437-1.06A1.44 1.44 0 0 0 9.505.5H6.502q-.62 0-1.06.438A1.44 1.44 0 0 0 5 1.996"/></> }
    }
};

export function Work({
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

Work.displayName = "Work";
