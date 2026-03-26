import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 17H7q-2.074 0-3.537-1.463T2 12q0-2.075 1.463-3.537Q4.925 7 7 7h4v2H7q-1.25 0-2.125.875A2.9 2.9 0 0 0 4 12q0 1.25.875 2.125A2.9 2.9 0 0 0 7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875A2.9 2.9 0 0 0 20 12q0-1.25-.875-2.125A2.9 2.9 0 0 0 17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.462 3.537Q19.074 17 17 17z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7 12H4q-1.66 0-2.83-1.171T0 7.995t1.17-2.828T4 4h3v1.5H4a2.4 2.4 0 0 0-1.77.73A2.4 2.4 0 0 0 1.5 8q0 1.042.73 1.77.728.73 1.77.73h3zM5 8.75v-1.5h6v1.5zM9 12v-1.5h3q1.042 0 1.77-.73.73-.728.73-1.77t-.73-1.77A2.4 2.4 0 0 0 12 5.5H9V4h3q1.66 0 2.83 1.171T16 8.005t-1.17 2.828T12 12z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 17H7q-2.074 0-3.537-1.463T2 12q0-2.075 1.463-3.537Q4.925 7 7 7h4v2H7q-1.25 0-2.125.875A2.9 2.9 0 0 0 4 12q0 1.25.875 2.125A2.9 2.9 0 0 0 7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875A2.9 2.9 0 0 0 20 12q0-1.25-.875-2.125A2.9 2.9 0 0 0 17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.462 3.537Q19.074 17 17 17z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7 12H4q-1.66 0-2.83-1.171T0 7.995t1.17-2.828T4 4h3v1.5H4a2.4 2.4 0 0 0-1.77.73A2.4 2.4 0 0 0 1.5 8q0 1.042.73 1.77.728.73 1.77.73h3zM5 8.75v-1.5h6v1.5zM9 12v-1.5h3q1.042 0 1.77-.73.73-.728.73-1.77t-.73-1.77A2.4 2.4 0 0 0 12 5.5H9V4h3q1.66 0 2.83 1.171T16 8.005t-1.17 2.828T12 12z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M7 17h4v-2H7a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 4 12q0-1.25.875-2.125A2.9 2.9 0 0 1 7 9h4V7H7Q4.926 7 3.463 8.463T2 12t1.463 3.537Q4.925 17 7 17m6-2v2h4q2.075 0 3.538-1.463T22 12t-1.462-3.537Q19.074 7 17 7h-4v2h4q1.25 0 2.125.875T20 12t-.875 2.125A2.9 2.9 0 0 1 17 15z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M8 13v-2h8v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 12h3v-1.5H4a2.4 2.4 0 0 1-1.77-.73A2.4 2.4 0 0 1 1.5 8q0-1.042.73-1.77A2.4 2.4 0 0 1 4 5.5h3V4H4Q2.34 4 1.17 5.167 0 6.333 0 7.995t1.17 2.834T4 12m5-1.5V12h3q1.66 0 2.83-1.167Q16 9.667 16 8.005T14.83 5.17 12 4H9v1.5h3a2.4 2.4 0 0 1 1.77.73q.73.728.73 1.77t-.73 1.77a2.4 2.4 0 0 1-1.77.73z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M5 8.75v-1.5h6v1.5z"/></> }
    }
};

export function Link({
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

Link.displayName = "Link";
