import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8.889 5.333V0H16v5.333zM0 8.89V0h7.111v8.889zM8.889 16V7.111H16V16zM0 16v-5.333h7.111V16zm1.778-8.889h3.555V1.778H1.778zm8.889 7.111h3.555V8.89h-3.555zm0-10.666h3.555V1.778h-3.555zm-8.89 10.666h3.556v-1.778H1.778z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8.889 5.333V0H16v5.333zM0 8.89V0h7.111v8.889zM8.889 16V7.111H16V16zM0 16v-5.333h7.111V16z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M13 3v6h8V3zM3 3v10h8V3zm0 12v6h8v-6zm6-4H5V5h4zm10-4h-4V5h4zM9 19H5v-2h4z" clipRule="evenodd"/><path fill="var(--icon-information)" fillRule="evenodd" d="M13 21V11h8v10zm6-2h-4v-6h4z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M8.889 0v5.333H16V0zM0 0v8.889h7.111V0zm0 10.667V16h7.111v-5.333zM5.333 7.11H1.778V1.778h3.555zm8.89-3.555h-3.556V1.778h3.555zm-8.89 10.666H1.778v-1.778h3.555z" clipRule="evenodd"/><path fill="var(--icon-information)" fillRule="evenodd" d="M8.889 16V7.111H16V16zm5.333-1.778h-3.555V8.89h3.555z" clipRule="evenodd"/></> }
    }
};

export function Dashboard({
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

Dashboard.displayName = "Dashboard";
