import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 13.65V6h3v7.65l-1.5-1.4zm5 1.5V2h3v10.15zM3 18.6V10h3v5.6zm0 2.45 6.45-6.45L13 17.65l5.6-5.6H17v-2h5v5h-2v-1.6l-6.9 6.9-3.55-3.05-3.75 3.75z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.21 9.785V3.36h2.527v6.425L5.474 8.609zm4.211 1.26V0h2.526v8.525zM0 13.942V6.72h2.526v4.704zM0 16l5.432-5.417 2.989 2.561 4.716-4.703h-1.348V6.76H16v4.2h-1.684V9.617l-5.81 5.795-2.99-2.562L2.358 16z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 13.65V6h3v7.65l-1.5-1.4zm5 1.5V2h3v10.15zM3 18.6V10h3v5.6zm0 2.45 6.45-6.45L13 17.65l5.6-5.6H17v-2h5v5h-2v-1.6l-6.9 6.9-3.55-3.05-3.75 3.75z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.21 9.785V3.36h2.527v6.425L5.474 8.609zm4.211 1.26V0h2.526v8.525zM0 13.942V6.72h2.526v4.704zM0 16l5.432-5.417 2.989 2.561 4.716-4.703h-1.348V6.76H16v4.2h-1.684V9.617l-5.81 5.795-2.99-2.562L2.358 16z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M8 6v7.65l1.5-1.4 1.5 1.4V6zm5-4v13.15l3-3V2zM3 10v8.6l3-3V10z"/><path fill="var(--icon-information)" d="m3 21.05 6.45-6.45L13 17.65l5.6-5.6H17v-2h5v5h-2v-1.6l-6.9 6.9-3.55-3.05-3.75 3.75z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.21 3.36v6.425l1.264-1.176 1.263 1.176V3.36zM8.422 0v11.045l2.526-2.52V0zM0 6.72v7.222l2.526-2.52V6.72z"/><path fill="var(--icon-information)" d="m0 16 5.432-5.417 2.989 2.561 4.716-4.703h-1.348v-1.68H16v4.2h-1.684V9.617l-5.81 5.795-2.99-2.562L2.358 16z"/></> }
    }
};

export function FinanceMode({
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

FinanceMode.displayName = "FinanceMode";
