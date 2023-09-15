import { ReactNode } from "react"

interface SubtitleProps {
  color: string
  children: ReactNode
}

export function Subtitle ( {color, children}: SubtitleProps) {
  return (
    <h2 className="text-2xl font-bold" style={{color: color}}>
      {children}
    </h2>
  )
}