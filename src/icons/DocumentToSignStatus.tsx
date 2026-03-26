import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z"/><path fill="currentColor" fillRule="evenodd" d="m10.75 10.75 2.783-2.783-.483-.484-3.65 3.65-.933-.933L12.1 6.55q.4-.4.942-.4t.941.4l.484.483.833-.833a.65.65 0 0 1 .475-.2q.275 0 .475.2l1.55 1.55q.2.2.2.475a.65.65 0 0 1-.2.475l-4.55 4.55L8.5 18H6v-2.5zm2.033 1.083-.616-.616L15.783 7.6l.617.617zM7.95 16.667h-.617v-.617l3.884-3.883.616.616z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 16v-4.444h1.778v2.666h2.666V16zm11.556 0v-1.778h2.666v-2.666H16V16zM0 4.444V0h4.444v1.778H1.778v2.666zm14.222 0V1.778h-2.666V0H16v4.444z"/><path fill="currentColor" fillRule="evenodd" d="m6.889 6.889 2.474-2.474-.43-.43L5.69 7.23l-.83-.83 3.23-3.244q.355-.356.837-.356.48 0 .837.356l.43.43.74-.742a.58.58 0 0 1 .423-.177q.243 0 .422.177l1.378 1.378q.177.179.177.422 0 .245-.177.423L9.11 9.11l-4.22 4.223H2.667v-2.222zm1.807.963-.548-.548 3.215-3.215.548.548zM4.4 12.148h-.548V11.6l3.452-3.452.548.548z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z"/><path fill="currentColor" fillRule="evenodd" d="m10.75 10.75 2.783-2.783-.483-.484-3.65 3.65-.933-.933L12.1 6.55q.4-.4.942-.4t.941.4l.484.483.833-.833a.65.65 0 0 1 .475-.2q.275 0 .475.2l1.55 1.55q.2.2.2.475a.65.65 0 0 1-.2.475l-4.55 4.55L8.5 18H6v-2.5zm-2.8 5.917h-.617v-.617l3.884-3.883.616.616z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 16v-4.444h1.778v2.666h2.666V16zm11.556 0v-1.778h2.666v-2.666H16V16zM0 4.444V0h4.444v1.778H1.778v2.666zm14.222 0V1.778h-2.666V0H16v4.444z"/><path fill="currentColor" fillRule="evenodd" d="m6.889 6.889 2.474-2.474-.43-.43L5.69 7.23l-.83-.83 3.23-3.244q.355-.356.837-.356.48 0 .837.356l.43.43.74-.742a.58.58 0 0 1 .423-.177q.243 0 .422.177l1.378 1.378q.177.179.177.422 0 .245-.177.423L9.11 9.11l-4.22 4.223H2.667v-2.222zM4.4 12.149h-.548V11.6l3.452-3.452.548.548z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z"/><path fill="currentColor" fillRule="evenodd" d="m10.75 10.75 2.783-2.783-.483-.484-3.65 3.65-.933-.933L12.1 6.55q.4-.4.942-.4t.941.4l.484.483.833-.833a.65.65 0 0 1 .475-.2q.275 0 .475.2l1.55 1.55q.2.2.2.475a.65.65 0 0 1-.2.475l-4.55 4.55L8.5 18H6v-2.5zm2.033 1.083-.616-.616L15.783 7.6l.617.617zM7.95 16.667h-.617v-.617l3.884-3.883.616.616z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M0 16v-4.444h1.778v2.666h2.666V16zm11.556 0v-1.778h2.666v-2.666H16V16zM0 4.444V0h4.444v1.778H1.778v2.666zm14.222 0V1.778h-2.666V0H16v4.444z"/><path fill="currentColor" fillRule="evenodd" d="m6.889 6.889 2.474-2.474-.43-.43L5.69 7.23l-.83-.83 3.23-3.244q.355-.356.837-.356.48 0 .837.356l.43.43.74-.742a.58.58 0 0 1 .423-.177q.243 0 .422.177l1.378 1.378q.177.179.177.422 0 .245-.177.423L9.11 9.11l-4.22 4.223H2.667v-2.222zm1.807.963-.548-.548 3.215-3.215.548.548zM4.4 12.148h-.548V11.6l3.452-3.452.548.548z" clipRule="evenodd"/></> }
    }
};

export function DocumentToSignStatus({
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

DocumentToSignStatus.displayName = "DocumentToSignStatus";
