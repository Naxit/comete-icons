import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9.75 17.4q-.743 0-1.271-.529A1.73 1.73 0 0 1 7.95 15.6V4.8q0-.743.529-1.271A1.73 1.73 0 0 1 9.75 3h8.1q.743 0 1.271.529.53.528.53 1.271v10.8q0 .743-.53 1.271a1.73 1.73 0 0 1-1.27.529zm0-1.8h8.1V4.8h-8.1zM6.15 21q-.743 0-1.271-.529A1.73 1.73 0 0 1 4.35 19.2V6.6h1.8v12.6h9.9V21z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.8 12.8a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13V1.6q0-.66.47-1.13A1.54 1.54 0 0 1 5.8 0H13q.66 0 1.13.47t.47 1.13v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6H13V1.6H5.8zM2.6 16a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 1 14.4V3.2h1.6v11.2h8.8V16z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9.75 17.4q-.743 0-1.271-.529A1.73 1.73 0 0 1 7.95 15.6V4.8q0-.743.529-1.271A1.73 1.73 0 0 1 9.75 3h8.1q.743 0 1.271.529.53.528.529 1.271v10.8q0 .743-.529 1.271a1.73 1.73 0 0 1-1.271.529zM6.15 21q-.743 0-1.271-.529A1.73 1.73 0 0 1 4.35 19.2V6.6h1.8v12.6h9.9V21z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.8 12.8a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13V1.6q0-.66.47-1.13A1.54 1.54 0 0 1 5.8 0H13q.66 0 1.13.47t.47 1.13v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zM2.6 16a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 1 14.4V3.2h1.6v11.2h8.8V16z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.879 20.471q.528.53 1.271.529h9.9v-1.8h-9.9V6.6h-1.8v12.6q0 .743.529 1.271" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9.75 17.4q-.743 0-1.271-.529A1.73 1.73 0 0 1 7.95 15.6V4.8q0-.743.529-1.271A1.73 1.73 0 0 1 9.75 3h8.1q.743 0 1.271.529.53.528.53 1.271v10.8q0 .743-.53 1.271a1.73 1.73 0 0 1-1.27.529zm8.1-1.8h-8.1V4.8h8.1z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.47 15.53q.47.47 1.13.47h8.8v-1.6H2.6V3.2H1v11.2q0 .66.47 1.13" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M5.8 12.8a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13V1.6q0-.66.47-1.13A1.54 1.54 0 0 1 5.8 0H13q.66 0 1.13.47t.47 1.13v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm7.2-1.6H5.8V1.6H13z" clipRule="evenodd"/></> }
    }
};

export function ContentCopy({
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

ContentCopy.displayName = "ContentCopy";
