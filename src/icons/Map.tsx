import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m15 21-6-2.1-4.65 1.8a.9.9 0 0 1-.925-.113A.99.99 0 0 1 3 19.75v-14q0-.325.188-.575A1.13 1.13 0 0 1 3.7 4.8L9 3l6 2.1 4.65-1.8a.9.9 0 0 1 .925.113.99.99 0 0 1 .425.837v14a.93.93 0 0 1-.187.575 1.13 1.13 0 0 1-.513.375zm-1-2.45V6.85l-4-1.4v11.7zm2 0 3-1V5.7l-3 1.15zM5 18.3l3-1.15V5.45l-3 1z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m10.667 16-5.334-1.867-4.133 1.6a.8.8 0 0 1-.822-.1A.88.88 0 0 1 0 14.89V2.444q0-.289.167-.51.166-.223.455-.334L5.333 0l5.334 1.867L14.8.267a.8.8 0 0 1 .822.1.88.88 0 0 1 .378.744v12.445a.83.83 0 0 1-.167.51q-.166.223-.455.334zm-.89-2.178v-10.4L6.223 2.178v10.4zm1.779 0 2.666-.889V2.4l-2.666 1.022zM1.778 13.6l2.666-1.022v-10.4l-2.666.889z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m15 21-6-2.1-4.65 1.8a.9.9 0 0 1-.925-.113A.99.99 0 0 1 3 19.75v-14q0-.325.188-.575A1.13 1.13 0 0 1 3.7 4.8L9 3l6 2.1 4.65-1.8a.9.9 0 0 1 .925.113.99.99 0 0 1 .425.837v14a.93.93 0 0 1-.187.575 1.13 1.13 0 0 1-.513.375z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m10.667 16-5.334-1.867-4.133 1.6a.8.8 0 0 1-.822-.1A.88.88 0 0 1 0 14.89V2.444q0-.289.167-.51.166-.223.455-.334L5.333 0l5.334 1.867L14.8.267a.8.8 0 0 1 .822.1.88.88 0 0 1 .378.744v12.445a.83.83 0 0 1-.167.51q-.166.223-.455.334z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="m15 21-6-2.1-4.65 1.8a.9.9 0 0 1-.925-.113A.99.99 0 0 1 3 19.75v-14q0-.325.188-.575A1.13 1.13 0 0 1 3.7 4.8L9 3l6 2.1 4.65-1.8a.9.9 0 0 1 .925.113.99.99 0 0 1 .425.837v14a.93.93 0 0 1-.187.575 1.13 1.13 0 0 1-.513.375zm-1-2.45V6.85l-4-1.4v11.7zm2 0 3-1V5.7l-3 1.15zM5 18.3l3-1.15V5.45l-3 1z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="m10.667 16-5.334-1.867-4.133 1.6a.8.8 0 0 1-.822-.1A.88.88 0 0 1 0 14.89V2.444q0-.289.167-.51.166-.223.455-.334L5.333 0l5.334 1.867L14.8.267a.8.8 0 0 1 .822.1.88.88 0 0 1 .378.744v12.445a.83.83 0 0 1-.167.51q-.166.223-.455.334zm-.89-2.178v-10.4L6.223 2.178v10.4zm1.779 0 2.666-.889V2.4l-2.666 1.022zM1.778 13.6l2.666-1.022v-10.4l-2.666.889z"/></> }
    }
};

export function Map({
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

Map.displayName = "Map";
