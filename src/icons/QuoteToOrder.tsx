import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.951 7.614v11.672h7.95a5.9 5.9 0 0 1-.698-1.81h-5.25V9.38H17.96v.953a6.2 6.2 0 0 1 2.002.601v-3.32l1.95-3.845-1.8-.769-2.352 4.569H6.153L3.8 3 2 3.769zm8.161 5.338a6.1 6.1 0 0 1 1.93-1.806l-.084-.003H9.955q-.425 0-.713.26a.83.83 0 0 0-.288.645q0 .383.288.644.288.26.713.26z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M22 16.286C22 18.889 19.85 21 17.197 21s-4.804-2.11-4.804-4.714 2.15-4.715 4.804-4.715c2.652 0 4.803 2.111 4.803 4.715m-4.052 2.32-.612-.6 1.693-1.662-1.693-1.66.612-.601 2.305 2.261zm-3.305-.6.612.6 2.304-2.262-2.304-2.261-.612.6 1.692 1.661z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.561 4.425v9.514h6.36a4.9 4.9 0 0 1-.558-1.475H3.162v-6.6h9.606v.776c.57.071 1.11.24 1.601.49V4.425l1.561-3.134-1.44-.627-1.882 3.724H3.322L1.441.664 0 1.29zM8.09 8.776c.4-.597.927-1.1 1.543-1.473l-.067-.002H6.364a.8.8 0 0 0-.57.212.7.7 0 0 0-.23.526q0 .313.23.525a.8.8 0 0 0 .57.212z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M16 11.493a3.843 3.843 0 1 1-7.686 0 3.843 3.843 0 0 1 7.686 0m-3.241 1.892-.49-.49 1.354-1.354-1.354-1.354.49-.49 1.843 1.844zm-2.645-.49.49.49 1.843-1.844-1.843-1.843-.49.49 1.354 1.353z" clipRule="evenodd"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M22 16.286C22 18.889 19.85 21 17.197 21s-4.804-2.11-4.804-4.714 2.15-4.715 4.804-4.715c2.652 0 4.803 2.111 4.803 4.715m-4.052 2.32-.612-.6 1.693-1.662-1.693-1.66.612-.601 2.305 2.261zm-3.305-.6.612.6 2.304-2.262-2.304-2.261-.612.6 1.692 1.661z" clipRule="evenodd"/><path fill="currentColor" d="M3.951 7.614v11.672h7.95a5.9 5.9 0 0 1-.818-3c0-1.234.38-2.38 1.03-3.334H9.954q-.425 0-.713-.26a.83.83 0 0 1-.288-.644q0-.386.288-.645.288-.26.713-.26h4.003q.042 0 .083.002a6.2 6.2 0 0 1 3.156-.86q.387.001.763.047a6.2 6.2 0 0 1 2.002.601V7.614l1.95-3.845-1.8-.769-2.352 4.569H6.153L3.8 3 2 3.769z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M16 11.493a3.843 3.843 0 1 1-7.686 0 3.843 3.843 0 0 1 7.686 0m-3.241 1.892-.49-.49 1.354-1.354-1.354-1.354.49-.49 1.843 1.844zm-2.645-.49.49.49 1.843-1.844-1.843-1.843-.49.49 1.354 1.353z" clipRule="evenodd"/><path fill="currentColor" d="M1.561 4.425v9.514h6.36a4.86 4.86 0 0 1-.655-2.446c0-1.005.304-1.94.824-2.717H6.364a.8.8 0 0 1-.57-.212.7.7 0 0 1-.23-.525q0-.314.23-.526a.8.8 0 0 1 .57-.212h3.202l.067.002a4.87 4.87 0 0 1 3.135-.663c.57.071 1.11.24 1.601.49V4.425l1.561-3.134-1.44-.627-1.882 3.724H3.322L1.441.664 0 1.29z"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.951 7.614v11.672h7.95a5.9 5.9 0 0 1-.698-1.81h-5.25V9.38H17.96v.953a6.2 6.2 0 0 1 2.002.601v-3.32l1.95-3.845-1.8-.769-2.352 4.569H6.153L3.8 3 2 3.769zm8.161 5.338a6.1 6.1 0 0 1 1.93-1.806l-.084-.003H9.955q-.425 0-.713.26a.83.83 0 0 0-.288.645q0 .383.288.644.288.26.713.26z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M22 16.286C22 18.889 19.85 21 17.197 21s-4.804-2.11-4.804-4.714 2.15-4.715 4.804-4.715c2.652 0 4.803 2.111 4.803 4.715m-4.052 2.32-.612-.6 1.693-1.662-1.693-1.66.612-.601 2.305 2.261zm-3.305-.6.612.6 2.304-2.262-2.304-2.261-.612.6 1.692 1.661z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.561 4.425v9.514h6.36a4.9 4.9 0 0 1-.558-1.475H3.162v-6.6h9.606v.776c.57.071 1.11.24 1.601.49V4.425l1.561-3.134-1.44-.627-1.882 3.724H3.322L1.441.664 0 1.29zM8.09 8.776c.4-.597.927-1.1 1.543-1.473l-.067-.002H6.364a.8.8 0 0 0-.57.212.7.7 0 0 0-.23.526q0 .313.23.525a.8.8 0 0 0 .57.212z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M16 11.493a3.843 3.843 0 1 1-7.686 0 3.843 3.843 0 0 1 7.686 0m-3.241 1.892-.49-.49 1.354-1.354-1.354-1.354.49-.49 1.843 1.844zm-2.645-.49.49.49 1.843-1.844-1.843-1.843-.49.49 1.354 1.353z" clipRule="evenodd"/></> }
    }
};

export function QuoteToOrder({
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

QuoteToOrder.displayName = "QuoteToOrder";
