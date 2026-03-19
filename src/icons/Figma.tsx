import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M8.667 2.85a2.483 2.483 0 0 0 0 4.967h2.483V2.85zM12 1.15h3.333a4.183 4.183 0 0 1 2.528 7.517 4.183 4.183 0 0 1-5.011 6.7v3.3a4.183 4.183 0 1 1-6.711-3.334A4.18 4.18 0 0 1 4.483 12c0-1.36.65-2.57 1.656-3.333A4.183 4.183 0 0 1 8.667 1.15zM8.667 9.517a2.483 2.483 0 0 0 0 4.966h2.483V9.517zm4.183-1.7h2.483a2.483 2.483 0 1 0 0-4.967H12.85zm2.483 1.7a2.483 2.483 0 1 0 0 4.966 2.483 2.483 0 0 0 0-4.966m-4.183 6.666H8.667a2.483 2.483 0 1 0 2.483 2.484z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 18", paths: <><path fill="currentColor" fillRule="evenodd" d="M5.34 1.357a1.982 1.982 0 1 0 0 3.965h1.982V1.357zM8 0h2.66a3.34 3.34 0 0 1 2.019 6 3.34 3.34 0 0 1-4 5.348v2.634a3.34 3.34 0 1 1-5.358-2.66A3.33 3.33 0 0 1 2 8.66C2 7.575 2.518 6.61 3.321 6A3.34 3.34 0 0 1 5.34 0zM5.34 6.679a1.982 1.982 0 1 0 0 3.964h1.982V6.68zm3.338-1.357h1.983a1.982 1.982 0 0 0 0-3.965H8.678zm1.983 1.356a1.982 1.982 0 1 0 0 3.965 1.982 1.982 0 0 0 0-3.965M7.32 12H5.34a1.982 1.982 0 1 0 1.983 1.982z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M8.667 2.85a2.483 2.483 0 0 0 0 4.967h2.483V2.85zM12 1.15h3.333a4.183 4.183 0 0 1 2.528 7.517 4.183 4.183 0 0 1-5.011 6.7v3.3a4.183 4.183 0 1 1-6.711-3.334A4.18 4.18 0 0 1 4.483 12c0-1.36.65-2.57 1.656-3.333A4.183 4.183 0 0 1 8.667 1.15zM8.667 9.517a2.483 2.483 0 0 0 0 4.966h2.483V9.517zm4.183-1.7h2.483a2.483 2.483 0 1 0 0-4.967H12.85zm2.483 1.7a2.483 2.483 0 1 0 0 4.966 2.483 2.483 0 0 0 0-4.966m-4.183 6.666H8.667a2.483 2.483 0 1 0 2.483 2.484z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 18", paths: <><path fill="currentColor" fillRule="evenodd" d="M5.34 1.357a1.982 1.982 0 1 0 0 3.965h1.982V1.357zM8 0h2.66a3.34 3.34 0 0 1 2.019 6 3.34 3.34 0 0 1-4 5.348v2.634a3.34 3.34 0 1 1-5.358-2.66A3.33 3.33 0 0 1 2 8.66C2 7.575 2.518 6.61 3.321 6A3.34 3.34 0 0 1 5.34 0zM5.34 6.679a1.982 1.982 0 1 0 0 3.964h1.982V6.68zm3.338-1.357h1.983a1.982 1.982 0 0 0 0-3.965H8.678zm1.983 1.356a1.982 1.982 0 1 0 0 3.965 1.982 1.982 0 0 0 0-3.965M7.32 12H5.34a1.982 1.982 0 1 0 1.983 1.982z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M8.667 2.85a2.483 2.483 0 0 0 0 4.967h2.483V2.85zM12 1.15h3.333a4.183 4.183 0 0 1 2.528 7.517 4.183 4.183 0 0 1-5.011 6.7v3.3a4.183 4.183 0 1 1-6.711-3.334A4.18 4.18 0 0 1 4.483 12c0-1.36.65-2.57 1.656-3.333A4.183 4.183 0 0 1 8.667 1.15zM8.667 9.517a2.483 2.483 0 0 0 0 4.966h2.483V9.517zm4.183-1.7h2.483a2.483 2.483 0 1 0 0-4.967H12.85zm2.483 1.7a2.483 2.483 0 1 0 0 4.966 2.483 2.483 0 0 0 0-4.966m-4.183 6.666H8.667a2.483 2.483 0 1 0 2.483 2.484z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 18", paths: <><path fill="currentColor" fillRule="evenodd" d="M5.34 1.357a1.982 1.982 0 1 0 0 3.965h1.982V1.357zM8 0h2.66a3.34 3.34 0 0 1 2.019 6 3.34 3.34 0 0 1-4 5.348v2.634a3.34 3.34 0 1 1-5.358-2.66A3.33 3.33 0 0 1 2 8.66C2 7.575 2.518 6.61 3.321 6A3.34 3.34 0 0 1 5.34 0zM5.34 6.679a1.982 1.982 0 1 0 0 3.964h1.982V6.68zm3.338-1.357h1.983a1.982 1.982 0 0 0 0-3.965H8.678zm1.983 1.356a1.982 1.982 0 1 0 0 3.965 1.982 1.982 0 0 0 0-3.965M7.32 12H5.34a1.982 1.982 0 1 0 1.983 1.982z" clipRule="evenodd"/></> }
    }
};

export function Figma({
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

Figma.displayName = "Figma";
