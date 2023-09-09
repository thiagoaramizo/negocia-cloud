import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

export default function Store({ ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#212121"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M236,96a12,12,0,0,0-.44-3.3L221.2,42.51A20.08,20.08,0,0,0,202,28H54A20.08,20.08,0,0,0,34.8,42.51L20.46,92.7A12,12,0,0,0,20,96l0,16a43.94,43.94,0,0,0,16,33.92V208a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V145.92A43.94,43.94,0,0,0,236,112Zm-24,16a20,20,0,0,1-40,0v-4h40ZM44,112v-4H84v4a20,20,0,0,1-40,0Zm64-4h40v4a20,20,0,0,1-40,0ZM57.05,52H199l9.14,32H47.91ZM196,204H60V155.81c1.32.12,2.65.19,4,.19a43.86,43.86,0,0,0,32-13.85,43.89,43.89,0,0,0,64,0A43.86,43.86,0,0,0,192,156c1.35,0,2.68-.07,4-.19Z"></path>
    </svg>
  )
}
