import { ReactNode } from 'react'
import {hex} from 'wcag-contrast'

interface ColorResponsiveBackgroundProps {
  background: string
  children: ReactNode
}

export function ColorResponsiveBackground ( {background, children}: ColorResponsiveBackgroundProps) {
  
  const textColor = hex( background, '#0f172a' ) > 4 ? '#0f172a' : '#f1f5f9'
  
  return (
    <div className="w-full h-full" style={{backgroundColor: background, color: textColor}}>
      {children}
    </div>
  )
}