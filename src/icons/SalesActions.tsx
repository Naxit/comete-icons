import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6 15h7l2-2H6zm0-4h6V9H6zM4 7v10h7l-2 2H2V5h20v3h-2V7zm18.9 5.3a.38.38 0 0 1 .125.275q0 .15-.125.275l-.9.9L20.25 12l.9-.9a.38.38 0 0 1 .275-.125q.15 0 .275.125zM13 21v-1.75l6.65-6.65 1.75 1.75L14.75 21z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.044 9.61h5.327l1.522-1.522H3.044zm0-3.044H7.61V5.044H3.044zM1.522 3.522v7.61h5.327l-1.522 1.522H0V2h15.22v2.283h-1.522v-.761zm14.383 4.033a.3.3 0 0 1 .095.21.3.3 0 0 1-.095.209l-.685.685-1.332-1.332.685-.685a.3.3 0 0 1 .21-.095q.113 0 .209.095zM8.37 14.176v-1.332l5.06-5.06 1.332 1.331-5.06 5.061z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M2 19V5h20v3h-2l-5 5H6v2h7l-4 4zm4-8h6V9H6zm7 10v-1.75l6.65-6.65 1.75 1.75L14.75 21zm9-7.25L20.25 12l.9-.9a.38.38 0 0 1 .275-.125q.15 0 .275.125l1.2 1.2a.38.38 0 0 1 .125.275q0 .15-.125.275z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 12.566V1.912h15.22v2.283h-1.522L9.893 8H3.044v1.522h5.327l-3.044 3.044zm3.044-6.088H7.61V4.956H3.044zm5.327 7.61v-1.332l5.06-5.06 1.332 1.331-5.06 5.061zm6.849-5.517-1.332-1.332.685-.685a.3.3 0 0 1 .21-.095.3.3 0 0 1 .209.095l.913.913a.3.3 0 0 1 .095.21.3.3 0 0 1-.095.209z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M6 15h7l2-2H6zm0-4h6V9H6zM4 7v10h7l-2 2H2V5h20v3h-2V7z" clipRule="evenodd"/><path fill="#007ADA" d="M13 21v-1.75l6.65-6.65 1.75 1.75L14.75 21zm9.9-8.7a.38.38 0 0 1 .125.275q0 .15-.125.275l-.9.9L20.25 12l.9-.9a.38.38 0 0 1 .275-.125q.15 0 .275.125z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.044 9.61h5.327l1.522-1.522H3.044zm0-3.044H7.61V5.044H3.044zM1.522 3.522v7.61h5.327l-1.522 1.522H0V2h15.22v2.283h-1.522v-.761z" clipRule="evenodd"/><path fill="#007ADA" d="M8.371 14.176v-1.332l5.06-5.06 1.332 1.331-5.06 5.061zm7.534-6.621a.3.3 0 0 1 .095.21.3.3 0 0 1-.095.209l-.685.685-1.332-1.332.685-.685a.3.3 0 0 1 .21-.095q.113 0 .209.095z"/></> }
    }
};

export function SalesActions({
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

SalesActions.displayName = "SalesActions";
