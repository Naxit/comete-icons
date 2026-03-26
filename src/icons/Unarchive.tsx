import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 8v11h14V8zm0 13q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V6.525q0-.35.112-.675.113-.325.338-.6L4.7 3.725q.274-.35.688-.538Q5.8 3 6.25 3h11.5q.45 0 .863.188.412.187.687.537l1.25 1.525q.225.274.337.6t.113.675V19q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm.4-15h13.2l-.85-1H6.25z"/><path fill="currentColor" d="m8 14 4-4 4 4-1.4 1.4-1.6-1.6V18h-2v-4.2l-1.6 1.6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.778 4.444v9.778h12.444V4.444zm0 11.556q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V3.133q0-.31.1-.6Q.2 2.245.4 2L1.511.644q.245-.31.611-.477Q2.49 0 2.89 0h10.22q.4 0 .767.167.367.166.61.477L15.6 2q.2.244.3.533t.1.6v11.09q0 .733-.522 1.255a1.7 1.7 0 0 1-1.256.522zm.355-13.333h11.734l-.756-.89H2.89z"/><path fill="currentColor" d="m4.445 9.778 3.556-3.555 3.555 3.555-1.244 1.245L8.889 9.6v3.733H7.112V9.601l-1.423 1.422z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V6.525q0-.35.112-.675.113-.325.338-.6L4.7 3.725q.274-.35.688-.538Q5.8 3 6.25 3h11.5q.45 0 .863.188.412.187.687.537l1.25 1.525q.225.274.337.6t.113.675V19q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm.4-15h13.2l-.85-1H6.25zM8 14l4-4 4 4-1.4 1.4-1.6-1.6V18h-2v-4.2l-1.6 1.6z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.778 16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V3.133q0-.31.1-.6Q.2 2.245.4 2L1.511.644q.245-.31.611-.477Q2.49 0 2.89 0h10.22q.4 0 .767.167.367.166.61.477L15.6 2q.2.244.3.533t.1.6v11.09q0 .733-.522 1.255a1.7 1.7 0 0 1-1.256.522zm.355-13.333h11.734l-.756-.89H2.89zm2.312 7.111 3.556-3.555 3.555 3.555-1.244 1.245L8.889 9.6v3.733H7.112V9.601l-1.423 1.422z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 8v11h14V8zm0 13q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V6.525q0-.35.112-.675.113-.325.338-.6L4.7 3.725q.274-.35.688-.538Q5.8 3 6.25 3h11.5q.45 0 .863.188.412.187.687.537l1.25 1.525q.225.274.337.6t.113.675V19q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm.4-15h13.2l-.85-1H6.25z"/><path fill="#007ADA" d="m8 14 4-4 4 4-1.4 1.4-1.6-1.6V18h-2v-4.2l-1.6 1.6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.778 4.444v9.778h12.444V4.444zm0 11.556q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V3.133q0-.31.1-.6Q.2 2.245.4 2L1.511.644q.245-.31.611-.477Q2.49 0 2.89 0h10.22q.4 0 .767.167.367.166.61.477L15.6 2q.2.244.3.533t.1.6v11.09q0 .733-.522 1.255a1.7 1.7 0 0 1-1.256.522zm.355-13.333h11.734l-.756-.89H2.89z"/><path fill="#007ADA" d="m4.445 9.778 3.556-3.555 3.555 3.555-1.244 1.245L8.889 9.6v3.733H7.112V9.601l-1.423 1.422z"/></> }
    }
};

export function Unarchive({
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

Unarchive.displayName = "Unarchive";
