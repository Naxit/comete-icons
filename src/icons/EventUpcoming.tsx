import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M14.66 19.94v2.116h4.234q.873 0 1.495-.622.622-.621.622-1.494V5.122q0-.873-.622-1.495a2.04 2.04 0 0 0-1.495-.622h-1.058V.89h-2.117v2.116H7.252V.89H5.135v2.116H4.077q-.873 0-1.495.622a2.04 2.04 0 0 0-.622 1.495v8.467h2.117V9.356h14.817V19.94zm4.234-12.701H4.077V5.122h14.817z" clipRule="evenodd"/><path fill="currentColor" d="m8.42 22.056-1.482-1.481 2.725-2.752H1.011v-2.117h8.652l-2.725-2.752 1.482-1.482 5.292 5.292z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M10.759 14.4V16h3.2q.66 0 1.13-.47t.47-1.13V3.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-.8V0h-1.6v1.6h-6.4V0h-1.6v1.6h-.8q-.66 0-1.13.47a1.54 1.54 0 0 0-.47 1.13v6.4h1.6V6.4h11.2v8zm3.2-9.6h-11.2V3.2h11.2z" clipRule="evenodd"/><path fill="currentColor" d="m6.041 16-1.12-1.12 2.06-2.08H.441v-1.6h6.54l-2.06-2.08L6.041 8l4 4z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M14.66 19.94v2.116h4.235q.873 0 1.494-.622.622-.621.622-1.494V5.122q0-.873-.622-1.495a2.04 2.04 0 0 0-1.494-.622h-1.059V.89H15.72v2.116H7.252V.89H5.135v2.116H4.077q-.873 0-1.495.622a2.04 2.04 0 0 0-.622 1.495v8.467h2.117V9.356h14.817V19.94z" clipRule="evenodd"/><path fill="currentColor" d="m8.42 22.056-1.482-1.481 2.726-2.752H1.01v-2.117h8.653l-2.726-2.752 1.482-1.482 5.292 5.292z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M10.759 14.4V16h3.2q.66 0 1.13-.47t.47-1.13V3.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-.8V0h-1.6v1.6h-6.4V0h-1.6v1.6h-.8q-.66 0-1.13.47a1.54 1.54 0 0 0-.47 1.13v6.4h1.6V6.4h11.2v8z" clipRule="evenodd"/><path fill="currentColor" d="m6.041 16-1.12-1.12 2.06-2.08H.441v-1.6h6.54l-2.06-2.08L6.041 8l4 4z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M14.66 19.94v2.116h4.235q.873 0 1.494-.622.622-.621.622-1.494V5.122q0-.873-.622-1.495a2.04 2.04 0 0 0-1.494-.622h-1.059V.89H15.72v2.116H7.252V.89H5.135v2.116H4.077q-.873 0-1.495.622a2.04 2.04 0 0 0-.622 1.495v8.467h2.117V9.356h14.817V19.94zm4.235-12.701H4.077V5.122h14.818z" clipRule="evenodd"/><path fill="#007ADA" d="m8.42 22.056-1.482-1.481 2.726-2.752H1.01v-2.117h8.653l-2.726-2.752 1.482-1.482 5.292 5.292z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M10.759 14.4V16h3.2q.66 0 1.13-.47t.47-1.13V3.2q0-.66-.47-1.13a1.54 1.54 0 0 0-1.13-.47h-.8V0h-1.6v1.6h-6.4V0h-1.6v1.6h-.8q-.66 0-1.13.47a1.54 1.54 0 0 0-.47 1.13v6.4h1.6V6.4h11.2v8zm3.2-9.6h-11.2V3.2h11.2z" clipRule="evenodd"/><path fill="#007ADA" d="m6.041 16-1.12-1.12 2.06-2.08H.441v-1.6h6.54l-2.06-2.08L6.041 8l4 4z"/></> }
    }
};

export function EventUpcoming({
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

EventUpcoming.displayName = "EventUpcoming";
