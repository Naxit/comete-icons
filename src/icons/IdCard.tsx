import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M14 13h5v-2h-5zm0-3h5V8h-5zm-9 6h8v-.55q0-1.125-1.1-1.787Q10.8 13 9 13t-2.9.662Q5 14.326 5 15.45zm4-4q.825 0 1.412-.588Q11 10.826 11 10t-.588-1.412A1.93 1.93 0 0 0 9 8q-.825 0-1.412.588A1.93 1.93 0 0 0 7 10q0 .825.588 1.412Q8.175 12 9 12m-5 8q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm0-2h16V6H4z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M9 9h4.5V7.5H9zm0-2.5h4.5V5H9zM2 11h6v-.937q0-.604-.917-1.084Q6.167 8.5 4.99 8.5t-2.084.469T2 10.063zm3.004-3q.621 0 1.059-.442T6.5 6.496t-.442-1.059A1.46 1.46 0 0 0 4.996 5q-.621 0-1.059.442A1.46 1.46 0 0 0 3.5 6.504q0 .621.442 1.059T5.004 8M1.5 14q-.62 0-1.06-.44A1.45 1.45 0 0 1 0 12.5V3.493q0-.62.44-1.057A1.45 1.45 0 0 1 1.5 2h13q.619 0 1.06.44.44.442.44 1.06v9.006q0 .62-.44 1.056A1.45 1.45 0 0 1 14.5 14zm0-1.5h13v-9h-13z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M14 13h5v-2h-5zm0-3h5V8h-5zm-9 6h8v-.55q0-1.125-1.1-1.787Q10.8 13 9 13t-2.9.662Q5 14.326 5 15.45zm4-4q.825 0 1.412-.588Q11 10.826 11 10t-.588-1.412A1.93 1.93 0 0 0 9 8q-.825 0-1.412.588A1.93 1.93 0 0 0 7 10q0 .825.588 1.412Q8.175 12 9 12m-5 8q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M9 9h4.5V7.5H9zm0-2.5h4.5V5H9zM2 11h6v-.937q0-.604-.917-1.084Q6.167 8.5 4.99 8.5t-2.084.469T2 10.063zm3.004-3q.621 0 1.059-.442T6.5 6.496t-.442-1.059A1.46 1.46 0 0 0 4.996 5q-.621 0-1.059.442A1.46 1.46 0 0 0 3.5 6.504q0 .621.442 1.059T5.004 8M1.5 14q-.62 0-1.06-.44A1.45 1.45 0 0 1 0 12.5V3.493q0-.62.44-1.057A1.45 1.45 0 0 1 1.5 2h13q.619 0 1.06.44.44.442.44 1.06v9.006q0 .62-.44 1.056A1.45 1.45 0 0 1 14.5 14z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#0076D8" d="M5 16h8v-.55q0-1.125-1.1-1.787Q10.8 13 9 13t-2.9.662Q5 14.326 5 15.45zm4-4q.825 0 1.412-.588Q11 10.826 11 10t-.588-1.412A1.93 1.93 0 0 0 9 8q-.825 0-1.412.588A1.93 1.93 0 0 0 7 10q0 .825.588 1.412Q8.175 12 9 12"/><path fill="currentColor" fillRule="evenodd" d="M4 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm0-2h16V6H4z" clipRule="evenodd"/><path fill="#0076D8" d="M14 10h5V8h-5zm0 3h5v-2h-5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.5 14q-.62 0-1.06-.44A1.45 1.45 0 0 1 0 12.5V3.493q0-.62.44-1.057A1.45 1.45 0 0 1 1.5 2h13q.619 0 1.06.44.44.442.44 1.06v9.006q0 .62-.44 1.056A1.45 1.45 0 0 1 14.5 14zm0-1.5h13v-9h-13z" clipRule="evenodd"/><path fill="#0076D8" d="M9 6.5h4.5V5H9zM5.004 8q.621 0 1.059-.442T6.5 6.496t-.442-1.059A1.46 1.46 0 0 0 4.996 5q-.621 0-1.059.442A1.46 1.46 0 0 0 3.5 6.504q0 .621.442 1.059T5.004 8M2 11h6v-.937q0-.604-.917-1.084Q6.167 8.5 4.99 8.5t-2.084.469T2 10.063zm7-2h4.5V7.5H9z"/></> }
    }
};

export function IdCard({
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

IdCard.displayName = "IdCard";
