import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6.545 21.091q-.75 0-1.284-.534a1.75 1.75 0 0 1-.534-1.284v-2.727h1.818v2.727h10.91v-2.727h1.818v2.727q0 .75-.534 1.284a1.75 1.75 0 0 1-1.285.534zm-1.818-10V4.727q0-.75.534-1.284a1.75 1.75 0 0 1 1.284-.534h7.273l5.455 5.455v2.727h-1.819V9.273H12.91V4.727H6.545v6.364zm4.546 3.636V12.91h5.454v1.818zm7.273 0V12.91H22v1.818zM2 14.727V12.91h5.455v1.818z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.636 15.345a1.4 1.4 0 0 1-1.027-.427 1.4 1.4 0 0 1-.427-1.027v-2.182h1.454v2.182h8.728v-2.182h1.454v2.182q0 .6-.427 1.027a1.4 1.4 0 0 1-1.027.427zm-1.454-8v-5.09q0-.6.427-1.028A1.4 1.4 0 0 1 3.636.8h5.819l4.363 4.363v2.182h-1.454V5.891H8.727V2.254h-5.09v5.091zm3.636 2.91V8.8h4.364v1.454zm5.818 0V8.8H16v1.454zM0 10.254V8.8h4.364v1.454z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9.273 14.727V12.91h5.454v1.818zm7.273 0V12.91H22v1.818zM2 14.727V12.91h5.455v1.818z"/><path fill="currentColor" fillRule="evenodd" d="M4.727 11.091V4.727q0-.75.534-1.284a1.75 1.75 0 0 1 1.284-.534h7.273l5.455 5.455v2.727zm8.182-1.818h4.545L12.91 4.727z" clipRule="evenodd"/><path fill="currentColor" d="M6.545 21.091q-.75 0-1.284-.534a1.75 1.75 0 0 1-.534-1.284v-2.727h14.546v2.727q0 .75-.534 1.284a1.75 1.75 0 0 1-1.285.534z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.818 10.254V8.8h4.364v1.454zm5.818 0V8.8H16v1.454zM0 10.254V8.8h4.364v1.454z"/><path fill="currentColor" fillRule="evenodd" d="M2.182 7.345v-5.09q0-.6.427-1.028A1.4 1.4 0 0 1 3.636.8h5.819l4.363 4.363v2.182zm6.545-1.454h3.637L8.727 2.254z" clipRule="evenodd"/><path fill="currentColor" d="M3.636 15.345a1.4 1.4 0 0 1-1.027-.427 1.4 1.4 0 0 1-.427-1.027v-2.182h11.636v2.182q0 .6-.427 1.027a1.4 1.4 0 0 1-1.027.427z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M5.261 20.557a1.75 1.75 0 0 0 1.284.534h10.91q.75 0 1.284-.534a1.75 1.75 0 0 0 .534-1.284v-2.727h-1.819v2.727H6.545v-2.727H4.727v2.727q0 .75.534 1.284m-.534-15.83v6.364h1.818V4.727h6.364v4.546h4.545v1.818h1.819V8.364l-5.455-5.455H6.545q-.75 0-1.284.534a1.75 1.75 0 0 0-.534 1.284" clipRule="evenodd"/><path fill="currentColor" d="M9.273 14.727V12.91h5.454v1.818zm7.273 0V12.91H22v1.818zM2 14.727V12.91h5.455v1.818z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.61 14.918a1.4 1.4 0 0 0 1.026.427h8.728a1.4 1.4 0 0 0 1.027-.427 1.4 1.4 0 0 0 .427-1.027v-2.182h-1.454v2.182H3.636v-2.182H2.182v2.182q0 .6.427 1.027M2.181 2.254v5.091h1.454v-5.09h5.091V5.89h3.637v1.454h1.454V5.163L9.455.8H3.636a1.4 1.4 0 0 0-1.027.427 1.4 1.4 0 0 0-.427 1.027" clipRule="evenodd"/><path fill="currentColor" d="M5.818 10.254V8.8h4.364v1.454zm5.818 0V8.8H16v1.454zM0 10.254V8.8h4.364v1.454z"/></> }
    }
};

export function InsertPageBreak({
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

InsertPageBreak.displayName = "InsertPageBreak";
