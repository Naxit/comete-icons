import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M9 12.5h1v-2h1q.424 0 .713-.287A.97.97 0 0 0 12 9.5v-1a.97.97 0 0 0-.287-.713A.97.97 0 0 0 11 7.5H9zm1-4v1h1v-1zm3 4h2q.424 0 .713-.287A.97.97 0 0 0 16 11.5v-3a.97.97 0 0 0-.287-.713A.97.97 0 0 0 15 7.5h-2zm1-4v3h1v-3z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M6.588 17.413Q7.175 18 8 18h12q.824 0 1.413-.587Q22 16.825 22 16V4q0-.824-.587-1.412A1.93 1.93 0 0 0 20 2H8q-.824 0-1.412.587A1.93 1.93 0 0 0 6 4v12q0 .824.588 1.413M20 16H8V4h12zM2.588 21.413Q3.174 22 4 22h14v-2H4V6H2v14q0 .824.587 1.413" clipRule="evenodd"/><path fill="currentColor" d="M17 12.5h1v-2h1v-1h-1v-1h1v-1h-2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M5.6 8.4h.8V6.8h.8a.77.77 0 0 0 .57-.23A.77.77 0 0 0 8 6v-.8a.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23H5.6zm.8-3.2V6h.8v-.8zm2.4 3.2h1.6a.77.77 0 0 0 .57-.23.77.77 0 0 0 .23-.57V5.2a.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23H8.8zm.8-3.2v2.4h.8V5.2z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M3.67 12.33q.47.47 1.13.47h9.6q.66 0 1.13-.47T16 11.2V1.6q0-.66-.47-1.13A1.54 1.54 0 0 0 14.4 0H4.8q-.66 0-1.13.47A1.54 1.54 0 0 0 3.2 1.6v9.6q0 .66.47 1.13M14.4 11.2H4.8V1.6h9.6zM.47 15.53Q.94 16 1.6 16h11.2v-1.6H1.6V3.2H0v11.2q0 .66.47 1.13" clipRule="evenodd"/><path fill="currentColor" d="M12 8.4h.8V6.8h.8V6h-.8v-.8h.8v-.8H12z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M8 18q-.824 0-1.412-.587A1.93 1.93 0 0 1 6 16V4q0-.824.588-1.412A1.93 1.93 0 0 1 8 2h12q.824 0 1.413.587Q22 3.176 22 4v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18zm-4 4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 20V6h2v14h14v2zm6-9.5H9v-5h2q.424 0 .713.287.287.288.287.713v1q0 .424-.287.713A.97.97 0 0 1 11 10.5h-1zm0-3v-1h1v1zm5 3q.424 0 .713-.287A.97.97 0 0 0 16 11.5v-3a.97.97 0 0 0-.287-.713A.97.97 0 0 0 15 7.5h-2v5zm-1-4v3h1v-3zm4 4h-1v-5h2v1h-1v1h1v1h-1z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.8 12.8a1.54 1.54 0 0 1-1.13-.47 1.54 1.54 0 0 1-.47-1.13V1.6q0-.66.47-1.13A1.54 1.54 0 0 1 4.8 0h9.6q.66 0 1.13.47T16 1.6v9.6q0 .66-.47 1.13a1.54 1.54 0 0 1-1.13.47zM1.6 16a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 14.4V3.2h1.6v11.2h11.2V16zm4.8-7.6h-.8v-4h1.6q.34 0 .57.23T8 5.2V6a.77.77 0 0 1-.23.57.77.77 0 0 1-.57.23h-.8zm0-2.4v-.8h.8V6zm4 2.4a.77.77 0 0 0 .57-.23.77.77 0 0 0 .23-.57V5.2a.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23H8.8v4zm-.8-3.2v2.4h.8V5.2zm3.2 3.2H12v-4h1.6v.8h-.8V6h.8v.8h-.8z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" fillRule="evenodd" d="M9 12.5h1v-2h1q.424 0 .713-.287A.97.97 0 0 0 12 9.5v-1a.97.97 0 0 0-.287-.713A.97.97 0 0 0 11 7.5H9zm1-4v1h1v-1zm3 4h2q.424 0 .713-.287A.97.97 0 0 0 16 11.5v-3a.97.97 0 0 0-.287-.713A.97.97 0 0 0 15 7.5h-2zm1-4v3h1v-3z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M6.588 17.413Q7.175 18 8 18h12q.824 0 1.413-.587Q22 16.825 22 16V4q0-.824-.587-1.412A1.93 1.93 0 0 0 20 2H8q-.824 0-1.412.587A1.93 1.93 0 0 0 6 4v12q0 .824.588 1.413M20 16H8V4h12zM2.588 21.413Q3.174 22 4 22h14v-2H4V6H2v14q0 .824.587 1.413" clipRule="evenodd"/><path fill="var(--icon-information)" d="M17 12.5h1v-2h1v-1h-1v-1h1v-1h-2z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" fillRule="evenodd" d="M5.6 8.4h.8V6.8h.8a.77.77 0 0 0 .57-.23A.77.77 0 0 0 8 6v-.8a.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23H5.6zm.8-3.2V6h.8v-.8zm2.4 3.2h1.6a.77.77 0 0 0 .57-.23.77.77 0 0 0 .23-.57V5.2a.77.77 0 0 0-.23-.57.77.77 0 0 0-.57-.23H8.8zm.8-3.2v2.4h.8V5.2z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M3.67 12.33q.47.47 1.13.47h9.6q.66 0 1.13-.47T16 11.2V1.6q0-.66-.47-1.13A1.54 1.54 0 0 0 14.4 0H4.8q-.66 0-1.13.47A1.54 1.54 0 0 0 3.2 1.6v9.6q0 .66.47 1.13M14.4 11.2H4.8V1.6h9.6zM.47 15.53Q.94 16 1.6 16h11.2v-1.6H1.6V3.2H0v11.2q0 .66.47 1.13" clipRule="evenodd"/><path fill="var(--icon-information)" d="M12 8.4h.8V6.8h.8V6h-.8v-.8h.8v-.8H12z"/></> }
    }
};

export function MultiplePdf({
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

MultiplePdf.displayName = "MultiplePdf";
