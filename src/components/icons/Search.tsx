import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

export default function Search({ ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#212121"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
    </svg>
  );
}
