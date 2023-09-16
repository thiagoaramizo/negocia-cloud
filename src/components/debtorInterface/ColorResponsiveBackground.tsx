import { ReactNode } from 'react'
import {hex} from 'wcag-contrast'

interface ColorResponsiveBackgroundProps {
  background: string
  children: ReactNode
  className?: string
}

export function ColorResponsiveBackground ( {background, children, className}: ColorResponsiveBackgroundProps) {
  
  const textColor = hex( background, '#0f172a' ) > 4 ? '#0f172a' : '#f1f5f9'
  
  return (
    <div className={"w-full h-full relative " + className} style={{backgroundColor: background, color: textColor}}>
      {children}
    </div>
  )
}