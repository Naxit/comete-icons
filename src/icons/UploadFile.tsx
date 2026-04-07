import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 19h2v-4.175l1.6 1.6L16 15l-4-4-4 4 1.425 1.4L11 14.825zm-5 3q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h8l6 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm7-13V4H6v16h12V9z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.25 13.25h1.5v-3.131l1.2 1.2L11 10.25l-3-3-3 3 1.069 1.05 1.181-1.181zM3.5 15.5q-.62 0-1.06-.44A1.45 1.45 0 0 1 2 14V2q0-.62.44-1.06Q2.883.5 3.5.5h6L14 5v9q0 .619-.44 1.06-.442.44-1.06.44zm5.25-9.75V2H3.5v12h9V5.75z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 19h2v-4.175l1.6 1.6L16 15l-4-4-4 4 1.425 1.4L11 14.825zm-5 3q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h8l6 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm7-13V4H6v16h12V9z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.25 13.25h1.5v-3.131l1.2 1.2L11 10.25l-3-3-3 3 1.069 1.05 1.181-1.181zM3.5 15.5q-.62 0-1.06-.44A1.45 1.45 0 0 1 2 14V2q0-.62.44-1.06Q2.883.5 3.5.5h6L14 5v9q0 .619-.44 1.06-.442.44-1.06.44zm5.25-9.75V2H3.5v12h9V5.75z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M5.855 21.413Q6.442 22 7.267 22h12q.824 0 1.413-.587.587-.588.587-1.413V8l-6-6h-8q-.824 0-1.412.588A1.93 1.93 0 0 0 5.267 4v16q0 .825.588 1.413M14.267 4v5h5v11h-12V4z" clipRule="evenodd"/><path fill="#0076D8" d="M12.267 19h2v-4.174l1.6 1.6 1.4-1.425-4-4-4 4 1.425 1.4 1.575-1.575z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.44 15.06q.442.44 1.06.44h9q.619 0 1.06-.44.44-.442.44-1.06V5L9.5.5h-6q-.62 0-1.06.44Q2 1.382 2 2v12q0 .619.44 1.06M8.75 2v3.75h3.75V14h-9V2z" clipRule="evenodd"/><path fill="#0076D8" d="M7.25 13.25h1.5v-3.131l1.2 1.2L11 10.25l-3-3-3 3 1.069 1.05 1.181-1.181z"/></> }
    }
};

export function UploadFile({
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

UploadFile.displayName = "UploadFile";
