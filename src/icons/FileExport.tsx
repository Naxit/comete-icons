import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.603 2.586q-.586.586-.586 1.41v15.96q0 .825.586 1.41.587.587 1.41.587l5.242.002v-1.996l-5.242-.002V3.996h6.985v4.99h4.99v3.834h1.995V7.987L13.996 2H6.013q-.824 0-1.41.586" clipRule="evenodd"/><path fill="currentColor" d="m14.338 22-1.397-1.422 2.944-2.944H13.64V15.64h5.637v5.637h-1.995v-2.22z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.059.459A1.5 1.5 0 0 0 1.6 1.56v12.49q0 .644.459 1.103.458.458 1.103.458l4.1.002v-1.561l-4.1-.002V1.561h5.464v3.904h3.904v3h1.562v-3.78L9.407 0H3.162q-.645 0-1.103.459" clipRule="evenodd"/><path fill="currentColor" d="m9.675 15.648-1.093-1.113 2.303-2.303H9.128v-1.561h4.411v4.41h-1.561v-1.736z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.017 3.996q0-.824.586-1.41Q5.19 2 6.013 2h7.983l5.987 5.987v5.434h-8.728v8.534l-5.242-.002a1.92 1.92 0 0 1-1.41-.587q-.586-.585-.586-1.41zm8.98 4.99h4.99l-4.99-4.99z" clipRule="evenodd"/><path fill="currentColor" d="m14.338 22-1.397-1.422 2.944-2.944H13.64V15.64h5.637v5.637h-1.995v-2.22z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.6 1.561q0-.644.46-1.101A1.5 1.5 0 0 1 3.162 0h6.245l4.685 4.684V9H7.5v6.612l-4.338-.002q-.645 0-1.103-.458a1.5 1.5 0 0 1-.459-1.103zm7.026 3.904h3.904L8.626 1.561z" clipRule="evenodd"/><path fill="currentColor" d="m9.675 15.648-1.093-1.113 2.303-2.303H9.128v-1.561h4.411v4.41h-1.561v-1.736z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.603 2.586q-.586.586-.586 1.41v15.96q0 .825.586 1.41.587.587 1.41.587l5.242.002v-1.996l-5.242-.002V3.996h6.985v4.99h4.99v3.834h1.995V7.987L13.996 2H6.013q-.824 0-1.41.586" clipRule="evenodd"/><path fill="var(--icon-information)" d="m14.338 22-1.397-1.422 2.944-2.944H13.64V15.64h5.637v5.637h-1.995v-2.22z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.059.459A1.5 1.5 0 0 0 1.6 1.56v12.49q0 .644.459 1.103.458.458 1.103.458l4.1.002v-1.561l-4.1-.002V1.561h5.464v3.904h3.904v3h1.562v-3.78L9.407 0H3.162q-.645 0-1.103.459" clipRule="evenodd"/><path fill="var(--icon-information)" d="m9.675 15.648-1.093-1.113 2.303-2.303H9.128v-1.561h4.411v4.41h-1.561v-1.736z"/></> }
    }
};

export function FileExport({
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

FileExport.displayName = "FileExport";
