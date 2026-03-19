import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12.537 12.417 4.435-4.31L15.834 7l-3.317 3.223-1.648-1.602-1.12 1.087z"/><path fill="currentColor" fillRule="evenodd" d="M6.445 22q-1.158 0-1.968-.875T3.667 19v-3h2.778V2l1.388 1.5L9.223 2l1.388 1.5 1.39-1.5 1.388 1.5L14.778 2l1.389 1.5L17.556 2l1.389 1.5L20.333 2v12.727h-1.851V5H8.296v11h4.765v2H5.519v1q0 .424.266.712a.86.86 0 0 0 .66.288h6.616v2z" clipRule="evenodd"/><path fill="currentColor" d="m15.814 21.356-1.056-1.075 2.226-2.226h-1.698v-1.51h4.263v4.264H18.04v-1.68z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8.096 8.333 3.548-3.448-.91-.885L8.08 6.579 6.761 5.297l-.894.87z"/><path fill="currentColor" fillRule="evenodd" d="M3.222 16q-.926 0-1.574-.7T1 13.6v-2.4h2.222V0l1.111 1.2L5.444 0l1.112 1.2L7.666 0l1.112 1.2L9.888 0 11 1.2 12.111 0l1.111 1.2L14.333 0v10.182h-1.481V2.4H4.704v8.8h3.811v1.6H2.481v.8q0 .34.213.57a.7.7 0 0 0 .528.23h5.293V16z" clipRule="evenodd"/><path fill="currentColor" d="m10.718 15.485-.845-.86 1.78-1.781h-1.358v-1.208h3.411v3.411H12.5v-1.343z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12.537 12.417 4.435-4.31L15.834 7l-3.317 3.223-1.648-1.602-1.12 1.087z"/><path fill="currentColor" d="M6.445 22q-1.158 0-1.968-.875T3.667 19v-3h2.778V2l1.388 1.5L9.223 2l1.388 1.5 1.39-1.5 1.388 1.5L14.778 2l1.389 1.5L17.556 2l1.389 1.5L20.333 2v12.727h-1.851V5H8.296v11h4.765v6z"/><path fill="currentColor" d="m15.814 21.356-1.056-1.075 2.226-2.226h-1.698v-1.51h4.263v4.264H18.04v-1.68z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8.096 8.333 3.548-3.448-.91-.885L8.08 6.579 6.761 5.297l-.894.87zm2.622 7.152-.845-.86 1.78-1.781h-1.358v-1.208h3.411v3.411H12.5v-1.343z"/><path fill="currentColor" d="M3.222 16q-.926 0-1.574-.7T1 13.6v-2.4h2.222V0l1.111 1.2L5.444 0l1.112 1.2L7.666 0l1.112 1.2L9.888 0 11 1.2 12.111 0l1.111 1.2L14.333 0v10.182h-1.481V2.4H4.704v8.8h3.811V16z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m12.537 12.417 4.435-4.31L15.834 7l-3.317 3.223-1.648-1.602-1.12 1.087z"/><path fill="currentColor" fillRule="evenodd" d="M6.445 22q-1.158 0-1.968-.875T3.667 19v-3h2.778V2l1.388 1.5L9.223 2l1.388 1.5 1.39-1.5 1.388 1.5L14.778 2l1.389 1.5L17.556 2l1.389 1.5L20.333 2v12.727h-1.851V5H8.296v11h4.765v2H5.519v1q0 .424.266.712a.86.86 0 0 0 .66.288h6.616v2z" clipRule="evenodd"/><path fill="currentColor" d="m15.814 21.356-1.056-1.075 2.226-2.226h-1.698v-1.51h4.263v4.264H18.04v-1.68z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8.096 8.333 3.548-3.448-.91-.885L8.08 6.579 6.761 5.297l-.894.87z"/><path fill="currentColor" fillRule="evenodd" d="M3.222 16q-.926 0-1.574-.7T1 13.6v-2.4h2.222V0l1.111 1.2L5.444 0l1.112 1.2L7.666 0l1.112 1.2L9.888 0 11 1.2 12.111 0l1.111 1.2L14.333 0v10.182h-1.481V2.4H4.704v8.8h3.811v1.6H2.481v.8q0 .34.213.57a.7.7 0 0 0 .528.23h5.293V16z" clipRule="evenodd"/><path fill="currentColor" d="m10.718 15.485-.845-.86 1.78-1.781h-1.358v-1.208h3.411v3.411H12.5v-1.343z"/></> }
    }
};

export function InvoicesExport({
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

InvoicesExport.displayName = "InvoicesExport";
