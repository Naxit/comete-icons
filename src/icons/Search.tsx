import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M11.575 15.65a6 6 0 0 0 1.725-.95l1.4-1.4q.6-.75.95-1.725T16 9.5q0-2.725-1.887-4.612T9.5 3 4.888 4.888 3 9.5t1.888 4.613T9.5 16q1.1 0 2.075-.35m1.113-2.963Q11.375 14 9.5 14t-3.187-1.312Q5 11.375 5 9.5t1.313-3.187T9.5 5t3.188 1.313T14 9.5t-1.312 3.188" clipRule="evenodd"/><path fill="currentColor" d="m13.3 14.7 6.3 6.3 1.4-1.4-6.3-6.3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.622 11.244a5.3 5.3 0 0 0 1.534-.844L10.4 9.156q.534-.667.844-1.534a5.4 5.4 0 0 0 .312-1.844q0-2.423-1.678-4.1Q8.2 0 5.778 0q-2.423 0-4.1 1.678Q0 3.355 0 5.778t1.678 4.1 4.1 1.678q.978 0 1.844-.312m.99-2.633Q7.443 9.778 5.777 9.778T2.944 8.61Q1.778 7.444 1.778 5.778t1.166-2.834q1.167-1.166 2.834-1.166 1.665 0 2.833 1.166 1.167 1.167 1.167 2.834 0 1.665-1.167 2.833" clipRule="evenodd"/><path fill="currentColor" d="m9.156 10.4 5.6 5.6L16 14.756l-5.6-5.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M11.575 15.65a6 6 0 0 0 1.725-.95l1.4-1.4q.6-.75.95-1.725T16 9.5q0-2.725-1.887-4.612T9.5 3 4.888 4.888 3 9.5t1.888 4.613T9.5 16q1.1 0 2.075-.35m1.113-2.963Q11.375 14 9.5 14t-3.187-1.312Q5 11.375 5 9.5t1.313-3.187T9.5 5t3.188 1.313T14 9.5t-1.312 3.188" clipRule="evenodd"/><path fill="currentColor" d="m13.3 14.7 6.3 6.3 1.4-1.4-6.3-6.3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.622 11.244a5.3 5.3 0 0 0 1.534-.844L10.4 9.156q.534-.667.844-1.534a5.4 5.4 0 0 0 .312-1.844q0-2.423-1.678-4.1Q8.2 0 5.778 0q-2.423 0-4.1 1.678Q0 3.355 0 5.778t1.678 4.1 4.1 1.678q.978 0 1.844-.312m.99-2.633Q7.443 9.778 5.777 9.778T2.944 8.61Q1.778 7.444 1.778 5.778t1.166-2.834q1.167-1.166 2.834-1.166 1.665 0 2.833 1.166 1.167 1.167 1.167 2.834 0 1.665-1.167 2.833" clipRule="evenodd"/><path fill="currentColor" d="m9.156 10.4 5.6 5.6L16 14.756l-5.6-5.6z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M11.575 15.65a6 6 0 0 0 1.725-.95l1.4-1.4q.6-.75.95-1.725T16 9.5q0-2.725-1.887-4.612T9.5 3 4.888 4.888 3 9.5t1.888 4.613T9.5 16q1.1 0 2.075-.35m1.113-2.963Q11.375 14 9.5 14t-3.187-1.312Q5 11.375 5 9.5t1.313-3.187T9.5 5t3.188 1.313T14 9.5t-1.312 3.188" clipRule="evenodd"/><path fill="#0076D8" d="m13.3 14.7 6.3 6.3 1.4-1.4-6.3-6.3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.622 11.244a5.3 5.3 0 0 0 1.534-.844L10.4 9.156q.534-.667.844-1.534a5.4 5.4 0 0 0 .312-1.844q0-2.423-1.678-4.1Q8.2 0 5.778 0q-2.423 0-4.1 1.678Q0 3.355 0 5.778t1.678 4.1 4.1 1.678q.978 0 1.844-.312m.99-2.633Q7.443 9.778 5.777 9.778T2.944 8.61Q1.778 7.444 1.778 5.778t1.166-2.834q1.167-1.166 2.834-1.166 1.665 0 2.833 1.166 1.167 1.167 1.167 2.834 0 1.665-1.167 2.833" clipRule="evenodd"/><path fill="#0076D8" d="m9.156 10.4 5.6 5.6L16 14.756l-5.6-5.6z"/></> }
    }
};

export function Search({
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

Search.displayName = "Search";
