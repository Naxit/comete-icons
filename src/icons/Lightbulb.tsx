import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 21q-.743 0-1.271-.529A1.73 1.73 0 0 1 10.2 19.2h3.6q0 .743-.529 1.271A1.73 1.73 0 0 1 12 21m-3.6-2.7v-1.8h7.2v1.8zm.225-2.7a6.9 6.9 0 0 1-2.464-2.475A6.55 6.55 0 0 1 5.25 9.75q0-2.813 1.969-4.781Q9.187 2.999 12 3t4.781 1.969q1.97 1.968 1.969 4.781a6.55 6.55 0 0 1-.911 3.375 6.9 6.9 0 0 1-2.464 2.475zm.54-1.8h5.67a5 5 0 0 0 1.564-1.777 4.84 4.84 0 0 0 .551-2.273q0-2.07-1.44-3.51T12 4.8 8.49 6.24 7.05 9.75q0 1.215.551 2.273A5 5 0 0 0 9.165 13.8"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 16a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13h3.2q0 .66-.47 1.13A1.54 1.54 0 0 1 8 16m-3.2-2.4V12h6.4v1.6zm.2-2.4A6.13 6.13 0 0 1 2.81 9Q2 7.62 2 6q0-2.5 1.75-4.25T8 0t4.25 1.75T14 6q0 1.62-.81 3A6.13 6.13 0 0 1 11 11.2zm.48-1.6h5.04a4.44 4.44 0 0 0 1.39-1.58q.49-.94.49-2.02 0-1.84-1.28-3.12T8 1.6 4.88 2.88 3.6 6q0 1.08.49 2.02T5.48 9.6"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 21q-.743 0-1.271-.529A1.73 1.73 0 0 1 10.2 19.2h3.6q0 .743-.529 1.271A1.73 1.73 0 0 1 12 21m-3.6-2.7v-1.8h7.2v1.8zm.225-2.7a6.9 6.9 0 0 1-2.464-2.475A6.55 6.55 0 0 1 5.25 9.75q0-2.813 1.969-4.781Q9.187 2.999 12 3t4.781 1.969q1.97 1.968 1.969 4.781a6.55 6.55 0 0 1-.911 3.375 6.9 6.9 0 0 1-2.464 2.475z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 16a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13h3.2q0 .66-.47 1.13A1.54 1.54 0 0 1 8 16m-3.2-2.4V12h6.4v1.6zm.2-2.4A6.13 6.13 0 0 1 2.81 9Q2 7.62 2 6q0-2.5 1.75-4.25T8 0t4.25 1.75T14 6q0 1.62-.81 3A6.13 6.13 0 0 1 11 11.2z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M10.729 20.471q.528.53 1.271.529.743 0 1.271-.529.53-.528.529-1.271h-3.6q0 .743.529 1.271M8.4 16.5v1.8h7.2v-1.8zm.225-.9a6.9 6.9 0 0 1-2.464-2.475A6.55 6.55 0 0 1 5.25 9.75q0-2.813 1.969-4.781Q9.187 2.999 12 3t4.781 1.969q1.97 1.968 1.969 4.781a6.55 6.55 0 0 1-.911 3.375 6.9 6.9 0 0 1-2.464 2.475zm6.21-1.8h-5.67a5 5 0 0 1-1.564-1.777A4.84 4.84 0 0 1 7.05 9.75q0-2.07 1.44-3.51T12 4.8t3.51 1.44 1.44 3.51q0 1.215-.551 2.273a5 5 0 0 1-1.564 1.777" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M6.87 15.53Q7.34 16 8 16t1.13-.47.47-1.13H6.4q0 .66.47 1.13M4.8 12v1.6h6.4V12zm.2-.8A6.13 6.13 0 0 1 2.81 9Q2 7.62 2 6q0-2.5 1.75-4.25T8 0t4.25 1.75T14 6q0 1.62-.81 3A6.13 6.13 0 0 1 11 11.2zm5.52-1.6H5.48a4.44 4.44 0 0 1-1.39-1.58A4.3 4.3 0 0 1 3.6 6q0-1.84 1.28-3.12T8 1.6t3.12 1.28T12.4 6q0 1.08-.49 2.02a4.44 4.44 0 0 1-1.39 1.58" clipRule="evenodd"/></> }
    }
};

export function Lightbulb({
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

Lightbulb.displayName = "Lightbulb";
