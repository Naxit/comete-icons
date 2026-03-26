import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6 14h12v-2H6zm0-3h12V9H6zm0-3h12V6H6zm16 14-4-4H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V4q0-.824.587-1.412A1.93 1.93 0 0 1 4 2h16q.824 0 1.413.587Q22 3.176 22 4zM4 16h14.85L20 17.125V4H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.2 9.6h9.6V8H3.2zm0-2.4h9.6V5.6H3.2zm0-2.4h9.6V3.2H3.2zM16 16l-3.2-3.2H1.6a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 11.2V1.6Q0 .94.47.47A1.54 1.54 0 0 1 1.6 0h12.8q.66 0 1.13.47T16 1.6zM1.6 11.2h11.88l.92.9V1.6H1.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6 14h12v-2H6zm0-3h12V9H6zm0-3h12V6H6zm16 14-4-4H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V4q0-.824.587-1.412A1.93 1.93 0 0 1 4 2h16q.824 0 1.413.587Q22 3.176 22 4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.2 9.6h9.6V8H3.2zm0-2.4h9.6V5.6H3.2zm0-2.4h9.6V3.2H3.2zM16 16l-3.2-3.2H1.6a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 11.2V1.6Q0 .94.47.47A1.54 1.54 0 0 1 1.6 0h12.8q.66 0 1.13.47T16 1.6z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" fillRule="evenodd" d="M18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m22 22-4-4H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V4q0-.824.587-1.412A1.93 1.93 0 0 1 4 2h16q.824 0 1.413.587Q22 3.176 22 4zm-3.15-6H4V4h16v13.125z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" fillRule="evenodd" d="M12.8 9.6H3.2V8h9.6zm0-2.4H3.2V5.6h9.6zm0-2.4H3.2V3.2h9.6z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m16 16-3.2-3.2H1.6a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 11.2V1.6Q0 .94.47.47A1.54 1.54 0 0 1 1.6 0h12.8q.66 0 1.13.47T16 1.6zm-2.52-4.8H1.6V1.6h12.8v10.5z" clipRule="evenodd"/></> }
    }
};

export function Comment({
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

Comment.displayName = "Comment";
