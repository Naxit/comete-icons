import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M10.125 10.125 14.3 5.95l-.725-.725L8.1 10.7 6.7 9.3l5.45-5.475q.6-.6 1.412-.6.813 0 1.413.6l.725.725 1.25-1.25q.3-.3.713-.3.412 0 .712.3L20.7 5.625q.3.3.3.713 0 .412-.3.712l-3.683 3.683a6 6 0 0 0-6.285 6.286L6.75 21H3v-3.75zm3.05 1.625-.925-.925L17.675 5.4l.925.925zM5.925 19H5v-.925l5.825-5.825.925.925z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M16.781 21q-1.75 0-2.984-1.253-1.235-1.253-1.235-3.032t1.235-3.032q1.233-1.254 2.984-1.254t2.985 1.254T21 16.715t-1.234 3.032-2.985 1.254m2.004-2.85-.59.6-1.836-1.864v-2.742h.844v2.4z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m6.333 6.333 3.711-3.71-.644-.645-4.867 4.866L3.29 5.6 8.133.733A1.72 1.72 0 0 1 9.39.2q.722 0 1.255.533l.645.645L12.4.267A.87.87 0 0 1 13.034 0q.366 0 .633.267l2.067 2.066a.87.87 0 0 1 .266.634.87.87 0 0 1-.266.633L12.46 6.873a5.333 5.333 0 0 0-5.587 5.587L3.334 16H0v-3.334zm2.711 1.445-.822-.823 4.822-4.822.822.822zM2.6 14.222h-.822V13.4l5.177-5.178.823.822z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.25 16q-1.557 0-2.653-1.114T8.5 12.19t1.097-2.696q1.095-1.113 2.653-1.114 1.555 0 2.653 1.114 1.096 1.115 1.096 2.696 0 1.58-1.096 2.695Q13.805 16 12.25 16m1.78-2.533-.524.533-1.631-1.657V9.905h.75v2.133z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M10.125 10.125 14.3 5.95l-.725-.725L8.1 10.7 6.7 9.3l5.45-5.475q.6-.6 1.412-.6.813 0 1.413.6l.725.725 1.25-1.25q.3-.3.713-.3.412 0 .712.3L20.7 5.625q.3.3.3.713 0 .412-.3.712l-3.683 3.683a6 6 0 0 0-6.285 6.286L6.75 21H3v-3.75zM5.925 19H5v-.925l5.825-5.825.925.925z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M16.781 21q-1.75 0-2.984-1.253-1.235-1.253-1.235-3.032t1.235-3.032q1.233-1.254 2.984-1.254t2.985 1.254T21 16.715t-1.234 3.032-2.985 1.254m2.004-2.85-.59.6-1.836-1.864v-2.742h.844v2.4z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m6.333 6.333 3.711-3.71-.644-.645-4.867 4.866L3.29 5.6 8.133.733A1.72 1.72 0 0 1 9.39.2q.722 0 1.255.533l.645.645L12.4.267A.87.87 0 0 1 13.034 0q.366 0 .633.267l2.067 2.066a.87.87 0 0 1 .266.634.87.87 0 0 1-.266.633L12.46 6.873a5.333 5.333 0 0 0-5.587 5.587L3.334 16H0v-3.334zM2.6 14.222h-.822V13.4l5.177-5.178.823.822z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.25 16q-1.557 0-2.653-1.114T8.5 12.19t1.097-2.696Q10.692 8.38 12.25 8.38q1.555 0 2.653 1.114 1.096 1.115 1.096 2.696 0 1.58-1.096 2.695Q13.805 16 12.25 16m1.78-2.533-.524.533-1.631-1.657V9.905h.75v2.133z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M10.125 10.125 14.3 5.95l-.725-.725L8.1 10.7 6.7 9.3l5.45-5.475q.6-.6 1.412-.6.813 0 1.413.6l.725.725 1.25-1.25q.3-.3.713-.3.412 0 .712.3L20.7 5.625q.3.3.3.713 0 .412-.3.712l-3.683 3.683a6 6 0 0 0-6.285 6.286L6.75 21H3v-3.75zm3.05 1.625-.925-.925L17.675 5.4l.925.925zM5.925 19H5v-.925l5.825-5.825.925.925z" clipRule="evenodd"/><path fill="#0076D8" fillRule="evenodd" d="M16.781 21q-1.75 0-2.984-1.253-1.235-1.253-1.235-3.032t1.235-3.032q1.233-1.254 2.984-1.254t2.985 1.254T21 16.715t-1.234 3.032-2.985 1.254m2.004-2.85-.59.6-1.836-1.864v-2.742h.844v2.4z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="m6.333 6.333 3.711-3.71-.644-.645-4.867 4.866L3.29 5.6 8.133.733A1.72 1.72 0 0 1 9.39.2q.722 0 1.255.533l.645.645L12.4.267A.87.87 0 0 1 13.034 0q.366 0 .633.267l2.067 2.066a.87.87 0 0 1 .266.634.87.87 0 0 1-.266.633L12.46 6.873a5.333 5.333 0 0 0-5.587 5.587L3.334 16H0v-3.334zm2.711 1.445-.822-.823 4.822-4.822.822.822zM2.6 14.222h-.822V13.4l5.177-5.178.823.822z" clipRule="evenodd"/><path fill="#0076D8" fillRule="evenodd" d="M12.25 16q-1.557 0-2.653-1.114T8.5 12.19t1.097-2.696q1.095-1.113 2.653-1.114 1.555 0 2.653 1.114 1.096 1.115 1.096 2.696 0 1.58-1.096 2.695Q13.805 16 12.25 16m1.78-2.533-.524.533-1.631-1.657V9.905h.75v2.133z" clipRule="evenodd"/></> }
    }
};

export function PendingSignature({
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

PendingSignature.displayName = "PendingSignature";
