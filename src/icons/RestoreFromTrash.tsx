import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 16h2v-4.15l1.6 1.55L16 12l-4-4-4 4 1.4 1.4 1.6-1.55zm-4 5q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 10.667h1.334V7.9l1.066 1.033.934-.933L8 5.333 5.333 8l.934.933L7.333 7.9zM4.667 14q-.55 0-.942-.391t-.392-.942V4h-.666V2.667H6V2h4v.667h3.333V4h-.666v8.667q0 .55-.392.942t-.942.391z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm4-9.15V15q0 .425.288.713T12 16t.713-.288T13 15v-3.15l.9.875q.275.275.688.275t.712-.3q.275-.275.275-.7t-.275-.7l-2.6-2.6q-.3-.3-.7-.3t-.7.3l-2.6 2.6q-.275.275-.287.688t.287.712q.275.275.688.288t.712-.263z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.667 14q-.55 0-.942-.391t-.392-.942V4q-.283 0-.474-.192t-.192-.475.192-.474.474-.192H6q0-.284.192-.475T6.667 2h2.666q.284 0 .476.192t.191.475h2.667q.283 0 .475.192t.191.474-.192.476-.474.191v8.667q0 .55-.392.942t-.942.391zm2.666-6.1V10q0 .283.192.475t.475.192.475-.192.192-.475V7.9l.6.583q.183.184.458.184t.475-.2q.183-.184.183-.467t-.183-.467L8.467 5.8q-.2-.2-.467-.2t-.467.2L5.8 7.533q-.183.184-.191.459t.191.475q.183.183.459.192t.474-.176z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 16h2v-4.15l1.6 1.55L16 12l-4-4-4 4 1.4 1.4 1.6-1.55zm-4 5q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 10.667h1.334V7.9l1.066 1.033.934-.933L8 5.333 5.333 8l.934.933L7.333 7.9zM4.667 14q-.55 0-.942-.391t-.392-.942V4h-.666V2.667H6V2h4v.667h3.333V4h-.666v8.667q0 .55-.392.942t-.942.391z"/></> }
    }
};

export function RestoreFromTrash({
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

RestoreFromTrash.displayName = "RestoreFromTrash";
