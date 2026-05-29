import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 22V2h1.889v1.818H19.11V2H21v20h-1.889v-1.818H5.89V22zm1.889-10.91h1.889V7.456h5.666v3.636h5.667V5.636H5.89zm5.667 7.274H5.889v-5.455H19.11v5.455h-1.889v-3.637h-5.666z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6.926 10.182v2.909h4.444v-2.91z"/><path fill="currentColor" fillRule="evenodd" d="M1 16V0h1.481v1.455h10.37V0h1.482v16h-1.481v-1.454H2.482V16zm1.481-8.727h10.371V2.909H2.482zm0 5.818h10.371V8.727H2.482z" clipRule="evenodd"/><path fill="currentColor" d="M3.963 4.364v2.909h4.444v-2.91z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 22V2h1.889v1.818H19.11V2H21v20h-1.889v-1.818H5.89V22zm1.889-10.91h1.889V7.456h5.666v3.636h5.667V5.636H5.89zm5.667 7.274H5.889v-5.455H19.11v5.455h-1.889v-3.637h-5.666z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6.926 10.182v2.909h4.444v-2.91z"/><path fill="currentColor" fillRule="evenodd" d="M1 16V0h1.481v1.455h10.37V0h1.482v16h-1.481v-1.454H2.482V16zm1.481-8.727h10.371V2.909H2.482zm0 5.818h10.371V8.727H2.482z" clipRule="evenodd"/><path fill="currentColor" d="M3.963 4.364v2.909h4.444v-2.91z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M11.556 14.727v3.637h5.666v-3.637z"/><path fill="currentColor" fillRule="evenodd" d="M4 22V2h1.889v1.818H19.11V2H21v20h-1.889v-1.818H5.89V22zm1.889-10.91H19.11V5.637H5.89zm0 7.274h13.223v-5.455H5.888z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M7.778 7.455v3.636h5.666V7.455z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="M6.926 10.182v2.909h4.444v-2.91z"/><path fill="currentColor" fillRule="evenodd" d="M1 16V0h1.481v1.455h10.37V0h1.482v16h-1.481v-1.454H2.482V16zm1.481-8.727h10.371V2.909H2.482zm0 5.818h10.371V8.727H2.482z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M3.963 4.364v2.909h4.444v-2.91z"/></> }
    }
};

export function Shelves({
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

Shelves.displayName = "Shelves";
