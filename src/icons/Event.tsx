import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12.725 17.275Q12 16.55 12 15.5t.725-1.775T14.5 13t1.775.725T17 15.5t-.725 1.775T14.5 18t-1.775-.725M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8.483 11.517Q8 11.033 8 10.333t.483-1.183 1.184-.483 1.183.483.483 1.183-.483 1.184T9.667 12t-1.184-.483m-5.15 3.15q-.55 0-.941-.392T2 13.333V4q0-.55.392-.941t.941-.392H4V1.333h1.333v1.334h5.334V1.333H12v1.334h.667q.55 0 .942.392T14 4v9.333q0 .55-.391.942t-.942.392zm0-1.334h9.334V6.667H3.333z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12.725 17.275Q12 16.55 12 15.5t.725-1.775T14.5 13t1.775.725T17 15.5t-.725 1.775T14.5 18t-1.775-.725M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8.483 11.517Q8 11.033 8 10.333t.483-1.183 1.184-.483 1.183.483.483 1.183-.483 1.184T9.667 12t-1.184-.483m-5.15 3.15q-.55 0-.941-.392T2 13.333V4q0-.55.392-.941t.941-.392H4V2q0-.283.192-.475t.475-.192.475.192.191.475v.667h5.334V2q0-.283.192-.475t.474-.192.476.192T12 2v.667h.667q.55 0 .942.392T14 4v9.333q0 .55-.391.942t-.942.392zm0-1.334h9.334V6.667H3.333z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12.725 17.275Q12 16.55 12 15.5t.725-1.775T14.5 13t1.775.725T17 15.5t-.725 1.775T14.5 18t-1.775-.725M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8.483 11.517Q8 11.033 8 10.333t.483-1.183 1.184-.483 1.183.483.483 1.183-.483 1.184T9.667 12t-1.184-.483m-5.15 3.15q-.55 0-.941-.392T2 13.333V4q0-.55.392-.941t.941-.392H4V1.333h1.333v1.334h5.334V1.333H12v1.334h.667q.55 0 .942.392T14 4v9.333q0 .55-.391.942t-.942.392zm0-1.334h9.334V6.667H3.333z"/></> }
    }
};

export function Event({
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

Event.displayName = "Event";
