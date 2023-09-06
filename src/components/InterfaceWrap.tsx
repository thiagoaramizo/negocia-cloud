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
        className="grid h-screen w-full relative bg-green-50" 
      >

        <div className="fixed z-50">
          <SideBar />
        </div>
        
        
        <div className="bg-slate-50 pl-16">

          <Header />
          
          <div className="p-16 pt-12">
            {children}
          </div>

        </div>
      </div>
      </>
  )
}