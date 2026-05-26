import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9.975 20q-3.35 0-5.687-2.325T1.95 12t2.338-5.675T9.974 4H14q3.35 0 5.688 2.325T22.025 12t-2.337 5.675T14 20zM10 18h3.975q2.5 0 4.275-1.75T20.025 12 18.25 7.75 13.975 6H10Q7.5 6 5.725 7.75T3.95 12t1.775 4.25T10 18m.575-4.325L8.45 11.55q-.275-.3-.687-.3t-.713.3-.3.712.3.688l2.475 2.475q.45.45 1.075.45t1.05-.45l5.3-5.3q.3-.275.3-.7t-.3-.7q-.3-.3-.712-.3t-.713.3zM12 12"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6.65 13.334q-2.233 0-3.792-1.55T1.3 8t1.558-3.783 3.792-1.55h2.684q2.233 0 3.791 1.55T14.684 8t-1.559 3.784-3.791 1.55zM6.667 12h2.65q1.667 0 2.85-1.166T13.35 8t-1.183-2.833T9.317 4h-2.65Q5 4 3.817 5.167T2.633 8t1.184 2.834T6.667 12m.383-2.883L5.633 7.7q-.183-.2-.458-.2t-.475.2-.2.475.2.459l1.65 1.65q.3.3.717.3t.7-.3L11.3 6.75q.2-.183.2-.467t-.2-.466q-.2-.2-.475-.2t-.475.2zM8 8"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9.975 20q-3.35 0-5.687-2.325T1.95 12t2.338-5.675T9.974 4H14q3.35 0 5.688 2.325T22.025 12t-2.337 5.675T14 20zm.6-6.325L8.45 11.55q-.275-.3-.687-.3t-.713.3-.3.712.3.688l2.475 2.475q.45.45 1.075.45t1.05-.45l5.3-5.3q.3-.275.3-.7t-.3-.7q-.3-.3-.712-.3t-.713.3z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6.65 13.334q-2.233 0-3.792-1.55T1.3 8t1.558-3.783 3.792-1.55h2.684q2.233 0 3.791 1.55T14.684 8t-1.559 3.784-3.791 1.55zm.4-4.217L5.633 7.7q-.183-.2-.458-.2t-.475.2-.2.475.2.459l1.65 1.65q.3.3.717.3t.7-.3L11.3 6.75q.2-.183.2-.467t-.2-.466q-.2-.2-.475-.2t-.475.2z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M9.975 20q-3.35 0-5.687-2.325T1.95 12t2.338-5.675T9.974 4H14q3.35 0 5.688 2.325T22.025 12t-2.337 5.675T14 20zM10 18h3.975q2.5 0 4.275-1.75T20.025 12 18.25 7.75 13.975 6H10Q7.5 6 5.725 7.75T3.95 12t1.775 4.25T10 18m.575-4.325L8.45 11.55q-.275-.3-.687-.3t-.713.3-.3.712.3.688l2.475 2.475q.45.45 1.075.45t1.05-.45l5.3-5.3q.3-.275.3-.7t-.3-.7q-.3-.3-.712-.3t-.713.3zM12 12"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M6.65 13.334q-2.233 0-3.792-1.55T1.3 8t1.558-3.783 3.792-1.55h2.684q2.233 0 3.791 1.55T14.684 8t-1.559 3.784-3.791 1.55zM6.667 12h2.65q1.667 0 2.85-1.166T13.35 8t-1.183-2.833T9.317 4h-2.65Q5 4 3.817 5.167T2.633 8t1.184 2.834T6.667 12m.383-2.883L5.633 7.7q-.183-.2-.458-.2t-.475.2-.2.475.2.459l1.65 1.65q.3.3.717.3t.7-.3L11.3 6.75q.2-.183.2-.467t-.2-.466q-.2-.2-.475-.2t-.475.2zM8 8"/></> }
    }
};

export function TaskAlt({
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

TaskAlt.displayName = "TaskAlt";
