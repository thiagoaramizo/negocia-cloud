import { ReactNode } from "react";

interface  AsymmetricLayoutProps {
  children: ReactNode
  size: number

}

export function  AsymmetricLayout ({children, size}:  AsymmetricLayoutProps) {

  return (
    <>
      <div className="grid w-full gap-4" style={{gridTemplateColumns: `${size}px 1fr`}}>
        {children}
      </div>
    </>
  )
}