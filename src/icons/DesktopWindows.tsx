import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8.25 20.75v-1.875h1.875V17h-6.25q-.774 0-1.324-.55A1.8 1.8 0 0 1 2 15.124v-10q0-.774.55-1.324.552-.55 1.325-.551h16.25q.774 0 1.324.55.55.552.551 1.325v10q0 .774-.55 1.324-.552.55-1.325.551h-6.25v1.875h1.875v1.875zm-4.375-5.625h16.25v-10H3.875z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5 15v-1.5h1.5V12h-5q-.62 0-1.06-.44A1.45 1.45 0 0 1 0 10.5v-8q0-.62.44-1.06T1.5 1h13q.619 0 1.06.44.44.442.44 1.06v8q0 .619-.44 1.06-.442.44-1.06.44h-5v1.5H11V15zm-3.5-4.5h13v-8h-13z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8.25 20.75v-1.875h1.875V17h-6.25q-.774 0-1.324-.55A1.8 1.8 0 0 1 2 15.124v-10q0-.774.55-1.324.552-.55 1.325-.551h16.25q.774 0 1.324.55.55.552.551 1.325v10q0 .774-.55 1.324-.552.55-1.325.551h-6.25v1.875h1.875v1.875z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M5 15v-1.5h1.5V12h-5q-.62 0-1.06-.44A1.45 1.45 0 0 1 0 10.5v-8q0-.62.44-1.06T1.5 1h13q.619 0 1.06.44.44.442.44 1.06v8q0 .619-.44 1.06-.442.44-1.06.44h-5v1.5H11V15z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#0076D8" d="M8.25 20.75v-1.875h1.875V17h-6.25q-.774 0-1.324-.55A1.8 1.8 0 0 1 2 15.124v-10q0-.774.55-1.324.552-.55 1.325-.551h16.25q.774 0 1.324.55.55.552.551 1.325v10q0 .774-.55 1.324-.552.55-1.325.551h-6.25v1.875h1.875v1.875zm-4.375-5.625h16.25v-10H3.875z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#0076D8" d="M5 15v-1.5h1.5V12h-5q-.62 0-1.06-.44A1.45 1.45 0 0 1 0 10.5v-8q0-.62.44-1.06T1.5 1h13q.619 0 1.06.44.44.442.44 1.06v8q0 .619-.44 1.06-.442.44-1.06.44h-5v1.5H11V15zm-3.5-4.5h13v-8h-13z"/></> }
    }
};

export function DesktopWindows({
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

DesktopWindows.displayName = "DesktopWindows";
