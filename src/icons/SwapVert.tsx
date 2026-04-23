import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 13V5.825L5.425 8.4 4 7l5-5 5 5-1.425 1.4L10 5.825V13zm7 9-5-5 1.425-1.4L14 18.175V11h2v7.175l2.575-2.575L20 17z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.25 8.8V3.06L3.158 5.12 2 4l4.063-4 4.062 4-1.158 1.12-2.092-2.06V8.8zm5.688 7.2-4.063-4 1.158-1.12 2.092 2.06V7.2h1.625v5.74l2.092-2.06L15 12z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 13V5.825L5.425 8.4 4 7l5-5 5 5-1.425 1.4L10 5.825V13zm7 9-5-5 1.425-1.4L14 18.175V11h2v7.175l2.575-2.575L20 17z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.25 8.8V3.06L3.158 5.12 2 4l4.063-4 4.062 4-1.158 1.12-2.092-2.06V8.8zm5.688 7.2-4.063-4 1.158-1.12 2.092 2.06V7.2h1.625v5.74l2.092-2.06L15 12z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M8 5.825V13h2V5.825L12.575 8.4 14 7 9 2 4 7l1.425 1.4z" clipRule="evenodd"/><path fill="#0076D8" d="m15 22-5-5 1.425-1.4L14 18.175V11h2v7.175l2.575-2.575L20 17z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M5.25 3.06V8.8h1.625V3.06l2.092 2.06L10.125 4 6.063 0 2 4l1.158 1.12z" clipRule="evenodd"/><path fill="#0076D8" d="m10.938 16-4.063-4 1.158-1.12 2.092 2.06V7.2h1.625v5.74l2.092-2.06L15 12z"/></> }
    }
};

export function SwapVert({
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

SwapVert.displayName = "SwapVert";
