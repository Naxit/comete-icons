import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12.03 17.872H9.679L4.352 9.824v8.048H2V6.128h2.352l5.326 8.065V6.128h2.353zM22 6.145v1.898h-3.125v9.83h-2.352v-9.83h-3.125V6.145z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8.025 12.695H6.143L1.882 6.257v6.438H0V3.3h1.882l4.26 6.452V3.3h1.883zM16 3.313v1.52h-2.5v7.862h-1.882V4.832h-2.5V3.313z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12.03 17.872H9.679L4.352 9.824v8.048H2V6.128h2.352l5.326 8.065V6.128h2.353zM22 6.145v1.898h-3.125v9.83h-2.352v-9.83h-3.125V6.145z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8.025 12.695H6.143L1.882 6.257v6.438H0V3.3h1.882l4.26 6.452V3.3h1.883zM16 3.313v1.52h-2.5v7.862h-1.882V4.832h-2.5V3.313z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12.03 17.872H9.679L4.352 9.824v8.048H2V6.128h2.352l5.326 8.065V6.128h2.353zM22 6.145v1.898h-3.125v9.83h-2.352v-9.83h-3.125V6.145z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8.025 12.695H6.143L1.882 6.257v6.438H0V3.3h1.882l4.26 6.452V3.3h1.883zM16 3.313v1.52h-2.5v7.862h-1.882V4.832h-2.5V3.313z"/></> }
    }
};

export function NaturalTouch({
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

NaturalTouch.displayName = "NaturalTouch";
