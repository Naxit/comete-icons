import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m6.304 22 2.344-7.578L2.476 9.5h7.578L12.476 2l2.422 7.5h7.578l-6.172 4.922L18.648 22l-6.172-4.687zm6.172-7.057L9.82 16.974l1.016-3.23-2.995-2.369h3.594l1.041-3.281 1.068 3.281h3.568l-2.969 2.37.99 3.229z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m3.063 16 1.874-6.062L0 6h6.063L8 0l1.938 6H16l-4.937 3.938L12.937 16 8 12.25zM8 10.354 5.875 11.98l.813-2.583L4.292 7.5h2.875L8 4.875 8.854 7.5h2.854L9.333 9.396l.792 2.583z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m6.304 22 2.344-7.578L2.476 9.5h7.578L12.476 2l2.422 7.5h7.578l-6.172 4.922L18.648 22l-6.172-4.687z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m3.063 16 1.874-6.062L0 6h6.063L8 0l1.938 6H16l-4.937 3.938L12.937 16 8 12.25z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" fillRule="evenodd" d="m6.304 22 2.344-7.578L2.476 9.5h7.578L12.476 2l2.422 7.5h7.578l-6.172 4.922L18.648 22l-6.172-4.687zm6.172-7.057L9.82 16.974l1.016-3.23-2.995-2.369h3.594l1.041-3.281 1.068 3.281h3.568l-2.969 2.37.99 3.229z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" fillRule="evenodd" d="m3.063 16 1.874-6.062L0 6h6.063L8 0l1.938 6H16l-4.937 3.938L12.937 16 8 12.25zM8 10.354 5.875 11.98l.813-2.583L4.292 7.5h2.875L8 4.875 8.854 7.5h2.854L9.333 9.396l.792 2.583z" clipRule="evenodd"/></> }
    }
};

export function Mission({
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

Mission.displayName = "Mission";
