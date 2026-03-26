import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M2.98 19.677V4.444l15.033 6.347h-1.029a9 9 0 0 0-1.242.08 6 6 0 0 0-1.068.237L4.564 6.824v3.777l5.727 1.46-5.728 1.427v3.76l6.171-2.601q-.19.451-.308.987-.12.535-.15.948v.016zm13.45 1.904q-1.89 0-3.24-1.345-1.348-1.345-1.348-3.241 0-1.912 1.349-3.265 1.35-1.353 3.24-1.353t3.24 1.353q1.348 1.353 1.348 3.265 0 1.896-1.348 3.24-1.35 1.346-3.24 1.346m1.63-2.206.68-.714-1.882-1.888V13.98h-.965v3.221zM4.563 14.647V6.824v10.425z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M0 13.25v-12l13.334 5h-.913q-.582 0-1.102.063a6 6 0 0 0-.947.187L1.404 3.125V6.1l5.08 1.15-5.08 1.125v2.963l5.473-2.05a4 4 0 0 0-.273.778q-.105.421-.134.746v.013zm11.93 1.5q-1.677 0-2.874-1.06-1.197-1.059-1.196-2.553 0-1.505 1.196-2.571Q10.253 7.5 11.93 7.5t2.874 1.066Q16 9.63 16 11.137q0 1.494-1.196 2.554-1.197 1.059-2.874 1.059m1.445-1.738.604-.562-1.67-1.487v-2.2h-.856V11.3zM1.404 9.288V3.125v8.213z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M16.43 21.58q-1.89 0-3.24-1.344-1.348-1.345-1.348-3.241 0-1.912 1.349-3.265 1.35-1.353 3.24-1.353t3.24 1.353q1.348 1.353 1.348 3.265 0 1.896-1.348 3.24-1.35 1.346-3.24 1.346m1.63-2.205.68-.714-1.882-1.888V13.98h-.965v3.221z" clipRule="evenodd"/><path fill="currentColor" d="m2.98 4.444 15.033 6.347c-1.119 0-2.262-.037-3.339.317-2.523.546-4.207 2.993-4.399 5.474v.016l-7.294 3.079v-5.765c.8-.145 5.206-1.295 7.31-1.852l-7.31-1.883z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M10.372 6.5 1.404 3.125V6.1l5.08 1.15-5.08 1.125v2.963l2.736-1.025 2.737-1.025C7.174 8.525 8.288 6.9 10.372 6.5"/><path fill="currentColor" fillRule="evenodd" d="M0 5.766V1.25l13.334 5h-.913q-.582 0-1.102.063a6 6 0 0 0-.947.187L1.404 3.125V6.1zm0 2.943v4.541l6.47-2.425v-.012q.028-.325.134-.747.105-.422.273-.778L4.14 10.312l-2.736 1.026V8.375zm11.93 6.041q-1.677 0-2.874-1.06-1.197-1.059-1.196-2.553 0-1.505 1.196-2.571Q10.253 7.5 11.93 7.5t2.874 1.066Q16 9.63 16 11.137q0 1.494-1.196 2.554-1.197 1.059-2.874 1.059m1.445-1.738.604-.562-1.67-1.487v-2.2h-.856V11.3z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.98 4.444v15.233l7.295-3.079v-.016q.032-.412.15-.948.12-.535.31-.987l-6.172 2.602v-3.761l5.728-1.428-5.728-1.46V6.825l10.111 4.284a6 6 0 0 1 1.068-.238 9 9 0 0 1 1.242-.08h1.03z" clipRule="evenodd"/><path fill="var(--icon-information)" fillRule="evenodd" d="M16.43 21.58q-1.89 0-3.24-1.344-1.348-1.345-1.348-3.241 0-1.912 1.349-3.265 1.35-1.353 3.24-1.353t3.24 1.353q1.348 1.353 1.348 3.265 0 1.896-1.348 3.24-1.35 1.346-3.24 1.346m2.31-2.92-.68.715-2.167-2.174v-3.22h.965v2.792z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 1.25v12l6.47-2.425v-.012q.028-.325.134-.747.105-.422.273-.778l-5.473 2.05V8.375l5.08-1.125-5.08-1.15V3.125L10.372 6.5q.428-.125.947-.187a9 9 0 0 1 1.102-.063h.913z" clipRule="evenodd"/><path fill="var(--icon-information)" fillRule="evenodd" d="M11.93 14.75q-1.677 0-2.874-1.06-1.197-1.059-1.196-2.553 0-1.505 1.196-2.571Q10.253 7.5 11.93 7.5t2.874 1.066Q16 9.63 16 11.137q0 1.494-1.196 2.554-1.197 1.059-2.874 1.059m2.049-2.3-.604.562-1.922-1.712V8.763h.856v2.2z" clipRule="evenodd"/></> }
    }
};

export function ScheduleSend({
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

ScheduleSend.displayName = "ScheduleSend";
