import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.5 15H9v-4H7.5v1.25H6v1.5h1.5zm2.5-1.25h8v-1.5h-8zM15 11h1.5V9.75H18v-1.5h-1.5V7H15zM6 9.75h8v-1.5H6zM8 21v-2H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 17V5q0-.824.587-1.412A1.93 1.93 0 0 1 4 3h16q.824 0 1.413.587Q22 4.176 22 5v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 19h-4v2zm-4-4h16V5H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.4 10.4h1.2V7.2H4.4v1H3.2v1.2h1.2zm2-1h6.4V8.2H6.4zm4-2.2h1.2v-1h1.2V5h-1.2V4h-1.2zm-7.2-1h6.4V5H3.2zm1.6 9v-1.6H1.6a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 12V2.4q0-.66.47-1.13A1.54 1.54 0 0 1 1.6.8h12.8q.66 0 1.13.47T16 2.4V12q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47h-3.2v1.6zM1.6 12h12.8V2.4H1.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.5 15H9v-4H7.5v1.25H6v1.5h1.5zm2.5-1.25h8v-1.5h-8zM15 11h1.5V9.75H18v-1.5h-1.5V7H15zM6 9.75h8v-1.5H6zM8 21v-2H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 17V5q0-.824.587-1.412A1.93 1.93 0 0 1 4 3h16q.824 0 1.413.587Q22 4.176 22 5v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 19h-4v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.4 10.4h1.2V7.2H4.4v1H3.2v1.2h1.2zm2-1h6.4V8.2H6.4zm4-2.2h1.2v-1h1.2V5h-1.2V4h-1.2zm-7.2-1h6.4V5H3.2zm1.6 9v-1.6H1.6a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 12V2.4q0-.66.47-1.13A1.54 1.54 0 0 1 1.6.8h12.8q.66 0 1.13.47T16 2.4V12q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47h-3.2v1.6z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M8 21v-2H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 17V5q0-.824.587-1.412A1.93 1.93 0 0 1 4 3h16q.824 0 1.413.587Q22 4.176 22 5v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 19h-4v2zm-4-4h16V5H4z" clipRule="evenodd"/><path fill="currentColor" d="M10 13.75h8v-1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5zM6 9.75h8v-1.5H6zM15 11h1.5V9.75H18v-1.5h-1.5V7H15z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M5.6 10.4H4.4v-1H3.2V8.2h1.2v-1h1.2zm7.2-2.2v1.2H6.4V8.2zm-1.2-1h-1.2V4h1.2v1h1.2v1.2h-1.2zm-2-1H3.2V5h6.4z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M4.8 15.2v-1.6H1.6a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 12V2.4q0-.66.47-1.13A1.54 1.54 0 0 1 1.6.8h12.8q.66 0 1.13.47T16 2.4V12q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47h-3.2v1.6zm9.6-3.2H1.6V2.4h12.8z" clipRule="evenodd"/></> }
    }
};

export function DisplaySettings({
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

DisplaySettings.displayName = "DisplaySettings";
