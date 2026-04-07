import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M8 17.556V16H6.5l2.167-2.889 2.5 3.333L14.5 12l4.167 5.556z" clipRule="evenodd"/><path fill="currentColor" d="M2.653 2.653A2.14 2.14 0 0 0 2 4.223V16h2.222V4.222h15.556v15.556H8V22h11.778a2.14 2.14 0 0 0 1.57-.653 2.14 2.14 0 0 0 .652-1.57V4.223a2.14 2.14 0 0 0-.653-1.57A2.14 2.14 0 0 0 19.777 2H4.223a2.14 2.14 0 0 0-1.57.653"/><path fill="currentColor" d="M7.01 18.124 5.904 17l-2.327 2.327v-1.755H2v4.457h4.457V20.45H4.682z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M.522.522A1.7 1.7 0 0 0 0 1.778v8h1.778v-8h12.444v12.444h-8V16h8q.734 0 1.256-.522T16 14.222V1.778q0-.734-.522-1.256A1.7 1.7 0 0 0 14.222 0H1.778Q1.044 0 .522.522"/><path fill="currentColor" d="M13.333 12.444 10 8l-2.667 3.556-1.11-1.482v2.37zm-8-3.555-.666.889H6zm-.88 3.444-.982-1-2.069 2.069v-1.56H0v3.961h3.962v-1.402H2.384z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.01 18.124 5.904 17l-2.327 2.327v-1.755H2v4.457h4.457V20.45H4.682z"/><path fill="currentColor" d="M2 4.222q0-.915.653-1.57A2.14 2.14 0 0 1 4.223 2h15.555a2.14 2.14 0 0 1 1.57.653q.652.652.652 1.57v15.555a2.14 2.14 0 0 1-.653 1.57 2.14 2.14 0 0 1-1.57.652H8v-4.444h10.667L14.5 12l-3.333 4.444-2.5-3.333L6.5 16H2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m4.453 12.333-.982-1-2.069 2.069v-1.56H0v3.961h3.962v-1.402H2.384z"/><path fill="currentColor" d="M0 1.778Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0h12.444q.734 0 1.256.522T16 1.778v12.444q0 .734-.522 1.256a1.7 1.7 0 0 1-1.256.522h-8v-3.556h7.111L10 8l-2.667 3.556-2-2.667-.666.889H0z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M8 17.556V16H6.5l2.167-2.889 2.5 3.333L14.5 12l4.167 5.556z" clipRule="evenodd"/><path fill="currentColor" d="M2.653 2.653A2.14 2.14 0 0 0 2 4.223V16h2.222V4.222h15.556v15.556H8V22h11.778a2.14 2.14 0 0 0 1.57-.653 2.14 2.14 0 0 0 .652-1.57V4.223a2.14 2.14 0 0 0-.653-1.57A2.14 2.14 0 0 0 19.777 2H4.223a2.14 2.14 0 0 0-1.57.653"/><path fill="#0076D8" d="M7.01 18.124 5.904 17l-2.327 2.327v-1.755H2v4.457h4.457V20.45H4.682z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M.522.522A1.7 1.7 0 0 0 0 1.778v8h1.778v-8h12.444v12.444h-8V16h8q.734 0 1.256-.522T16 14.222V1.778q0-.734-.522-1.256A1.7 1.7 0 0 0 14.222 0H1.778Q1.044 0 .522.522"/><path fill="currentColor" d="M13.333 12.444 10 8l-2.667 3.556-1.11-1.482v2.37zm-8-3.555-.666.889H6z"/><path fill="#0076D8" d="m4.453 12.333-.982-1-2.069 2.069v-1.56H0v3.961h3.962v-1.402H2.384z"/></> }
    }
};

export function ImageImport({
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

ImageImport.displayName = "ImageImport";
