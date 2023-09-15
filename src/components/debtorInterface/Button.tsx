import { ReactNode } from "react"
import { hex } from "wcag-contrast"

interface ButtonProps {
  color: string
  children: ReactNode
}

export function Button ( {color, children}: ButtonProps) {

  const textColor = hex( color, '#0f172a' ) > 4 ? '#0f172a' : '#f1f5f9'

  return (
    <button className="px-2.5 py-1.5 rounded-md font-semibold" style={{backgroundColor: color, color: textColor}}>
      {children}
    </button>
  )
}