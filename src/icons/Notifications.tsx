import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.5 18.875V17h1.25v-6.25q0-2.266 1.393-3.984Q8.537 5.047 10.75 4.63V3.25q0-.52.365-.885Q11.479 2 12 2q.52 0 .885.365.366.365.365.885v1.38q2.214.417 3.607 2.136 1.393 1.718 1.393 3.984V17h1.25v1.875zM11.995 22q-.776 0-1.323-.55a1.8 1.8 0 0 1-.547-1.325h3.75a1.8 1.8 0 0 1-.552 1.328 1.82 1.82 0 0 1-1.328.547m-4.37-5h8.75v-6.25q0-1.823-1.276-3.099Q13.823 6.376 12 6.375q-1.822 0-3.099 1.276-1.275 1.276-1.276 3.099z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 13.5V12h1V7q0-1.812 1.115-3.187Q5.229 2.437 7 2.104V1q0-.417.292-.708A.96.96 0 0 1 8 0q.417 0 .708.292Q9 .583 9 1v1.104q1.77.333 2.885 1.709Q13.001 5.188 13 7v5h1v1.5zM7.996 16q-.621 0-1.059-.44A1.45 1.45 0 0 1 6.5 14.5h3q0 .624-.442 1.063A1.46 1.46 0 0 1 7.996 16M4.5 12h7V7q0-1.458-1.02-2.48Q9.457 3.5 8 3.5T5.52 4.52Q4.5 5.543 4.5 7z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.5 18.875V17h1.25v-6.25q0-2.266 1.393-3.984Q8.537 5.047 10.75 4.63V3.25q0-.52.365-.885Q11.479 2 12 2q.52 0 .885.365.366.365.365.885v1.38q2.214.417 3.607 2.136 1.393 1.718 1.393 3.984V17h1.25v1.875zM11.995 22q-.776 0-1.323-.55a1.8 1.8 0 0 1-.547-1.325h3.75a1.8 1.8 0 0 1-.552 1.328 1.82 1.82 0 0 1-1.328.547" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 13.5V12h1V7q0-1.812 1.115-3.187Q5.229 2.437 7 2.104V1q0-.417.292-.708A.96.96 0 0 1 8 0q.417 0 .708.292Q9 .583 9 1v1.104q1.77.333 2.885 1.709Q13.001 5.188 13 7v5h1v1.5zM7.996 16q-.621 0-1.059-.44A1.45 1.45 0 0 1 6.5 14.5h3q0 .624-.442 1.063A1.46 1.46 0 0 1 7.996 16" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.5 18.875V17h1.25v-6.25q0-2.266 1.393-3.984Q8.537 5.047 10.75 4.63V3.25q0-.52.365-.885Q11.479 2 12 2q.52 0 .885.365.366.365.365.885v1.38q2.214.417 3.607 2.136 1.393 1.718 1.393 3.984V17h1.25v1.875zM11.995 22q-.776 0-1.323-.55a1.8 1.8 0 0 1-.547-1.325h3.75a1.8 1.8 0 0 1-.552 1.328 1.82 1.82 0 0 1-1.328.547m-4.37-5h8.75v-6.25q0-1.823-1.276-3.099Q13.823 6.376 12 6.375q-1.822 0-3.099 1.276-1.275 1.276-1.276 3.099z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 13.5V12h1V7q0-1.812 1.115-3.187Q5.229 2.437 7 2.104V1q0-.417.292-.708A.96.96 0 0 1 8 0q.417 0 .708.292Q9 .583 9 1v1.104q1.77.333 2.885 1.709Q13.001 5.188 13 7v5h1v1.5zM7.996 16q-.621 0-1.059-.44A1.45 1.45 0 0 1 6.5 14.5h3q0 .624-.442 1.063A1.46 1.46 0 0 1 7.996 16M4.5 12h7V7q0-1.458-1.02-2.48Q9.457 3.5 8 3.5T5.52 4.52Q4.5 5.543 4.5 7z" clipRule="evenodd"/></> }
    }
};

export function Notifications({
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

Notifications.displayName = "Notifications";
