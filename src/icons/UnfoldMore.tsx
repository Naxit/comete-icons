import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 21-4.5-4.5 1.45-1.45L12 18.1l3.05-3.05 1.45 1.45zM8.95 9.05 7.5 7.6 12 3.1l4.5 4.5-1.45 1.45L12 6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 14-3-3 .967-.967L8 12.067l2.033-2.034L11 11zM5.967 6.033 5 5.067l3-3 3 3-.967.966L8 4z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 18.1 2.325-2.325q.3-.3.725-.3t.725.3.3.725-.3.725L12.7 20.3q-.15.15-.325.213t-.375.062-.375-.062-.325-.213l-3.075-3.075q-.3-.3-.3-.725t.3-.725.725-.3.725.3zM12 6 9.675 8.325q-.3.3-.725.3t-.725-.3-.3-.725.3-.725L11.3 3.8q.15-.15.325-.213T12 3.526t.375.063.325.212l3.075 3.075q.3.3.3.725t-.3.725-.725.3-.725-.3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 12.067 1.55-1.55q.2-.2.483-.2t.484.2.2.483-.2.483l-2.05 2.05q-.1.1-.217.142t-.25.042-.25-.042-.217-.142l-2.05-2.05q-.2-.2-.2-.483t.2-.483.484-.2.483.2zM8 4 6.45 5.55q-.2.2-.483.2t-.484-.2-.2-.483.2-.484l2.05-2.05q.1-.1.217-.142t.25-.04.25.042.217.141l2.05 2.05q.2.2.2.483t-.2.484-.484.2-.483-.2z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12 21-4.5-4.5 1.45-1.45L12 18.1l3.05-3.05 1.45 1.45zM8.95 9.05 7.5 7.6 12 3.1l4.5 4.5-1.45 1.45L12 6z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8 14-3-3 .967-.967L8 12.067l2.033-2.034L11 11zM5.967 6.033 5 5.067l3-3 3 3-.967.966L8 4z"/></> }
    }
};

export function UnfoldMore({
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

UnfoldMore.displayName = "UnfoldMore";
