import { ButtonHTMLAttributes, ReactNode } from "react"
import { hex } from "wcag-contrast"
import CircleNotch from "../icons/CircleNotch"

interface ButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string
  children: ReactNode
  isLoading?: boolean
}

export function Button ( {color, isLoading=false, children, className, ...props}: ButtonProps) {

  const textColor = hex( color, '#0f172a' ) > 4 ? '#0f172a' : '#f1f5f9'

  return (
    <button className={"flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:scale-101 active:scale-99 " + className} {...props} style={{backgroundColor: color, color: textColor}}>
      {isLoading && <CircleNotch className="animate-spin w-4 fill-white -my-0.5"/>}
      <div>{children}</div>
    </button>
  )
}