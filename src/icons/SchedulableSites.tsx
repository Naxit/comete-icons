import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 2v17.914h3.015L5 15.934h4v3.98h4.233a5.4 5.4 0 0 1-1.037-1.99H12v-1.991h.027a5.4 5.4 0 0 1 .602-1.99H12v-1.99h2V9.961h-2v-1.99h8v3.702a5.5 5.5 0 0 1 2 1.8V5.981H12V2zm4 11.943H4v-1.99h2zm0-3.981H4v-1.99h2zM6 5.98H4V3.99h2zm4 7.962H8v-1.99h2zm0-3.981H8v-1.99h2zm0-3.981H8V3.99h2z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M18 9.962v1.112a5.6 5.6 0 0 0-2 .169V9.962zM17.472 21c2.455 0 4.445-1.98 4.445-4.423s-1.99-4.424-4.445-4.424-4.444 1.98-4.444 4.424c0 2.443 1.99 4.423 4.444 4.423m2.142-3.008-.637.633L17 16.657v-2.895h.91v2.533z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 .5v14.4h2.412L2.4 11.7h3.2v3.2h3.387a4.35 4.35 0 0 1-.83-1.6H8v-1.6h.022a4.3 4.3 0 0 1 .481-1.6H8V8.5h1.6V6.9H8V5.3h6.4v2.976A4.4 4.4 0 0 1 16 9.723V3.7H8V.5zm3.2 9.6H1.6V8.5h1.6zm0-3.2H1.6V5.3h1.6zm0-3.2H1.6V2.1h1.6zm3.2 6.4H4.8V8.5h1.6zm0-3.2H4.8V5.3h1.6zm0-3.2H4.8V2.1h1.6z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.8 6.9v.894a4.4 4.4 0 0 0-1.6.136V6.9zm3.133 5.317a3.555 3.555 0 1 1-7.11 0 3.555 3.555 0 0 1 7.11 0m-1.842 1.137-.51.51L12 12.282V9.955h.727v2.036z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 2v17.914h3.015L5 15.934h4v3.98h4.233a5.4 5.4 0 0 1-1.037-1.99H12v-1.991h.027a5.4 5.4 0 0 1 .602-1.99H12v-1.99h2V9.961h-2v-1.99h8v3.702a5.5 5.5 0 0 1 2 1.8V5.981H12V2zm4 11.943H4v-1.99h2zm0-3.981H4v-1.99h2zM6 5.98H4V3.99h2zm4 7.962H8v-1.99h2zm0-3.981H8v-1.99h2zm0-3.981H8V3.99h2z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M18 9.962v1.112a5.6 5.6 0 0 0-2 .169V9.962zM17.472 21c2.455 0 4.445-1.98 4.445-4.423s-1.99-4.424-4.445-4.424-4.444 1.98-4.444 4.424c0 2.443 1.99 4.423 4.444 4.423m2.142-3.008-.637.633L17 16.657v-2.895h.91v2.533z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 .5v14.4h2.412L2.4 11.7h3.2v3.2h3.387a4.35 4.35 0 0 1-.83-1.6H8v-1.6h.022a4.3 4.3 0 0 1 .481-1.6H8V8.5h1.6V6.9H8V5.3h6.4v2.976A4.4 4.4 0 0 1 16 9.723V3.7H8V.5zm3.2 9.6H1.6V8.5h1.6zm0-3.2H1.6V5.3h1.6zm0-3.2H1.6V2.1h1.6zm3.2 6.4H4.8V8.5h1.6zm0-3.2H4.8V5.3h1.6zm0-3.2H4.8V2.1h1.6z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.8 6.9v.894a4.4 4.4 0 0 0-1.6.136V6.9zm3.133 5.317a3.555 3.555 0 1 1-7.11 0 3.555 3.555 0 0 1 7.11 0m-1.842 1.137-.51.51L12 12.282V9.955h.727v2.036z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 2v17.914h3.015L5 15.934h4v3.98h4.233a5.4 5.4 0 0 1-1.037-1.99H12v-1.991h.027a5.4 5.4 0 0 1 .602-1.99H12v-1.99h2V9.961h-2v-1.99h8v3.702a5.5 5.5 0 0 1 2 1.8V5.981H12V2zm4 11.943H4v-1.99h2zm0-3.981H4v-1.99h2zM6 5.98H4V3.99h2zm4 7.962H8v-1.99h2zm0-3.981H8v-1.99h2zm0-3.981H8V3.99h2z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M18 9.962v1.112a5.6 5.6 0 0 0-2 .169V9.962z" clipRule="evenodd"/><path fill="#0076D8" fillRule="evenodd" d="M21.917 16.577c0 2.443-1.99 4.423-4.445 4.423s-4.444-1.98-4.444-4.423 1.99-4.424 4.444-4.424c2.455 0 4.445 1.98 4.445 4.424m-2.303 1.415-.637.633L17 16.657v-2.895h.91v2.533z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 .5v14.4h2.412L2.4 11.7h3.2v3.2h3.387a4.35 4.35 0 0 1-.83-1.6H8v-1.6h.022a4.3 4.3 0 0 1 .481-1.6H8V8.5h1.6V6.9H8V5.3h6.4v2.976A4.4 4.4 0 0 1 16 9.723V3.7H8V.5zm3.2 9.6H1.6V8.5h1.6zm0-3.2H1.6V5.3h1.6zm0-3.2H1.6V2.1h1.6zm3.2 6.4H4.8V8.5h1.6zm0-3.2H4.8V5.3h1.6zm0-3.2H4.8V2.1h1.6z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.8 6.9v.894a4.4 4.4 0 0 0-1.6.136V6.9z" clipRule="evenodd"/><path fill="#0076D8" fillRule="evenodd" d="M15.933 12.217a3.555 3.555 0 1 1-7.11 0 3.555 3.555 0 0 1 7.11 0m-1.842 1.137-.51.51L12 12.282V9.955h.727v2.036z" clipRule="evenodd"/></> }
    }
};

export function SchedulableSites({
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

SchedulableSites.displayName = "SchedulableSites";
