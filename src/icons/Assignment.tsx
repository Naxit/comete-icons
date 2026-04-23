import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm2-2h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zm5.538-4.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213-.213.537.213.538.537.212.538-.213M5 19V5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 14q-.55 0-.941-.392T2 12.667V3.333q0-.55.392-.941T3.333 2h2.8q.217-.6.725-.967T8 .667t1.142.366.725.967h2.8q.55 0 .941.392t.392.941v9.334q0 .55-.392.941t-.941.392zm0-1.333h9.334V3.333H3.333zm1.334-1.334h4.666V10H4.667zm0-2.666h6.666V7.333H4.667zm0-2.667h6.666V4.667H4.667zm3.691-3.308q.142-.142.142-.359t-.142-.358T8 1.833t-.358.142-.142.358.142.359.358.141.358-.141m-5.025 9.975V3.333z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zm5.538-4.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213-.213.537.213.538.537.212.538-.213"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 14q-.55 0-.941-.392T2 12.667V3.333q0-.55.392-.941T3.333 2h2.8q.217-.6.725-.967T8 .667t1.142.366.725.967h2.8q.55 0 .941.392t.392.941v9.334q0 .55-.392.941t-.941.392zm1.334-2.667h4.666V10H4.667zm0-2.666h6.666V7.333H4.667zm0-2.667h6.666V4.667H4.667zm3.691-3.308q.142-.142.142-.359t-.142-.358T8 1.833t-.358.142-.142.358.142.359.358.141.358-.141"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm5.538-4.962Q12.75 3.825 12.75 3.5t-.213-.537T12 2.75t-.537.213-.213.537.213.538.537.212.538-.213ZM5 19V5z"/><path fill="var(--icon-information)" d="M7 17h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 14q-.55 0-.941-.392T2 12.667V3.333q0-.55.392-.941T3.333 2h2.8q.217-.6.725-.967T8 .667t1.142.366.725.967h2.8q.55 0 .941.392t.392.941v9.334q0 .55-.392.941t-.941.392zm0-1.333h9.334V3.333H3.333zm3.692-3.309Q8.5 2.55 8.5 2.333t-.142-.358T8 1.833t-.358.142-.142.358.142.359.358.141.358-.141Zm-3.692 3.309V3.333z"/><path fill="var(--icon-information)" d="M4.667 11.333h4.666V10H4.667zm0-2.666h6.666V7.333H4.667zm0-2.667h6.666V4.667H4.667z"/></> }
    }
};

export function Assignment({
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

Assignment.displayName = "Assignment";
