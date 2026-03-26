import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 13h8v-2H8zm0 3h8v-2H8zm0 3h5v-2H8zm-2 3q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h8l6 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm7-13V4H6v16h12V9z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.8 8.8h6.4V7.2H4.8zm0 2.4h6.4V9.6H4.8zm0 2.4h4V12h-4zM3.2 16a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13V1.6q0-.66.47-1.13A1.54 1.54 0 0 1 3.2 0h6.4l4.8 4.8v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zM8.8 5.6v-4H3.2v12.8h9.6V5.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M16 13H8v-2h8zm0 3H8v-2h8zm-3 3H8v-2h5zm-8.412 2.413Q5.175 22 6 22h12q.824 0 1.413-.587Q20 20.825 20 20V8l-6-6H6q-.824 0-1.412.587A1.93 1.93 0 0 0 4 4v16q0 .824.588 1.413M13 4v5h5z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M11.2 8.8H4.8V7.2h6.4zm0 2.4H4.8V9.6h6.4zm-2.4 2.4h-4V12h4zm-6.73 1.93q.47.47 1.13.47h9.6q.66 0 1.13-.47t.47-1.13V4.8L9.6 0H3.2q-.66 0-1.13.47A1.54 1.54 0 0 0 1.6 1.6v12.8q0 .66.47 1.13M8.8 1.6v4h4z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.588 21.413Q5.175 22 6 22h12q.824 0 1.413-.587Q20 20.825 20 20V8l-6-6H6q-.824 0-1.412.587A1.93 1.93 0 0 0 4 4v16q0 .824.588 1.413M13 4v5h5v11H6V4z" clipRule="evenodd"/><path fill="#007ADA" d="M8 16h8v-2H8zm0 3h5v-2H8zm0-6h8v-2H8z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.07 15.53q.47.47 1.13.47h9.6q.66 0 1.13-.47t.47-1.13V4.8L9.6 0H3.2q-.66 0-1.13.47A1.54 1.54 0 0 0 1.6 1.6v12.8q0 .66.47 1.13M8.8 1.6v4h4v8.8H3.2V1.6z" clipRule="evenodd"/><path fill="#007ADA" d="M4.8 11.2h6.4V9.6H4.8zm0 2.4h4V12h-4zm0-4.8h6.4V7.2H4.8z"/></> }
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
