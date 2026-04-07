import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.588 20.055q.587.612 1.412.612h8.424a6.4 6.4 0 0 1-1.612-2.084H4V8.167l6.988 4.549.026-.046a6.4 6.4 0 0 1 1.214-1.527l-.228.149-8-5.209h16l-5.975 3.89a6.4 6.4 0 0 1 3.799-.39L20 8.167v2.306a6.4 6.4 0 0 1 2 2.066V6.083q0-.86-.587-1.471A1.9 1.9 0 0 0 20 4H4q-.824 0-1.412.612A2.05 2.05 0 0 0 2 6.083v12.5q0 .86.587 1.472" clipRule="evenodd"/><path fill="currentColor" d="m21.09 15.724-1.609 1.61-1.8-1.768v4.798H15.41v-4.798l-1.8 1.767-1.61-1.61 4.546-4.45z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.47 14.194q.47.49 1.13.49h6.739a5.1 5.1 0 0 1-1.29-1.667H1.6V4.683l5.59 3.64.021-.037c.26-.456.588-.867.971-1.221L8 7.183 1.6 3.017h12.8L9.62 6.128a5.1 5.1 0 0 1 3.04-.312l1.74-1.133v1.845c.65.422 1.2.988 1.6 1.653V3.017q0-.688-.47-1.177a1.5 1.5 0 0 0-1.13-.49H1.6q-.66 0-1.13.49Q0 2.329 0 3.017v10q0 .687.47 1.177" clipRule="evenodd"/><path fill="currentColor" d="m15.273 10.729-1.288 1.288-1.44-1.414v3.838h-1.818v-3.838l-1.44 1.414L8 10.729l3.636-3.56z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 20.667q-.824 0-1.412-.612A2.05 2.05 0 0 1 2 18.583v-12.5q0-.86.587-1.471A1.9 1.9 0 0 1 4 4h16q.824 0 1.413.612.587.612.587 1.471v6.456a6.37 6.37 0 0 0-4.176-2.956L20 8.167V6.083l-5.975 3.89a6.4 6.4 0 0 0-1.797 1.17l-.228.149-8-5.209v2.084l6.988 4.549a6.34 6.34 0 0 0-.806 3.102 6.35 6.35 0 0 0 2.242 4.849z" clipRule="evenodd"/><path fill="currentColor" d="m21.09 15.724-1.609 1.61-1.8-1.768v4.798H15.41v-4.798l-1.8 1.767-1.61-1.61 4.546-4.45z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.6 14.683a1.5 1.5 0 0 1-1.13-.49A1.64 1.64 0 0 1 0 13.018v-10q0-.688.47-1.177a1.5 1.5 0 0 1 1.13-.49h12.8q.66 0 1.13.49.47.489.47 1.177V8.18a5.1 5.1 0 0 0-3.34-2.364l1.74-1.134V3.017L9.62 6.128a5.1 5.1 0 0 0-1.438.937L8 7.183 1.6 3.017v1.666l5.59 3.64a5.07 5.07 0 0 0-.645 2.482 5.08 5.08 0 0 0 1.794 3.878z" clipRule="evenodd"/><path fill="currentColor" d="m15.273 10.729-1.288 1.288-1.44-1.414v3.838h-1.818v-3.838l-1.44 1.414L8 10.729l3.636-3.56z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.588 20.055q.587.612 1.412.612h8.424a6.4 6.4 0 0 1-1.612-2.084H4V8.167l6.988 4.549.026-.046a6.4 6.4 0 0 1 1.214-1.527l-.228.149-8-5.209h16l-5.975 3.89a6.4 6.4 0 0 1 3.799-.39L20 8.167v2.306a6.4 6.4 0 0 1 2 2.066V6.083q0-.86-.587-1.471A1.9 1.9 0 0 0 20 4H4q-.824 0-1.412.612A2.05 2.05 0 0 0 2 6.083v12.5q0 .86.587 1.472" clipRule="evenodd"/><path fill="#0076D8" d="m21.09 15.724-1.609 1.61-1.8-1.768v4.798H15.41v-4.798l-1.8 1.767-1.61-1.61 4.546-4.45z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.47 14.194q.47.49 1.13.49h6.739a5.1 5.1 0 0 1-1.29-1.667H1.6V4.683l5.59 3.64.021-.037c.26-.456.588-.867.971-1.221L8 7.183 1.6 3.017h12.8L9.62 6.128a5.1 5.1 0 0 1 3.04-.312l1.74-1.133v1.845c.65.422 1.2.988 1.6 1.653V3.017q0-.688-.47-1.177a1.5 1.5 0 0 0-1.13-.49H1.6q-.66 0-1.13.49Q0 2.329 0 3.017v10q0 .687.47 1.177" clipRule="evenodd"/><path fill="#0076D8" d="m15.273 10.729-1.288 1.288-1.44-1.414v3.838h-1.818v-3.838l-1.44 1.414L8 10.729l3.636-3.56z"/></> }
    }
};

export function OutgoingMail({
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

OutgoingMail.displayName = "OutgoingMail";
