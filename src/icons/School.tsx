import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5.636 16.815 12 20.333l6.364-3.518v-5.556l-1.819.972v3.496L12 18.227l-4.545-2.5V12.23l-1.819-.972z"/><path fill="currentColor" fillRule="evenodd" d="m20.182 10.24-1.818 1.02-1.819.971L12 14.778 7.455 12.23l-1.819-.972L2 9.222l10-5.555 10 5.555zM12 12.649l6.227-3.426L12 5.796 5.773 9.222z" clipRule="evenodd"/><path fill="currentColor" d="M22 16.63V9.221l-1.818 1.019v6.389z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.91 11.519 8 14.333l5.09-2.815V7.075l-1.454.778v2.796l-3.636 2-3.636-2V7.852l-1.455-.778z"/><path fill="currentColor" fillRule="evenodd" d="m14.546 6.26-1.455.814-1.455.778L8 9.889 4.364 7.852l-1.455-.778L0 5.444 8 1l8 4.444zM8 8.184l4.982-2.74L8 2.703l-4.982 2.74z" clipRule="evenodd"/><path fill="currentColor" d="M16 11.37V5.444l-1.454.815v5.111z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="m12 20.333-6.364-3.518v-5.556L2 9.222l10-5.555 10 5.555v7.408h-1.818v-6.39l-1.818 1.02v5.555zm4.546-4.606L12 18.227l-4.545-2.5V12.23L12 14.778l4.546-2.547z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.91 11.519 8 14.333l5.09-2.815V7.075l-1.454.778v2.796l-3.636 2-3.636-2V7.852l-1.455-.778z"/><path fill="currentColor" fillRule="evenodd" d="m14.546 6.26-1.455.814-1.455.778L8 9.889 4.364 7.852l-1.455-.778L0 5.444 8 1l8 4.444z" clipRule="evenodd"/><path fill="currentColor" d="M16 11.37V5.444l-1.454.815v5.111z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M5.636 16.815 12 20.333l6.364-3.518v-5.556l-1.819.972v3.496L12 18.227l-4.545-2.5V12.23l-1.819-.972z"/><path fill="currentColor" fillRule="evenodd" d="m20.182 10.24-1.818 1.02-1.819.971L12 14.778 7.455 12.23l-1.819-.972L2 9.222l10-5.555 10 5.555zM12 12.649l6.227-3.426L12 5.796 5.773 9.222z" clipRule="evenodd"/><path fill="#007ADA" d="M22 16.63V9.221l-1.818 1.019v6.389z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M2.91 11.519 8 14.333l5.09-2.815V7.075l-1.454.778v2.796l-3.636 2-3.636-2V7.852l-1.455-.778z"/><path fill="currentColor" fillRule="evenodd" d="m14.546 6.26-1.455.814-1.455.778L8 9.889 4.364 7.852l-1.455-.778L0 5.444 8 1l8 4.444zM8 8.184l4.982-2.74L8 2.703l-4.982 2.74z" clipRule="evenodd"/><path fill="#007ADA" d="M16 11.37V5.444l-1.454.815v5.111z"/></> }
    }
};

export function School({
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

School.displayName = "School";
