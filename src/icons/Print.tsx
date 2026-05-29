import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M6 8V3h12v5h1q1.276 0 2.137.863Q22 9.725 22 11v6h-4v4H6v-4H2v-6q0-1.275.875-2.137T5 8zm10-3v3H8V5zm0 10v4H8v-4zm4-4v4h-2v-2H6v2H4v-4q0-.424.287-.713A.97.97 0 0 1 5 10h14q.424 0 .712.287.288.288.288.713" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M18 12.5q.424 0 .712-.287A.97.97 0 0 0 19 11.5a.97.97 0 0 0-.288-.713A.97.97 0 0 0 18 10.5a.97.97 0 0 0-.712.287.97.97 0 0 0-.288.713q0 .424.288.713.287.287.712.287" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.2 4.8v-4h9.6v4h.8q1.02 0 1.71.69T16 7.2V12h-3.2v3.2H3.2V12H0V7.2q0-1.02.7-1.71a2.33 2.33 0 0 1 1.7-.69zm8-2.4v2.4H4.8V2.4zm0 8v3.2H4.8v-3.2zm3.2-3.2v3.2h-1.6V8.8H3.2v1.6H1.6V7.2q0-.34.23-.57a.77.77 0 0 1 .57-.23h11.2q.34 0 .57.23t.23.57" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.8 8.4a.77.77 0 0 0 .57-.23.77.77 0 0 0 .23-.57.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23.77.77 0 0 0-.57.23.77.77 0 0 0-.23.57q0 .34.23.57t.57.23" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M18 7H6V3h12zm0 5.5q.424 0 .712-.287A.97.97 0 0 0 19 11.5a.97.97 0 0 0-.288-.713A.97.97 0 0 0 18 10.5a.97.97 0 0 0-.712.287.97.97 0 0 0-.288.713q0 .424.288.713.287.287.712.287M16 19v-4H8v4zm2 2H6v-4H2v-6q0-1.275.875-2.137T5 8h14q1.276 0 2.137.863Q22 9.725 22 11v6h-4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M12.8 4H3.2V.8h9.6zm0 4.4a.77.77 0 0 0 .57-.23.77.77 0 0 0 .23-.57.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23.77.77 0 0 0-.57.23.77.77 0 0 0-.23.57q0 .34.23.57t.57.23m-1.6 5.2v-3.2H4.8v3.2zm1.6 1.6H3.2V12H0V7.2q0-1.02.7-1.71a2.33 2.33 0 0 1 1.7-.69h11.2q1.02 0 1.71.69T16 7.2V12h-3.2z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M6 8V3h12v5h1q1.276 0 2.137.863Q22 9.725 22 11v6h-4v4H6v-4H2v-6q0-1.275.875-2.137T5 8zm10-3v3H8V5zm0 10v4H8v-4zm4-4v4h-2v-2H6v2H4v-4q0-.424.287-.713A.97.97 0 0 1 5 10h14q.424 0 .712.287.288.288.288.713" clipRule="evenodd"/><path fill="var(--icon-information)" fillRule="evenodd" d="M18 12.5q.424 0 .712-.287A.97.97 0 0 0 19 11.5a.97.97 0 0 0-.288-.713A.97.97 0 0 0 18 10.5a.97.97 0 0 0-.712.287.97.97 0 0 0-.288.713q0 .424.288.713.287.287.712.287" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.2 4.8v-4h9.6v4h.8q1.02 0 1.71.69T16 7.2V12h-3.2v3.2H3.2V12H0V7.2q0-1.02.7-1.71a2.33 2.33 0 0 1 1.7-.69zm8-2.4v2.4H4.8V2.4zm0 8v3.2H4.8v-3.2zm3.2-3.2v3.2h-1.6V8.8H3.2v1.6H1.6V7.2q0-.34.23-.57a.77.77 0 0 1 .57-.23h11.2q.34 0 .57.23t.23.57" clipRule="evenodd"/><path fill="var(--icon-information)" fillRule="evenodd" d="M12.8 8.4a.77.77 0 0 0 .57-.23.77.77 0 0 0 .23-.57.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23.77.77 0 0 0-.57.23.77.77 0 0 0-.23.57q0 .34.23.57t.57.23" clipRule="evenodd"/></> }
    }
};

export function Print({
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

Print.displayName = "Print";
