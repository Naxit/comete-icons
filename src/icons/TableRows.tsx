import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M19.857 19.413V15.84H4.143v3.572zm0-5.715V9.414H4.143v4.285zm0-6.428V3.699H4.143V7.27zM4.143 21.556q-.864 0-1.503-.64-.64-.64-.64-1.503V3.699q0-.885.64-1.514.639-.63 1.503-.63h15.714q.885 0 1.514.63.63.63.629 1.514v15.714q0 .863-.63 1.503t-1.513.64z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M14.286 14.286v-2.857H1.714v2.857zm0-4.572V6.286H1.714v3.428zm0-5.143V1.714H1.714v2.857zM1.714 16q-.69 0-1.202-.512A1.65 1.65 0 0 1 0 14.286V1.714q0-.707.512-1.21A1.66 1.66 0 0 1 1.714 0h12.572q.707 0 1.21.504.504.503.504 1.21v12.572q0 .69-.504 1.202-.503.512-1.21.512z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M19.857 19.413V15.84H4.143v3.572zm0-5.715V9.414H4.143v4.285zm0-6.428V3.699H4.143V7.27zM4.143 21.556q-.864 0-1.503-.64-.64-.64-.64-1.503V3.699q0-.885.64-1.514.639-.63 1.503-.63h15.714q.885 0 1.514.63.63.63.629 1.514v15.714q0 .863-.63 1.503t-1.513.64z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M14.286 14.286v-2.857H1.714v2.857zm0-4.572V6.286H1.714v3.428zm0-5.143V1.714H1.714v2.857zM1.714 16q-.69 0-1.202-.512A1.65 1.65 0 0 1 0 14.286V1.714q0-.707.512-1.21A1.66 1.66 0 0 1 1.714 0h12.572q.707 0 1.21.504.504.503.504 1.21v12.572q0 .69-.504 1.202-.503.512-1.21.512z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M19.857 19.413V15.84H4.143v3.572zm0-5.715V9.414H4.143v4.285zm0-6.428V3.699H4.143V7.27zM4.143 21.556q-.864 0-1.503-.64-.64-.64-.64-1.503V3.699q0-.885.64-1.514.639-.63 1.503-.63h15.714q.885 0 1.514.63.63.63.629 1.514v15.714q0 .863-.63 1.503t-1.513.64z"/><path fill="currentColor" d="M19.857 7.27V3.699H4.143V7.27z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M14.286 14.286v-2.857H1.714v2.857zm0-4.572V6.286H1.714v3.428zm0-5.143V1.714H1.714v2.857zM1.714 16q-.69 0-1.202-.512A1.65 1.65 0 0 1 0 14.286V1.714q0-.707.512-1.21A1.66 1.66 0 0 1 1.714 0h12.572q.707 0 1.21.504.504.503.504 1.21v12.572q0 .69-.504 1.202-.503.512-1.21.512z"/><path fill="currentColor" d="M14.286 4.571V1.714H1.714v2.857z"/></> }
    }
};

export function TableRows({
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

TableRows.displayName = "TableRows";
