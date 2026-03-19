import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.96 20V8.533L2 4.756 3.809 4l2.362 4.489h11.658L20.191 4 22 4.756l-1.96 3.777V20zm14.07-1.778H5.97v-7.955h12.06zm-8.04-4.444h4.02q.428 0 .716-.256a.81.81 0 0 0 .29-.633.81.81 0 0 0-.29-.633A1.04 1.04 0 0 0 14.01 12H9.99q-.428 0-.716.256a.81.81 0 0 0-.29.633q0 .378.29.633.289.256.716.256" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.568 4.778v9.555h12.864V4.778L16 1.63 14.553 1l-1.89 3.74H3.337L1.447 1 0 1.63zm11.256 8.074H3.176v-6.63h9.648z" clipRule="evenodd"/><path fill="currentColor" d="M6.392 9.148h3.216a.8.8 0 0 0 .573-.213.7.7 0 0 0 .231-.528.7.7 0 0 0-.231-.527.8.8 0 0 0-.573-.213H6.392a.8.8 0 0 0-.573.213.7.7 0 0 0-.231.527q0 .315.231.528a.8.8 0 0 0 .573.213"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.96 20V8.533L2 4.756 3.809 4l2.362 4.489h11.658L20.191 4 22 4.756l-1.96 3.777V20zm10.05-6.222H9.99q-.428 0-.716-.256a.81.81 0 0 1-.29-.633q0-.378.29-.633Q9.563 12 9.99 12h4.02q.428 0 .716.256.29.255.29.633a.81.81 0 0 1-.29.633q-.289.256-.716.256" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.568 14.333V4.778L0 1.63 1.447 1l1.89 3.74h9.326L14.553 1 16 1.63l-1.568 3.148v9.555zm8.04-5.185H6.392a.8.8 0 0 1-.573-.213.7.7 0 0 1-.231-.528q0-.315.231-.527a.8.8 0 0 1 .573-.213h3.216q.342 0 .573.213a.7.7 0 0 1 .231.527q0 .315-.231.528a.8.8 0 0 1-.573.213" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.96 8.533V20h16.08V8.533L22 4.756 20.191 4l-2.362 4.489H6.171L3.809 4 2 4.756zm14.07 9.69H5.97v-7.956h12.06z" clipRule="evenodd"/><path fill="currentColor" d="M9.99 13.778h4.02q.428 0 .716-.256a.81.81 0 0 0 .29-.633.81.81 0 0 0-.29-.633A1.04 1.04 0 0 0 14.01 12H9.99q-.428 0-.716.256a.81.81 0 0 0-.29.633q0 .378.29.633.289.256.716.256"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.568 4.778v9.555h12.864V4.778L16 1.63 14.553 1l-1.89 3.74H3.337L1.447 1 0 1.63zm11.256 8.074H3.176v-6.63h9.648z" clipRule="evenodd"/><path fill="currentColor" d="M6.392 9.148h3.216a.8.8 0 0 0 .573-.213.7.7 0 0 0 .231-.528.7.7 0 0 0-.231-.527.8.8 0 0 0-.573-.213H6.392a.8.8 0 0 0-.573.213.7.7 0 0 0-.231.527q0 .315.231.528a.8.8 0 0 0 .573.213"/></> }
    }
};

export function Order({
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

Order.displayName = "Order";
