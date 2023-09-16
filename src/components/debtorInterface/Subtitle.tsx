import { ReactNode } from "react"

interface SubtitleProps {
  color: string
  children: ReactNode
}

export function Subtitle ( {color, children}: SubtitleProps) {
  return (
    <h2 className="text-3xl font-extrabold" style={{color: color}}>
      {children}
    </h2>
  )
}