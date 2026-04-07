import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M18 13v-2h4v2zm1.2 7L16 17.6l1.2-1.6 3.2 2.4zm-2-12L16 6.4 19.2 4l1.2 1.6zM5 19v-4H4q-.824 0-1.412-.588A1.93 1.93 0 0 1 2 13v-2q0-.825.587-1.412A1.93 1.93 0 0 1 4 9h4l5-3v12l-5-3H7v4zm6-4.55v-4.9L8.55 11H4v2h4.55zm3 .9v-6.7q.675.6 1.088 1.463.412.862.412 1.887t-.412 1.887A4.6 4.6 0 0 1 14 15.35"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M12.8 8.565v-1.6H16v1.6zm.96 5.6-2.56-1.92.96-1.28 2.56 1.92zm-1.6-9.6-.96-1.28 2.56-1.92.96 1.28zm-9.76 8.8v-3.2h-.8a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 8.565v-1.6q0-.66.47-1.13a1.54 1.54 0 0 1 1.13-.47h3.2l4-2.4v9.6l-4-2.4H4v3.2zm4.8-3.64v-3.92l-1.96 1.16H1.6v1.6h3.64zm2.4.72v-5.36q.54.48.87 1.17t.33 1.51-.33 1.51-.87 1.17"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M18 13v-2h4v2zm1.2 7L16 17.6l1.2-1.6 3.2 2.4zm-2-12L16 6.4 19.2 4l1.2 1.6zM5 19v-4H4q-.824 0-1.412-.588A1.93 1.93 0 0 1 2 13v-2q0-.825.587-1.412A1.93 1.93 0 0 1 4 9h4l5-3v12l-5-3H7v4zm9-3.65v-6.7q.675.6 1.088 1.463.412.862.412 1.887t-.412 1.887A4.6 4.6 0 0 1 14 15.35"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M12.8 8.8V7.2H16v1.6zm.96 5.6-2.56-1.92.96-1.28 2.56 1.92zm-1.6-9.6-.96-1.28 2.56-1.92.96 1.28zM2.4 13.6v-3.2h-.8a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 8.8V7.2q0-.66.47-1.13A1.54 1.54 0 0 1 1.6 5.6h3.2l4-2.4v9.6l-4-2.4H4v3.2zm7.2-2.92V5.32q.54.48.87 1.17T10.8 8t-.33 1.51-.87 1.17"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M22 11h-4v2h4zm-6 6.6 3.2 2.4 1.2-1.6-3.2-2.4zm0-11.2L17.2 8l3.2-2.4L19.2 4zM5 15v4h2v-4h1l5 3V6L8 9H4q-.824 0-1.412.588A1.93 1.93 0 0 0 2 11v2q0 .825.587 1.412Q3.176 15 4 15zm6-5.45v4.9L8.55 13H4v-2h4.55z" clipRule="evenodd"/><path fill="#0076D8" d="M14 15.35v-6.7q.675.6 1.088 1.463.412.862.412 1.887t-.412 1.887A4.6 4.6 0 0 1 14 15.35"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m13.76 14.165-2.56-1.92.96-1.28 2.56 1.92z"/><path fill="currentColor" fillRule="evenodd" d="M12.8 6.965H16v1.6h-3.2zm-.64-2.4-.96-1.28 2.56-1.92.96 1.28zm-9.76 8.8v-3.2h-.8a1.54 1.54 0 0 1-1.13-.47A1.54 1.54 0 0 1 0 8.565v-1.6q0-.66.47-1.13a1.54 1.54 0 0 1 1.13-.47h3.2l4-2.4v9.6l-4-2.4H4v3.2zm4.8-3.64v-3.92l-1.96 1.16H1.6v1.6h3.64z" clipRule="evenodd"/><path fill="#0076D8" d="M9.6 10.445v-5.36q.54.48.87 1.17t.33 1.51-.33 1.51-.87 1.17"/></> }
    }
};

export function Campaign({
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

Campaign.displayName = "Campaign";
