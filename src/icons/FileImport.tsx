import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M12.017 20v2h6q.824 0 1.413-.587.587-.588.587-1.413V8l-6-6h-8q-.824 0-1.412.587A1.93 1.93 0 0 0 4.017 4v10h2V4h7v5h5v11z" clipRule="evenodd"/><path fill="currentColor" d="m10.215 16.876-1.33-1.354-2.804 2.804V16.21H4.18v5.37h5.37v-1.9H7.41z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M8.697 13.916v1.547h4.639q.638 0 1.092-.455.454-.453.454-1.092V4.64L10.243 0H4.058q-.637 0-1.092.454a1.5 1.5 0 0 0-.454 1.092v7.732h1.546V1.546H9.47v3.866h3.866v8.504z" clipRule="evenodd"/><path fill="currentColor" d="m6.558 11.901-1.064-1.083L3.25 13.06v-1.69H1.73v4.295h4.295v-1.52h-1.71z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m10.215 16.876-1.33-1.354-2.804 2.804V16.21H4.18v5.37h5.37v-1.9H7.41z"/><path fill="currentColor" d="M4.017 4q0-.824.588-1.412A1.93 1.93 0 0 1 6.017 2h8l6 6v12q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587h-6.144v-7.953H4.017z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m6.558 11.901-1.064-1.083L3.25 13.06v-1.69H1.73v4.295h4.295v-1.52h-1.71z"/><path fill="currentColor" d="M1.6 1.6q0-.66.47-1.13A1.54 1.54 0 0 1 3.2 0h6.4l4.8 4.8v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47H7.884V9.638H1.6z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M12.017 20v2h6q.824 0 1.413-.587.587-.588.587-1.413V8l-6-6h-8q-.824 0-1.412.587A1.93 1.93 0 0 0 4.017 4v10h2V4h7v5h5v11z" clipRule="evenodd"/><path fill="currentColor" d="m10.215 16.876-1.33-1.354-2.804 2.804V16.21H4.18v5.37h5.37v-1.9H7.41z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M8.697 13.916v1.547h4.639q.638 0 1.092-.455.454-.453.454-1.092V4.64L10.243 0H4.058q-.637 0-1.092.454a1.5 1.5 0 0 0-.454 1.092v7.732h1.546V1.546H9.47v3.866h3.866v8.504z" clipRule="evenodd"/><path fill="currentColor" d="m6.558 11.901-1.064-1.083L3.25 13.06v-1.69H1.73v4.295h4.295v-1.52h-1.71z"/></> }
    }
};

export function FileImport({
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

FileImport.displayName = "FileImport";
