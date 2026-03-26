import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12.5 12.556v-4h2v4z"/><path fill="currentColor" fillRule="evenodd" d="M14.25 13.806q-1.75 1.75-4.25 1.75t-4.25-1.75T4 9.556t1.75-4.25T10 3.556t4.25 1.75T16 9.556t-1.75 4.25m.675 2.075 5.675 5.675 1.4-1.4-5.675-5.675A7.93 7.93 0 0 0 18 9.556q0-3.35-2.325-5.675T10 1.556 4.325 3.88Q2 6.205 2 9.556t2.325 5.675T10 17.556q1.4 0 2.65-.438a8 8 0 0 0 2.275-1.237" clipRule="evenodd"/><path fill="currentColor" d="M5.5 12.556v-5h2v5zm3.5 0v-7h2v7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8.4 8.8V5.6H10v3.2z"/><path fill="currentColor" fillRule="evenodd" d="M9.8 9.8q-1.4 1.4-3.4 1.4T3 9.8 1.6 6.4 3 3t3.4-1.4T9.8 3t1.4 3.4-1.4 3.4m.54 1.66L14.88 16 16 14.88l-4.54-4.54A6.34 6.34 0 0 0 12.8 6.4q0-2.68-1.86-4.54T6.4 0 1.86 1.86 0 6.4t1.86 4.54T6.4 12.8q1.12 0 2.12-.35a6.3 6.3 0 0 0 1.82-.99" clipRule="evenodd"/><path fill="currentColor" d="M2.8 8.8v-4h1.6v4zm2.8 0V3.2h1.6v5.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m20.6 21.556-5.675-5.675A7.93 7.93 0 0 1 10 17.556q-3.35 0-5.675-2.325T2 9.556 4.325 3.88 10 1.556t5.675 2.325T18 9.556q0 1.4-.437 2.65a8 8 0 0 1-1.238 2.275L22 20.156zm-15.1-14v5h2v-5zm3.5 5v-7h2v7zm3.5-4v4h2v-4z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m14.88 16-4.54-4.54A6.34 6.34 0 0 1 6.4 12.8q-2.68 0-4.54-1.86T0 6.4t1.86-4.54T6.4 0t4.54 1.86T12.8 6.4q0 1.12-.35 2.12a6.3 6.3 0 0 1-.99 1.82L16 14.88zM2.8 4.8v4h1.6v-4zm2.8 4V3.2h1.6v5.6zm2.8-3.2v3.2H10V5.6z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12.5 12.556v-4h2v4z"/><path fill="currentColor" fillRule="evenodd" d="M14.25 13.806q-1.75 1.75-4.25 1.75t-4.25-1.75T4 9.556t1.75-4.25T10 3.556t4.25 1.75T16 9.556t-1.75 4.25m.675 2.075 5.675 5.675 1.4-1.4-5.675-5.675A7.93 7.93 0 0 0 18 9.556q0-3.35-2.325-5.675T10 1.556 4.325 3.88Q2 6.205 2 9.556t2.325 5.675T10 17.556q1.4 0 2.65-.438a8 8 0 0 0 2.275-1.237" clipRule="evenodd"/><path fill="#007ADA" d="M5.5 12.556v-5h2v5zm3.5 0v-7h2v7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8.4 8.8V5.6H10v3.2z"/><path fill="currentColor" fillRule="evenodd" d="M9.8 9.8q-1.4 1.4-3.4 1.4T3 9.8 1.6 6.4 3 3t3.4-1.4T9.8 3t1.4 3.4-1.4 3.4m.54 1.66L14.88 16 16 14.88l-4.54-4.54A6.34 6.34 0 0 0 12.8 6.4q0-2.68-1.86-4.54T6.4 0 1.86 1.86 0 6.4t1.86 4.54T6.4 12.8q1.12 0 2.12-.35a6.3 6.3 0 0 0 1.82-.99" clipRule="evenodd"/><path fill="#007ADA" d="M2.8 8.8v-4h1.6v4zm2.8 0V3.2h1.6v5.6z"/></> }
    }
};

export function SearchInsights({
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

SearchInsights.displayName = "SearchInsights";
