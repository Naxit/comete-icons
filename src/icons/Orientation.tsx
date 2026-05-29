import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M1 12.733V23h16.5V12.733zm1.833 1.834v6.6h12.834v-6.6z" clipRule="evenodd"/><path fill="currentColor" d="M23 1H12.733v9.9h1.834V2.833h6.6v12.834h-1.834V17.5H23zM3.131 6.35a8 8 0 0 0-2.065 4.55h1.857a6 6 0 0 1 1.515-3.137Q6.042 6 8.333 6h.16L7.028 7.6 8.31 9l3.667-4L8.31 1 7.027 2.4 8.494 4h-.16Q5.261 4 3.13 6.35"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 8.533V16h12V8.533zm1.333 1.334v4.8h9.334v-4.8z" clipRule="evenodd"/><path fill="currentColor" d="M16 0H8.533v7.2h1.334V1.333h4.8v9.334h-1.334V12H16zM1.55 3.89A5.83 5.83 0 0 0 .048 7.2h1.35q.21-1.303 1.102-2.282 1.167-1.281 2.833-1.282h.117L4.383 4.8l.934 1.018L7.983 2.91 5.317 0l-.934 1.018L5.45 2.182h-.117Q3.1 2.182 1.55 3.89"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M1 12.733V23h16.5V12.733z" clipRule="evenodd"/><path fill="currentColor" d="M23 1H12.733v9.9h6.6v6.6H23zM3.131 6.35a8 8 0 0 0-2.065 4.55h1.857a6 6 0 0 1 1.515-3.137Q6.042 6 8.333 6h.16L7.028 7.6 8.31 9l3.667-4L8.31 1 7.027 2.4 8.494 4h-.16Q5.261 4 3.13 6.35"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 8.533V16h12V8.533z" clipRule="evenodd"/><path fill="currentColor" d="M16 0H8.533v7.2h4.8V12H16zM1.55 3.89A5.83 5.83 0 0 0 .048 7.2h1.35q.21-1.303 1.102-2.282 1.167-1.281 2.833-1.282h.117L4.383 4.8l.934 1.018L7.983 2.91 5.317 0l-.934 1.018L5.45 2.182h-.117Q3.1 2.182 1.55 3.89"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M1 12.733V23h16.5V12.733zm1.833 1.834v6.6h12.834v-6.6z" clipRule="evenodd"/><path fill="currentColor" d="M23 1H12.733v9.9h1.834V2.833h6.6v12.834h-1.834V17.5H23z"/><path fill="var(--icon-information)" d="M3.131 6.35a8 8 0 0 0-2.065 4.55h1.857a6 6 0 0 1 1.515-3.137Q6.042 6 8.333 6h.16L7.028 7.6 8.31 9l3.667-4L8.31 1 7.027 2.4 8.494 4h-.16Q5.261 4 3.13 6.35"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 8.533V16h12V8.533zm1.333 1.334v4.8h9.334v-4.8z" clipRule="evenodd"/><path fill="currentColor" d="M16 0H8.533v7.2h1.334V1.333h4.8v9.334h-1.334V12H16z"/><path fill="var(--icon-information)" d="M1.55 3.89A5.83 5.83 0 0 0 .048 7.2h1.35q.21-1.303 1.102-2.282 1.167-1.281 2.833-1.282h.117L4.383 4.8l.934 1.018L7.983 2.91 5.317 0l-.934 1.018L5.45 2.182h-.117Q3.1 2.182 1.55 3.89"/></> }
    }
};

export function Orientation({
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

Orientation.displayName = "Orientation";
