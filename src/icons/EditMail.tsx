import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 20.667q-.824 0-1.412-.612A2.05 2.05 0 0 1 2 18.583v-12.5q0-.86.587-1.471A1.9 1.9 0 0 1 4 4h16q.824 0 1.413.612.587.612.587 1.471v4.735h-2V8.167l-8 5.208-8-5.208v10.416h8v2.084zM20 6.083l-8 5.209-8-5.209z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M13.818 20.818v-2.795l5.023-5a1.24 1.24 0 0 1 .454-.296q.25-.09.5-.09a1.37 1.37 0 0 1 .978.409l.84.84q.182.205.285.455t.102.5-.09.511q-.092.262-.296.466l-5 5zm2.228-1.364h-.864v-.863l2.772-2.75.841.84z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.816 14.383a1.46 1.46 0 0 1-1.092-.473 1.58 1.58 0 0 1-.454-1.137V3.11q0-.664.454-1.137A1.46 1.46 0 0 1 1.816 1.5h12.368q.638 0 1.092.473.453.473.454 1.137v3.66h-1.546V4.72L8 8.748 1.816 4.72v8.052H8v1.61zM14.184 3.11 8 7.136 1.816 3.11z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9.405 14.5v-2.16l3.883-3.866a1 1 0 0 1 .351-.228q.194-.07.387-.07a1.06 1.06 0 0 1 .755.316l.65.65q.14.158.22.351.079.194.079.387a1.2 1.2 0 0 1-.07.395.94.94 0 0 1-.229.36L11.566 14.5zm1.722-1.054h-.668v-.668l2.144-2.125.65.65z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 20.667q-.824 0-1.412-.612A2.05 2.05 0 0 1 2 18.583v-12.5q0-.86.587-1.471A1.9 1.9 0 0 1 4 4h16q.824 0 1.413.612.587.612.587 1.471v4.735h-3.204L12 17.636v3.03zm0-12.5 8 5.208 8-5.208V6.083l-8 5.209-8-5.209z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M13.818 20.818v-2.795l5.023-5a1.24 1.24 0 0 1 .454-.296q.25-.09.5-.09a1.37 1.37 0 0 1 .978.409l.84.84q.182.205.285.455t.102.5-.09.511q-.092.262-.296.466l-5 5zm2.228-1.364h-.864v-.863l2.772-2.75.841.84z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.6 14.683a1.5 1.5 0 0 1-1.13-.49A1.64 1.64 0 0 1 0 13.018v-10q0-.688.47-1.177a1.5 1.5 0 0 1 1.13-.49h12.8q.66 0 1.13.49.47.489.47 1.177v3.788h-2.564L8 12.259v2.424zm0-10L8 8.85l6.4-4.167V3.017L8 7.183 1.6 3.017z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9.455 14.805v-2.237l4.018-4a1 1 0 0 1 .363-.236q.2-.073.4-.073a1.1 1.1 0 0 1 .782.327l.673.673q.146.164.227.364t.082.4-.073.409a1 1 0 0 1-.236.373l-4 4zm1.781-1.091h-.69v-.691l2.218-2.2.672.673z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 20.667q-.824 0-1.412-.612A2.05 2.05 0 0 1 2 18.583v-12.5q0-.86.587-1.471A1.9 1.9 0 0 1 4 4h16q.824 0 1.413.612.587.612.587 1.471v4.735h-2V8.167l-8 5.208-8-5.208v10.416h8v2.084zM20 6.083l-8 5.209-8-5.209z" clipRule="evenodd"/><path fill="var(--icon-information)" fillRule="evenodd" d="M13.818 20.818v-2.795l5.023-5a1.24 1.24 0 0 1 .454-.296q.25-.09.5-.09a1.37 1.37 0 0 1 .978.409l.84.84q.182.205.285.455t.102.5-.09.511q-.092.262-.296.466l-5 5zm2.228-1.364h-.864v-.863l2.772-2.75.841.84z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.546 14.233a1.46 1.46 0 0 1-1.092-.473A1.58 1.58 0 0 1 0 12.623V2.96q0-.663.454-1.137a1.46 1.46 0 0 1 1.092-.473h12.368q.638 0 1.091.473.454.474.454 1.137v3.66h-1.545V4.57L7.73 8.598 1.546 4.57v8.052H7.73v1.61zM13.914 2.96 7.73 6.986 1.546 2.96z" clipRule="evenodd"/><path fill="var(--icon-information)" fillRule="evenodd" d="M9.135 14.35v-2.16l3.883-3.866a1 1 0 0 1 .35-.228q.195-.07.387-.07a1.06 1.06 0 0 1 .756.316l.65.65q.14.158.22.351.078.194.079.387a1.2 1.2 0 0 1-.07.395.94.94 0 0 1-.23.36l-3.864 3.865zm1.722-1.054h-.668v-.667l2.143-2.126.65.65z" clipRule="evenodd"/></> }
    }
};

export function EditMail({
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

EditMail.displayName = "EditMail";
