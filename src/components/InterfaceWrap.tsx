import { ReactNode, useContext } from "react";
import { Header } from "./Header";
import { AppContext } from "@/context/AppContext";
import { SideBar } from "./SideBar";


interface InterfaceWrapProps {
  children: ReactNode
}

export function InterfaceWrap ({children}: InterfaceWrapProps) {

  const {sidebarOpen} = useContext(AppContext)
  const sidebarWidth = sidebarOpen ? 'max-content' : '70px'

  return (
    <>
      <div 
        className="grid min-h-screen w-full" 
        style={{gridTemplateColumns: `${sidebarWidth} 1fr` }}
      >
        <SideBar />
        
        <div className="bg-green-50">

          <Header />
          
          <div className="p-8">
            {children}
          </div>

        </div>
      </div>
      </>
  )
}