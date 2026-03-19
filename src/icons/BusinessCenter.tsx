import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 21.667q-.824 0-1.412-.588A1.93 1.93 0 0 1 2 19.666v-11q0-.825.587-1.412A1.93 1.93 0 0 1 4 6.667h4v-2q0-.825.588-1.413A1.93 1.93 0 0 1 10 2.667h4q.825 0 1.412.587.588.588.588 1.413v2h4q.824 0 1.413.587.587.588.587 1.412v11q0 .825-.587 1.413a1.93 1.93 0 0 1-1.413.587zm6-15h4v-2h-4zm10 9h-5v2H9v-2H4v4h16zm-9 0h2v-2h-2zm-7-2h5v-2h6v2h5v-5H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 15.6a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 14V5.2q0-.66.47-1.13A1.54 1.54 0 0 1 1.6 3.6h3.2V2q0-.66.47-1.13A1.54 1.54 0 0 1 6.4.4h3.2q.66 0 1.13.47T11.2 2v1.6h3.2q.66 0 1.13.47T16 5.2V14q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm4.8-12h3.2V2H6.4zm8 7.2h-4v1.6H5.6v-1.6h-4V14h12.8zm-7.2 0h1.6V9.2H7.2zM1.6 9.2h4V7.6h4.8v1.6h4v-4H1.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 21.667q-.824 0-1.412-.588A1.93 1.93 0 0 1 2 19.666v-11q0-.825.587-1.412A1.93 1.93 0 0 1 4 6.667h4v-2q0-.825.588-1.413A1.93 1.93 0 0 1 10 2.667h4q.825 0 1.412.587.588.588.588 1.413v2h4q.824 0 1.413.587.587.588.587 1.412v11q0 .825-.587 1.413a1.93 1.93 0 0 1-1.413.587zm6-15h4v-2h-4zm1 9h2v-2h-2zm-7-2h5v-2h6v2h5v-5H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 15.6a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 14V5.2q0-.66.47-1.13A1.54 1.54 0 0 1 1.6 3.6h3.2V2q0-.66.47-1.13A1.54 1.54 0 0 1 6.4.4h3.2q.66 0 1.13.47T11.2 2v1.6h3.2q.66 0 1.13.47T16 5.2V14q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm4.8-12h3.2V2H6.4zm.8 7.2h1.6V9.2H7.2zM1.6 9.2h4V7.6h4.8v1.6h4v-4H1.6z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.588 21.079q.587.587 1.412.587h16q.824 0 1.413-.587.587-.588.587-1.413v-11q0-.825-.587-1.412A1.93 1.93 0 0 0 20 6.667h-4v-2q0-.825-.588-1.413A1.93 1.93 0 0 0 14 2.667h-4q-.825 0-1.412.587A1.93 1.93 0 0 0 8 4.667v2H4q-.824 0-1.412.587A1.93 1.93 0 0 0 2 8.666v11q0 .825.587 1.413M14 6.666h-4v-2h4zm1 9h5v4H4v-4h5v-2H4v-5h16v5h-5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M15 17.667v-6H9v6zm-2-2h-2v-2h2z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.47 15.13q.47.47 1.13.47h12.8q.66 0 1.13-.47T16 14V5.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-3.2V2q0-.66-.47-1.13A1.54 1.54 0 0 0 9.6.4H6.4q-.66 0-1.13.47A1.54 1.54 0 0 0 4.8 2v1.6H1.6q-.66 0-1.13.47A1.54 1.54 0 0 0 0 5.2V14q0 .66.47 1.13M9.6 3.6H6.4V2h3.2zm.8 7.2h4V14H1.6v-3.2h4V9.2h-4v-4h12.8v4h-4z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M10.4 12.4V7.6H5.6v4.8zm-1.6-1.6H7.2V9.2h1.6z" clipRule="evenodd"/></> }
    }
};

export function BusinessCenter({
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

BusinessCenter.displayName = "BusinessCenter";
