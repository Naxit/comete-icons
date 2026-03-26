import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 21v-2l2-2v4zm4 0v-6l2-2v8zm4 0v-8l2 2.025V21zm4 0v-5.975l2-2V21zm4 0V11l2-2v12zM3 15.825V13l7-7 4 4 7-7v2.825l-7 7-4-4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 16v-1.778l1.778-1.778V16zm3.556 0v-5.333l1.777-1.778V16zm3.555 0V8.889l1.778 1.8V16zm3.556 0v-5.311l1.777-1.778V16zm3.555 0V7.111L16 5.333V16zM0 11.4V8.889l6.222-6.222 3.556 3.555L16 0v2.511L9.778 8.733 6.222 5.178z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 21v-2l2-2v4zm4 0v-6l2-2v8zm4 0v-8l2 2.025V21zm4 0v-5.975l2-2V21zm4 0V11l2-2v12zM3 15.825V13l7-7 4 4 7-7v2.825l-7 7-4-4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 16v-1.778l1.778-1.778V16zm3.556 0v-5.333l1.777-1.778V16zm3.555 0V8.889l1.778 1.8V16zm3.556 0v-5.311l1.777-1.778V16zm3.555 0V7.111L16 5.333V16zM0 11.4V8.889l6.222-6.222 3.556 3.555L16 0v2.511L9.778 8.733 6.222 5.178z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3 19v2h2v-4zm4-4v6h2v-8zm6 .025L11 13v8h2zm2 0V21h2v-7.975zM19 11v10h2V9z" clipRule="evenodd"/><path fill="#007ADA" d="M3 15.825V13l7-7 4 4 7-7v2.825l-7 7-4-4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 14.222V16h1.778v-3.556zm3.556-3.555V16h1.777V8.889zm5.333.022-1.778-1.8V16H8.89zm1.778 0V16h1.777V8.911zm3.555-3.578V16H16V5.333z" clipRule="evenodd"/><path fill="#007ADA" d="M0 11.4V8.889l6.222-6.222 3.556 3.555L16 0v2.511L9.778 8.733 6.222 5.178z"/></> }
    }
};

export function Monitoring({
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

Monitoring.displayName = "Monitoring";
