import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h11q.475 0 .9.213t.7.587L22 12l-5.4 7.2q-.275.375-.7.588T15 20zm0-2h11l4.5-6L15 6H4zm5.5-6"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.667 13.334q-.55 0-.942-.392T1.333 12V4q0-.55.392-.942t.942-.391H10q.317 0 .6.141t.467.392l3.6 4.8-3.6 4.8q-.183.25-.467.392t-.6.142zm0-1.334H10l3-4-3-4H2.667zm3.666-4"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h11q.475 0 .9.213t.7.587L22 12l-5.4 7.2q-.275.375-.7.588T15 20z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.667 13.334q-.55 0-.942-.392T1.333 12V4q0-.55.392-.942t.942-.391H10q.317 0 .6.141t.467.392l3.6 4.8-3.6 4.8q-.183.25-.467.392t-.6.142z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h11q.475 0 .9.213t.7.587L22 12l-5.4 7.2q-.275.375-.7.588T15 20zm0-2h11l4.5-6L15 6H4zm5.5-6"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.667 13.334q-.55 0-.942-.392T1.333 12V4q0-.55.392-.942t.942-.391H10q.317 0 .6.141t.467.392l3.6 4.8-3.6 4.8q-.183.25-.467.392t-.6.142zm0-1.334H10l3-4-3-4H2.667zm3.666-4"/></> }
    }
};

export function Label({
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

Label.displayName = "Label";
