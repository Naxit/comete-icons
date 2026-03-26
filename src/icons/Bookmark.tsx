import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21V5q0-.824.588-1.412A1.93 1.93 0 0 1 7 3h10q.824 0 1.413.587Q19 4.176 19 5v16l-7-3zm2-3.05 5-2.15 5 2.15V5H7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2 16V1.778q0-.734.504-1.256Q3.007 0 3.714 0h8.572q.707 0 1.21.522.504.522.504 1.256V16l-6-2.667zm1.714-2.711L8 11.378l4.286 1.91V1.779H3.714z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21V5q0-.824.588-1.412A1.93 1.93 0 0 1 7 3h10q.824 0 1.413.587Q19 4.176 19 5v16l-7-3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2 16V1.778q0-.734.504-1.256Q3.007 0 3.714 0h8.572q.707 0 1.21.522.504.522.504 1.256V16l-6-2.667z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M5 21V5q0-.824.588-1.412A1.93 1.93 0 0 1 7 3h10q.824 0 1.413.587Q19 4.176 19 5v16l-7-3zm2-3.05 5-2.15 5 2.15V5H7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M2 16V1.778q0-.734.504-1.256Q3.007 0 3.714 0h8.572q.707 0 1.21.522.504.522.504 1.256V16l-6-2.667zm1.714-2.711L8 11.378l4.286 1.91V1.779H3.714z"/></> }
    }
};

export function Bookmark({
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

Bookmark.displayName = "Bookmark";
