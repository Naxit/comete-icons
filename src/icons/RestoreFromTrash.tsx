import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 16h2v-4.15l1.6 1.55L16 12l-4-4-4 4 1.4 1.4 1.6-1.55zm-4 5q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 10.667h1.334V7.9l1.067 1.034.933-.934L8 5.333 5.333 8l.934.934L7.333 7.9zM4.667 14q-.55 0-.942-.391t-.392-.942V4h-.666V2.667H6V2h4v.667h3.334V4h-.667v8.667q0 .55-.392.942t-.941.391zm6.667-10H4.667v8.667h6.667zM4.667 4v8.667z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 16h2v-4.15l1.6 1.55L16 12l-4-4-4 4 1.4 1.4 1.6-1.55zm-4 5q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 10.667h1.334V7.9l1.067 1.034.933-.934L8 5.333 5.333 8l.934.934L7.333 7.9zM4.667 14q-.55 0-.942-.391t-.392-.942V4h-.666V2.667H6V2h4v.667h3.334V4h-.667v8.667q0 .55-.392.942t-.941.391z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M11 16h2v-4.15l1.6 1.55L16 12l-4-4-4 4 1.4 1.4 1.6-1.55zm-4 5q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M7.333 10.667h1.334V7.9l1.067 1.034.933-.934L8 5.333 5.333 8l.934.934L7.333 7.9zM4.667 14q-.55 0-.942-.391t-.392-.942V4h-.666V2.667H6V2h4v.667h3.334V4h-.667v8.667q0 .55-.392.942t-.941.391zm6.667-10H4.667v8.667h6.667zM4.667 4v8.667z"/></> }
    }
};

export function RestoreFromTrash({
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

RestoreFromTrash.displayName = "RestoreFromTrash";
