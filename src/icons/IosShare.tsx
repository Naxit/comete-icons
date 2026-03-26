import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.091 20q-.675 0-1.156-.48-.48-.481-.48-1.156v-9q0-.675.48-1.156t1.156-.48h2.455v1.636H7.09v9h9.818v-9h-2.454V7.727h2.454q.675 0 1.156.481.48.48.48 1.156v9q0 .675-.48 1.155T16.909 20zm4.09-5.727V5.13L9.874 6.439 8.727 5.273 12 2l3.273 3.273-1.146 1.166-1.309-1.31v9.144z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.455 16a1.4 1.4 0 0 1-1.028-.427A1.4 1.4 0 0 1 2 14.546v-8q0-.6.427-1.028a1.4 1.4 0 0 1 1.028-.427h2.181v1.454H3.455v8h8.727v-8H10V5.091h2.182q.6 0 1.027.427a1.4 1.4 0 0 1 .427 1.027v8q0 .6-.427 1.028a1.4 1.4 0 0 1-1.027.427zm3.636-5.09V2.781L5.927 3.945 4.91 2.91 7.82 0l2.908 2.91L9.71 3.944 8.545 2.782v8.127z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.091 20q-.675 0-1.156-.48-.48-.481-.48-1.156v-9q0-.675.48-1.156t1.156-.48h2.455v1.636H7.09v9h9.818v-9h-2.454V7.727h2.454q.675 0 1.156.481.48.48.48 1.156v9q0 .675-.48 1.155T16.909 20zm4.09-5.727V5.13L9.874 6.439 8.727 5.273 12 2l3.273 3.273-1.146 1.166-1.309-1.31v9.144z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.455 16a1.4 1.4 0 0 1-1.028-.427A1.4 1.4 0 0 1 2 14.546v-8q0-.6.427-1.028a1.4 1.4 0 0 1 1.028-.427h2.181v1.454H3.455v8h8.727v-8H10V5.091h2.182q.6 0 1.027.427a1.4 1.4 0 0 1 .427 1.027v8q0 .6-.427 1.028a1.4 1.4 0 0 1-1.027.427zm3.636-5.09V2.781L5.927 3.945 4.91 2.91 7.82 0l2.908 2.91L9.71 3.944 8.545 2.782v8.127z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M5.935 19.52q.48.48 1.156.48h9.818q.675 0 1.156-.48.48-.481.48-1.156v-9q0-.675-.48-1.156t-1.156-.48h-2.454v1.636h2.454v9H7.091v-9h2.455V7.727H7.09q-.675 0-1.156.481-.48.48-.48 1.156v9q0 .675.48 1.155" clipRule="evenodd"/><path fill="#007ADA" d="M11.182 14.273V5.13l-1.31 1.309-1.145-1.166L12 2l3.273 3.273-1.146 1.166-1.309-1.31v9.144z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.427 15.573A1.4 1.4 0 0 0 3.455 16h8.727a1.4 1.4 0 0 0 1.027-.427 1.4 1.4 0 0 0 .427-1.027v-8a1.4 1.4 0 0 0-.427-1.028 1.4 1.4 0 0 0-1.027-.427H10v1.454h2.182v8H3.455v-8h2.181V5.091H3.455a1.4 1.4 0 0 0-1.028.427A1.4 1.4 0 0 0 2 6.545v8q0 .6.427 1.028" clipRule="evenodd"/><path fill="#007ADA" d="M7.09 10.91V2.781L5.928 3.945 4.91 2.91 7.82 0l2.908 2.91L9.71 3.944 8.545 2.782v8.127z"/></> }
    }
};

export function IosShare({
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

IosShare.displayName = "IosShare";
