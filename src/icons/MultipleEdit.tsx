import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 17.527V15.42h2.105v2.106zm0-4.21V11.21h2.105v2.105zm0-4.212V7h2.105v2.105zm4.21 8.422V15.42h7.365l-2.1 2.106zm11.565-6.316H6.211v2.105h9.464zM6.211 9.105V7h13.684v2.105zm6.315 13.685v-3.237l5.816-5.79s.333-.271.526-.341q.29-.106.58-.106a1.58 1.58 0 0 1 1.13.474l.975.974q.21.237.329.526.117.29.118.58 0 .289-.105.591-.105.303-.342.54l-5.79 5.79zm2.579-1.579h-1v-1l3.21-3.184.974.974z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 11.772v-1.685h1.684v1.685zm0-3.369V6.719h1.684v1.684zm0-3.369V3.35h1.684v1.684zm3.369 6.738v-1.685H9.26l-1.68 1.685zm9.251-5.053H3.37v1.684h7.571zM3.37 5.034V3.35h10.947v1.684zm5.05 10.948v-2.59l4.654-4.63s.266-.218.42-.275q.233-.084.464-.084a1.27 1.27 0 0 1 .905.38l.78.778q.168.19.262.421.095.232.095.463 0 .233-.084.474a1.1 1.1 0 0 1-.274.432l-4.632 4.631zm2.064-1.263h-.8v-.8l2.569-2.547.778.779z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 17.527V15.42h2.105v2.106zm0-4.21V11.21h2.105v2.105zm0-4.212V7h2.105v2.105zm4.21 8.422V15.42h7.365l-2.1 2.106zm11.565-6.316H6.211v2.105h9.464zM6.211 9.105V7h13.684v2.105zm6.315 13.685v-3.237l5.816-5.79s.333-.271.526-.341q.29-.106.58-.106a1.58 1.58 0 0 1 1.13.474l.975.974q.21.237.329.526.117.29.118.58 0 .289-.105.591-.105.303-.342.54l-5.79 5.79z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 11.772v-1.685h1.684v1.685zm0-3.369V6.719h1.684v1.684zm0-3.369V3.35h1.684v1.684zm3.369 6.738v-1.685H9.26l-1.68 1.685zm9.251-5.053H3.37v1.684h7.571zM3.37 5.034V3.35h10.947v1.684zm5.05 10.948v-2.59l4.654-4.63s.266-.218.42-.275q.233-.084.464-.084a1.27 1.27 0 0 1 .905.38l.78.778q.168.19.262.421.095.232.095.463 0 .233-.084.474a1.1 1.1 0 0 1-.274.432l-4.632 4.631z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M2 17.527V15.42h2.105v2.106zm0-4.21V11.21h2.105v2.105zm0-4.212V7h2.105v2.105zm4.21 8.422V15.42h7.365l-2.1 2.106zm11.565-6.316H6.211v2.105h9.464zM6.211 9.105V7h13.684v2.105z" clipRule="evenodd"/><path fill="#0076D8" fillRule="evenodd" d="M12.526 22.79v-3.237l5.816-5.79s.333-.271.526-.341q.29-.106.58-.106a1.58 1.58 0 0 1 1.13.474l.975.974q.21.237.329.526.117.29.118.58 0 .289-.105.591-.105.303-.342.54l-5.79 5.79zm2.579-1.579h-1v-1l3.21-3.184.974.974z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M0 11.772v-1.685h1.684v1.685zm0-3.369V6.719h1.684v1.684zm0-3.369V3.35h1.684v1.684zm3.369 6.738v-1.685H9.26l-1.68 1.685zm9.251-5.053H3.37v1.684h7.571zM3.37 5.034V3.35h10.947v1.684z" clipRule="evenodd"/><path fill="#0076D8" fillRule="evenodd" d="M8.42 15.982v-2.59l4.654-4.63s.266-.218.42-.275q.233-.084.464-.084a1.27 1.27 0 0 1 .905.38l.78.778q.168.19.262.421.095.232.095.463 0 .233-.084.474a1.1 1.1 0 0 1-.274.432l-4.632 4.631zm2.064-1.263h-.8v-.8l2.569-2.547.778.779z" clipRule="evenodd"/></> }
    }
};

export function MultipleEdit({
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

MultipleEdit.displayName = "MultipleEdit";
