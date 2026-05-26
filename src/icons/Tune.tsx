import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 21v-6h2v2h8v2h-8v2zm-8-2v-2h6v2zm4-4v-2H3v-2h4V9h2v6zm4-2v-2h10v2zm4-4V3h2v2h4v2h-4v2zM3 7V5h10v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 14v-4h1.334v1.333H14v1.334H8.667V14zM2 12.667v-1.334h4v1.334zM4.667 10V8.667H2V7.333h2.667V6H6v4zm2.666-1.333V7.333H14v1.334zM10 6V2h1.333v1.333H14v1.334h-2.667V6zM2 4.667V3.333h6.667v1.334z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11.288 20.713Q11 20.425 11 20v-4q0-.425.288-.712T12 15t.713.288T13 16v1h7q.425 0 .713.288T21 18t-.288.713T20 19h-7v1q0 .425-.288.713T12 21t-.712-.288M4 19q-.425 0-.712-.288T3 18t.288-.712T4 17h4q.425 0 .713.288T9 18t-.288.713T8 19zm3.288-4.288Q7 14.425 7 14v-1H4q-.425 0-.712-.288T3 12t.288-.712T4 11h3v-1q0-.425.288-.712T8 9t.713.288T9 10v4q0 .425-.288.713T8 15t-.712-.288M12 13q-.425 0-.712-.288T11 12t.288-.712T12 11h8q.425 0 .713.288T21 12t-.288.713T20 13zm3.288-4.288Q15 8.425 15 8V4q0-.425.288-.712T16 3t.713.288T17 4v1h3q.425 0 .713.288T21 6t-.288.713T20 7h-3v1q0 .425-.288.713T16 9t-.712-.288M4 7q-.425 0-.712-.288T3 6t.288-.712T4 5h8q.425 0 .713.288T13 6t-.288.713T12 7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.525 13.809q-.192-.192-.192-.476v-2.666q0-.284.192-.475T8 10t.475.192.192.475v.666h4.666q.284 0 .476.192T14 12t-.192.475-.475.192H8.667v.666q0 .284-.192.476T8 14t-.475-.192m-4.858-1.141q-.284 0-.475-.192T2 12t.192-.475.475-.192h2.666q.284 0 .476.192T6 12t-.192.475-.475.192zm2.192-2.859q-.192-.191-.192-.475v-.666h-2q-.284 0-.475-.192T2 8t.192-.475.475-.192h2v-.666q0-.284.192-.475T5.333 6t.476.192.191.475v2.666q0 .284-.192.476T5.333 10t-.474-.192M8 8.667q-.283 0-.475-.192T7.333 8t.192-.475T8 7.333h5.333q.284 0 .476.192T14 8t-.192.475-.475.192zm2.192-2.859Q10 5.617 10 5.333V2.667q0-.284.192-.475T10.667 2t.475.192.191.475v.666h2q.284 0 .476.192T14 4t-.192.475-.475.192h-2v.666q0 .284-.192.476T10.667 6t-.475-.192M2.667 4.667q-.284 0-.475-.192T2 4t.192-.475.475-.192H8q.283 0 .475.192T8.667 4t-.192.475T8 4.667z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 21v-6h2v2h8v2h-8v2zm-8-2v-2h6v2zm4-4v-2H3v-2h4V9h2v6zm4-2v-2h10v2zm4-4V3h2v2h4v2h-4v2zM3 7V5h10v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 14v-4h1.334v1.333H14v1.334H8.667V14zM2 12.667v-1.334h4v1.334zM4.667 10V8.667H2V7.333h2.667V6H6v4zm2.666-1.333V7.333H14v1.334zM10 6V2h1.333v1.333H14v1.334h-2.667V6zM2 4.667V3.333h6.667v1.334z"/></> }
    }
};

export function Tune({
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

Tune.displayName = "Tune";
