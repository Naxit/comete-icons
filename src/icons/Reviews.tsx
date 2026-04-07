import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 4v18l4-4h14q.824 0 1.413-.587Q22 16.825 22 16V4q0-.824-.587-1.412A1.93 1.93 0 0 0 20 2H4q-.824 0-1.412.587A1.93 1.93 0 0 0 2 4m18 12H5.15L4 17.125V4h16z" clipRule="evenodd"/><path fill="currentColor" d="M9.075 14.25 12 12.475l2.925 1.775-.775-3.325 2.6-2.25-3.425-.275L12 5.25 10.675 8.4l-3.425.275 2.6 2.25z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 1.6V16l3.2-3.2h11.2q.66 0 1.13-.47T16 11.2V1.6q0-.66-.47-1.13A1.54 1.54 0 0 0 14.4 0H1.6Q.94 0 .47.47A1.54 1.54 0 0 0 0 1.6m14.4 9.6H2.52l-.92.9V1.6h12.8z" clipRule="evenodd"/><path fill="currentColor" d="M5.66 9.8 8 8.38l2.34 1.42-.62-2.66 2.08-1.8-2.74-.22L8 2.6 6.94 5.12l-2.74.22 2.08 1.8z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 22V4q0-.824.587-1.412A1.93 1.93 0 0 1 4 2h16q.824 0 1.413.587Q22 3.176 22 4v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18H6zm10-9.525L9.075 14.25l.775-3.325-2.6-2.25 3.425-.275L12 5.25l1.325 3.15 3.425.275-2.6 2.25.775 3.325z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 16V1.6Q0 .94.47.47A1.54 1.54 0 0 1 1.6 0h12.8q.66 0 1.13.47T16 1.6v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47H3.2zm8-7.62L5.66 9.8l.62-2.66-2.08-1.8 2.74-.22.53-1.26L8 2.6l1.06 2.52 2.74.22-2.08 1.8.62 2.66z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 4v18l4-4h14q.824 0 1.413-.587Q22 16.825 22 16V4q0-.824-.587-1.412A1.93 1.93 0 0 0 20 2H4q-.824 0-1.412.587A1.93 1.93 0 0 0 2 4m18 12H5.15L4 17.125V4h16z" clipRule="evenodd"/><path fill="#0076D8" d="M9.075 14.25 12 12.475l2.925 1.775-.775-3.325 2.6-2.25-3.425-.275L12 5.25 10.675 8.4l-3.425.275 2.6 2.25z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 1.6V16l3.2-3.2h11.2q.66 0 1.13-.47T16 11.2V1.6q0-.66-.47-1.13A1.54 1.54 0 0 0 14.4 0H1.6Q.94 0 .47.47A1.54 1.54 0 0 0 0 1.6m14.4 9.6H2.52l-.92.9V1.6h12.8z" clipRule="evenodd"/><path fill="#0076D8" d="M5.66 9.8 8 8.38l2.34 1.42-.62-2.66 2.08-1.8-2.74-.22L8 2.6 6.94 5.12l-2.74.22 2.08 1.8z"/></> }
    }
};

export function Reviews({
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

Reviews.displayName = "Reviews";
