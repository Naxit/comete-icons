import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M12 2c2.12 0 3.98.74 5.59 2.22C19.2 5.71 20 7.7 20 10.2c0 1.67-.66 3.48-1.99 5.44C16.69 17.6 14.68 19.72 12 22c-2.68-2.28-4.68-4.4-6.01-6.36S4 11.87 4 10.2c0-2.5.8-4.5 2.41-5.98S9.88 2 12 2m0 17.35c2.03-1.87 3.54-3.57 4.52-5.09.99-1.52 1.48-2.88 1.48-4.06 0-1.81-.58-3.3-1.74-4.46Q14.52 4 12 4T7.74 5.74C6.58 6.9 6 8.38 6 10.2c0 1.18.49 2.53 1.47 4.06.99 1.53 2.5 3.22 4.53 5.09" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M8.057 13.397V6.325h4v1.572h4v5.5h-5.2v-1.572h-1.6l.006 1.572z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.956 0q2.496 0 4.392 1.776C13.613 2.968 14.24 4.56 14.24 6.56c0 1.336-.518 2.784-1.563 4.352C11.64 12.48 10.06 14.176 7.956 16q-3.157-2.736-4.723-5.088C2.188 9.344 1.67 7.896 1.67 6.56c0-2 .628-3.6 1.893-4.784Q5.46 0 7.956 0m0 13.88q2.394-2.246 3.551-4.072c.778-1.216 1.163-2.304 1.163-3.248 0-1.448-.456-2.64-1.367-3.568Q9.936 1.6 7.956 1.6T4.608 2.992c-.91.928-1.367 2.112-1.367 3.568 0 .944.385 2.024 1.155 3.248.778 1.224 1.965 2.576 3.56 4.072" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M4.858 9.117V3.46H8v1.257h3.143v4.4H7.057V7.86H5.8l.005 1.257z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M17.59 4.22C15.98 2.74 14.12 2 12 2s-3.98.74-5.59 2.22S4 7.7 4 10.2c0 1.67.66 3.48 1.99 5.44S9.32 19.72 12 22c2.68-2.28 4.69-4.4 6.01-6.36C19.34 13.68 20 11.87 20 10.2c0-2.5-.8-4.49-2.41-5.98M8.057 6.325v7.072h1.206l-.006-1.572h1.6v1.572h5.2v-5.5h-4V6.325z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M12.348 1.776Q10.452 0 7.956 0T3.563 1.776C2.298 2.96 1.67 4.56 1.67 6.56c0 1.336.518 2.784 1.563 4.352Q4.8 13.264 7.956 16c2.105-1.824 3.685-3.52 4.722-5.088 1.045-1.568 1.563-3.016 1.563-4.352 0-2-.628-3.592-1.893-4.784M4.858 3.46v5.657h.948L5.8 7.86h1.257v1.257h4.085v-4.4h-3.14V3.46z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M12 2c2.12 0 3.98.74 5.59 2.22C19.2 5.71 20 7.7 20 10.2c0 1.67-.66 3.48-1.99 5.44C16.69 17.6 14.68 19.72 12 22c-2.68-2.28-4.68-4.4-6.01-6.36S4 11.87 4 10.2c0-2.5.8-4.5 2.41-5.98S9.88 2 12 2m0 17.35c2.03-1.87 3.54-3.57 4.52-5.09.99-1.52 1.48-2.88 1.48-4.06 0-1.81-.58-3.3-1.74-4.46Q14.52 4 12 4T7.74 5.74C6.58 6.9 6 8.38 6 10.2c0 1.18.49 2.53 1.47 4.06.99 1.53 2.5 3.22 4.53 5.09" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M8.057 13.397V6.325h4v1.572h4v5.5h-5.2v-1.572h-1.6l.006 1.572z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M7.956 0q2.496 0 4.392 1.776C13.613 2.968 14.24 4.56 14.24 6.56c0 1.336-.518 2.784-1.563 4.352C11.64 12.48 10.06 14.176 7.956 16q-3.157-2.736-4.723-5.088C2.188 9.344 1.67 7.896 1.67 6.56c0-2 .628-3.6 1.893-4.784Q5.46 0 7.956 0m0 13.88q2.394-2.246 3.551-4.072c.778-1.216 1.163-2.304 1.163-3.248 0-1.448-.456-2.64-1.367-3.568Q9.936 1.6 7.956 1.6T4.608 2.992c-.91.928-1.367 2.112-1.367 3.568 0 .944.385 2.024 1.155 3.248.778 1.224 1.965 2.576 3.56 4.072" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M4.858 9.117V3.46H8v1.257h3.143v4.4H7.057V7.86H5.8l.005 1.257z" clipRule="evenodd"/></> }
    }
};

export function SitePin({
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

SitePin.displayName = "SitePin";
