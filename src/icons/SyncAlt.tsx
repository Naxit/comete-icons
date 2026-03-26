import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m7 21-5-5 5-5 1.425 1.4-2.6 2.6H21v2H5.825l2.6 2.6zm10-8-1.425-1.4 2.6-2.6H3V7h15.175l-2.6-2.6L17 3l5 5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m4 15.4-4-4 4-4 1.14 1.12-2.08 2.08H15.2v1.6H3.06l2.08 2.08zM12 9l-1.14-1.12 2.08-2.08H.8V4.2h12.14l-2.08-2.08L12 1l4 4z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m7 21-5-5 5-5 1.425 1.4-2.6 2.6H21v2H5.825l2.6 2.6zm10-8-1.425-1.4 2.6-2.6H3V7h15.175l-2.6-2.6L17 3l5 5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m4 15.4-4-4 4-4 1.14 1.12-2.08 2.08H15.2v1.6H3.06l2.08 2.08zM12 9l-1.14-1.12 2.08-2.08H.8V4.2h12.14l-2.08-2.08L12 1l4 4z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M15.575 11.6 17 13l5-5-5-5-1.425 1.4 2.6 2.6H3v2h15.175z" clipRule="evenodd"/><path fill="var(--icon-information)" d="m7 21-5-5 5-5 1.425 1.4-2.6 2.6H21v2H5.825l2.6 2.6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M10.86 7.88 12 9l4-4-4-4-1.14 1.12 2.08 2.08H.8v1.6h12.14z" clipRule="evenodd"/><path fill="var(--icon-information)" d="m4 15.4-4-4 4-4 1.14 1.12-2.08 2.08H15.2v1.6H3.06l2.08 2.08z"/></> }
    }
};

export function SyncAlt({
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

SyncAlt.displayName = "SyncAlt";
