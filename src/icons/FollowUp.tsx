import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.667 8.394a3.667 3.667 0 0 0-3.43 4.965l-1.5 1.499a5.667 5.667 0 0 1 4.929-8.464h7.342l-2.89-2.891L13.56 2.06l5.224 5.224-5.223 5.223-1.443-1.443 2.67-2.67z"/><path fill="currentColor" fillRule="evenodd" d="M8.367 17.727h7.966A5.667 5.667 0 0 0 21 8.845l-1.451 1.452a3.667 3.667 0 0 1-3.215 5.43H8.345l2.791-2.791-1.443-1.443-5.224 5.223 5.224 5.224 1.443-1.443z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.533 5.115A2.933 2.933 0 0 0 1.79 9.087l-1.199 1.2a4.533 4.533 0 0 1 3.943-6.772h5.874L8.094 1.202 9.248.048l4.18 4.18-4.18 4.177-1.154-1.154 2.137-2.136z"/><path fill="currentColor" fillRule="evenodd" d="M5.094 12.582h6.373A4.533 4.533 0 0 0 15.2 5.476l-1.16 1.161a2.933 2.933 0 0 1-2.572 4.344h-6.39L7.31 8.75 6.155 7.595l-4.179 4.178 4.18 4.179 1.154-1.154z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.667 8.394a3.667 3.667 0 0 0-3.43 4.965l-1.5 1.499a5.667 5.667 0 0 1 4.929-8.464h7.342l-2.89-2.891L13.56 2.06l5.224 5.224-5.223 5.223-1.443-1.443 2.67-2.67z"/><path fill="currentColor" fillRule="evenodd" d="M8.367 17.727h7.966A5.667 5.667 0 0 0 21 8.845l-1.451 1.452a3.667 3.667 0 0 1-3.215 5.43H8.345l2.791-2.791-1.443-1.443-5.224 5.223h.001l5.223 5.224 1.443-1.443z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.533 5.115A2.933 2.933 0 0 0 1.79 9.087l-1.199 1.2a4.533 4.533 0 0 1 3.943-6.772h5.874L8.094 1.202 9.248.048l4.179 4.179-4.179 4.178-1.154-1.154 2.137-2.136z"/><path fill="currentColor" fillRule="evenodd" d="M5.094 12.582h6.373A4.533 4.533 0 0 0 15.2 5.476l-1.16 1.161a2.933 2.933 0 0 1-2.572 4.344h-6.39L7.31 8.75 6.155 7.595l-4.179 4.178 4.18 4.179 1.154-1.154z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#0076D8" d="M7.667 8.394a3.667 3.667 0 0 0-3.43 4.965l-1.5 1.499a5.667 5.667 0 0 1 4.929-8.464h7.342l-2.89-2.891L13.56 2.06l5.224 5.224-5.223 5.223-1.443-1.443 2.67-2.67z"/><path fill="#0076D8" fillRule="evenodd" d="M8.367 17.727h7.966A5.667 5.667 0 0 0 21 8.845l-1.451 1.452a3.667 3.667 0 0 1-3.215 5.43H8.345l2.791-2.791-1.443-1.443-5.224 5.223h.001l5.223 5.224 1.443-1.443z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#0076D8" d="M4.533 5.115A2.933 2.933 0 0 0 1.79 9.087l-1.199 1.2a4.533 4.533 0 0 1 3.943-6.772h5.874L8.094 1.202 9.248.048l4.179 4.179-4.179 4.178-1.154-1.154 2.137-2.136z"/><path fill="#0076D8" fillRule="evenodd" d="M5.094 12.582h6.373A4.533 4.533 0 0 0 15.2 5.476l-1.16 1.161a2.933 2.933 0 0 1-2.572 4.344h-6.39L7.31 8.75 6.155 7.595l-4.179 4.178 4.18 4.179 1.154-1.154z" clipRule="evenodd"/></> }
    }
};

export function FollowUp({
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

FollowUp.displayName = "FollowUp";
