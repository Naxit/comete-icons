import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m14.699 12.7-4.593 4.593a.988.988 0 0 1-1.623-.316.99.99 0 0 1 .223-1.084l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4l4.593 4.592a1 1 0 0 1 0 1.414" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m9.946 8.5-3.287 3.287a.708.708 0 1 1-1.002-1.001l2.79-2.791-2.79-2.79A.708.708 0 0 1 6.66 4.201l3.287 3.286a.715.715 0 0 1 0 1.012" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m14.699 12.7-4.593 4.593a.988.988 0 0 1-1.623-.316.99.99 0 0 1 .223-1.084l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4l4.593 4.592a1 1 0 0 1 0 1.414" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m9.946 8.5-3.287 3.287a.708.708 0 1 1-1.002-1.001l2.79-2.791-2.79-2.79A.708.708 0 0 1 6.66 4.201l3.287 3.286a.715.715 0 0 1 0 1.012" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#0076D8" fillRule="evenodd" d="m14.699 12.7-4.593 4.593a.988.988 0 0 1-1.623-.316.99.99 0 0 1 .223-1.084l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4l4.593 4.592a1 1 0 0 1 0 1.414" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#0076D8" fillRule="evenodd" d="m9.946 8.5-3.287 3.287a.708.708 0 1 1-1.002-1.001l2.79-2.791-2.79-2.79A.708.708 0 0 1 6.66 4.201l3.287 3.286a.715.715 0 0 1 0 1.012" clipRule="evenodd"/></> }
    }
};

export function ChevronRight({
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

ChevronRight.displayName = "ChevronRight";
