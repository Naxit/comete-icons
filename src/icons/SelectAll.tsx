import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7 17V7h10v10zm2-2h6V9H9zm-4 4v2q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm2-4H3q0-.824.587-1.412A1.93 1.93 0 0 1 5 3zm2 16v-2h2v2zM7 5V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21m0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3q.824 0 1.413.587Q21 4.176 21 5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.556 12.444V3.556h8.888v8.888zm1.777-1.777h5.334V5.333H5.333zm-3.555 3.555V16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222zM0 12.444v-1.777h1.778v1.777zM0 8.89V7.11h1.778v1.78zm0-3.556V3.556h1.778v1.777zm1.778-3.555H0Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0zM3.556 16v-1.778h1.777V16zm0-14.222V0h1.777v1.778zM7.11 16v-1.778h1.78V16zm0-14.222V0h1.78v1.778zM10.667 16v-1.778h1.777V16zm0-14.222V0h1.777v1.778zM14.222 16v-1.778H16q0 .734-.522 1.256a1.7 1.7 0 0 1-1.256.522m0-3.556v-1.777H16v1.777zm0-3.555V7.11H16v1.78zm0-3.556V3.556H16v1.777zm0-3.555V0q.734 0 1.256.522T16 1.778z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7 17V7h10v10zm2-2h6V9H9zm-4 4v2q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm2-4H3q0-.824.587-1.412A1.93 1.93 0 0 1 5 3zm2 16v-2h2v2zM7 5V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21m0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3q.824 0 1.413.587Q21 4.176 21 5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.556 12.444V3.556h8.888v8.888zm1.777-1.777h5.334V5.333H5.333zm-3.555 3.555V16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222zM0 12.444v-1.777h1.778v1.777zM0 8.89V7.11h1.778v1.78zm0-3.556V3.556h1.778v1.777zm1.778-3.555H0Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0zM3.556 16v-1.778h1.777V16zm0-14.222V0h1.777v1.778zM7.11 16v-1.778h1.78V16zm0-14.222V0h1.78v1.778zM10.667 16v-1.778h1.777V16zm0-14.222V0h1.777v1.778zM14.222 16v-1.778H16q0 .734-.522 1.256a1.7 1.7 0 0 1-1.256.522m0-3.556v-1.777H16v1.777zm0-3.555V7.11H16v1.78zm0-3.556V3.556H16v1.777zm0-3.555V0q.734 0 1.256.522T16 1.778z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M5 21v-2H3q0 .824.587 1.413Q4.176 21 5 21m-2-6v2h2v-2zm0-4v2h2v-2zm0-4v2h2V7zm0-2h2V3q-.824 0-1.412.587A1.93 1.93 0 0 0 3 5m4 14v2h2v-2zM7 3v2h2V3zm4 16v2h2v-2zm0-16v2h2V3zm4 16v2h2v-2zm0-16v2h2V3zm4 16v2q.824 0 1.413-.587Q21 19.825 21 19zm0-4v2h2v-2zm0-4v2h2v-2zm0-4v2h2V7zm0-4v2h2q0-.824-.587-1.412A1.93 1.93 0 0 0 19 3" clipRule="evenodd"/><path fill="#007ADA" fillRule="evenodd" d="M7 17V7h10v10zm8-2H9V9h6z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.778 16v-1.778H0q0 .734.522 1.256T1.778 16M0 10.667v1.777h1.778v-1.777zM0 7.11v1.78h1.778V7.11zm0-3.555v1.777h1.778V3.556zm0-1.778h1.778V0Q1.044 0 .522.522A1.7 1.7 0 0 0 0 1.778m3.556 12.444V16h1.777v-1.778zM3.556 0v1.778h1.777V0zM7.11 14.222V16h1.78v-1.778zM7.111 0v1.778H8.89V0zm3.556 14.222V16h1.777v-1.778zm0-14.222v1.778h1.777V0zm3.555 14.222V16q.734 0 1.256-.522T16 14.222zm0-3.555v1.777H16v-1.777zm0-3.556V8.89H16V7.11zm0-3.555v1.777H16V3.556zm0-3.556v1.778H16q0-.734-.522-1.256A1.7 1.7 0 0 0 14.222 0" clipRule="evenodd"/><path fill="#007ADA" fillRule="evenodd" d="M3.556 12.444V3.556h8.888v8.888zm7.11-1.777H5.334V5.333h5.334z" clipRule="evenodd"/></> }
    }
};

export function SelectAll({
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

SelectAll.displayName = "SelectAll";
