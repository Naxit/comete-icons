import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21v-2h14v2zm7-4q-2.525 0-3.925-1.575t-1.4-4.175V3H9.25v8.4q0 1.4.7 2.275t2.05.875 2.05-.875.7-2.275V3h2.575v8.25q0 2.6-1.4 4.175T12 17"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.8 16v-1.778h12.445V16zm6.222-3.556q-2.244 0-3.489-1.4T3.29 7.334V0h2.289v7.467q0 1.244.622 2.022t1.822.778 1.822-.778.623-2.022V0h2.289v7.333q0 2.311-1.245 3.711-1.244 1.4-3.489 1.4"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5 21v-2h14v2zm7-4q-2.525 0-3.925-1.575t-1.4-4.175V3H9.25v8.4q0 1.4.7 2.275t2.05.875 2.05-.875.7-2.275V3h2.575v8.25q0 2.6-1.4 4.175T12 17"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.8 16v-1.778h12.444V16zm6.222-3.556q-2.245 0-3.489-1.4T3.29 7.334V0h2.289v7.467q0 1.244.622 2.022t1.822.778 1.822-.778.623-2.022V0h2.288v7.333q0 2.311-1.244 3.711-1.245 1.4-3.489 1.4"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M8.075 15.425Q9.475 17 12 17t3.925-1.575 1.4-4.175V3H14.75v8.4q0 1.4-.7 2.275T12 14.55t-2.05-.875-.7-2.275V3H6.675v8.25q0 2.6 1.4 4.175" clipRule="evenodd"/><path fill="var(--icon-information)" d="M5 21v-2h14v2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.533 11.044q1.245 1.4 3.489 1.4 2.245 0 3.489-1.4 1.245-1.4 1.244-3.71V0h-2.289v7.467q0 1.244-.622 2.022t-1.822.778T6.2 9.489t-.622-2.022V0h-2.29v7.333q0 2.311 1.245 3.711" clipRule="evenodd"/><path fill="var(--icon-information)" d="M1.8 16v-1.778h12.444V16z"/></> }
    }
};

export function FormatUnderline({
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

FormatUnderline.displayName = "FormatUnderline";
