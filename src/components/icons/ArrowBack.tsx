import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

export default function ArrowBack({ ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
    </svg>
  );
}
