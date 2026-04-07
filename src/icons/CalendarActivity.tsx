import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4.952 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 2.952 20V6q0-.824.588-1.412A1.93 1.93 0 0 1 4.952 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588.587.587.587 1.412v14q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587zm0-2h14V6.077h-14z"/><path fill="currentColor" d="M14.108 18.077h2.844l-3.2-10h-3.6l-3.2 10h2.845l.555-1.913h3.2zm-3.156-3.952.967-3.299h.078l.966 3.3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.4 16a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 .8 14.4V3.2q0-.66.47-1.13A1.54 1.54 0 0 1 2.4 1.6h.8V0h1.6v1.6h6.4V0h1.6v1.6h.8q.66 0 1.13.47t.47 1.13v11.2q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h11.2V3.262H2.4z"/><path fill="currentColor" d="M9.724 12.862H12l-2.56-8H6.56l-2.56 8h2.276l.444-1.53h2.56zM7.2 9.7l.773-2.639h.063l.773 2.64z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.54 21.413Q4.127 22 4.952 22h14q.825 0 1.413-.587.587-.588.587-1.413V6q0-.824-.587-1.412A1.93 1.93 0 0 0 18.952 4h-1V2h-2v2h-8V2h-2v2h-1q-.824 0-1.412.588A1.93 1.93 0 0 0 2.952 6v14q0 .824.588 1.413m13.412-3.336h-2.844l-.556-1.913h-3.2l-.555 1.913H6.952l3.2-10h3.6zm-6-3.952.967-3.299h.078l.966 3.3z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.27 15.53q.47.47 1.13.47h11.2q.66 0 1.13-.47t.47-1.13V3.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-.8V0h-1.6v1.6H4.8V0H3.2v1.6h-.8q-.66 0-1.13.47A1.54 1.54 0 0 0 .8 3.2v11.2q0 .66.47 1.13M12 12.862H9.724l-.444-1.53H6.72l-.445 1.53H4l2.56-8h2.88zM7.2 9.7l.773-2.639h.062l.774 2.64z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4.952 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 2.952 20V6q0-.824.588-1.412A1.93 1.93 0 0 1 4.952 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588.587.587.587 1.412v14q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587zm0-2h14V6.077h-14z"/><path fill="#0076D8" d="M14.108 18.077h2.844l-3.2-10h-3.6l-3.2 10h2.845l.555-1.913h3.2zm-3.156-3.952.967-3.299h.078l.966 3.3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.4 16a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 .8 14.4V3.2q0-.66.47-1.13A1.54 1.54 0 0 1 2.4 1.6h.8V0h1.6v1.6h6.4V0h1.6v1.6h.8q.66 0 1.13.47t.47 1.13v11.2q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zm0-1.6h11.2V3.262H2.4z"/><path fill="#0076D8" d="M9.724 12.862H12l-2.56-8H6.56l-2.56 8h2.275l.445-1.53h2.56zM7.2 9.7l.773-2.639h.062l.774 2.64z"/></> }
    }
};

export function CalendarActivity({
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

CalendarActivity.displayName = "CalendarActivity";
