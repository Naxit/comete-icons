import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m19.775 22.6-5.6-5.6H7V9.825l-5.6-5.6L2.8 2.8l18.4 18.4zM9 15h3.175L9 11.825zm8-.825-2-2V9h-3.175l-2-2H17zM5 19v2q-.824 0-1.413-.588A1.93 1.93 0 0 1 3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4 12v-2h2v2zM7 5V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 12v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3q.825 0 1.412.587Q21 4.175 21 5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m14.849 16-4.526-4.525H4.525V5.677L0 1.152 1.131 0 16 14.869zM6.14 9.859h2.566L6.141 7.293zm6.465-.667L10.99 7.576V5.01H8.424L6.808 3.394h5.798zM2.91 13.09v1.616q-.667 0-1.141-.475a1.56 1.56 0 0 1-.475-1.141zm-1.616-1.616V9.859H2.91v1.616zm0-3.233V6.626H2.91v1.616zm0-3.232V3.394H2.91V5.01zm3.232 9.697V13.09h1.616v1.616zm0-12.93V.163h1.616v1.616zm3.233 12.93V13.09h1.616v1.616zm0-12.93V.163h1.616v1.616zm3.232 12.93V13.09h1.616v1.616zm0-12.93V.163h1.616v1.616zm3.232 9.698V9.859h1.616v1.616zm0-3.233V6.626h1.616v1.616zm0-3.232V3.394h1.616V5.01zm0-3.232V.162q.667 0 1.142.474.474.475.474 1.142z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="m19.775 22.6-5.6-5.6H7V9.825l-5.6-5.6L2.8 2.8l18.4 18.4zM9 15h3.175L9 11.825zm8-.825-2-2V9h-3.175l-2-2H17zM5 19v2q-.824 0-1.413-.588A1.93 1.93 0 0 1 3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4 12v-2h2v2zM7 5V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 12v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3q.825 0 1.412.587Q21 4.175 21 5z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="m14.849 16-4.526-4.525H4.525V5.677L0 1.152 1.131 0 16 14.869zM6.14 9.859h2.566L6.141 7.293zm6.465-.667L10.99 7.576V5.01H8.424L6.808 3.394h5.798zM2.91 13.09v1.616q-.667 0-1.141-.475a1.56 1.56 0 0 1-.475-1.141zm-1.616-1.616V9.859H2.91v1.616zm0-3.233V6.626H2.91v1.616zm0-3.232V3.394H2.91V5.01zm3.232 9.697V13.09h1.616v1.616zm0-12.93V.163h1.616v1.616zm3.233 12.93V13.09h1.616v1.616zm0-12.93V.163h1.616v1.616zm3.232 12.93V13.09h1.616v1.616zm0-12.93V.163h1.616v1.616zm3.232 9.698V9.859h1.616v1.616zm0-3.233V6.626h1.616v1.616zm0-3.232V3.394h1.616V5.01zm0-3.232V.162q.667 0 1.142.474.474.475.474 1.142z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="#007ADA" d="M7 17h7.175l-2-2H9v-3.175l-2-2z"/><path fill="currentColor" fillRule="evenodd" d="M19.775 22.6 17 19.825V21h-2v-2h1.175l-2-2-2-2L9 11.825l-2-2-2-2V9H3V7h1.175L1.4 4.225 2.8 2.8l18.4 18.4zM5 19v2q-.824 0-1.413-.588A1.93 1.93 0 0 1 3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm4 8v-2h2v2zM7 5V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 0V3h2v2zm4 12v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3q.825 0 1.412.587Q21 4.175 21 5z" clipRule="evenodd"/><path fill="#007ADA" d="m17 14.175-2-2V9h-3.175l-2-2H17z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="#007ADA" d="M4.525 11.475h5.798L8.707 9.859H6.141V7.293L4.525 5.677z"/><path fill="currentColor" fillRule="evenodd" d="m14.849 16-2.243-2.242v.95H10.99V13.09h.95l-1.617-1.616-1.616-1.616-2.566-2.566-1.616-1.616L2.91 4.06v.95H1.293V3.393h.95L0 1.152 1.131 0 16 14.869zm-11.94-2.91v1.617q-.667 0-1.141-.475a1.56 1.56 0 0 1-.475-1.141zm-1.616-1.615V9.859h1.616v1.616zm0-3.233V6.626h1.616v1.616zm3.232 6.465v-1.616h1.616v1.616zm0-12.93V.163h1.616v1.616zm3.233 12.93v-1.616h1.616v1.616zm0-12.93V.163h1.616v1.616zm3.232 0V.163h1.616v1.616zm3.232 9.698V9.859h1.616v1.616zm0-3.233V6.626h1.616v1.616zm0-3.232V3.394h1.616V5.01zm0-3.232V.162q.667 0 1.142.474.474.475.474 1.142z" clipRule="evenodd"/><path fill="#007ADA" d="M12.606 9.192 10.99 7.576V5.01H8.424L6.808 3.394h5.798z"/></> }
    }
};

export function Deselect({
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

Deselect.displayName = "Deselect";
