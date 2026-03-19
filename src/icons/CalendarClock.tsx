import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M17.238 22q-1.975 0-3.369-1.393-1.393-1.392-1.393-3.369 0-1.975 1.393-3.369 1.393-1.393 3.37-1.393 1.976 0 3.368 1.393Q22 15.262 22 17.239q0 1.976-1.393 3.368Q19.215 22 17.238 22m2.262-3.167-.667.667-2.071-2.071V14.38h.952v2.667z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M4.857 21.048q-.786 0-1.345-.56a1.83 1.83 0 0 1-.56-1.345V5.81q0-.786.56-1.346t1.345-.56h.953V2h1.904v1.905h7.62V2h1.904v1.905h.953q.785 0 1.345.56.56.558.56 1.345v5.404a6.6 6.6 0 0 0-1.905-.571V9.619H4.857v9.524h6q.167.524.393 1t.536.905zM18.19 7.714H4.858V5.81h13.334z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M12.59 4.571H1.924V3.048H12.59zM.848 14.791q.447.447 1.076.447h5.543a4.6 4.6 0 0 1-.429-.724 6 6 0 0 1-.314-.8h-4.8V6.095H12.59v.82a5.3 5.3 0 0 1 1.524.456V3.048q0-.63-.447-1.077a1.47 1.47 0 0 0-1.077-.447h-.761V0h-1.524v1.524H4.209V0H2.686v1.524h-.762q-.63 0-1.076.447A1.47 1.47 0 0 0 .4 3.048v10.666q0 .63.448 1.076" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.829 16q-1.582 0-2.696-1.114T8.02 12.19t1.114-2.696T11.83 8.38q1.58 0 2.695 1.114t1.114 2.696-1.114 2.695Q13.409 16 11.829 16m1.809-2.533-.533.533-1.658-1.657V9.905h.762v2.133z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M3.512 20.488q.56.56 1.345.56h6.929a6 6 0 0 1-.536-.905 8 8 0 0 1-.393-1h-6V9.619H18.19v1.024a6.7 6.7 0 0 1 1.905.571V5.81q0-.786-.56-1.346a1.83 1.83 0 0 0-1.344-.56h-.953V2h-1.905v1.905H7.714V2H5.81v1.905h-.953q-.786 0-1.345.56-.56.558-.56 1.345v13.333q0 .786.56 1.345"/><path fill="currentColor" fillRule="evenodd" d="M17.238 22q-1.975 0-3.369-1.393-1.393-1.392-1.393-3.369 0-1.975 1.393-3.369 1.393-1.393 3.37-1.393 1.976 0 3.368 1.393Q22 15.262 22 17.239q0 1.976-1.393 3.368Q19.215 22 17.238 22m2.262-3.167-.667.667-2.071-2.071V14.38h.952v2.667z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.848 14.79q.447.448 1.076.448h5.543a4.6 4.6 0 0 1-.429-.724 6 6 0 0 1-.314-.8h-4.8V6.095H12.59v.82a5.3 5.3 0 0 1 1.524.456V3.048q0-.63-.447-1.077a1.47 1.47 0 0 0-1.077-.447h-.761V0h-1.524v1.524H4.209V0H2.686v1.524h-.762q-.63 0-1.076.447A1.47 1.47 0 0 0 .4 3.048v10.666q0 .63.448 1.076" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.829 16q-1.582 0-2.696-1.114T8.02 12.19t1.114-2.696T11.83 8.38q1.58 0 2.695 1.114t1.114 2.696-1.114 2.695Q13.409 16 11.829 16m1.809-2.533-.533.533-1.658-1.657V9.905h.762v2.133z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M18.19 7.714H4.858V5.81h13.334zM3.512 20.488q.56.56 1.345.56h6.929a6 6 0 0 1-.536-.905 8 8 0 0 1-.393-1h-6V9.619H18.19v1.024a6.7 6.7 0 0 1 1.905.571V5.81q0-.786-.56-1.346a1.83 1.83 0 0 0-1.344-.56h-.953V2h-1.905v1.905H7.714V2H5.81v1.905h-.953q-.786 0-1.345.56-.56.558-.56 1.345v13.333q0 .786.56 1.345" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M17.238 22q-1.975 0-3.369-1.393-1.393-1.392-1.393-3.369 0-1.975 1.393-3.369 1.393-1.393 3.37-1.393 1.976 0 3.368 1.393Q22 15.262 22 17.239q0 1.976-1.393 3.368Q19.215 22 17.238 22m2.262-3.167-.667.667-2.071-2.071V14.38h.952v2.667z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M12.59 4.571H1.924V3.048H12.59zM.848 14.791q.447.447 1.076.447h5.543a4.6 4.6 0 0 1-.429-.724 6 6 0 0 1-.314-.8h-4.8V6.095H12.59v.82a5.3 5.3 0 0 1 1.524.456V3.048q0-.63-.447-1.077a1.47 1.47 0 0 0-1.077-.447h-.761V0h-1.524v1.524H4.209V0H2.686v1.524h-.762q-.63 0-1.076.447A1.47 1.47 0 0 0 .4 3.048v10.666q0 .63.448 1.076" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.829 16q-1.582 0-2.696-1.114T8.02 12.19t1.114-2.696T11.83 8.38q1.58 0 2.695 1.114t1.114 2.696-1.114 2.695Q13.409 16 11.829 16m1.809-2.533-.533.533-1.658-1.657V9.905h.762v2.133z" clipRule="evenodd"/></> }
    }
};

export function CalendarClock({
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

CalendarClock.displayName = "CalendarClock";
