import { AppContext } from "@/context/AppContext"
import { useContext } from "react"
import Close from "./icons/Close"
import List from "./icons/List"
import House from "./icons/House"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/router"
import SignOut from "./icons/SignOut"
import Link from "next/link"
import Chart from "./icons/Chart"
import Users from "./icons/Users"
import HandCoins from "./icons/HandCoins"


export const SideBar = () => {

  const {sidebarOpen, setSidebarOpen} = useContext(AppContext)

  const router = useRouter();
  const pathname = router.pathname;
  
  const handleSideBarOpenClick = () => {
    setSidebarOpen(!sidebarOpen)
  }
  
  const handlerLogout = () => {
    deleteCookie('authorization')
    router.push('/')
  }

  return (
    <div className="bg-slate-700 flex flex-col items-center justify-between">

          <div className="flex flex-col items-start justify-end w-full bg-emerald-600">
            <button className="flex flex-col items-center justify-center h-24 w-full" onClick={handleSideBarOpenClick}>
              {sidebarOpen ?
              <div className="w-full flex items-center justify-between px-4" style={{minWidth: 250}}> 
                <Close className="transition-all fill-emerald-900 hover:fill-emerald-100" /> 
              </div> 
              :
              <List className="transition-all fill-emerald-900 hover:fill-emerald-100" />
            }
            </button>
          </div>
      
          <div className="flex flex-col items-start justify-start w-full flex-1 mt-6">
            
            <Link href={'/'} aria-selected={pathname === '/'} className="group/item w-full flex gap-2 items-center px-4 py-5 text-emerald-100 aria-selected:bg-slate-800 aria-selected:bg-opacity-30 hover:bg-slate-800 hover:bg-opacity-30">
              <House className=" fill-emerald-500 group-hover/item:fill-emerald-300"/>
              {sidebarOpen && <span className="pr-6 text-md group-hover/item:text-white">Inicial</span>}
            </Link>
            
            <Link href={'/dashboard'} aria-selected={pathname.includes('/dashboard')} className="group/item w-full flex gap-2 items-center px-4 py-5 text-emerald-100 aria-selected:bg-slate-800 aria-selected:bg-opacity-30 hover:bg-slate-800 hover:bg-opacity-30">
              <Chart className=" fill-emerald-500 group-hover/item:fill-emerald-300"/>
              {sidebarOpen && <span className="pr-6 text-md group-hover/item:text-white">Dashboard</span>}
            </Link>

            <Link href={'/clientes'} aria-selected={pathname.includes('/clientes')} className="group/item w-full flex gap-2 items-center px-4 py-5 text-emerald-100 aria-selected:bg-slate-800 aria-selected:bg-opacity-30 hover:bg-slate-800 hover:bg-opacity-30">
              <Users className=" fill-emerald-500 group-hover/item:fill-emerald-300"/>
              {sidebarOpen && <span className="pr-6 text-md group-hover/item:text-white">Clientes</span>}
            </Link>

            <Link href={'/cobrancas'} aria-selected={pathname.includes('/cobrancas')} className="group/item w-full flex gap-2 items-center px-4 py-5 text-emerald-100 aria-selected:bg-slate-800 aria-selected:bg-opacity-30 hover:bg-slate-800 hover:bg-opacity-30">
              <HandCoins className=" fill-emerald-500 group-hover/item:fill-emerald-300"/>
              {sidebarOpen && <span className="pr-6 text-md group-hover/item:text-white">Cobranças</span>}
            </Link>


          </div>

          <div className="flex flex-col items-start justify-end w-full py-6 ">
            <button className="group/item flex gap-2 items-center px-4 rounded-xl text-slate-500" onClick={handlerLogout}>
              <SignOut className="transition-colors fill-slate-500 group-hover/item:fill-white"/>
              {sidebarOpen && <span className="transition-colors pr-6 text-md group-hover/item:text-white">Sair</span>}
            </button>
          </div>

          
    </div>
  )
}