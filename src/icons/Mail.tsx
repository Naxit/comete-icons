import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4 20.5q-.824 0-1.412-.624A2.1 2.1 0 0 1 2 18.375V5.625q0-.877.587-1.5Q3.176 3.5 4 3.5h16q.824 0 1.413.624Q22 4.75 22 5.625v12.75q0 .877-.587 1.5-.588.625-1.413.625zm8-7.437L4 7.75v10.625h16V7.75zm0-2.126 8-5.312H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.6 14.633a1.5 1.5 0 0 1-1.13-.49A1.64 1.64 0 0 1 0 12.968v-10q0-.688.47-1.177A1.5 1.5 0 0 1 1.6 1.3h12.8q.66 0 1.13.49.47.489.47 1.177v10q0 .687-.47 1.177a1.5 1.5 0 0 1-1.13.49zM8 8.8 1.6 4.633v8.334h12.8V4.633zm0-1.667 6.4-4.166H1.6z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 20.5q-.824 0-1.412-.624A2.1 2.1 0 0 1 2 18.375V5.625q0-.877.587-1.5Q3.176 3.5 4 3.5h16q.824 0 1.413.624Q22 4.75 22 5.625v12.75q0 .877-.587 1.5-.588.625-1.413.625zM4 7.75l8 5.313 8-5.313V5.625l-8 5.313-8-5.313z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.6 14.633a1.5 1.5 0 0 1-1.13-.49A1.64 1.64 0 0 1 0 12.968v-10q0-.688.47-1.177A1.5 1.5 0 0 1 1.6 1.3h12.8q.66 0 1.13.49.47.489.47 1.177v10q0 .687-.47 1.177a1.5 1.5 0 0 1-1.13.49zm0-10L8 8.8l6.4-4.167V2.967L8 7.133 1.6 2.967z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M4 20.5q-.824 0-1.412-.624A2.1 2.1 0 0 1 2 18.375V5.625q0-.877.587-1.5Q3.176 3.5 4 3.5h16q.824 0 1.413.624Q22 4.75 22 5.625v12.75q0 .877-.587 1.5-.588.625-1.413.625zm8-7.437L4 7.75v10.625h16V7.75zm0-2.126 8-5.312H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="M1.6 14.633a1.5 1.5 0 0 1-1.13-.49A1.64 1.64 0 0 1 0 12.968v-10q0-.688.47-1.177A1.5 1.5 0 0 1 1.6 1.3h12.8q.66 0 1.13.49.47.489.47 1.177v10q0 .687-.47 1.177a1.5 1.5 0 0 1-1.13.49zM8 8.8 1.6 4.633v8.334h12.8V4.633zm0-1.667 6.4-4.166H1.6z"/></> }
    }
};

export function Mail({
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

Mail.displayName = "Mail";
