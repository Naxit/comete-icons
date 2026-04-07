import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9.3 13.8h9l-3.105-4.05-2.07 2.7-1.395-1.8zm-.9 3.6q-.743 0-1.271-.529A1.73 1.73 0 0 1 6.6 15.6V4.8q0-.743.529-1.271A1.73 1.73 0 0 1 8.4 3h10.8q.743 0 1.271.529.53.528.529 1.271v10.8q0 .743-.529 1.271a1.73 1.73 0 0 1-1.271.529zm0-1.8h10.8V4.8H8.4zM4.8 21q-.743 0-1.271-.529A1.73 1.73 0 0 1 3 19.2V6.6h1.8v12.6h12.6V21z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.6 9.6h8L10.84 6 9 8.4 7.76 6.8zm-.8 3.2a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13V1.6q0-.66.47-1.13A1.54 1.54 0 0 1 4.8 0h9.6q.66 0 1.13.47T16 1.6v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h9.6V1.6H4.8zM1.6 16a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 14.4V3.2h1.6v11.2h11.2V16z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9.3 13.8h9l-3.105-4.05-2.07 2.7-1.395-1.8zm-.9 3.6q-.743 0-1.271-.529A1.73 1.73 0 0 1 6.6 15.6V4.8q0-.743.529-1.271A1.73 1.73 0 0 1 8.4 3h10.8q.743 0 1.271.529.53.528.529 1.271v10.8q0 .743-.529 1.271a1.73 1.73 0 0 1-1.271.529zM4.8 21q-.743 0-1.271-.529A1.73 1.73 0 0 1 3 19.2V6.6h1.8v12.6h12.6V21z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.6 9.6h8L10.84 6 9 8.4 7.76 6.8zm-.8 3.2a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13V1.6q0-.66.47-1.13A1.54 1.54 0 0 1 4.8 0h9.6q.66 0 1.13.47T16 1.6v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zM1.6 16a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 14.4V3.2h1.6v11.2h11.2V16z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.129 16.871q.528.53 1.271.529h10.8q.743 0 1.271-.529.53-.528.529-1.271V4.8q0-.743-.529-1.271A1.73 1.73 0 0 0 19.2 3H8.4q-.743 0-1.271.529A1.73 1.73 0 0 0 6.6 4.8v10.8q0 .743.529 1.271M19.2 15.6H8.4V4.8h10.8zM3.529 20.471q.528.53 1.271.529h12.6v-1.8H4.8V6.6H3v12.6q0 .743.529 1.271" clipRule="evenodd"/><path fill="#0076D8" d="M9.3 13.8h9l-3.105-4.05-2.07 2.7-1.395-1.8z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.67 12.33q.47.47 1.13.47h9.6q.66 0 1.13-.47T16 11.2V1.6q0-.66-.47-1.13A1.54 1.54 0 0 0 14.4 0H4.8q-.66 0-1.13.47A1.54 1.54 0 0 0 3.2 1.6v9.6q0 .66.47 1.13M14.4 11.2H4.8V1.6h9.6zM.47 15.53Q.94 16 1.6 16h11.2v-1.6H1.6V3.2H0v11.2q0 .66.47 1.13" clipRule="evenodd"/><path fill="#0076D8" d="M5.6 9.6h8L10.84 6 9 8.4 7.76 6.8z"/></> }
    }
};

export function PhotoLibrary({
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

PhotoLibrary.displayName = "PhotoLibrary";
