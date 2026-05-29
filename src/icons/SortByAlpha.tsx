import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12.434 21 9.83 18.3h5.21z"/><path fill="currentColor" fillRule="evenodd" d="m3.75 16.5 3.257-9h1.867l3.256 9h-1.78l-.738-2.16H6.268l-.694 2.16zm3.04-3.69h2.257L8.005 9.435h-.13zm7.12 3.69v-1.71l4.386-5.67h-4.212V7.5h6.123v1.71l-4.343 5.67h4.386v1.62z" clipRule="evenodd"/><path fill="currentColor" d="M9.829 5.7 12.434 3l2.606 2.7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8.42 16-2.317-2.4h4.632z"/><path fill="currentColor" fillRule="evenodd" d="m.7 12 2.895-8h1.66l2.894 8H6.567l-.657-1.92H2.94L2.32 12zm2.702-3.28h2.007l-.927-3h-.115zM9.732 12v-1.52l3.898-5.04H9.886V4h5.442v1.52l-3.86 5.04h3.899V12z" clipRule="evenodd"/><path fill="currentColor" d="M6.103 2.4 8.42 0l2.316 2.4z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M12.434 21 9.83 18.3h5.21z"/><path fill="currentColor" fillRule="evenodd" d="m3.75 16.5 3.257-9h1.867l3.256 9h-1.78l-.738-2.16H6.268l-.694 2.16zm3.04-3.69h2.257L8.005 9.435h-.13zm7.12 3.69v-1.71l4.386-5.67h-4.212V7.5h6.123v1.71l-4.343 5.67h4.386v1.62z" clipRule="evenodd"/><path fill="currentColor" d="M9.829 5.7 12.434 3l2.606 2.7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m8.42 16-2.316-2.4h4.631z"/><path fill="currentColor" fillRule="evenodd" d="m.7 12 2.895-8h1.66l2.894 8H6.567l-.656-1.92H2.939L2.32 12zm2.702-3.28h2.007l-.926-3h-.116zM9.732 12v-1.52l3.898-5.04H9.886V4h5.442v1.52l-3.86 5.04h3.899V12z" clipRule="evenodd"/><path fill="currentColor" d="M6.104 2.4 8.419 0l2.316 2.4z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="var(--icon-information)" d="M12.434 21 9.83 18.3h5.21z"/><path fill="currentColor" fillRule="evenodd" d="m3.75 16.5 3.257-9h1.867l3.256 9h-1.78l-.738-2.16H6.268l-.694 2.16zm3.04-3.69h2.257L8.005 9.435h-.13zm7.12 3.69v-1.71l4.386-5.67h-4.212V7.5h6.123v1.71l-4.343 5.67h4.386v1.62z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M9.829 5.7 12.434 3l2.606 2.7z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="var(--icon-information)" d="m8.42 16-2.316-2.4h4.631z"/><path fill="currentColor" fillRule="evenodd" d="m.7 12 2.895-8h1.66l2.894 8H6.567l-.656-1.92H2.939L2.32 12zm2.702-3.28h2.007l-.926-3h-.116zM9.732 12v-1.52l3.898-5.04H9.886V4h5.442v1.52l-3.86 5.04h3.899V12z" clipRule="evenodd"/><path fill="var(--icon-information)" d="M6.104 2.4 8.419 0l2.316 2.4z"/></> }
    }
};

export function SortByAlpha({
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

SortByAlpha.displayName = "SortByAlpha";
