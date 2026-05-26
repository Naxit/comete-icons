import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm8.725-5.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16t1.725-.55"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 14q-.55 0-.941-.391T2 12.667V3.333q0-.55.392-.941T3.333 2h9.334q.55 0 .942.392t.391.941v9.334q0 .55-.391.942t-.942.391zm5.817-3.7q.517-.367.717-.967h2.8v-6H3.333v6h2.8q.2.6.717.967t1.15.367 1.15-.367"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-5q.8 0 1.475-.413t1.1-1.087q.15-.225.375-.363t.5-.137H19V5H5v9h3.55q.275 0 .5.138t.375.362q.425.675 1.1 1.088T12 16"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 14q-.55 0-.941-.391T2 12.667V3.333q0-.55.392-.941T3.333 2h9.334q.55 0 .942.392t.391.941v9.334q0 .55-.391.942t-.942.391zM8 10.667q.533 0 .983-.276t.734-.724q.1-.15.25-.242t.333-.092h2.367v-6H3.333v6H5.7q.183 0 .333.092t.25.242q.284.45.734.725t.983.275"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm8.725-5.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16t1.725-.55"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 14q-.55 0-.941-.391T2 12.667V3.333q0-.55.392-.941T3.333 2h9.334q.55 0 .942.392t.391.941v9.334q0 .55-.391.942t-.942.391zm5.817-3.7q.517-.367.717-.967h2.8v-6H3.333v6h2.8q.2.6.717.967t1.15.367 1.15-.367"/></> }
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
