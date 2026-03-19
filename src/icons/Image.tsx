import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4.222 22a2.14 2.14 0 0 1-1.57-.653A2.14 2.14 0 0 1 2 19.777V4.223q0-.915.653-1.57A2.14 2.14 0 0 1 4.223 2h15.555a2.14 2.14 0 0 1 1.57.653q.652.652.652 1.57v15.555a2.14 2.14 0 0 1-.653 1.57 2.14 2.14 0 0 1-1.57.652zm0-2.222h15.556V4.222H4.222zm1.111-2.222h13.334L14.5 12l-3.333 4.444-2.5-3.333z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.778 16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V1.778Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0h12.444q.734 0 1.256.522T16 1.778v12.444q0 .734-.522 1.256a1.7 1.7 0 0 1-1.256.522zm0-1.778h12.444V1.778H1.778zm.889-1.778h10.666L10 8l-2.667 3.556-2-2.667z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4.222 22a2.14 2.14 0 0 1-1.57-.653A2.14 2.14 0 0 1 2 19.777V4.223q0-.915.653-1.57A2.14 2.14 0 0 1 4.223 2h15.555a2.14 2.14 0 0 1 1.57.653q.652.652.652 1.57v15.555a2.14 2.14 0 0 1-.653 1.57 2.14 2.14 0 0 1-1.57.652zm1.111-4.444h13.334L14.5 12l-3.333 4.444-2.5-3.333z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.778 16q-.734 0-1.256-.522A1.7 1.7 0 0 1 0 14.222V1.778Q0 1.044.522.522A1.7 1.7 0 0 1 1.778 0h12.444q.734 0 1.256.522T16 1.778v12.444q0 .734-.522 1.256a1.7 1.7 0 0 1-1.256.522zm.889-3.556h10.666L10 8l-2.667 3.556-2-2.667z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.653 21.347a2.14 2.14 0 0 0 1.57.653h15.555a2.14 2.14 0 0 0 1.57-.653 2.14 2.14 0 0 0 .652-1.57V4.223a2.14 2.14 0 0 0-.653-1.57A2.14 2.14 0 0 0 19.777 2H4.223a2.14 2.14 0 0 0-1.57.653A2.14 2.14 0 0 0 2 4.223v15.555q0 .916.653 1.57m17.125-1.57H4.222V4.223h15.556z" clipRule="evenodd"/><path fill="currentColor" d="M5.333 17.556h13.334L14.5 12l-3.333 4.444-2.5-3.333z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.522 15.478Q1.044 16 1.778 16h12.444q.734 0 1.256-.522T16 14.222V1.778q0-.734-.522-1.256A1.7 1.7 0 0 0 14.222 0H1.778Q1.044 0 .522.522A1.7 1.7 0 0 0 0 1.778v12.444q0 .734.522 1.256m13.7-1.256H1.778V1.778h12.444z" clipRule="evenodd"/><path fill="currentColor" d="M2.667 12.444h10.666L10 8l-2.667 3.556-2-2.667z"/></> }
    }
};

export function Image({
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

Image.displayName = "Image";
