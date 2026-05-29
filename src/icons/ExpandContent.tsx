import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 19v-6h2v4h4v2zm12-8V7h-4V5h6v6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 12.667v-4h1.334v2.666h2.666v1.334zm8-5.334V4.667H8.667V3.333h4v4z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 19v-6h2v4h4v2zm12-8V7h-4V5h6v6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 12.667v-4h1.334v2.666h2.666v1.334zm8-5.334V4.667H8.667V3.333h4v4z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M5 13v6h6v-2H7v-4z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M17 11V7h-4V5h6v6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.333 8.667v4h4v-1.334H4.667V8.667z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M11.333 7.333V4.667H8.667V3.333h4v4z"/></> }
    }
};

export function ExpandContent({
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

ExpandContent.displayName = "ExpandContent";
