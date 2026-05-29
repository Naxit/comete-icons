import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 20V4h10v3.556h10V20zm8-1.778H4v-1.778h6zm0-3.555H4v-1.778h6zm0-3.556H4V9.333h6zm0-3.555H4V5.778h6zm10 10.666h-8V9.333h8z" clipRule="evenodd"/><path fill="currentColor" d="M14 12.889V11.11h4v1.778zm0 3.555v-1.777h4v1.777z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M9.6 8.707V7.226h3.2v1.481z"/><path fill="currentColor" fillRule="evenodd" d="M0 14.633V1.3h8v2.963h8v10.37zm1.6-1.481h4.8V11.67H1.6zm0-2.963h4.8V8.707H1.6zm0-2.963h4.8V5.744H1.6zm0-2.963h4.8V2.781H1.6zM8 13.152h6.4V5.744H8z" clipRule="evenodd"/><path fill="currentColor" d="M9.6 11.67v-1.48h3.2v1.481z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M14 12.889V11.11h4v1.778z"/><path fill="currentColor" fillRule="evenodd" d="M2 20V4h10v3.556h10V20zm2-1.778h6v-1.778H4zm0-3.555h6v-1.778H4zm0-3.556h6V9.333H4zm0-3.555h6V5.778H4zm8 10.666h8V9.333h-8z" clipRule="evenodd"/><path fill="currentColor" d="M14 16.444v-1.777h4v1.777z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M9.6 8.707V7.226h3.2v1.481z"/><path fill="currentColor" fillRule="evenodd" d="M0 14.633V1.3h8v2.963h8v10.37zm1.6-1.481h4.8V11.67H1.6zm0-2.963h4.8V8.707H1.6zm0-2.963h4.8V5.744H1.6zm0-2.963h4.8V2.781H1.6zM8 13.152h6.4V5.744H8z" clipRule="evenodd"/><path fill="currentColor" d="M9.6 11.67v-1.48h3.2v1.481z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M14 12.889V11.11h4v1.778z"/><path fill="currentColor" fillRule="evenodd" d="M2 20V4h10v3.556h10V20zm2-1.778h6v-1.778H4zm0-3.555h6v-1.778H4zm0-3.556h6V9.333H4zm0-3.555h6V5.778H4zm8 10.666h8V9.333h-8z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M14 16.444v-1.777h4v1.777z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="M9.6 8.707V7.226h3.2v1.481z"/><path fill="currentColor" fillRule="evenodd" d="M0 14.633V1.3h8v2.963h8v10.37zm1.6-1.481h4.8V11.67H1.6zm0-2.963h4.8V8.707H1.6zm0-2.963h4.8V5.744H1.6zm0-2.963h4.8V2.781H1.6zM8 13.152h6.4V5.744H8z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M9.6 11.67v-1.48h3.2v1.481z"/></> }
    }
};

export function CorporateFlare({
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

CorporateFlare.displayName = "CorporateFlare";
