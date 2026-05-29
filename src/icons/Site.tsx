import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 21V3h10v4h10v14H9v-4H5l.015 4zm18-2h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-4-6v-2h2v2zm0 4v-2h2v2zm-8-6h2V9H8zm2-4H8V5h2zM4 7h2V5H4zm2 4H4V9h2zm-2 4h2v-2H4zm6 0H8v-2h2z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M11.2 8.8V7.2h1.6v1.6z"/><path fill="currentColor" fillRule="evenodd" d="M0 15.2V.8h8V4h8v11.2H5.6V12H2.4l.012 3.2zm1.6-4.8h1.6V8.8H1.6zm0-3.2h1.6V5.6H1.6zm0-3.2h1.6V2.4H1.6zm3.2 6.4h1.6V8.8H4.8zm0-3.2h1.6V5.6H4.8zm0-3.2h1.6V2.4H4.8zM8 13.6h6.4v-8H8v1.6h1.6v1.6H8v1.6h1.6V12H8z" clipRule="evenodd"/><path fill="currentColor" d="M11.2 12v-1.6h1.6V12z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 21V3h10v4h10v14H9v-4H5l.015 4zm18-2h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-4-6v-2h2v2zm0 4v-2h2v2zm-8-6h2V9H8zm2-4H8V5h2zM4 7h2V5H4zm2 4H4V9h2zm-2 4h2v-2H4zm6 0H8v-2h2z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M11.2 8.8V7.2h1.6v1.6z"/><path fill="currentColor" fillRule="evenodd" d="M0 15.2V.8h8V4h8v11.2H5.6V12H2.4l.012 3.2zm1.6-4.8h1.6V8.8H1.6zm0-3.2h1.6V5.6H1.6zm0-3.2h1.6V2.4H1.6zm3.2 6.4h1.6V8.8H4.8zm0-3.2h1.6V5.6H4.8zm0-3.2h1.6V2.4H4.8zM8 13.6h6.4v-8H8v1.6h1.6v1.6H8v1.6h1.6V12H8z" clipRule="evenodd"/><path fill="currentColor" d="M11.2 12v-1.6h1.6V12z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M16 13v-2h2v2z"/><path fill="currentColor" fillRule="evenodd" d="M2 21V3h10v4h10v14H9v-4H5l.015 4zm2-6h2v-2H4zm0-4h2V9H4zm0-4h2V5H4zm4 8h2v-2H8zm0-4h2V9H8zm0-4h2V5H8zm4 12h8V9h-8v2h2v2h-2v2h2v2h-2z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M16 17v-2h2v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="M11.2 8.8V7.2h1.6v1.6z"/><path fill="currentColor" fillRule="evenodd" d="M0 15.2V.8h8V4h8v11.2H5.6V12H2.4l.012 3.2zm1.6-4.8h1.6V8.8H1.6zm0-3.2h1.6V5.6H1.6zm0-3.2h1.6V2.4H1.6zm3.2 6.4h1.6V8.8H4.8zm0-3.2h1.6V5.6H4.8zm0-3.2h1.6V2.4H4.8zM8 13.6h6.4v-8H8v1.6h1.6v1.6H8v1.6h1.6V12H8z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M11.2 12v-1.6h1.6V12z"/></> }
    }
};

export function Site({
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

Site.displayName = "Site";
