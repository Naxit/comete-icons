import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 21v-6h2v2h8v2h-8v2zm-8-2v-2h6v2zm4-4v-2H3v-2h4V9h2v6zm4-2v-2h10v2zm4-4V3h2v2h4v2h-4v2zM3 7V5h10v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 14v-4h1.334v1.334H14v1.333H8.667V14zM2 12.667v-1.333h4v1.333zM4.667 10V8.667H2V7.333h2.667V6H6v4zm2.666-1.333V7.333H14v1.334zM10 6V2h1.334v1.333H14v1.334h-2.666V6zM2 4.667V3.333h6.667v1.334z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 21v-6h2v2h8v2h-8v2zm-8-2v-2h6v2zm4-4v-2H3v-2h4V9h2v6zm4-2v-2h10v2zm4-4V3h2v2h4v2h-4v2zM3 7V5h10v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 14v-4h1.334v1.334H14v1.333H8.667V14zM2 12.667v-1.333h4v1.333zM4.667 10V8.667H2V7.333h2.667V6H6v4zm2.666-1.333V7.333H14v1.334zM10 6V2h1.334v1.333H14v1.334h-2.666V6zM2 4.667V3.333h6.667v1.334z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 21v-6h2v2h8v2h-8v2zm-8-2v-2h6v2zm4-4v-2H3v-2h4V9h2v6zm4-2v-2h10v2zm4-4V3h2v2h4v2h-4v2zM3 7V5h10v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 14v-4h1.334v1.334H14v1.333H8.667V14zM2 12.667v-1.333h4v1.333zM4.667 10V8.667H2V7.333h2.667V6H6v4zm2.666-1.333V7.333H14v1.334zM10 6V2h1.334v1.333H14v1.334h-2.666V6zM2 4.667V3.333h6.667v1.334z"/></> }
    }
};

export function Tune({
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

Tune.displayName = "Tune";
