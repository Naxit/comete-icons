import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V3l1.675 1.675L5.325 3 7 4.675 8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3 17 4.675 18.675 3l1.65 1.675L22 3v16q0 .824-.587 1.413A1.93 1.93 0 0 1 20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 15.2a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 13.6V.8l1.34 1.34L2.66.8 4 2.14 5.34.8l1.32 1.34L8 .8l1.34 1.34L10.66.8 12 2.14 13.34.8l1.32 1.34L16 .8v12.8q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h5.6V8.8H1.6zm7.2 0h5.6V12H8.8zm0-3.2h5.6V8.8H8.8zM1.6 7.2h12.8V4.8H1.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V3l1.675 1.675L5.325 3 7 4.675 8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3 17 4.675 18.675 3l1.65 1.675L22 3v16q0 .824-.587 1.413A1.93 1.93 0 0 1 20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 15.2a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 13.6V.8l1.34 1.34L2.66.8 4 2.14 5.34.8l1.32 1.34L8 .8l1.34 1.34L10.66.8 12 2.14 13.34.8l1.32 1.34L16 .8v12.8q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h5.6V8.8H1.6zm7.2 0h5.6V12H8.8zm0-3.2h5.6V8.8H8.8zM1.6 7.2h12.8V4.8H1.6z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V3l1.675 1.675L5.325 3 7 4.675 8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3 17 4.675 18.675 3l1.65 1.675L22 3v16q0 .824-.587 1.413A1.93 1.93 0 0 1 20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z"/><path fill="currentColor" d="M4 11h16V8H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 15.2a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 13.6V.8l1.34 1.34L2.66.8 4 2.14 5.34.8l1.32 1.34L8 .8l1.34 1.34L10.66.8 12 2.14 13.34.8l1.32 1.34L16 .8v12.8q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h5.6V8.8H1.6zm7.2 0h5.6V12H8.8zm0-3.2h5.6V8.8H8.8zM1.6 7.2h12.8V4.8H1.6z"/><path fill="currentColor" d="M1.6 7.2h12.8V4.8H1.6z"/></> }
    }
};

export function Newspaper({
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

Newspaper.displayName = "Newspaper";
