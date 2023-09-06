import { AppContext } from "@/context/AppContext"
import { ReactNode, useContext } from "react"
import Link from "next/link"

interface SideBarItemProps {
  name: string
  href: string
  selected: boolean
  onClick?: ()=>void 
  children: ReactNode
}

export const SideBarItem = ({name, href, selected, onClick, children}:SideBarItemProps) => {

  const {sidebarOpen} = useContext(AppContext)


  return (
                   
    <Link href={href} aria-selected={selected} onClick={onClick} className="group/item w-full flex gap-2 items-center px-4 py-5 text-emerald-100 aria-selected:bg-slate-800 aria-selected:bg-opacity-50 hover:bg-slate-800 hover:bg-opacity-30">
      {children}
      {sidebarOpen && <span className="pr-6 text-md group-hover/item:text-white">{name}</span>}
    </Link>
              
    )
}