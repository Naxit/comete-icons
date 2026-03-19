import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h6l2 2h8q.824 0 1.413.588Q22 7.175 22 8v10q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm0-2h16V8h-8.825l-2-2H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 14.306a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13v-9.6q0-.66.47-1.13a1.54 1.54 0 0 1 1.13-.47h4.8l1.6 1.6h6.4q.66 0 1.13.47t.47 1.13v8q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h12.8v-8H7.34l-1.6-1.6H1.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h6l2 2h8q.824 0 1.413.588Q22 7.175 22 8v10q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 13.8a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 12.2V2.6q0-.66.47-1.13A1.54 1.54 0 0 1 1.6 1h4.8L8 2.6h6.4q.66 0 1.13.47T16 4.2v8q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h6l2 2h8q.824 0 1.413.588Q22 7.175 22 8v10q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm0-2h16V8h-8.825l-2-2H4z"/><path fill="currentColor" d="m11.175 8-2-2H4v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 14.306a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13v-9.6q0-.66.47-1.13a1.54 1.54 0 0 1 1.13-.47h4.8l1.6 1.6h6.4q.66 0 1.13.47t.47 1.13v8q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h12.8v-8H7.34l-1.6-1.6H1.6z"/><path fill="currentColor" d="m7.34 4.706-1.6-1.6H1.6v1.6z"/></> }
    }
};

export function Folder({
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

Folder.displayName = "Folder";
