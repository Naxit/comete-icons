import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3 16.2v2.7h9v-2.7H6.6V6.3h13.5V4.5H6.6q-.743 0-1.271.529A1.73 1.73 0 0 0 4.8 6.3v9.9z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M14.7 18.9a.87.87 0 0 1-.641-.259A.87.87 0 0 1 13.8 18V9a.87.87 0 0 1 .259-.641.87.87 0 0 1 .641-.259h5.4a.87.87 0 0 1 .641.259A.87.87 0 0 1 21 9v9a.87.87 0 0 1-.259.641.87.87 0 0 1-.641.259zm4.5-2.7h-3.6V9.9h3.6z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 12v2.4h8V12H3.2V3.2h12V1.6h-12q-.66 0-1.13.47A1.54 1.54 0 0 0 1.6 3.2V12z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M10.4 14.4a.77.77 0 0 1-.57-.23.77.77 0 0 1-.23-.57v-8q0-.34.23-.57a.77.77 0 0 1 .57-.23h4.8q.34 0 .57.23t.23.57v8a.77.77 0 0 1-.23.57.77.77 0 0 1-.57.23zm4-2.4h-3.2V6.4h3.2z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3 16.2v2.7h9v-2.7H6.6V6.3h13.5V4.5H6.6q-.743 0-1.271.529A1.73 1.73 0 0 0 4.8 6.3v9.9z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M14.7 18.9a.87.87 0 0 1-.641-.259A.87.87 0 0 1 13.8 18V9a.87.87 0 0 1 .259-.641.87.87 0 0 1 .641-.259h5.4a.87.87 0 0 1 .641.259A.87.87 0 0 1 21 9v9a.87.87 0 0 1-.259.641.87.87 0 0 1-.641.259z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 12v2.4h8V12H3.2V3.2h12V1.6h-12q-.66 0-1.13.47A1.54 1.54 0 0 0 1.6 3.2V12z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M10.4 14.4a.77.77 0 0 1-.57-.23.77.77 0 0 1-.23-.57v-8q0-.34.23-.57a.77.77 0 0 1 .57-.23h4.8q.34 0 .57.23t.23.57v8a.77.77 0 0 1-.23.57.77.77 0 0 1-.57.23z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3 16.2v2.7h9v-2.7H6.6V6.3h13.5V4.5H6.6q-.743 0-1.271.529A1.73 1.73 0 0 0 4.8 6.3v9.9z" clipRule="evenodd"/><path fill="#0076D8" fillRule="evenodd" d="M14.7 18.9a.87.87 0 0 1-.641-.259A.87.87 0 0 1 13.8 18V9a.87.87 0 0 1 .259-.641.87.87 0 0 1 .641-.259h5.4a.87.87 0 0 1 .641.259A.87.87 0 0 1 21 9v9a.87.87 0 0 1-.259.641.87.87 0 0 1-.641.259zm4.5-2.7h-3.6V9.9h3.6z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 12v2.4h8V12H3.2V3.2h12V1.6h-12q-.66 0-1.13.47A1.54 1.54 0 0 0 1.6 3.2V12z" clipRule="evenodd"/><path fill="#0076D8" fillRule="evenodd" d="M10.4 14.4a.77.77 0 0 1-.57-.23.77.77 0 0 1-.23-.57v-8q0-.34.23-.57a.77.77 0 0 1 .57-.23h4.8q.34 0 .57.23t.23.57v8a.77.77 0 0 1-.23.57.77.77 0 0 1-.57.23zm4-2.4h-3.2V6.4h3.2z" clipRule="evenodd"/></> }
    }
};

export function Devices({
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

Devices.displayName = "Devices";
