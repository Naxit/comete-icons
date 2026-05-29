import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M16 7v4.98h-1.5V9.613L11.1 13 10 11.905l3.425-3.411H11V7z"/><path fill="currentColor" fillRule="evenodd" d="M6.667 22q-1.11 0-1.89-.875Q4 20.25 4 19v-3h2.667V2L8 3.5 9.333 2l1.334 1.5L12 2l1.333 1.5L14.667 2 16 3.5 17.333 2l1.334 1.5L20 2v17q0 1.25-.778 2.125-.777.875-1.889.875zm11.3-2.288a.81.81 0 0 1-.634.288.81.81 0 0 1-.633-.288 1.03 1.03 0 0 1-.256-.712v-3h-8V5h9.778v14q0 .424-.255.712m-3.3.288h-8a.81.81 0 0 1-.634-.288A1.03 1.03 0 0 1 5.778 19v-1h8.889z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.132 15.3q.632.7 1.535.7h8.666q.903 0 1.535-.7t.632-1.7V0l-1.083 1.2L12.333 0 11.25 1.2 10.167 0 9.083 1.2 8 0 6.917 1.2 5.833 0 4.75 1.2 3.667 0v11.2H1.5v2.4q0 1 .632 1.7m10.201-.9a.67.67 0 0 0 .515-.23.82.82 0 0 0 .208-.57V2.4H5.11v8.8h6.5v2.4q0 .34.208.57.207.23.514.23m-2.166 0h-6.5a.67.67 0 0 1-.515-.23.82.82 0 0 1-.208-.57v-.8h7.223z" clipRule="evenodd"/><path fill="currentColor" d="M11.25 4v3.983h-1.219V6.091L7.27 8.8l-.894-.876 2.783-2.729h-1.97V4z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.778 21.125Q5.555 22 6.667 22h10.666q1.11 0 1.89-.875Q20 20.25 20 19V2l-1.333 1.5L17.333 2 16 3.5 14.667 2l-1.334 1.5L12 2l-1.333 1.5L9.333 2 8 3.5 6.667 2v14H4v3q0 1.25.778 2.125M17.333 20a.81.81 0 0 0 .634-.288q.255-.287.255-.712V5H8.444v11h8v3q0 .424.256.712.255.288.633.288" clipRule="evenodd"/><path fill="currentColor" d="M16 7v4.98h-1.5V9.613L11.1 13 10 11.905l3.425-3.411H11V7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.132 15.3q.632.7 1.535.7h8.666q.903 0 1.535-.7t.632-1.7V0l-1.083 1.2L12.333 0 11.25 1.2 10.167 0 9.083 1.2 8 0 6.917 1.2 5.833 0 4.75 1.2 3.667 0v11.2H1.5v2.4q0 1 .632 1.7m10.201-.9a.67.67 0 0 0 .515-.23.82.82 0 0 0 .208-.57V2.4H5.11v8.8h6.5v2.4q0 .34.208.57.207.23.514.23" clipRule="evenodd"/><path fill="currentColor" d="M11.25 4v3.983h-1.219V6.091L7.27 8.8l-.894-.876 2.783-2.729h-1.97V4z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.778 21.125Q5.555 22 6.667 22h10.666q1.11 0 1.89-.875Q20 20.25 20 19V2l-1.333 1.5L17.333 2 16 3.5 14.667 2l-1.334 1.5L12 2l-1.333 1.5L9.333 2 8 3.5 6.667 2v14H4v3q0 1.25.778 2.125M17.333 20a.81.81 0 0 0 .634-.288q.255-.287.255-.712V5H8.444v11h8v3q0 .424.256.712.255.288.633.288m-2.666 0h-8a.81.81 0 0 1-.634-.288A1.03 1.03 0 0 1 5.778 19v-1h8.889z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M16 7v4.98h-1.5V9.613L11.1 13 10 11.905l3.425-3.411H11V7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.132 15.3q.632.7 1.535.7h8.666q.903 0 1.535-.7t.632-1.7V0l-1.083 1.2L12.333 0 11.25 1.2 10.167 0 9.083 1.2 8 0 6.917 1.2 5.833 0 4.75 1.2 3.667 0v11.2H1.5v2.4q0 1 .632 1.7m10.201-.9a.67.67 0 0 0 .515-.23.82.82 0 0 0 .208-.57V2.4H5.11v8.8h6.5v2.4q0 .34.208.57.207.23.514.23m-2.166 0h-6.5a.67.67 0 0 1-.515-.23.82.82 0 0 1-.208-.57v-.8h7.223z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M11.25 4v3.983h-1.219V6.091L7.27 8.8l-.894-.876 2.783-2.729h-1.97V4z"/></> }
    }
};

export function InvoiceToApprovedPlatform({
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

InvoiceToApprovedPlatform.displayName = "InvoiceToApprovedPlatform";
