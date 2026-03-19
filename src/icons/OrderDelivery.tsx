import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M13.861 13.176h-3.97a.95.95 0 0 1-.707-.292 1 1 0 0 1-.286-.724q0-.433.286-.724a.95.95 0 0 1 .707-.292h3.97a.95.95 0 0 1 .707.292q.285.292.286.724 0 .433-.285.724a.95.95 0 0 1-.708.292" clipRule="evenodd"/><path fill="currentColor" d="M3.936 20.288V7.182L2 2.864 3.787 2l2.332 5.13h11.514L19.966 2l1.786.864-1.935 4.318v4.979h-1.985V9.163H5.92v9.093h7.444v2.032z"/><path fill="currentColor" d="m18.501 21-1.265-1.295 1.39-1.448h-3.773v-1.829h3.772l-1.39-1.448 1.266-1.295L22 17.342z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M9.49 9.394H6.312a.77.77 0 0 1-.566-.23.78.78 0 0 1-.228-.57q0-.339.228-.57a.77.77 0 0 1 .566-.229h3.176q.338 0 .566.23a.78.78 0 0 1 .228.57.78.78 0 0 1-.228.569.77.77 0 0 1-.566.23" clipRule="evenodd"/><path fill="currentColor" d="M1.548 14.99V4.677L0 1.28 1.43.6l1.865 4.037h9.212L14.373.6l1.429.68-1.549 3.397v3.918h-1.588V6.236H3.137v7.155h5.955v1.599z"/><path fill="currentColor" d="m13.2 15.55-1.011-1.02 1.111-1.138h-3.017v-1.44H13.3l-1.112-1.139 1.013-1.019L16 12.672z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m18.501 21-1.265-1.295 1.39-1.448h-3.773v-1.829h3.772l-1.39-1.448 1.266-1.295L22 17.342z"/><path fill="currentColor" fillRule="evenodd" d="M3.936 20.288V7.182L2 2.864 3.787 2l2.332 5.13h11.514L19.966 2l1.786.864-1.935 4.318v4.979h-1.985l-2.978-.001a1 1 0 0 0-.285-.724.95.95 0 0 0-.708-.292h-3.97a.95.95 0 0 0-.707.292 1 1 0 0 0-.286.724q0 .433.286.724.285.292.707.292h3.474v7.112z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m13.2 15.55-1.011-1.02 1.111-1.138h-3.017v-1.44H13.3l-1.112-1.139 1.013-1.019L16 12.672z"/><path fill="currentColor" fillRule="evenodd" d="M1.548 14.99V4.677L0 1.28 1.43.6l1.865 4.037h9.212L14.373.6l1.429.68-1.549 3.397v3.918h-3.97a.78.78 0 0 0-.228-.57.77.77 0 0 0-.566-.23H6.313a.77.77 0 0 0-.566.23.78.78 0 0 0-.228.57q0 .34.228.569.228.23.566.23h2.779v5.596z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M13.861 13.176h-3.97a.95.95 0 0 1-.707-.292 1 1 0 0 1-.286-.724q0-.433.286-.724a.95.95 0 0 1 .707-.292h3.97a.95.95 0 0 1 .707.292q.285.292.286.724 0 .433-.285.724a.95.95 0 0 1-.708.292" clipRule="evenodd"/><path fill="currentColor" d="M3.936 20.288V7.182L2 2.864 3.787 2l2.332 5.13h11.514L19.966 2l1.786.864-1.935 4.318v4.979h-1.985V9.163H5.92v9.093h7.444v2.032z"/><path fill="currentColor" d="m18.501 21-1.265-1.295 1.39-1.448h-3.773v-1.829h3.772l-1.39-1.448 1.266-1.295L22 17.342z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M9.49 9.394H6.312a.77.77 0 0 1-.566-.23.78.78 0 0 1-.228-.57q0-.339.228-.57a.77.77 0 0 1 .566-.229h3.176q.338 0 .566.23a.78.78 0 0 1 .228.57.78.78 0 0 1-.228.569.77.77 0 0 1-.566.23" clipRule="evenodd"/><path fill="currentColor" d="M1.548 14.99V4.677L0 1.28 1.43.6l1.865 4.037h9.212L14.373.6l1.429.68-1.549 3.397v3.918h-1.588V6.236H3.137v7.155h5.955v1.599z"/><path fill="currentColor" d="m13.2 15.55-1.011-1.02 1.111-1.138h-3.017v-1.44H13.3l-1.112-1.139 1.013-1.019L16 12.672z"/></> }
    }
};

export function OrderDelivery({
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

OrderDelivery.displayName = "OrderDelivery";
