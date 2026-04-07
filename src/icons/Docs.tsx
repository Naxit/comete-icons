import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8.5 12.9h7v-1.8h-7zm0 2.7h7v-1.8h-7zm0 2.7h4.375v-1.8H8.5zM6.75 21q-.721 0-1.236-.529A1.76 1.76 0 0 1 5 19.2V4.8q0-.743.514-1.271A1.66 1.66 0 0 1 6.75 3h7L19 8.4v10.8q0 .743-.514 1.271A1.66 1.66 0 0 1 17.25 21zm6.125-11.7V4.8H6.75v14.4h10.5V9.3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.8 8.8h6.4V7.2H4.8zm0 2.4h6.4V9.6H4.8zm0 2.4h4V12h-4zM3.2 16a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13V1.6q0-.66.47-1.13A1.54 1.54 0 0 1 3.2 0h6.4l4.8 4.8v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zM8.8 5.6v-4H3.2v12.8h9.6V5.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M15.5 12.9h-7v-1.8h7zm0 2.7h-7v-1.8h7zm-2.625 2.7H8.5v-1.8h4.375zm-7.36 2.171q.513.53 1.235.529h10.5q.721 0 1.236-.529Q19 19.943 19 19.2V8.4L13.75 3h-7q-.721 0-1.236.529A1.76 1.76 0 0 0 5 4.8v14.4q0 .743.514 1.271M12.874 4.8v4.5h4.375z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M11.2 8.8H4.8V7.2h6.4zm0 2.4H4.8V9.6h6.4zm-2.4 2.4h-4V12h4zm-6.73 1.93q.47.47 1.13.47h9.6q.66 0 1.13-.47t.47-1.13V4.8L9.6 0H3.2q-.66 0-1.13.47A1.54 1.54 0 0 0 1.6 1.6v12.8q0 .66.47 1.13M8.8 1.6v4h4z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M5.514 20.471q.514.53 1.236.529h10.5q.721 0 1.236-.529Q19 19.943 19 19.2V8.4L13.75 3h-7q-.721 0-1.236.529A1.76 1.76 0 0 0 5 4.8v14.4q0 .743.514 1.271M12.875 4.8v4.5h4.375v9.9H6.75V4.8z" clipRule="evenodd"/><path fill="#0076D8" d="M8.5 15.6h7v-1.8h-7zm0 2.7h4.375v-1.8H8.5zm0-5.4h7v-1.8h-7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.07 15.53q.47.47 1.13.47h9.6q.66 0 1.13-.47t.47-1.13V4.8L9.6 0H3.2q-.66 0-1.13.47A1.54 1.54 0 0 0 1.6 1.6v12.8q0 .66.47 1.13M8.8 1.6v4h4v8.8H3.2V1.6z" clipRule="evenodd"/><path fill="#0076D8" d="M4.8 11.2h6.4V9.6H4.8zm0 2.4h4V12h-4zm0-4.8h6.4V7.2H4.8z"/></> }
    }
};

export function Docs({
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

Docs.displayName = "Docs";
