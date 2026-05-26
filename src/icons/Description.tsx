import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 18h8v-2H8zm0-4h8v-2H8zm-2 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.333 12h5.334v-1.333H5.333zm0-2.667h5.334V8H5.333zM4 14.667q-.55 0-.941-.392t-.392-.942V2.667q0-.55.392-.942T4 1.333h5.333l4 4v8q0 .55-.39.942t-.943.392zM8.667 6H12L8.667 2.667z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9 18h6q.425 0 .713-.288T16 17t-.288-.712T15 16H9q-.425 0-.712.288T8 17t.288.713T9 18m0-4h6q.425 0 .713-.288T16 13t-.288-.712T15 12H9q-.425 0-.712.288T8 13t.288.713T9 14m-3 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.587 1.413T18 22zm7-14q0 .425.288.713T14 9h4l-5-5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6 12h4q.283 0 .475-.192t.192-.475-.192-.474-.475-.192H6q-.283 0-.475.192t-.192.474.192.476T6 12m0-2.667h4q.283 0 .475-.192t.192-.474-.192-.475T10 8H6q-.283 0-.475.192t-.192.475.192.475.475.191m-2 5.334q-.55 0-.941-.392t-.392-.942V2.667q0-.55.392-.942T4 1.333h4.783q.267 0 .509.1t.425.284L12.95 4.95q.183.183.283.425t.1.508v7.45q0 .55-.39.942t-.943.392zm4.667-9.334q0 .284.192.476T9.333 6H12L8.667 2.667z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 18h8v-2H8zm0-4h8v-2H8zm-2 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5.333 12h5.334v-1.333H5.333zm0-2.667h5.334V8H5.333zM4 14.667q-.55 0-.941-.392t-.392-.942V2.667q0-.55.392-.942T4 1.333h5.333l4 4v8q0 .55-.39.942t-.943.392zM8.667 6H12L8.667 2.667z"/></> }
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
