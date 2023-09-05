import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
}

export function Header ({}: HeaderProps) {

  const [userMenu, setUserMenu] = useState(false)

  return (
    <header className="flex items-center justify-between bg-white px-6 py-5 shadow-md relative">
      <div className="flex items-center gap-3 divide-x-2">
        <Image src={'/images/negocia-cloud.svg'} alt='Negocia cloud' width={170} height={40}/>
        <span className="font-bold uppercase p-3 text-slate-400 text-xl">Gestão de cobranças</span>
      </div>

      <div>
        <button onClick={() => setUserMenu(!userMenu)}>
          Usuário
        </button>
      </div>

      {userMenu && <div className="absolute right-5 top-16 px-8 py-6 bg-slate-50 rounded-lg shadow-lg">
        menu usuario
      </div>}
      
    </header>
  )
}