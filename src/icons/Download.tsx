import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 16-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-3h2v3h12v-3h2v3q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 12 3 7l1.4-1.45L7 8.15V0h2v8.15l2.6-2.6L13 7zm-6 4q-.824 0-1.412-.588A1.93 1.93 0 0 1 0 14v-3h2v3h12v-3h2v3q0 .825-.588 1.412A1.93 1.93 0 0 1 14 16z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 16-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-3h2v3h12v-3h2v3q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 12 3 7l1.4-1.45L7 8.15V0h2v8.15l2.6-2.6L13 7zm-6 4q-.824 0-1.412-.588A1.93 1.93 0 0 1 0 14v-3h2v3h12v-3h2v3q0 .825-.588 1.412A1.93 1.93 0 0 1 14 16z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.588 19.413Q5.175 20 6 20h12q.824 0 1.413-.587Q20 18.825 20 18v-3h-2v3H6v-3H4v3q0 .824.588 1.413" clipRule="evenodd"/><path fill="currentColor" d="m12 16-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.588 15.413Q1.175 16 2 16h12q.825 0 1.412-.588Q16 14.826 16 14v-3h-2v3H2v-3H0v3q0 .825.588 1.412" clipRule="evenodd"/><path fill="currentColor" d="M8 12 3 7l1.4-1.45L7 8.15V0h2v8.15l2.6-2.6L13 7z"/></> }
    }
};

export function Download({
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

Download.displayName = "Download";
