import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 14.667q-2.317-.583-3.825-2.658T2.667 7.4V3.333l5.333-2 5.334 2V7.4q0 2.534-1.509 4.609T8 14.667m0-1.4q1.734-.55 2.867-2.2T12 7.4V4.25l-4-1.5-4 1.5V7.4q0 2.017 1.133 3.667T8 13.267M8 8"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.913T12 22"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 14.667q-2.317-.583-3.825-2.658T2.667 7.4V3.333l5.333-2 5.334 2V7.4q0 2.534-1.509 4.609T8 14.667"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 14.667q-2.317-.583-3.825-2.658T2.667 7.4V3.333l5.333-2 5.334 2V7.4q0 2.534-1.509 4.609T8 14.667m0-1.4q1.734-.55 2.867-2.2T12 7.4V4.25l-4-1.5-4 1.5V7.4q0 2.017 1.133 3.667T8 13.267M8 8"/></> }
    }
};

export function Shield({
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

Shield.displayName = "Shield";
