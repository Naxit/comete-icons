import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 19.951v-18h10v4h10v14h-3.137v-2H20v-2.134l1.506-1.9a.9.9 0 0 0 .197-.566V12.2a.91.91 0 0 0-.91-.909H20v-3.34h-8v2h2v1.34h-1.703a.91.91 0 0 0-.91.909v1.153a.9.9 0 0 0 .196.563l1.606 2.035H12v2h2.215v2H9v-4H5l.015 4zm16-10v1.34h-2V9.95zm-14 4h2v-2H4zm0-4h2v-2H4zm0-4h2v-2H4zm4 8h2v-2H8zm0-4h2v-2H8zm0-4h2v-2H8z" clipRule="evenodd"/><path fill="currentColor" d="M16.142 19.744a.43.43 0 0 1-.32-.129.44.44 0 0 1-.128-.32v-2.694l-2.598-3.323a.43.43 0 0 1-.05-.471q.117-.247.409-.247h6.27q.291 0 .408.247a.43.43 0 0 1-.05.471l-2.598 3.323v2.694a.44.44 0 0 1-.129.32.43.43 0 0 1-.319.13z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 15.2V.8h8V4h8v11.2h-2.51v-1.6h.91v-1.708l1.205-1.52a.73.73 0 0 0 .157-.452v-.922a.727.727 0 0 0-.727-.727H14.4V5.6H8v1.6h1.6v1.07H8.238a.727.727 0 0 0-.728.727v.923c0 .163.055.322.157.45L8.95 12H8v1.6h1.772v1.6H5.6V12H2.4l.012 3.2zm12.8-8v1.07h-1.6V7.2zM1.6 10.4h1.6V8.8H1.6zm0-3.2h1.6V5.6H1.6zm0-3.2h1.6V2.4H1.6zm3.2 6.4h1.6V8.8H4.8zm0-3.2h1.6V5.6H4.8zm0-3.2h1.6V2.4H4.8z" clipRule="evenodd"/><path fill="currentColor" d="M11.313 15.034a.35.35 0 0 1-.255-.103.35.35 0 0 1-.103-.256V12.52L8.877 9.862a.34.34 0 0 1-.04-.378q.093-.197.327-.197h5.016q.232 0 .327.197a.34.34 0 0 1-.04.378l-2.079 2.658v2.155a.35.35 0 0 1-.103.256.35.35 0 0 1-.255.103z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 19.951v-18h10v4h10v14h-3.137v-2H20v-2.134l1.506-1.9a.9.9 0 0 0 .197-.566V12.2a.91.91 0 0 0-.91-.909H20v-3.34h-8v2h2v1.34h-1.703a.91.91 0 0 0-.91.909v1.153a.9.9 0 0 0 .196.563l1.606 2.035H12v2h2.215v2H9v-4H5l.015 4zm16-10v1.34h-2V9.95zm-14 4h2v-2H4zm0-4h2v-2H4zm0-4h2v-2H4zm4 8h2v-2H8zm0-4h2v-2H8zm0-4h2v-2H8z" clipRule="evenodd"/><path fill="currentColor" d="M16.142 19.744a.43.43 0 0 1-.32-.129.44.44 0 0 1-.128-.32v-2.694l-2.598-3.323a.43.43 0 0 1-.05-.471q.117-.247.409-.247h6.27q.291 0 .408.247a.43.43 0 0 1-.05.471l-2.598 3.323v2.694a.44.44 0 0 1-.129.32.43.43 0 0 1-.319.13z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 15.2V.8h8V4h8v11.2h-2.51v-1.6h.91v-1.708l1.205-1.52a.73.73 0 0 0 .157-.452v-.922a.727.727 0 0 0-.727-.727H14.4V5.6H8v1.6h1.6v1.07H8.238a.727.727 0 0 0-.728.727v.923c0 .163.055.322.157.45L8.95 12H8v1.6h1.772v1.6H5.6V12H2.4l.012 3.2zm12.8-8v1.07h-1.6V7.2zM1.6 10.4h1.6V8.8H1.6zm0-3.2h1.6V5.6H1.6zm0-3.2h1.6V2.4H1.6zm3.2 6.4h1.6V8.8H4.8zm0-3.2h1.6V5.6H4.8zm0-3.2h1.6V2.4H4.8z" clipRule="evenodd"/><path fill="currentColor" d="M11.313 15.034a.35.35 0 0 1-.255-.103.35.35 0 0 1-.103-.256V12.52L8.877 9.862a.34.34 0 0 1-.04-.378q.093-.197.327-.197h5.016q.232 0 .327.197a.34.34 0 0 1-.04.378l-2.079 2.658v2.155a.35.35 0 0 1-.103.256.35.35 0 0 1-.255.103z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 19.951v-18h10v4h10v14h-3.137v-2H20v-2.134l1.506-1.9a.9.9 0 0 0 .197-.566V12.2a.91.91 0 0 0-.91-.909H20v-3.34h-8v2h2v1.34h-1.703a.91.91 0 0 0-.91.909v1.153a.9.9 0 0 0 .196.563l1.606 2.035H12v2h2.215v2H9v-4H5l.015 4zm16-10v1.34h-2V9.95zm-14 4h2v-2H4zm0-4h2v-2H4zm0-4h2v-2H4zm4 8h2v-2H8zm0-4h2v-2H8zm0-4h2v-2H8z" clipRule="evenodd"/><path fill="currentColor" d="M16.142 19.744a.43.43 0 0 1-.32-.129.44.44 0 0 1-.128-.32v-2.694l-2.598-3.323a.43.43 0 0 1-.05-.471q.117-.247.409-.247h6.27q.291 0 .408.247a.43.43 0 0 1-.05.471l-2.598 3.323v2.694a.44.44 0 0 1-.129.32.43.43 0 0 1-.319.13z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 15.2V.8h8V4h8v11.2h-2.51v-1.6h.91v-1.708l1.205-1.52a.73.73 0 0 0 .157-.452v-.922a.727.727 0 0 0-.727-.727H14.4V5.6H8v1.6h1.6v1.07H8.238a.727.727 0 0 0-.728.727v.923c0 .163.055.322.157.45L8.95 12H8v1.6h1.772v1.6H5.6V12H2.4l.012 3.2zm12.8-8v1.07h-1.6V7.2zM1.6 10.4h1.6V8.8H1.6zm0-3.2h1.6V5.6H1.6zm0-3.2h1.6V2.4H1.6zm3.2 6.4h1.6V8.8H4.8zm0-3.2h1.6V5.6H4.8zm0-3.2h1.6V2.4H4.8z" clipRule="evenodd"/><path fill="currentColor" d="M11.313 15.034a.35.35 0 0 1-.255-.103.35.35 0 0 1-.103-.256V12.52L8.877 9.862a.34.34 0 0 1-.04-.378q.093-.197.327-.197h5.016q.232 0 .327.197a.34.34 0 0 1-.04.378l-2.079 2.658v2.155a.35.35 0 0 1-.103.256.35.35 0 0 1-.255.103z"/></> }
    }
};

export function SitesSectorsFilter({
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

SitesSectorsFilter.displayName = "SitesSectorsFilter";
