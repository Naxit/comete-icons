import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6 10.78 3.22 8l-.94.94L6 12.67l8-8-.94-.94z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 1.33C4.32 1.33 1.33 4.32 1.33 8S4.32 14.67 8 14.67s6.67-2.99 6.67-6.67S11.68 1.33 8 1.33m-1.33 10L3.33 8l.94-.94 2.4 2.39 5.06-5.06.94.94z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2" opacity=".3"/><path fill="currentColor" d="m10 17-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 1.33C4.32 1.33 1.33 4.32 1.33 8S4.32 14.67 8 14.67s6.67-2.99 6.67-6.67S11.68 1.33 8 1.33" opacity=".3"/><path fill="currentColor" d="M6.67 11.33 3.33 8l.94-.94 2.4 2.39 5.06-5.06.94.94z"/></> }
    }
};

export function Check({
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

Check.displayName = "Check";
