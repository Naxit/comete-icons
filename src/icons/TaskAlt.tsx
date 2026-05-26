import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m10.6 16.6 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9 2 12t.788-3.9 2.137-3.175T8.1 2.788 12 2t3.9.788 3.175 2.137T21.213 8.1 22 12t-.788 3.9-2.137 3.175-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0-8"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m7.067 11.067 4.7-4.7-.933-.934L7.067 9.2l-1.9-1.9-.934.933zm.933 3.6q-1.383 0-2.6-.525t-2.117-1.425T1.858 10.6 1.333 8t.525-2.6 1.425-2.117T5.4 1.858 8 1.333t2.6.525 2.117 1.425T14.142 5.4t.525 2.6-.525 2.6-1.425 2.117-2.117 1.425-2.6.525m0-1.333q2.234 0 3.784-1.55T13.334 8t-1.55-3.783T8 2.667t-3.783 1.55T2.667 8t1.55 3.784T8 13.334M8 8"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m10.6 16.6 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9 2 12t.788-3.9 2.137-3.175T8.1 2.788 12 2t3.9.788 3.175 2.137T21.213 8.1 22 12t-.788 3.9-2.137 3.175-3.175 2.138T12 22"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m7.067 11.067 4.7-4.7-.933-.934L7.067 9.2l-1.9-1.9-.934.933zm.933 3.6q-1.383 0-2.6-.525t-2.117-1.425T1.858 10.6 1.333 8t.525-2.6 1.425-2.117T5.4 1.858 8 1.333t2.6.525 2.117 1.425T14.142 5.4t.525 2.6-.525 2.6-1.425 2.117-2.117 1.425-2.6.525"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m10.6 16.6 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9 2 12t.788-3.9 2.137-3.175T8.1 2.788 12 2t3.9.788 3.175 2.137T21.213 8.1 22 12t-.788 3.9-2.137 3.175-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0-8"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m7.067 11.067 4.7-4.7-.933-.934L7.067 9.2l-1.9-1.9-.934.933zm.933 3.6q-1.383 0-2.6-.525t-2.117-1.425T1.858 10.6 1.333 8t.525-2.6 1.425-2.117T5.4 1.858 8 1.333t2.6.525 2.117 1.425T14.142 5.4t.525 2.6-.525 2.6-1.425 2.117-2.117 1.425-2.6.525m0-1.333q2.234 0 3.784-1.55T13.334 8t-1.55-3.783T8 2.667t-3.783 1.55T2.667 8t1.55 3.784T8 13.334M8 8"/></> }
    }
};

export function TaskAlt({
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

TaskAlt.displayName = "TaskAlt";
