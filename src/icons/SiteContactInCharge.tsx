import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.49 19.01q.489.49 1.177.49h16.666q.688 0 1.177-.49.49-.489.49-1.177V6.167q0-.688-.49-1.177a1.6 1.6 0 0 0-1.177-.49H3.667q-.688 0-1.177.49Q2 5.479 2 6.167v11.666q0 .688.49 1.177m14.093-1.177h3.75V6.167H3.667v11.666h3.75V9.5h5V12h4.166zm-5.833 0H9.09l-.007-1.666h1.667z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.392 13.608q.391.392.941.392h13.334q.55 0 .941-.392.392-.391.392-.941V3.333q0-.55-.392-.941A1.28 1.28 0 0 0 14.667 2H1.333q-.55 0-.941.392A1.28 1.28 0 0 0 0 3.333v9.334q0 .55.392.941m11.275-.941h3V3.333H1.333v9.334h3V6h4v2h3.334zm-4.667 0H5.672l-.005-1.334H7z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.49 19.01q.489.49 1.177.49h16.666q.688 0 1.177-.49.49-.489.49-1.177V6.167q0-.688-.49-1.177a1.6 1.6 0 0 0-1.177-.49H3.667q-.688 0-1.177.49Q2 5.479 2 6.167v11.666q0 .688.49 1.177M7.417 9.5v8.333H9.09l-.007-1.666h1.667v1.666h5.833V12h-4.166V9.5z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.392 13.608q.391.392.941.392h13.334q.55 0 .941-.392.392-.391.392-.941V3.333q0-.55-.392-.941A1.28 1.28 0 0 0 14.667 2H1.333q-.55 0-.941.392A1.28 1.28 0 0 0 0 3.333v9.334q0 .55.392.941M4.333 6v6.667h1.339l-.005-1.334H7v1.334h4.667V8H8.333V6z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" fillRule="evenodd" d="M7.417 9.5v8.333H9.09l-.007-1.666h1.667v1.666h5.833V12h-4.166V9.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M3.667 19.5q-.688 0-1.177-.49A1.6 1.6 0 0 1 2 17.833V6.167q0-.688.49-1.177.489-.49 1.177-.49h16.666q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zM20.333 6.167v11.666H3.667V6.167z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" fillRule="evenodd" d="M4.333 6v6.667h1.339l-.005-1.334H7v1.334h4.667V8H8.333V6z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M1.333 14q-.55 0-.941-.392A1.28 1.28 0 0 1 0 12.667V3.333q0-.55.392-.941Q.783 2 1.333 2h13.334q.55 0 .941.392.392.391.392.941v9.334q0 .55-.392.941a1.28 1.28 0 0 1-.941.392zM14.667 3.333v9.334H1.333V3.333z" clipRule="evenodd"/></> }
    }
};

export function SiteContactInCharge({
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

SiteContactInCharge.displayName = "SiteContactInCharge";
