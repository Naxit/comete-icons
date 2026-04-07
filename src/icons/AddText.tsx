import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M16.459 22v-3.535h-3.535V16.11h3.535v-3.535h2.356v3.535h3.535v2.356h-3.535V22zM2.321 18.495v-2.357h8.335a7 7 0 0 0-.073 1.179q.015.559.103 1.178zm0-4.713v-2.356h11.37q-.678.47-1.223 1.06a7.4 7.4 0 0 0-.957 1.296zm0-4.713V6.713h17.673v2.356zm0-4.713V2h17.673v2.356z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M11.112 15.546v-2.667H8.444V11.1h2.668V8.433h1.778v2.668h2.667v1.778H12.89v2.667zM.442 12.9v-1.778h6.291a5.3 5.3 0 0 0-.056.889q.012.422.078.889zm0-3.556V7.567h8.58q-.51.355-.922.8a5.6 5.6 0 0 0-.722.978zm0-3.557V4.01H13.78v1.778zm0-3.556V.454H13.78v1.778z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M16.459 22v-3.535h-3.535V16.11h3.535v-3.535h2.356v3.535h3.535v2.356h-3.535V22zM2.321 18.495v-2.357h8.335a7 7 0 0 0-.073 1.179q.015.559.103 1.178zm0-4.713v-2.356h11.37q-.678.47-1.223 1.06a7.4 7.4 0 0 0-.957 1.296zm0-4.713V6.713h17.673v2.356zm0-4.713V2h17.673v2.356z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M11.112 15.546v-2.667H8.444V11.1h2.668V8.433h1.778v2.668h2.667v1.778H12.89v2.667zM.442 12.9v-1.778h6.291a5.3 5.3 0 0 0-.056.889q.012.422.078.889zm0-3.556V7.567h8.58q-.51.355-.922.8a5.6 5.6 0 0 0-.722.978zm0-3.557V4.01H13.78v1.778zm0-3.556V.454H13.78v1.778z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2.32 16.138v2.357h8.366a10 10 0 0 1-.103-1.178q-.015-.56.073-1.179zm0-4.712v2.356h9.19a7.4 7.4 0 0 1 2.18-2.356zm0-4.713v2.356h17.674V6.713zM2.32 2v2.356h17.674V2z" clipRule="evenodd"/><path fill="#0076D8" d="M16.459 22v-3.535h-3.535V16.11h3.535v-3.535h2.356v3.535h3.535v2.356h-3.535V22z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M.443 11.123V12.9h6.312a8 8 0 0 1-.078-.89 5.3 5.3 0 0 1 .056-.888zm0-3.556v1.778h6.935a5.6 5.6 0 0 1 1.644-1.778zm0-3.557v1.778h13.336V4.01zm0-3.556v1.778h13.336V.454z" clipRule="evenodd"/><path fill="#0076D8" d="M11.112 15.546v-2.667H8.444V11.1h2.668V8.433h1.778v2.668h2.667v1.778H12.89v2.667z"/></> }
    }
};

export function AddText({
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

AddText.displayName = "AddText";
