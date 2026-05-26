import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 19v-2h2v-7q0-.825.213-1.625T6.85 6.85l1.5 1.5q-.175.4-.262.813T8 10v7h6.2L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4-3.65-3.6zm14-3.85-2-2V10q0-1.65-1.175-2.825T12 6q-.65 0-1.25.2t-1.1.6L8.2 5.35q.5-.4 1.075-.7T10.5 4.2v-.7q0-.625.437-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10zM12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m.825-12.025"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.667 12.667v-1.333H4V6.667q0-.55.142-1.084t.425-1.016l1 1q-.117.266-.175.541t-.059.559v4.667h4.134L.933 2.8l.934-.933 12.267 12.267-.934.933-2.433-2.4zM12 10.1l-1.333-1.333v-2.1q0-1.1-.783-1.884T8 4q-.433 0-.833.133t-.734.4l-.966-.966Q5.8 3.3 6.183 3.1T7 2.8v-.467q0-.416.292-.708T8 1.333t.709.292.291.708V2.8q1.334.333 2.167 1.408T12 6.667zm-4 4.567q-.55 0-.942-.392t-.391-.941h2.667q0 .55-.392.941T8 14.667m.55-8.017"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 19v-2h2v-7q0-.825.213-1.625T6.85 6.85L10 10H7.2L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4-3.65-3.6zm14-3.85-9.8-9.8q.5-.4 1.075-.7T10.5 4.2v-.7q0-.625.438-1.063T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10zM12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.667 12.667v-1.333H4V6.667q0-.55.142-1.084t.425-1.016l2.1 2.1H4.8L.933 2.8l.934-.933 12.267 12.267-.934.933-2.433-2.4zM12 10.1 5.467 3.567Q5.8 3.3 6.183 3.1T7 2.8v-.467q0-.416.292-.708T8 1.333t.709.292.291.708V2.8q1.334.333 2.167 1.408T12 6.667zm-4 4.567q-.55 0-.942-.392t-.391-.941h2.667q0 .55-.392.941T8 14.667"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 19v-2h2v-7q0-.825.213-1.625T6.85 6.85l1.5 1.5q-.175.4-.262.813T8 10v7h6.2L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4-3.65-3.6zm14-3.85-2-2V10q0-1.65-1.175-2.825T12 6q-.65 0-1.25.2t-1.1.6L8.2 5.35q.5-.4 1.075-.7T10.5 4.2v-.7q0-.625.437-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10zM12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m.825-12.025"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.667 12.667v-1.333H4V6.667q0-.55.142-1.084t.425-1.016l1 1q-.117.266-.175.541t-.059.559v4.667h4.134L.933 2.8l.934-.933 12.267 12.267-.934.933-2.433-2.4zM12 10.1l-1.333-1.333v-2.1q0-1.1-.783-1.884T8 4q-.433 0-.833.133t-.734.4l-.966-.966Q5.8 3.3 6.183 3.1T7 2.8v-.467q0-.416.292-.708T8 1.333t.709.292.291.708V2.8q1.334.333 2.167 1.408T12 6.667zm-4 4.567q-.55 0-.942-.392t-.391-.941h2.667q0 .55-.392.941T8 14.667m.55-8.017"/></> }
    }
};

export function NotificationsOff({
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

NotificationsOff.displayName = "NotificationsOff";
