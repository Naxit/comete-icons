import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9 17q-.825 0-1.412-.587A1.93 1.93 0 0 1 7 15V5q0-.824.588-1.412A1.93 1.93 0 0 1 9 3h10q.824 0 1.413.587Q21 4.176 21 5v10q0 .824-.587 1.413A1.93 1.93 0 0 1 19 17zm0-2h10V5H9zm-4 4v2q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4 12v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.333 12.444q-.733 0-1.255-.522a1.7 1.7 0 0 1-.522-1.255v-8.89q0-.732.522-1.255A1.7 1.7 0 0 1 5.333 0h8.89q.733 0 1.255.522T16 1.778v8.889q0 .733-.522 1.255a1.7 1.7 0 0 1-1.256.522zm0-1.777h8.89v-8.89h-8.89zm-3.555 3.555V16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222zM0 12.444v-1.777h1.778v1.777zM0 8.89V7.11h1.778v1.78zm0-3.556V3.556h1.778v1.777zM3.556 16v-1.778h1.777V16zm3.555 0v-1.778H8.89V16zm3.556 0v-1.778h1.777V16z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9 17q-.825 0-1.412-.587A1.93 1.93 0 0 1 7 15V5q0-.824.588-1.412A1.93 1.93 0 0 1 9 3h10q.824 0 1.413.587Q21 4.176 21 5v10q0 .824-.587 1.413A1.93 1.93 0 0 1 19 17zm0-2h10V5H9zm-4 4v2q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4 12v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.333 12.444q-.733 0-1.255-.522a1.7 1.7 0 0 1-.522-1.255v-8.89q0-.732.522-1.255A1.7 1.7 0 0 1 5.333 0h8.89q.733 0 1.255.522T16 1.778v8.889q0 .733-.522 1.255a1.7 1.7 0 0 1-1.256.522zm0-1.777h8.89v-8.89h-8.89zm-3.555 3.555V16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222zM0 12.444v-1.777h1.778v1.777zM0 8.89V7.11h1.778v1.78zm0-3.556V3.556h1.778v1.777zM3.556 16v-1.778h1.777V16zm3.555 0v-1.778H8.89V16zm3.556 0v-1.778h1.777V16z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M5 21v-2H3q0 .824.587 1.413Q4.176 21 5 21m-2-6v2h2v-2zm0-4v2h2v-2zm0-4v2h2V7zm4 12v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z" clipRule="evenodd"/><path fill="#007ADA" fillRule="evenodd" d="M9 17q-.825 0-1.412-.587A1.93 1.93 0 0 1 7 15V5q0-.824.588-1.412A1.93 1.93 0 0 1 9 3h10q.824 0 1.413.587Q21 4.176 21 5v10q0 .824-.587 1.413A1.93 1.93 0 0 1 19 17zm10-2H9V5h10z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.778 16v-1.778H0q0 .734.522 1.256T1.778 16M0 10.667v1.777h1.778v-1.777zM0 7.11v1.78h1.778V7.11zm0-3.555v1.777h1.778V3.556zm3.556 10.666V16h1.777v-1.778zm3.555 0V16H8.89v-1.778zm3.556 0V16h1.777v-1.778z" clipRule="evenodd"/><path fill="#007ADA" fillRule="evenodd" d="M5.333 12.444q-.733 0-1.255-.522a1.7 1.7 0 0 1-.522-1.255v-8.89q0-.732.522-1.255A1.7 1.7 0 0 1 5.333 0h8.89q.733 0 1.255.522T16 1.778v8.889q0 .733-.522 1.255a1.7 1.7 0 0 1-1.256.522zm8.89-1.777h-8.89v-8.89h8.89z" clipRule="evenodd"/></> }
    }
};

export function FlipToFront({
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

FlipToFront.displayName = "FlipToFront";
