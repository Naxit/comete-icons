import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 20.049V2.487h9.756V6.39h9.757v4.635H19.56V8.341h-7.805v3.483s-.243-.017-.243.508v1.863c0 .305.243.526.243.526v3.377h2.928v1.95zm7.805-1.951H3.951v-1.952h5.854zm0-3.903H3.951v-1.951h5.854zm0-3.903H3.951v-1.95h5.854zm0-3.902H3.951V4.439h5.854z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M13.708 11.025v-.733h3.902v.733z" clipRule="evenodd"/><path fill="currentColor" d="M17.062 21.512a.53.53 0 0 1-.39-.157.53.53 0 0 1-.157-.391V17.67l-3.175-4.06a.52.52 0 0 1-.062-.576q.144-.302.5-.302h7.663q.357 0 .5.302a.52.52 0 0 1-.062.576l-3.175 4.06v3.294a.53.53 0 0 1-.157.39.53.53 0 0 1-.39.158z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 14.45V.4h7.805v3.122h7.805V7.23h-1.56V5.083H7.804v2.786s-.195-.013-.195.407v1.49c0 .244.195.42.195.42v2.702h2.342v1.561zm6.244-1.562H1.561v-1.561h4.683zm0-3.122H1.561V8.205h4.683zm0-3.122H1.561V5.083h4.683zm0-3.122H1.561V1.96h4.683z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9.366 7.23v-.586h3.122v.586z" clipRule="evenodd"/><path fill="currentColor" d="M12.05 15.62a.42.42 0 0 1-.312-.126.43.43 0 0 1-.126-.313v-2.634l-2.54-3.25a.42.42 0 0 1-.05-.46q.115-.242.4-.242h6.131q.285 0 .4.242a.42.42 0 0 1-.05.46l-2.54 3.25v2.634a.43.43 0 0 1-.125.313.42.42 0 0 1-.312.126z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 20.049V2.487h9.756V6.39h9.757v4.635H19.56V8.341h-7.805v3.483s-.243-.017-.243.508v1.863c0 .305.243.526.243.526v3.377h2.928v1.95zm7.805-1.951H3.951v-1.952h5.854zm0-3.903H3.951v-1.951h5.854zm0-3.903H3.951v-1.95h5.854zm0-3.902H3.951V4.439h5.854z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M13.708 11.025v-.733h3.902v.733z" clipRule="evenodd"/><path fill="currentColor" d="M17.062 21.512a.53.53 0 0 1-.39-.157.53.53 0 0 1-.157-.391V17.67l-3.175-4.06a.52.52 0 0 1-.062-.576q.144-.302.5-.302h7.663q.357 0 .5.302a.52.52 0 0 1-.062.576l-3.175 4.06v3.294a.53.53 0 0 1-.157.39.53.53 0 0 1-.39.158z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 14.45V.4h7.805v3.122h7.805V7.23h-1.56V5.083H7.804v2.786s-.195-.013-.195.407v1.49c0 .244.195.42.195.42v2.702h2.342v1.561zm6.244-1.562H1.561v-1.561h4.683zm0-3.122H1.561V8.205h4.683zm0-3.122H1.561V5.083h4.683zm0-3.122H1.561V1.96h4.683z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9.366 7.23v-.586h3.122v.586z" clipRule="evenodd"/><path fill="currentColor" d="M12.05 15.62a.42.42 0 0 1-.312-.126.43.43 0 0 1-.126-.313v-2.634l-2.54-3.25a.42.42 0 0 1-.05-.46q.115-.242.4-.242h6.131q.285 0 .4.242a.42.42 0 0 1-.05.46l-2.54 3.25v2.634a.43.43 0 0 1-.125.313.42.42 0 0 1-.312.126z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 20.049V2.487h9.756V6.39h9.757v4.635H19.56V8.341h-7.805v3.483s-.243-.017-.243.508v1.863c0 .305.243.526.243.526v3.377h2.928v1.95zm7.805-1.951H3.951v-1.952h5.854zm0-3.903H3.951v-1.951h5.854zm0-3.903H3.951v-1.95h5.854zm0-3.902H3.951V4.439h5.854z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M13.708 11.025v-.733h3.902v.733z" clipRule="evenodd"/><path fill="currentColor" d="M17.062 21.512a.53.53 0 0 1-.39-.157.53.53 0 0 1-.157-.391V17.67l-3.175-4.06a.52.52 0 0 1-.062-.576q.144-.302.5-.302h7.663q.357 0 .5.302a.52.52 0 0 1-.062.576l-3.175 4.06v3.294a.53.53 0 0 1-.157.39.53.53 0 0 1-.39.158z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 14.45V.4h7.805v3.122h7.805V7.23h-1.56V5.083H7.804v2.786s-.195-.013-.195.407v1.49c0 .244.195.42.195.42v2.702h2.342v1.561zm6.244-1.562H1.561v-1.561h4.683zm0-3.122H1.561V8.205h4.683zm0-3.122H1.561V5.083h4.683zm0-3.122H1.561V1.96h4.683z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9.366 7.23v-.586h3.122v.586z" clipRule="evenodd"/><path fill="currentColor" d="M12.05 15.62a.42.42 0 0 1-.312-.126.43.43 0 0 1-.126-.313v-2.634l-2.54-3.25a.42.42 0 0 1-.05-.46q.115-.242.4-.242h6.131q.285 0 .4.242a.42.42 0 0 1-.05.46l-2.54 3.25v2.634a.43.43 0 0 1-.125.313.42.42 0 0 1-.312.126z"/></> }
    }
};

export function CompaniesFilter({
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

CompaniesFilter.displayName = "CompaniesFilter";
