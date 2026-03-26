import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8.786 8.875V7h9v1.875z"/><path fill="currentColor" fillRule="evenodd" d="M5.571 22a2.52 2.52 0 0 1-1.821-.73A2.38 2.38 0 0 1 3 19.5v-3.75h2.571V2H21v17.188q0 1.17-.844 1.992-.843.82-2.049.82zm12.53-1.875q.408 0 .69-.27a.9.9 0 0 0 .28-.668V3.876H7.5V15.75h9.643v3.438q0 .398.276.668.274.27.683.269m-12.53 0h9.643v-2.5H4.93V19.5q0 .266.184.445.185.18.458.18" clipRule="evenodd"/><path fill="currentColor" d="M8.786 12v-1.875h9V12z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.364 5.5V4h7.334v1.5z"/><path fill="currentColor" fillRule="evenodd" d="M2.745 16a2.07 2.07 0 0 1-1.484-.583A1.9 1.9 0 0 1 .65 14v-3h2.095V0h12.572v13.75q0 .937-.688 1.594-.687.656-1.67.656zm10.21-1.5a.8.8 0 0 0 .561-.216.7.7 0 0 0 .23-.534V1.5h-9.43V11h7.858v2.75q0 .319.224.534.225.216.557.216m-10.21 0h7.857v-2h-8.38V14q0 .213.15.356a.52.52 0 0 0 .373.144" clipRule="evenodd"/><path fill="currentColor" d="M5.364 8V6.5h7.334V8z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8.786 8.875V7h9v1.875z"/><path fill="currentColor" fillRule="evenodd" d="M5.571 22a2.52 2.52 0 0 1-1.821-.73A2.38 2.38 0 0 1 3 19.5v-3.75h2.571V2H21v17.188q0 1.17-.844 1.992-.843.82-2.049.82zm12.53-1.875q.408 0 .69-.27a.9.9 0 0 0 .28-.668V3.876H7.5V15.75h9.643v3.438q0 .398.276.668.274.27.683.269" clipRule="evenodd"/><path fill="currentColor" d="M8.786 12v-1.875h9V12z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.364 5.5V4h7.334v1.5z"/><path fill="currentColor" fillRule="evenodd" d="M2.745 16a2.07 2.07 0 0 1-1.484-.583A1.9 1.9 0 0 1 .65 14v-3h2.095V0h12.572v13.75q0 .937-.688 1.594-.687.656-1.67.656zm10.21-1.5a.8.8 0 0 0 .561-.216.7.7 0 0 0 .23-.534V1.5h-9.43V11h7.858v2.75q0 .319.224.534.225.216.557.216" clipRule="evenodd"/><path fill="currentColor" d="M5.364 8V6.5h7.334V8z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M8.786 8.875V7h9v1.875z"/><path fill="currentColor" fillRule="evenodd" d="M5.571 22a2.52 2.52 0 0 1-1.821-.73A2.38 2.38 0 0 1 3 19.5v-3.75h2.571V2H21v17.188q0 1.17-.844 1.992-.843.82-2.049.82zm12.53-1.875q.408 0 .69-.27a.9.9 0 0 0 .28-.668V3.876H7.5V15.75h9.643v3.438q0 .398.276.668.274.27.683.269m-12.53 0h9.643v-2.5H4.93V19.5q0 .266.184.445.185.18.458.18" clipRule="evenodd"/><path fill="#007ADA" d="M8.786 12v-1.875h9V12z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M5.364 5.5V4h7.334v1.5z"/><path fill="currentColor" fillRule="evenodd" d="M2.745 16a2.07 2.07 0 0 1-1.484-.583A1.9 1.9 0 0 1 .65 14v-3h2.095V0h12.572v13.75q0 .937-.688 1.594-.687.656-1.67.656zm10.21-1.5a.8.8 0 0 0 .561-.216.7.7 0 0 0 .23-.534V1.5h-9.43V11h7.858v2.75q0 .319.224.534.225.216.557.216m-10.21 0h7.857v-2h-8.38V14q0 .213.15.356a.52.52 0 0 0 .373.144" clipRule="evenodd"/><path fill="#007ADA" d="M5.364 8V6.5h7.334V8z"/></> }
    }
};

export function Packages({
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

Packages.displayName = "Packages";
