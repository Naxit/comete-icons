import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M14.4 15.473a5.5 5.5 0 1 1 1.06-1.06l2.647 2.647c.293.293.53.59 0 1.06s-.767.293-1.06 0zm-3.323-.383a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M10.4 11.473a5.5 5.5 0 1 1 1.06-1.06l2.647 2.647c.293.293.53.59 0 1.06s-.767.293-1.06 0zm-3.323-.383a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M14.4 15.473a5.5 5.5 0 1 1 1.06-1.06l2.647 2.647c.293.293.53.59 0 1.06s-.767.293-1.06 0zm-3.323-.383a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M10.4 11.473a5.5 5.5 0 1 1 1.06-1.06l2.647 2.647c.293.293.53.59 0 1.06s-.767.293-1.06 0zm-3.323-.383a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M14.4 15.473a5.5 5.5 0 1 1 1.06-1.06l2.647 2.647c.293.293.53.59 0 1.06s-.767.293-1.06 0zm-3.323-.383a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="M10.4 11.473a5.5 5.5 0 1 1 1.06-1.06l2.647 2.647c.293.293.53.59 0 1.06s-.767.293-1.06 0zm-3.323-.383a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></> }
    }
};

export function EditorSearch({
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

EditorSearch.displayName = "EditorSearch";
