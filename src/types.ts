import type { SVGAttributes } from "react";

export type IconSpacing = "default" | "none";

export type IconVariant = "outlined" | "filled" | "duotone";

export type IconColor =
  | "default"
  | "disabled"
  | "inverted"
  | "warning"
  | "critical"
  | "success"
  | "brand"
  | "selected"
  | "information"
  | "subtle"
  | "subtlest"
  | "accent"
  | "day"
  | "night";

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, "color"> {
  /**
   * Rendered size in pixels. SVG scales without pixelation.
   * @default 24
   */
  size?: number;
  /**
   * Internal spacing of the SVG (viewBox).
   * - "default" — icon with padding (viewBox 0 0 24 24)
   * - "none" — icon without padding (viewBox 0 0 16 16)
   * @default "default"
   */
  spacing?: IconSpacing;
  /** Icon style variant. @default "outlined" */
  variant?: IconVariant;
  /** Semantic color mapped to design tokens. @default "default" */
  color?: IconColor;
  /** Additional CSS class */
  className?: string;
}
