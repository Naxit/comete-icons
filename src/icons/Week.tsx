import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.54 21.413Q4.127 22 4.952 22h14q.825 0 1.413-.587.587-.588.587-1.413V6q0-.824-.587-1.412A1.93 1.93 0 0 0 18.952 4h-1V2h-2v2h-8V2h-2v2h-1q-.824 0-1.412.588A1.93 1.93 0 0 0 2.952 6v14q0 .824.588 1.413M4.952 20h14V10h-14zm7.87-7.08-2.976 5.83h2.117l2.99-5.874V11.25H9.328v1.626h3.493zM18.951 8h-14V6h13.99z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.4 16a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 .8 14.4V3.2q0-.66.47-1.13A1.54 1.54 0 0 1 2.4 1.6h.8V0h1.6v1.6h6.4V0h1.6v1.6h.8q.66 0 1.13.47t.47 1.13v11.2q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm11.2-1.6H2.4v-8h11.2zm0-9.6H2.4V3.2h11.192z" clipRule="evenodd"/><path fill="currentColor" d="m6.315 13.4 2.38-4.664V8.7H5.9V7.4h4.5v1.3l-2.392 4.7z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.952 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 2.952 20V6q0-.824.588-1.412A1.93 1.93 0 0 1 4.952 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588.587.587.587 1.412v14q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587zm14-2h-14V10h14zm-9.106-1.25 2.975-5.83v-.044H9.328V11.25h5.625v1.626l-2.99 5.874z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m6.315 13.4 2.38-4.664V8.7H5.9V7.4h4.5v1.3l-2.392 4.7z"/><path fill="currentColor" fillRule="evenodd" d="M1.27 15.53q.47.47 1.13.47h11.2q.66 0 1.13-.47t.47-1.13V3.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-.8V0h-1.6v1.6H4.8V0H3.2v1.6h-.8q-.66 0-1.13.47A1.54 1.54 0 0 0 .8 3.2v11.2q0 .66.47 1.13M13.6 14.4H2.4v-8h11.2z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="m9.846 18.75 2.975-5.83v-.044H9.328V11.25h5.625v1.626l-2.99 5.874z"/><path fill="currentColor" fillRule="evenodd" d="M3.54 21.413Q4.127 22 4.952 22h14q.825 0 1.413-.587.587-.588.587-1.413V6q0-.824-.587-1.412A1.93 1.93 0 0 0 18.952 4h-1V2h-2v2h-8V2h-2v2h-1q-.824 0-1.412.588A1.93 1.93 0 0 0 2.952 6v14q0 .824.588 1.413M18.952 20h-14V10h14zm0-12h-14V6h13.99z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="m6.315 13.4 2.38-4.664V8.7H5.9V7.4h4.5v1.3l-2.392 4.7z"/><path fill="currentColor" fillRule="evenodd" d="M1.27 15.53q.47.47 1.13.47h11.2q.66 0 1.13-.47t.47-1.13V3.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-.8V0h-1.6v1.6H4.8V0H3.2v1.6h-.8q-.66 0-1.13.47A1.54 1.54 0 0 0 .8 3.2v11.2q0 .66.47 1.13M13.6 14.4H2.4v-8h11.2zm0-9.6H2.4V3.2h11.192z" clipRule="evenodd"/></> }
    }
};

export function Week({
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

Week.displayName = "Week";
