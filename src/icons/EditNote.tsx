import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 14.333v-2h7.714v2zm0-4.166v-2h11.571v2zM4 6V4h11.571v2zm9 14v-3.139l5.625-5.805q.195-.207.432-.298.238-.09.472-.091a1.27 1.27 0 0 1 .917.389l1.179 1.25q.177.2.276.448.099.246.099.49 0 .243-.088.497a1.2 1.2 0 0 1-.287.453L16.027 20zm6.509-8 1.205 1.25-5.223 5.417h-1.205v-1.25z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 9.91V8.245h6.857v1.667zm0-3.47V4.772h10.286v1.667zm0-3.473V1.3h10.286v1.666zm8 11.667v-2.616l5-4.838a1.05 1.05 0 0 1 .384-.247q.21-.077.42-.077.227 0 .436.081.208.081.379.243l1.048 1.042q.156.168.245.373.088.205.088.409 0 .202-.078.414a1 1 0 0 1-.255.378l-4.976 4.838zm5.786-6.667 1.071 1.042-4.643 4.514H9.143V12.48z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 12.333v2h7.714v-2zm0-4.166v2h11.571v-2zM4 4v2h11.571V4zm9 12.861V20h3.027l5.598-5.806a1.2 1.2 0 0 0 .287-.453q.088-.254.088-.498a1.3 1.3 0 0 0-.1-.49 1.6 1.6 0 0 0-.275-.447l-1.179-1.25a1.27 1.27 0 0 0-1.39-.297q-.236.09-.431.297zm2.491 1.806h-1.205v-1.25l3.107-3.195 1.178 1.25z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 8.244v1.667h6.857V8.244zm0-3.472v1.667h10.286V4.772zM0 1.3v1.666h10.286V1.3zm8 10.717v2.616h2.69l4.977-4.838a1 1 0 0 0 .255-.378Q16 9.205 16 9.003q0-.204-.088-.409a1.3 1.3 0 0 0-.245-.373L14.619 7.18a1.16 1.16 0 0 0-.815-.324q-.21 0-.42.077A1.05 1.05 0 0 0 13 7.18zm2.214 1.505H9.143V12.48l2.762-2.662 1.047 1.042z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4 12.333v2h7.714v-2zm0-4.166v2h11.571v-2zM4 4v2h11.571V4z" clipRule="evenodd"/><path fill="var(--icon-information)" fillRule="evenodd" d="M13 20v-3.139l5.625-5.805q.195-.207.432-.298.238-.09.472-.091a1.27 1.27 0 0 1 .917.389l1.179 1.25q.177.2.276.448.099.246.099.49 0 .243-.088.497a1.2 1.2 0 0 1-.287.453L16.027 20zm6.509-8 1.205 1.25-5.223 5.417h-1.205v-1.25z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 8.244v1.667h6.857V8.244zm0-3.472v1.667h10.286V4.772zM0 1.3v1.666h10.286V1.3z" clipRule="evenodd"/><path fill="var(--icon-information)" fillRule="evenodd" d="M8 14.633v-2.616l5-4.838a1.05 1.05 0 0 1 .384-.247q.21-.077.42-.077.227 0 .436.081.208.081.379.243l1.048 1.042q.156.168.245.373.088.205.088.409 0 .202-.078.414a1 1 0 0 1-.255.378l-4.976 4.838zm5.786-6.667 1.071 1.042-4.643 4.514H9.143V12.48z" clipRule="evenodd"/></> }
    }
};

export function EditNote({
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

EditNote.displayName = "EditNote";
