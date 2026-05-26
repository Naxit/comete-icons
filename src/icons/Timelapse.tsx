import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 18q2.5 0 4.25-1.75T18 12t-1.75-4.25T12 6v6l-4.25 4.25q.875.825 1.963 1.288T12 18m0 4q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9 2 12t.788-3.9 2.137-3.175T8.1 2.788 12 2t3.9.788 3.175 2.137T21.213 8.1 22 12t-.788 3.9-2.137 3.175-3.175 2.138T12 22"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 12q1.667 0 2.833-1.167T12 8t-1.167-2.833T8 4v4l-2.833 2.833q.583.55 1.308.86T8 12m0 2.667q-1.383 0-2.6-.526t-2.117-1.424T1.86 10.6 1.333 8t.526-2.6 1.424-2.117T5.4 1.86 8 1.333t2.6.526 2.117 1.424T14.142 5.4t.525 2.6-.526 2.6-1.424 2.117-2.117 1.425-2.6.525"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 18q2.5 0 4.25-1.75T18 12q0-2.175-1.388-3.825T13.1 6.1q-.45-.05-.775.25T12 7.1V12l-3.45 3.45q-.325.325-.3.775t.375.725q.725.575 1.6.813T12 18m0 4q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9 2 12t.788-3.9 2.137-3.175T8.1 2.788 12 2t3.9.788 3.175 2.137T21.213 8.1 22 12t-.788 3.9-2.137 3.175-3.175 2.138T12 22"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 12q1.667 0 2.833-1.167T12 8q0-1.45-.925-2.55T8.733 4.067q-.3-.034-.516.166t-.217.5V8l-2.3 2.3q-.217.217-.2.517t.25.483q.483.383 1.067.542T8 12m0 2.667q-1.383 0-2.6-.525t-2.117-1.425T1.86 10.6 1.333 8t.526-2.6 1.424-2.117T5.4 1.86 8 1.333t2.6.526 2.117 1.424T14.142 5.4t.525 2.6-.526 2.6-1.424 2.117-2.117 1.425-2.6.525"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12 18q2.5 0 4.25-1.75T18 12t-1.75-4.25T12 6v6l-4.25 4.25q.875.825 1.963 1.288T12 18m0 4q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9 2 12t.788-3.9 2.137-3.175T8.1 2.788 12 2t3.9.788 3.175 2.137T21.213 8.1 22 12t-.788 3.9-2.137 3.175-3.175 2.138T12 22"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M8 12q1.667 0 2.833-1.167T12 8t-1.167-2.833T8 4v4l-2.833 2.833q.583.55 1.308.86T8 12m0 2.667q-1.383 0-2.6-.526t-2.117-1.424T1.86 10.6 1.333 8t.526-2.6 1.424-2.117T5.4 1.86 8 1.333t2.6.526 2.117 1.424T14.142 5.4t.525 2.6-.526 2.6-1.424 2.117-2.117 1.425-2.6.525"/></> }
    }
};

export function Timelapse({
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

Timelapse.displayName = "Timelapse";
