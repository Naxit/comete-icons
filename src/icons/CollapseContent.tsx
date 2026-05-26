import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 13v6H9v-4H5v-2zm4-8v4h4v2h-6V5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 8.667v4H6V10H3.333V8.667zM10 3.333V6h2.667v1.333h-4v-4z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9 15H6q-.425 0-.712-.288T5 14t.288-.712T6 13h4q.425 0 .713.288T11 14v4q0 .425-.288.713T10 19t-.712-.288T9 18zm6-6h3q.425 0 .713.288T19 10t-.288.713T18 11h-4q-.425 0-.712-.288T13 10V6q0-.425.288-.712T14 5t.713.288T15 6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6 10H4q-.283 0-.475-.192t-.192-.475.192-.474T4 8.667h2.667q.283 0 .475.192t.191.474V12q0 .283-.192.475t-.474.192-.475-.192T6 12zm4-4h2q.283 0 .475.192t.192.475-.192.475-.475.191H9.333q-.283 0-.474-.192t-.192-.474V4q0-.283.192-.475t.474-.192.476.192T10 4z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 13v6H9v-4H5v-2zm4-8v4h4v2h-6V5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 8.667v4H6V10H3.333V8.667zM10 3.333V6h2.667v1.333h-4v-4z"/></> }
    }
};

export function CollapseContent({
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

CollapseContent.displayName = "CollapseContent";
