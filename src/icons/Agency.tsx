import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M1 21V7h11v4h11v10zm2.2-2h6.6v-2H3.2zm0-4h6.6v-2H3.2zm0-4h6.6V9H3.2zm8.8 8h8.8v-6H12z" clipRule="evenodd"/><path fill="currentColor" d="M14.2 17v-2h4.4v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 14.59V4.002h8v3.317h8v7.273zm1.6-1.454h4.8v-1.454H1.6zm0-2.909h4.8V8.773H1.6zm0-2.909h4.8V5.864H1.6zM8 13.136h6.4V8.773H8z" clipRule="evenodd"/><path fill="currentColor" d="M9.6 11.682v-1.455h3.2v1.455z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M1 21V7h11v4h11v10zm2.2-2h6.6v-2H3.2zm0-4h6.6v-2H3.2zm0-4h6.6V9H3.2zm8.8 8h8.8v-6H12z" clipRule="evenodd"/><path fill="currentColor" d="M14.2 17v-2h4.4v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 14.59V4.02h8v3.298h8v7.273zm1.6-1.454h4.8v-1.454H1.6zm0-2.909h4.8V8.773H1.6zm0-2.909h4.8V5.864H1.6zM8 13.136h6.4V8.773H8z" clipRule="evenodd"/><path fill="currentColor" d="M9.6 11.682v-1.455h3.2v1.455z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M1 21V7.01h11V11h11v10zm2.2-2h6.6v-2H3.2zm0-4h6.6v-2H3.2zm0-4h6.6V9H3.2zm8.8 8h8.8v-6H12z" clipRule="evenodd"/><path fill="#007ADA" d="M14.2 17v-2h4.4v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 14.59V4.038h8v3.281h8v7.273zm1.6-1.454h4.8v-1.454H1.6zm0-2.909h4.8V8.773H1.6zm0-2.909h4.8V5.864H1.6zM8 13.136h6.4V8.773H8z" clipRule="evenodd"/><path fill="#007ADA" d="M9.6 11.682v-1.455h3.2v1.455z"/></> }
    }
};

export function Agency({
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

Agency.displayName = "Agency";
