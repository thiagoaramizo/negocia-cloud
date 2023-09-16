import { ReactNode } from "react"

interface HeadingProps {
  color: string
  children: ReactNode
}

export function Heading ( {color, children}: HeadingProps) {
  return (
    <h1 className="text-4xl font-extrabold" style={{color: color}}>
      {children}
    </h1>
  )
}