import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V6.525q0-.35.112-.675.113-.325.338-.6L4.7 3.725q.274-.35.688-.538Q5.8 3 6.25 3h11.5q.45 0 .863.188.412.187.687.537l1.25 1.525q.225.274.337.6t.113.675V19q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm0-2V8h14v11zM18.6 6H5.4l.85-1h11.5z" clipRule="evenodd"/><path fill="currentColor" d="m12 18 4-4-1.4-1.4-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.778 4.444v9.778h12.444V4.444zm0 11.556q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V3.133q0-.31.1-.6Q.2 2.245.4 2L1.511.644q.245-.31.611-.477Q2.49 0 2.89 0h10.22q.4 0 .767.167.367.166.61.477L15.6 2q.2.244.3.533t.1.6v11.09q0 .733-.522 1.255a1.7 1.7 0 0 1-1.256.522zm.355-13.333h11.734l-.756-.89H2.89z"/><path fill="currentColor" d="M11.556 9.778 8 13.334 4.445 9.778l1.244-1.244 1.422 1.422V6.223H8.89v3.733l1.422-1.422z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.588 20.413Q4.175 21 5 21h14q.824 0 1.413-.587Q21 19.825 21 19V6.525q0-.35-.113-.675a2 2 0 0 0-.337-.6L19.3 3.725a1.8 1.8 0 0 0-.687-.538A2.1 2.1 0 0 0 17.75 3H6.25q-.45 0-.862.188a1.8 1.8 0 0 0-.688.537L3.45 5.25q-.225.274-.338.6A2 2 0 0 0 3 6.525V19q0 .824.587 1.413M18.6 6H5.4l.85-1h11.5zM16 14l-4 4-4-4 1.4-1.4 1.6 1.6V10h2v4.2l1.6-1.6z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.522 15.478Q1.044 16 1.778 16h12.444q.734 0 1.256-.522T16 14.222V3.133a1.8 1.8 0 0 0-.1-.6A1.7 1.7 0 0 0 15.6 2L14.489.644a1.6 1.6 0 0 0-.611-.477A1.8 1.8 0 0 0 13.11 0H2.89q-.4 0-.767.167-.366.166-.61.477L.4 2q-.2.244-.3.533t-.1.6v11.09q0 .733.522 1.255M13.867 2.667H2.133l.756-.89H13.11zm-2.311 7.111L8 13.334 4.445 9.778l1.244-1.244 1.422 1.422V6.223H8.89v3.733l1.422-1.422z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 8v11h14V8zm0 13q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V6.525q0-.35.112-.675.113-.325.338-.6L4.7 3.725q.274-.35.688-.538Q5.8 3 6.25 3h11.5q.45 0 .863.188.412.187.687.537l1.25 1.525q.225.274.337.6t.113.675V19q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm.4-15h13.2l-.85-1H6.25z"/><path fill="var(--icon-information)" d="m16 14-4 4-4-4 1.4-1.4 1.6 1.6V10h2v4.2l1.6-1.6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.778 4.444v9.778h12.444V4.444zm0 11.556q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V3.133q0-.31.1-.6Q.2 2.245.4 2L1.511.644q.245-.31.611-.477Q2.49 0 2.89 0h10.22q.4 0 .767.167.367.166.61.477L15.6 2q.2.244.3.533t.1.6v11.09q0 .733-.522 1.255a1.7 1.7 0 0 1-1.256.522zm.355-13.333h11.734l-.756-.89H2.89z"/><path fill="var(--icon-information)" d="M11.556 9.778 8 13.334 4.445 9.778l1.244-1.244 1.422 1.422V6.223H8.89v3.733l1.422-1.422z"/></> }
    }
};

export function Archive({
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

Archive.displayName = "Archive";
