import type { IconColor } from "./types";

const PREFIX = "comete-icon";

/** Returns the CSS class that maps to the corresponding design token */
export function getIconClass(color: IconColor): string {
  return `${PREFIX}--${color}`;
}
