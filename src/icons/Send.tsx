import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 19.579V4.421l18 7.58zm1.895-2.842L16.12 12 4.895 7.263v3.316L10.579 12l-5.684 1.421z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 14.737V1.263L16 8zm1.684-2.526L11.664 8l-9.98-4.21v2.947L6.737 8 1.684 9.263z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 19.579v-5.684L10.579 12 3 10.105V4.421l18 7.58z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 14.737V9.684L6.737 8 0 6.316V1.263L16 8z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M3 19.579V4.421l18 7.58zm1.895-2.842L16.12 12 4.895 7.263v3.316L10.579 12l-5.684 1.421z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M0 14.737V1.263L16 8zm1.684-2.526L11.664 8l-9.98-4.21v2.947L6.737 8 1.684 9.263z"/></> }
    }
};

export function Send({
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

Send.displayName = "Send";
