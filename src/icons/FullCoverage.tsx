import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V7h2v12h15v2zm4-4q-.824 0-1.412-.587A1.93 1.93 0 0 1 6 15V3h17v12q0 .824-.587 1.413A1.93 1.93 0 0 1 21 17zm0-2h13V5H8zm2-3h4V7h-4zm5 0h4v-2h-4zm0-3h4V7h-4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.524 14.864q-.63 0-1.076-.447A1.47 1.47 0 0 1 0 13.34V4.198h1.524v9.142h11.428v1.524zm3.047-3.047q-.628 0-1.076-.448a1.47 1.47 0 0 1-.447-1.076V1.15H16v9.143q0 .628-.448 1.076a1.47 1.47 0 0 1-1.076.448zm0-1.524h9.905v-7.62H4.571zm1.524-2.286h3.048v-3.81H6.095zm3.81 0h3.047V6.483H9.905zm0-2.286h3.047V4.198H9.905z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V7h2v12h15v2zm4-4q-.824 0-1.412-.587A1.93 1.93 0 0 1 6 15V3h17v12q0 .824-.587 1.413A1.93 1.93 0 0 1 21 17zm2-5h4V7h-4zm5 0h4v-2h-4zm0-3h4V7h-4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.524 14.864q-.63 0-1.076-.447A1.47 1.47 0 0 1 0 13.34V4.198h1.524v9.142h11.428v1.524zm3.047-3.047q-.628 0-1.076-.448a1.47 1.47 0 0 1-.447-1.076V1.15H16v9.143q0 .628-.448 1.076a1.47 1.47 0 0 1-1.076.448zm1.524-3.81h3.048v-3.81H6.095zm3.81 0h3.047V6.483H9.905zm0-2.286h3.047V4.198H9.905z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.588 20.413Q3.175 21 4 21h15v-2H4V7H2v12q0 .824.587 1.413m4-4Q7.175 17 8 17h13q.824 0 1.413-.587Q23 15.825 23 15V3H6v12q0 .824.588 1.413M21 15H8V5h13z" clipRule="evenodd"/><path fill="currentColor" d="M15 9h4V7h-4zm-5 3h4V7h-4zm5 0h4v-2h-4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.448 14.417q.447.447 1.076.447h11.428V13.34H1.524V4.198H0v9.142q0 .63.448 1.077m3.047-3.048q.448.447 1.076.448h9.905q.63 0 1.076-.448.448-.448.448-1.076V1.15H3.048v9.143q0 .628.447 1.076m10.981-1.076H4.571v-7.62h9.905z" clipRule="evenodd"/><path fill="currentColor" d="M6.095 8.007h3.048v-3.81H6.095zm3.81-2.286h3.047V4.198H9.905zm0 2.286h3.047V6.483H9.905z"/></> }
    }
};

export function FullCoverage({
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

FullCoverage.displayName = "FullCoverage";
