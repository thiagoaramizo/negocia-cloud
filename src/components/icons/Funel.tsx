import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

export default function Funel({ ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#212121"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M234.29,47.91A20,20,0,0,0,216,36H40A20,20,0,0,0,25.2,69.45l.12.14L92,140.75V216a20,20,0,0,0,31.1,16.64l32-21.33A20,20,0,0,0,164,194.66V140.75l66.67-71.16.12-.14A20,20,0,0,0,234.29,47.91Zm-88.88,77.58A19.93,19.93,0,0,0,140,139.17v53.35l-24,16V139.17a19.93,19.93,0,0,0-5.41-13.68L49.23,60H206.77Z"></path>
    </svg>
  );
}
