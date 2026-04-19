import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 -960 960 960", paths: <><path fill="currentColor" d="m363-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/></> },
      "none": { viewBox: "0 -960 960 960", paths: <><path fill="currentColor" d="M371.01-324 480-390.22 589-324l-29-124 97-84-127-11-50-117-50 117-127 11 96.89 83.95L371.01-324ZM480-72 360-192H192v-168L72-480l120-120v-168h168l120-120 120 120h168v168l120 120-120 120v168H600L480-72Zm0-102 90-90h126v-126l90-90-90-90v-126H570l-90-90-90 90H264v126l-90 90 90 90v126h126l90 90Zm0-306Z"/></> }
    },
    filled: {
      "default": { viewBox: "0 -960 960 960", paths: <><path fill="currentColor" d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-282 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z"/></> },
      "none": { viewBox: "0 -960 960 960", paths: <><path fill="currentColor" d="M480-72 360-192H192v-168L72-480l120-120v-168h168l120-120 120 120h168v168l120 120-120 120v168H600L480-72Zm0-252 109-65.78 109 66l-29-124 97-84-127-11-50-117-50 117-127 11 97 84-29 124Z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 -960 960 960", paths: <><path fill="#0076D8" d="m363-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z"/><path fill="currentColor" d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/></> },
      "none": { viewBox: "0 -960 960 960", paths: <><path fill="#0076D8" d="M371.01-324 480-390.22 589-324l-29-124 97-84-127-11-50-117-50 117-127 11 96.89 83.95L371.01-324Z"/><path fill="currentColor" d="M480-72 360-192H192v-168L72-480l120-120v-168h168l120-120 120 120h168v168l120 120-120 120v168H600L480-72Zm0-102 90-90h126v-126l90-90-90-90v-126H570l-90-90-90 90H264v126l-90 90 90 90v126h126l90 90Zm0-306Z"/></> }
    }
};

export function AwardStar({
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

AwardStar.displayName = "AwardStar";
