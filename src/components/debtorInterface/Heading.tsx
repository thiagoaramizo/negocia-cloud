import { ReactNode } from "react"

interface HeadingProps {
  color: string
  children: ReactNode
}

export function Heading ( {color, children}: HeadingProps) {
  return (
    <h1 className="text-3xl font-bold" style={{color: color}}>
      {children}
    </h1>
  )
}