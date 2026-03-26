import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 16v-4.444h1.778v2.666h2.666V16zm11.556 0v-1.778h2.666v-2.666H16V16zM0 4.444V0h4.444v1.778H1.778v2.666zm14.222 0V1.778h-2.666V0H16v4.444z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 16v-4.444h1.778v2.666h2.666V16zm11.556 0v-1.778h2.666v-2.666H16V16zM0 4.444V0h4.444v1.778H1.778v2.666zm14.222 0V1.778h-2.666V0H16v4.444z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M0 16v-4.444h1.778v2.666h2.666V16zm11.556 0v-1.778h2.666v-2.666H16V16zM0 4.444V0h4.444v1.778H1.778v2.666zm14.222 0V1.778h-2.666V0H16v4.444z"/></> }
    }
};

export function FullScreen({
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

FullScreen.displayName = "FullScreen";
