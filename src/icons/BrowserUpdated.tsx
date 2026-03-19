import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6 21v-2l1-1H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V5q0-.824.587-1.412A1.93 1.93 0 0 1 4 3h8v2H4v11h16v-3h2v3q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18h-3l1 1v2zm9-6-5-5 1.4-1.4 2.6 2.575V3h2v8.175L18.6 8.6 20 10z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.2 15.2v-1.6l.8-.8H1.6a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 11.2V2.4q0-.66.47-1.13A1.54 1.54 0 0 1 1.6.8H8v1.6H1.6v8.8h12.8V8.8H16v2.4q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47H12l.8.8v1.6zm7.2-4.8-4-4 1.12-1.12L9.6 7.34V.8h1.6v6.54l2.08-2.06L14.4 6.4z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6 21v-2l1-1H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V5q0-.824.587-1.412A1.93 1.93 0 0 1 4 3h8v2H4v11h16v-3h2v3q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18h-3l1 1v2zm9-6-5-5 1.4-1.4 2.6 2.575V3h2v8.175L18.6 8.6 20 10z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.2 15.2v-1.6l.8-.8H1.6a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 11.2V2.4q0-.66.47-1.13A1.54 1.54 0 0 1 1.6.8H8v1.6H1.6v8.8h12.8V8.8H16v2.4q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47H12l.8.8v1.6zm7.2-4.8-4-4 1.12-1.12L9.6 7.34V.8h1.6v6.54l2.08-2.06L14.4 6.4z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M6 19v2h12v-2l-1-1h3q.824 0 1.413-.587Q22 16.825 22 16v-3h-2v3H4V5h8V3H4q-.824 0-1.412.587A1.93 1.93 0 0 0 2 5v11q0 .824.587 1.413Q3.176 18 4 18h3z" clipRule="evenodd"/><path fill="currentColor" d="m15 15-5-5 1.4-1.4 2.6 2.575V3h2v8.175L18.6 8.6 20 10z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.2 13.6v1.6h9.6v-1.6l-.8-.8h2.4q.66 0 1.13-.47T16 11.2V8.8h-1.6v2.4H1.6V2.4H8V.8H1.6Q.94.8.47 1.27A1.54 1.54 0 0 0 0 2.4v8.8q0 .66.47 1.13t1.13.47H4z" clipRule="evenodd"/><path fill="currentColor" d="m10.4 10.4-4-4 1.12-1.12L9.6 7.34V.8h1.6v6.54l2.08-2.06L14.4 6.4z"/></> }
    }
};

export function BrowserUpdated({
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

BrowserUpdated.displayName = "BrowserUpdated";
