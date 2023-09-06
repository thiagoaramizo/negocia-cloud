import { AppContext } from "@/context/AppContext"
import { useContext } from "react"
import Close from "./icons/Close"
import List from "./icons/List"
import House from "./icons/House"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/router"
import SignOut from "./icons/SignOut"
import Chart from "./icons/Chart"
import Users from "./icons/Users"
import HandCoins from "./icons/HandCoins"
import Image from "next/image";
import { SideBarItem } from "./SideBarItem"

export const SideBar = () => {

  const {sidebarOpen, setSidebarOpen} = useContext(AppContext)

  const router = useRouter();
  const pathname = router.pathname;
  
  const handleSideBarOpenClick = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleSelectItem = async () => {
    const timer = await new Promise((r) => {setTimeout(r, 300)})
    setSidebarOpen(false)
  }
  
  const handlerLogout = () => {
    deleteCookie('authorization')
    handleSelectItem()
    router.push('/')
  }

  return (
      <div aria-selected={sidebarOpen} className="bg-slate-700 flex flex-col items-center justify-between h-screen sticky aria-selected:animate-menu-animation z-50">

        <div className="flex flex-col items-start justify-end w-full bg-emerald-500">
          <button className="flex flex-col items-center justify-center h-24 w-full" onClick={handleSideBarOpenClick}>
          {sidebarOpen ?
            <div className="w-full flex items-center justify-between pl-4 pr-8" style={{minWidth: 350}}> 
              <Close className="transition-all fill-emerald-900 hover:fill-emerald-100" />
              <Image src={'/images/negocia-cloud-simple-white.svg'} alt='Negocia cloud' width={120} height={40}/>
            </div> 
          :
            <List className="transition-all fill-emerald-900 hover:fill-emerald-100" />
          }
          </button>
        </div>
        
        <div className="flex flex-col items-start justify-start w-full flex-1 mt-6">
          <SideBarItem name={'Inicial'} href={'/'} selected={pathname === '/'} onClick={handleSelectItem}>
            <House className=" fill-emerald-500 h-6"/>
          </SideBarItem>

          <SideBarItem name={'Dashboard'} href={'/dashboard'} selected={pathname.includes('/dashboard')} onClick={handleSelectItem}>
            <Chart className=" fill-emerald-500 h-6"/>
          </SideBarItem>

          <SideBarItem name={'Clientes'} href={'/clientes'} selected={pathname.includes('/clientes')} onClick={handleSelectItem}>
            <Users className=" fill-emerald-500 h-6"/>
          </SideBarItem>

          <SideBarItem name={'Cobranças'} href={'/cobrancas'} selected={pathname.includes('/cobrancas')} onClick={handleSelectItem}>
            <HandCoins className=" fill-emerald-500 h-6"/>
          </SideBarItem>
        </div>

        <div className="flex flex-col items-start justify-end w-full pt-6 ">
          <SideBarItem name={'Sair'} href={'#'} selected={false} onClick={handlerLogout}>
            <SignOut className=" fill-emerald-500 h-6"/>
          </SideBarItem>
        </div>

      </div>
    )
}