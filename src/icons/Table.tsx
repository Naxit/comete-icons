import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4.143 21.556q-.983 0-1.563-.58Q2 20.394 2 19.412V3.699q0-.983.58-1.563t1.563-.58h15.714q.982 0 1.563.58.58.58.58 1.563v15.714q0 .982-.58 1.562t-1.563.58zm6.786-6.786H4.143v4.643h6.786zm2.142 0v4.643h6.786V14.77zm-2.142-2.143V7.984H4.143v4.643zm2.142 0h6.786V7.984h-6.786zM4.143 5.841h15.714V3.7H4.143z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.714 16q-.785 0-1.25-.464Q0 15.07 0 14.286V1.714Q0 .93.464.464.93 0 1.714 0h12.572q.785 0 1.25.464Q16 .93 16 1.714v12.572q0 .785-.464 1.25-.465.464-1.25.464zm5.429-5.429H1.714v3.715h5.429zm1.714 0v3.715h5.429V10.57zM7.143 8.857V5.143H1.714v3.714zm1.714 0h5.429V5.143H8.857zM1.714 3.43h12.572V1.714H1.714z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4.143 21.556q-.983 0-1.563-.58Q2 20.394 2 19.412V3.699q0-.983.58-1.563t1.563-.58h15.714q.982 0 1.563.58.58.58.58 1.563v15.714q0 .982-.58 1.562t-1.563.58zm6.786-6.786H4.143v4.643h6.786zm2.142 0v4.643h6.786V14.77zm-2.142-2.143V7.984H4.143v4.643zm2.142 0h6.786V7.984h-6.786zM4.143 5.841h15.714V3.7H4.143z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.714 16q-.785 0-1.25-.464Q0 15.07 0 14.286V1.714Q0 .93.464.464.93 0 1.714 0h12.572q.785 0 1.25.464Q16 .93 16 1.714v12.572q0 .785-.464 1.25-.465.464-1.25.464zm5.429-5.429H1.714v3.715h5.429zm1.714 0v3.715h5.429V10.57zM7.143 8.857V5.143H1.714v3.714zm1.714 0h5.429V5.143H8.857zM1.714 3.43h12.572V1.714H1.714z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M4.143 21.556q-.983 0-1.563-.58Q2 20.394 2 19.412V3.699q0-.983.58-1.563t1.563-.58h15.714q.982 0 1.563.58.58.58.58 1.563v15.714q0 .982-.58 1.562t-1.563.58zm6.786-6.786H4.143v4.643h6.786zm2.142 0v4.643h6.786V14.77zm-2.142-2.143V7.984H4.143v4.643zm2.142 0h6.786V7.984h-6.786zM4.143 5.841h15.714V3.7H4.143z"/><path fill="var(--icon-information)" d="M4.143 5.841h15.714V3.7H4.143z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M1.714 16q-.785 0-1.25-.464Q0 15.07 0 14.286V1.714Q0 .93.464.464.93 0 1.714 0h12.572q.785 0 1.25.464Q16 .93 16 1.714v12.572q0 .785-.464 1.25-.465.464-1.25.464zm5.429-5.429H1.714v3.715h5.429zm1.714 0v3.715h5.429V10.57zM7.143 8.857V5.143H1.714v3.714zm1.714 0h5.429V5.143H8.857zM1.714 3.43h12.572V1.714H1.714z"/><path fill="var(--icon-information)" d="M1.714 3.429h12.572V1.714H1.714z"/></> }
    }
};

export function Table({
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

Table.displayName = "Table";
