import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6 8 6v12h-7v-6h-2v6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.778 14.222h2.666V8.89h5.334v5.333h2.666v-8l-5.333-4-5.333 4zM1 16V5.333L8.111 0l7.111 5.333V16H9v-5.333H7.222V16z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 21V9l8-6 8 6v12h-7v-6h-2v6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1 16V5.333L8.111 0l7.111 5.333V16H9v-5.333H7.222V16z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6 8 6v12h-7v-6h-2v6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M2.778 14.222h2.666V8.89h5.334v5.333h2.666v-8l-5.333-4-5.333 4zM1 16V5.333L8.111 0l7.111 5.333V16H9v-5.333H7.222V16z"/></> }
    }
};

export function Home({
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

Home.displayName = "Home";
