import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3.75 21V3h9.9l.44 2.118h6.16v10.588h-7.7l-.44-2.118H5.95V21zm10.615-7.412h3.685V7.235h-5.775l-.44-2.117H5.95v6.353h7.975z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M.7 16V0h8.8l.391 1.882h5.476v9.412H8.522l-.39-1.882H2.655V16zm9.436-6.588h3.275V3.765H8.278l-.391-1.883H2.656V7.53h7.088z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3.75 21V3h9.9l.44 2.118h6.16v10.588h-7.7l-.44-2.118H5.95V21z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M.7 16V0h8.8l.391 1.882h5.476v9.412H8.522l-.39-1.882H2.655V16z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#0076D8" d="M3.75 21V3h9.9l.44 2.118h6.16v10.588h-7.7l-.44-2.118H5.95V21zm10.615-7.412h3.685V7.235h-5.775l-.44-2.117H5.95v6.353h7.975z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#0076D8" d="M.7 16V0h8.8l.391 1.882h5.476v9.412H8.522l-.39-1.882H2.655V16zm9.436-6.588h3.275V3.765H8.278l-.391-1.883H2.656V7.53h7.089z"/></> }
    }
};

export function Flag({
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

Flag.displayName = "Flag";
