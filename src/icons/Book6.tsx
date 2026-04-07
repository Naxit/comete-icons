import type { IconProps } from "../types";
import { getIconClass } from "../utils";

const svgData: Record<string, Record<string, { viewBox: string; paths: React.JSX.Element }>> = {
    outlined: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" d="M6.333 22q-1.18 0-2.007-.875Q3.501 20.25 3.5 19V5q0-1.25.826-2.125Q5.153 2 6.333 2h10.074v15.667H6.333q-.536 0-.897.383a1.33 1.33 0 0 0-.362.95q0 .567.362.95t.897.383h12.593V4H20.5v18zm0-6h8.5V3.667h-8.5q-.543 0-.9.383a1.34 1.34 0 0 0-.359.95v11.342q.284-.16.593-.25A2.3 2.3 0 0 1 6.333 16m.551-2.5h1.15l.597-1.783H11.3l.59 1.783h1.149l-2.49-7H9.363zm2.078-2.8.976-2.9h.047l.976 2.9z"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" d="M3.333 16q-.972 0-1.652-.7A2.35 2.35 0 0 1 1 13.6V2.4q0-1 .68-1.7A2.22 2.22 0 0 1 3.334 0h8.297v12.533H3.333a1 1 0 0 0-.739.307 1.05 1.05 0 0 0-.298.76q0 .453.298.76a1 1 0 0 0 .74.307h10.37V1.6H15V16zm0-4.8h7V1.333h-7a1 1 0 0 0-.742.307 1.05 1.05 0 0 0-.295.76v9.073q.234-.126.488-.2.255-.073.55-.073m.454-2h.946l.493-1.427h2.197L7.91 9.2h.947l-2.05-5.6H5.83zm1.711-2.24.804-2.32h.039l.803 2.32z"/></> }
    },
    filled: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M6.333 16h8.5V3.667h-8.5q-.543 0-.9.383a1.34 1.34 0 0 0-.359.95v11.342q.284-.16.593-.25A2.3 2.3 0 0 1 6.333 16m1.7-2.5H6.884l2.48-7h1.185l2.49 7h-1.15l-.59-1.783H8.631z" clipRule="evenodd"/><path fill="currentColor" d="m8.962 10.7.976-2.9h.047l.976 2.9z"/><path fill="currentColor" fillRule="evenodd" d="M4.326 21.125Q5.153 22 6.333 22H20.5V4h-1.574v16.333H6.333q-.536 0-.897-.383a1.33 1.33 0 0 1-.362-.95q0-.567.362-.95t.897-.383h10.074V2H6.333q-1.18 0-2.007.875Q3.501 3.75 3.5 5v14q0 1.25.826 2.125M14.833 16h-8.5q-.357 0-.666.092a3 3 0 0 0-.593.25V5q0-.567.358-.95.359-.383.901-.383h8.5z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M3.333 11.2h7V1.333h-7a1 1 0 0 0-.742.307 1.05 1.05 0 0 0-.295.76v9.073q.234-.126.488-.2.255-.073.55-.073m1.4-2h-.946L5.83 3.6h.976l2.05 5.6H7.91l-.486-1.427H5.226z" clipRule="evenodd"/><path fill="currentColor" d="m5.498 6.96.804-2.32h.039l.803 2.32z"/><path fill="currentColor" fillRule="evenodd" d="M1.68 15.3q.681.7 1.653.7H15V1.6h-1.296v13.067H3.334a1 1 0 0 1-.74-.307 1.05 1.05 0 0 1-.298-.76q0-.453.298-.76a1 1 0 0 1 .74-.307h8.296V0H3.333q-.972 0-1.652.7A2.35 2.35 0 0 0 1 2.4v11.2q0 1 .68 1.7m8.653-4.1h-7q-.295 0-.549.073-.254.075-.488.2V2.4q0-.454.295-.76a1 1 0 0 1 .742-.307h7z" clipRule="evenodd"/></> }
    },
    duotone: {
      "default": { viewBox: "0 0 24 24", paths: <><path fill="currentColor" fillRule="evenodd" d="M4.326 21.125Q5.153 22 6.333 22H20.5V4h-1.574v16.333H6.333q-.536 0-.897-.383a1.33 1.33 0 0 1-.362-.95q0-.567.362-.95t.897-.383h10.074V2H6.333q-1.18 0-2.007.875Q3.501 3.75 3.5 5v14q0 1.25.826 2.125M14.833 16h-8.5q-.357 0-.666.092a3 3 0 0 0-.593.25V5q0-.567.358-.95.359-.383.901-.383h8.5z" clipRule="evenodd"/><path fill="#0076D8" fillRule="evenodd" d="M6.884 13.5h1.15l.597-1.783H11.3l.59 1.783h1.149l-2.49-7H9.363zm3.054-5.7-.976 2.9h2l-.977-2.9z" clipRule="evenodd"/></> },
      "none": { viewBox: "0 0 16 16", paths: <><path fill="currentColor" fillRule="evenodd" d="M1.68 15.3q.681.7 1.653.7H15V1.6h-1.296v13.067H3.334a1 1 0 0 1-.74-.307 1.05 1.05 0 0 1-.298-.76q0-.453.298-.76a1 1 0 0 1 .74-.307h8.296V0H3.333q-.972 0-1.652.7A2.35 2.35 0 0 0 1 2.4v11.2q0 1 .68 1.7m8.653-4.1h-7q-.295 0-.549.073-.254.075-.488.2V2.4q0-.454.295-.76a1 1 0 0 1 .742-.307h7z" clipRule="evenodd"/><path fill="#0076D8" fillRule="evenodd" d="M3.787 9.2h.946l.493-1.427h2.197L7.91 9.2h.947l-2.05-5.6H5.83zm2.515-4.56-.804 2.32h1.646l-.803-2.32z" clipRule="evenodd"/></> }
    }
};

export function Book6({
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

Book6.displayName = "Book6";
