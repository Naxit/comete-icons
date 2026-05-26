import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14v-3h-3q-.75.95-1.787 1.475T12 18t-2.212-.525T8 16H5zm8.725-3.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16t1.725-.55M5 19h14z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 14q-.55 0-.941-.391T2 12.667V3.333q0-.55.392-.941T3.333 2h9.334q.55 0 .942.392t.391.941v9.334q0 .55-.391.942t-.942.391zm0-1.333h9.334v-2h-2q-.5.633-1.192.983T8 12t-1.475-.35-1.192-.983h-2zM9.15 10.3q.517-.366.717-.966h2.8v-6H3.333v6h2.8q.2.6.717.966t1.15.367 1.15-.367m-5.817 2.367h9.334z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm8.725-5.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16t1.725-.55"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 14q-.55 0-.941-.391T2 12.667V3.333q0-.55.392-.941T3.333 2h9.334q.55 0 .942.392t.391.941v9.334q0 .55-.391.942t-.942.391zm5.817-3.7q.517-.366.717-.966h2.8v-6H3.333v6h2.8q.2.6.717.966t1.15.367 1.15-.367"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14v-3h-3q-.75.95-1.787 1.475T12 18t-2.212-.525T8 16H5zm8.725-3.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16t1.725-.55M5 19h14z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 14q-.55 0-.941-.391T2 12.667V3.333q0-.55.392-.941T3.333 2h9.334q.55 0 .942.392t.391.941v9.334q0 .55-.391.942t-.942.391zm0-1.333h9.334v-2h-2q-.5.633-1.192.983T8 12t-1.475-.35-1.192-.983h-2zM9.15 10.3q.517-.366.717-.966h2.8v-6H3.333v6h2.8q.2.6.717.966t1.15.367 1.15-.367m-5.817 2.367h9.334z"/></> }
    }
};

export function Inbox({
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

Inbox.displayName = "Inbox";
