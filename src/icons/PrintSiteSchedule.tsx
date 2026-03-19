import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M16 4.905v2.857H8V4.905zM6 3v4.762H5q-1.25 0-2.125.821Q2 9.405 2 10.62v5.714h4v3.81h5.334a7 7 0 0 1-.33-1.905H8v-3.81h3.978a7 7 0 0 1 1.661-1.904H6v1.905H4v-3.81a.9.9 0 0 1 .287-.679A1 1 0 0 1 5 9.667h14q.424 0 .712.273a.9.9 0 0 1 .288.679v.67a7 7 0 0 1 2 .966v-1.636q0-1.214-.863-2.036-.862-.82-2.137-.821h-1V3zm13 8.07a.9.9 0 0 0-.288-.653 1 1 0 0 0-.712-.274 1 1 0 0 0-.712.274.9.9 0 0 0-.288.654 7 7 0 0 1 2 0" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M14 14v8h1.643l-.007-1.6h1.637V22H23v-5.6h-4.09V14z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M10.667 2.213V4.39H4.57V2.213zM3.047.762V4.39h-.761q-.953 0-1.62.626A2.04 2.04 0 0 0 0 6.566v4.355h3.048v2.902h4.064a5.3 5.3 0 0 1-.252-1.451H4.571V9.469h3.032a5.4 5.4 0 0 1 1.265-1.451h-5.82v1.451H1.524V6.567q0-.309.219-.517a.76.76 0 0 1 .543-.209h10.666q.324 0 .543.209.22.208.22.517l-.001.51c.55.164 1.064.415 1.524.736V6.567q0-.925-.657-1.551t-1.629-.626h-.761V.762zm9.905 6.149a.68.68 0 0 0-.219-.498.76.76 0 0 0-.543-.21.76.76 0 0 0-.542.21.68.68 0 0 0-.22.498 5.4 5.4 0 0 1 1.524 0" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9.143 9.143v6.095h1.251l-.004-1.22h1.246v1.22H16V10.97h-3.117V9.143z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M14 14v8h1.643l-.007-1.6h1.637V22H23v-5.6h-4.09V14z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M6 7.762V3h12v4.762h1q1.276 0 2.137.821.863.822.863 2.036v1.636a7 7 0 0 0-3-1.184.9.9 0 0 0-.288-.654 1 1 0 0 0-.712-.274 1 1 0 0 0-.712.274.9.9 0 0 0-.288.654l-.066.01a6.97 6.97 0 0 0-3.295 1.443 7 7 0 0 0-1.66 1.905H8v3.81h3.004c.022.662.136 1.3.33 1.904H6v-3.81H2V10.62q0-1.214.875-2.036.875-.82 2.125-.821zm10-2.857v2.857H8V4.905z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M9.143 9.143v6.095h1.251l-.004-1.22h1.246v1.22H16V10.97h-3.117V9.143z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M3.048 4.39V.762h9.143V4.39h.761q.971 0 1.629.626.657.626.657 1.55v1.247a5.3 5.3 0 0 0-2.286-.902.68.68 0 0 0-.219-.498.76.76 0 0 0-.543-.21.76.76 0 0 0-.542.21.68.68 0 0 0-.22.498l-.05.007a5.3 5.3 0 0 0-2.51 1.1 5.4 5.4 0 0 0-1.265 1.451H4.57v2.903h2.29c.016.504.103.991.25 1.45H3.049v-2.901H0V6.567q0-.925.667-1.551.666-.626 1.619-.626zm7.619-2.177V4.39H4.57V2.213z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M16 4.905v2.857H8V4.905zM6 3v4.762H5q-1.25 0-2.125.821Q2 9.405 2 10.62v5.714h4v3.81h5.334a7 7 0 0 1-.33-1.905H8v-3.81h3.978a7 7 0 0 1 1.661-1.904H6v1.905H4v-3.81a.9.9 0 0 1 .287-.679A1 1 0 0 1 5 9.667h14q.424 0 .712.273a.9.9 0 0 1 .288.679v.67a7 7 0 0 1 2 .966v-1.636q0-1.214-.863-2.036-.862-.82-2.137-.821h-1V3zm13 8.07a.9.9 0 0 0-.288-.653 1 1 0 0 0-.712-.274 1 1 0 0 0-.712.274.9.9 0 0 0-.288.654 7 7 0 0 1 2 0" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M14 14v8h1.643l-.007-1.6h1.637V22H23v-5.6h-4.09V14z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M10.667 2.213V4.39H4.57V2.213zM3.047.762V4.39h-.761q-.953 0-1.62.626A2.04 2.04 0 0 0 0 6.566v4.355h3.048v2.902h4.064a5.3 5.3 0 0 1-.252-1.451H4.571V9.469h3.032a5.4 5.4 0 0 1 1.265-1.451h-5.82v1.451H1.524V6.567q0-.309.219-.517a.76.76 0 0 1 .543-.209h10.666q.324 0 .543.209.22.208.22.517l-.001.51c.55.164 1.064.415 1.524.736V6.567q0-.925-.657-1.551t-1.629-.626h-.761V.762zm9.905 6.149a.68.68 0 0 0-.219-.498.76.76 0 0 0-.543-.21.76.76 0 0 0-.542.21.68.68 0 0 0-.22.498 5.4 5.4 0 0 1 1.524 0" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9.143 9.143v6.095h1.251l-.004-1.22h1.246v1.22H16V10.97h-3.117V9.143z" clipRule="evenodd"/></> }
    }
};

export function PrintSiteSchedule({
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

PrintSiteSchedule.displayName = "PrintSiteSchedule";
