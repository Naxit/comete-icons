import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.545 22q-.75 0-1.284-.534a1.75 1.75 0 0 1-.534-1.284V3.818q0-.75.534-1.284A1.75 1.75 0 0 1 7.545 2h9.091q.75 0 1.285.534.533.534.534 1.284v16.364q0 .75-.534 1.284a1.75 1.75 0 0 1-1.285.534zm0-2.727v.909h9.091v-.91zm0-1.819h9.091V6.545h-9.09zm0-12.727h9.091v-.909h-9.09z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.455 16a1.4 1.4 0 0 1-1.028-.427A1.4 1.4 0 0 1 3 14.546V1.455q0-.6.427-1.028A1.4 1.4 0 0 1 4.455 0h7.272q.6 0 1.027.427a1.4 1.4 0 0 1 .428 1.028v13.09q0 .6-.428 1.028a1.4 1.4 0 0 1-1.027.427zm0-2.182v.728h7.272v-.728zm0-1.454h7.272V3.636H4.455zm0-10.182h7.272v-.727H4.455z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.545 22q-.75 0-1.284-.534a1.75 1.75 0 0 1-.534-1.284V3.818q0-.75.534-1.284A1.75 1.75 0 0 1 7.545 2h9.091q.75 0 1.285.534.533.534.534 1.284v16.364q0 .75-.534 1.284a1.75 1.75 0 0 1-1.285.534zm0-4.546h9.091V6.545h-9.09z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.455 16a1.4 1.4 0 0 1-1.028-.427A1.4 1.4 0 0 1 3 14.546V1.455q0-.6.427-1.028A1.4 1.4 0 0 1 4.455 0h7.272q.6 0 1.027.427a1.4 1.4 0 0 1 .428 1.028v13.09q0 .6-.428 1.028a1.4 1.4 0 0 1-1.027.427zm0-3.636h7.272V3.636H4.455z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.545 22q-.75 0-1.284-.534a1.75 1.75 0 0 1-.534-1.284V3.818q0-.75.534-1.284A1.75 1.75 0 0 1 7.545 2h9.091q.75 0 1.285.534.533.534.534 1.284v16.364q0 .75-.534 1.284a1.75 1.75 0 0 1-1.285.534zm0-2.727v.909h9.091v-.91zm0-1.819h9.091V6.545h-9.09zm0-12.727h9.091v-.909h-9.09z"/><path fill="currentColor" d="M7.545 4.727h9.091v-.909h-9.09zm0 14.546v.909h9.091v-.91z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.455 16a1.4 1.4 0 0 1-1.028-.427A1.4 1.4 0 0 1 3 14.546V1.455q0-.6.427-1.028A1.4 1.4 0 0 1 4.455 0h7.272q.6 0 1.027.427a1.4 1.4 0 0 1 .428 1.028v13.09q0 .6-.428 1.028a1.4 1.4 0 0 1-1.027.427zm0-2.182v.728h7.272v-.728zm0-1.454h7.272V3.636H4.455zm0-10.182h7.272v-.727H4.455z"/><path fill="currentColor" d="M4.455 2.182h7.272v-.727H4.455zm0 11.636v.728h7.272v-.728z"/></> }
    }
};

export function Smartphone({
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

Smartphone.displayName = "Smartphone";
