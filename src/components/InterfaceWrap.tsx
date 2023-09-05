"use client"

import { ReactNode, useContext } from "react";
import { Header } from "./Header";
import { AppContext } from "@/context/AppContext";
import { ArrowLineRight } from "@phosphor-icons/react";

interface InterfaceWrapProps {
  children: ReactNode
}

export function InterfaceWrap ({children}: InterfaceWrapProps) {

  const {sidebarOpen, setSidebarOpen} = useContext(AppContext)
  const rotateMenuButton = sidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)'
  const sidebarWidth = sidebarOpen ? '300px' : '70px'

  return (
    <>
      <div 
        className="grid min-h-screen w-full" 
        style={{gridTemplateColumns: `${sidebarWidth} 1fr` }}
      >
        <div className="bg-emerald-600">
          <button className="px-3 py-3 m-1 rounded-xl text-emerald-800 transition-colors hover:text-emerald-100" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <ArrowLineRight size={32} className="transition-transform" weight="bold" style={{transform: rotateMenuButton}}/>
          </button>
        </div>
        
        <div className="bg-green-50">
          <Header />
          <div className="px-8 py-8">
            {children}
          </div>
        </div>
      </div>
      </>
  )
}