import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 18h8v-2H8zm0-4h8v-2H8zm-2 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13V4H6v16h12V9zM6 4v5zv16z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.333 12h5.334v-1.333H5.333zm0-2.666h5.334V8H5.333zM4 14.667q-.55 0-.942-.392t-.391-.941V2.667q0-.55.391-.942T4 1.333h5.334l4 4v8q0 .55-.392.942t-.942.392zM8.667 6V2.667H4v10.667h8V6zM4 2.667V6zv10.667z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 18h8v-2H8zm0-4h8v-2H8zm-2 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.333 12h5.334v-1.333H5.333zm0-2.666h5.334V8H5.333zM4 14.667q-.55 0-.942-.392t-.391-.941V2.667q0-.55.391-.942T4 1.333h5.334l4 4v8q0 .55-.392.942t-.942.392zM8.667 6H12L8.667 2.667z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 18h8v-2H8zm0-4h8v-2H8zm-2 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13V4H6v16h12V9zM6 4v5zv16z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.333 12h5.334v-1.333H5.333zm0-2.666h5.334V8H5.333zM4 14.667q-.55 0-.942-.392t-.391-.941V2.667q0-.55.391-.942T4 1.333h5.334l4 4v8q0 .55-.392.942t-.942.392zM8.667 6V2.667H4v10.667h8V6zM4 2.667V6zv10.667z"/></> }
    }
};

export function Description({
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

Description.displayName = "Description";
