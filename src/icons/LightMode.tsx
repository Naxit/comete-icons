import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M14.125 14.125Q15 13.25 15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15t2.125-.875m-5.663 1.413Q7 14.075 7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17t-3.537-1.463M5 13H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75 3.875 5.325 5.3 3.85l2.4 2.5zm12.3 12.4-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525zM12 12"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M9.417 9.417Q10 8.834 10 8t-.583-1.417T8 6t-1.417.583T6 8t.583 1.417T8 10t1.417-.583m-3.775.942Q4.667 9.384 4.667 8t.975-2.358T8 4.667t2.359.975T11.334 8t-.975 2.359T8 11.334t-2.358-.975M3.333 8.667H.667V7.333h2.666zm12 0h-2.666V7.333h2.667zm-8-5.334V.667h1.334v2.666zm0 12v-2.666h1.334v2.667zM4.267 5.168 2.583 3.55l.95-.983 1.6 1.666zm8.2 8.267L10.85 11.75l.884-.916 1.683 1.616zm-1.633-9.167 1.616-1.684.984.95-1.667 1.6zm-8.267 8.2L4.25 10.85l.917.884-1.617 1.683zM8 8"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8.463 15.538Q7 14.075 7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17t-3.537-1.463M5 13H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75 3.875 5.325 5.3 3.85l2.4 2.5zm12.3 12.4-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.642 10.359Q4.667 9.384 4.667 8t.975-2.358T8 4.667t2.359.975T11.334 8t-.975 2.359T8 11.334t-2.358-.975M3.333 8.667H.667V7.333h2.666zm12 0h-2.666V7.333h2.667zm-8-5.334V.667h1.334v2.666zm0 12v-2.666h1.334v2.667zM4.267 5.168 2.583 3.55l.95-.983 1.6 1.666zm8.2 8.267L10.85 11.75l.884-.916 1.683 1.616zm-1.633-9.167 1.616-1.684.984.95-1.667 1.6zm-8.267 8.2L4.25 10.85l.917.884-1.617 1.683z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M14.125 14.125Q15 13.25 15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15t2.125-.875m-5.663 1.413Q7 14.075 7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17t-3.537-1.463M5 13H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75 3.875 5.325 5.3 3.85l2.4 2.5zm12.3 12.4-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525zM12 12"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M9.417 9.417Q10 8.834 10 8t-.583-1.417T8 6t-1.417.583T6 8t.583 1.417T8 10t1.417-.583m-3.775.942Q4.667 9.384 4.667 8t.975-2.358T8 4.667t2.359.975T11.334 8t-.975 2.359T8 11.334t-2.358-.975M3.333 8.667H.667V7.333h2.666zm12 0h-2.666V7.333h2.667zm-8-5.334V.667h1.334v2.666zm0 12v-2.666h1.334v2.667zM4.267 5.168 2.583 3.55l.95-.983 1.6 1.666zm8.2 8.267L10.85 11.75l.884-.916 1.683 1.616zm-1.633-9.167 1.616-1.684.984.95-1.667 1.6zm-8.267 8.2L4.25 10.85l.917.884-1.617 1.683zM8 8"/></> }
    }
};

export function LightMode({
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

LightMode.displayName = "LightMode";
