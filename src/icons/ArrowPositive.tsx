import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><g clipPath="url(#clip0_620_3393)"><path fill="currentColor" d="M7 16V3.825l-5.6 5.6L0 8l8-8 8 8-1.4 1.425-5.6-5.6V16z"/></g><defs><clipPath id="clip0_620_3393"><path fill="currentColor" d="M16 16H0V0h16z"/></clipPath></defs></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><g clipPath="url(#clip0_620_3395)"><path fill="currentColor" d="M7 16V3.825l-5.6 5.6L0 8l8-8 8 8-1.4 1.425-5.6-5.6V16z"/></g><defs><clipPath id="clip0_620_3395"><path fill="currentColor" d="M16 16H0V0h16z"/></clipPath></defs></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#009B60" d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><g clipPath="url(#clip0_620_3397)"><path fill="#009B60" d="M7 16V3.825l-5.6 5.6L0 8l8-8 8 8-1.4 1.425-5.6-5.6V16z"/></g><defs><clipPath id="clip0_620_3397"><path fill="#fff" d="M16 16H0V0h16z"/></clipPath></defs></> }
    }
};

export function ArrowPositive({
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

ArrowPositive.displayName = "ArrowPositive";
