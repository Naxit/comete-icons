import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 14q-2.5 0-4.25-1.75T2 8t1.75-4.25T8 2q.233 0 .459.017t.441.05q-.683.483-1.092 1.258T7.4 5q0 1.5 1.05 2.55T11 8.6q.917 0 1.684-.408t1.25-1.092q.033.217.05.442T14 8q0 2.5-1.75 4.25T8 14m0-1.333q1.467 0 2.634-.808t1.7-2.109q-.334.084-.667.134t-.667.05q-2.05 0-3.492-1.442T6.067 5q0-.333.05-.667t.133-.666q-1.3.533-2.108 1.7T3.333 8q0 1.934 1.367 3.3T8 12.667m-.167-4.5"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 14q-2.5 0-4.25-1.75T2 8t1.75-4.25T8 2q.233 0 .459.017t.441.05q-.683.483-1.092 1.258T7.4 5q0 1.5 1.05 2.55T11 8.6q.917 0 1.684-.408t1.25-1.092q.033.217.05.442T14 8q0 2.5-1.75 4.25T8 14"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 14q-2.5 0-4.25-1.75T2 8t1.75-4.25T8 2q.233 0 .459.017t.441.05q-.683.483-1.092 1.258T7.4 5q0 1.5 1.05 2.55T11 8.6q.917 0 1.684-.408t1.25-1.092q.033.217.05.442T14 8q0 2.5-1.75 4.25T8 14m0-1.333q1.467 0 2.634-.808t1.7-2.109q-.334.084-.667.134t-.667.05q-2.05 0-3.492-1.442T6.067 5q0-.333.05-.667t.133-.666q-1.3.533-2.108 1.7T3.333 8q0 1.934 1.367 3.3T8 12.667m-.167-4.5"/></> }
    }
};

export function DarkMode({
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

DarkMode.displayName = "DarkMode";
