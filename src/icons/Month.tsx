import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.827 11.25h2.42l1.663 4.055h.084l1.664-4.055h2.42v7.159h-1.903V14.27h-.056l-1.594 4.083H11.38l-1.594-4.111H9.73v4.167H7.827z"/><path fill="currentColor" fillRule="evenodd" d="M3.54 21.413Q4.127 22 4.952 22h14q.825 0 1.413-.587.587-.588.587-1.413V6q0-.824-.587-1.412A1.93 1.93 0 0 0 18.952 4h-1V2h-2v2h-8V2h-2v2h-1q-.824 0-1.412.588A1.93 1.93 0 0 0 2.952 6v14q0 .824.588 1.413M18.952 20h-14V10h14zm0-12h-14V6h13.99z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.7 7.4h1.935l1.331 3.244h.067L9.365 7.4H11.3v5.727H9.778V9.816h-.044l-1.276 3.266h-.917L6.266 9.795H6.22v3.333H4.7z"/><path fill="currentColor" fillRule="evenodd" d="M1.27 15.53q.47.47 1.13.47h11.2q.66 0 1.13-.47t.47-1.13V3.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-.8V0h-1.6v1.6H4.8V0H3.2v1.6h-.8q-.66 0-1.13.47A1.54 1.54 0 0 0 .8 3.2v11.2q0 .66.47 1.13M13.6 14.4H2.4v-8h11.2zm0-9.6H2.4V3.2h11.192z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M7.827 11.25h2.42l1.663 4.055h.084l1.664-4.055h2.42v7.159h-1.903V14.27h-.056l-1.594 4.083H11.38l-1.594-4.111H9.73v4.167H7.827z"/><path fill="currentColor" fillRule="evenodd" d="M3.54 21.413Q4.127 22 4.952 22h14q.825 0 1.413-.587.587-.588.587-1.413V6q0-.824-.587-1.412A1.93 1.93 0 0 0 18.952 4h-1V2h-2v2h-8V2h-2v2h-1q-.824 0-1.412.588A1.93 1.93 0 0 0 2.952 6v14q0 .824.588 1.413M18.952 20h-14V10h14z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M4.7 7.4h1.935l1.331 3.244h.067L9.364 7.4H11.3v5.727H9.78V9.816h-.046l-1.275 3.266h-.917L6.266 9.795H6.22v3.333H4.7z"/><path fill="currentColor" fillRule="evenodd" d="M1.27 15.53q.47.47 1.13.47h11.2q.66 0 1.13-.47t.47-1.13V3.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-.8V0h-1.6v1.6H4.8V0H3.2v1.6h-.8q-.66 0-1.13.47A1.54 1.54 0 0 0 .8 3.2v11.2q0 .66.47 1.13M13.6 14.4H2.4v-8h11.2z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M7.827 11.25h2.42l1.663 4.055h.084l1.664-4.055h2.42v7.159h-1.903V14.27h-.056l-1.594 4.083H11.38l-1.594-4.111H9.73v4.167H7.827z"/><path fill="currentColor" fillRule="evenodd" d="M3.54 21.413Q4.127 22 4.952 22h14q.825 0 1.413-.587.587-.588.587-1.413V6q0-.824-.587-1.412A1.93 1.93 0 0 0 18.952 4h-1V2h-2v2h-8V2h-2v2h-1q-.824 0-1.412.588A1.93 1.93 0 0 0 2.952 6v14q0 .824.588 1.413M18.952 20h-14V10h14zm0-12h-14V6h13.99z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="M4.7 7.4h1.935l1.331 3.244h.067L9.364 7.4H11.3v5.727H9.78V9.816h-.046l-1.275 3.266h-.917L6.266 9.795H6.22v3.333H4.7z"/><path fill="currentColor" fillRule="evenodd" d="M1.27 15.53q.47.47 1.13.47h11.2q.66 0 1.13-.47t.47-1.13V3.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-.8V0h-1.6v1.6H4.8V0H3.2v1.6h-.8q-.66 0-1.13.47A1.54 1.54 0 0 0 .8 3.2v11.2q0 .66.47 1.13M13.6 14.4H2.4v-8h11.2zm0-9.6H2.4V3.2h11.192z" clipRule="evenodd"/></> }
    }
};

export function Month({
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

Month.displayName = "Month";
