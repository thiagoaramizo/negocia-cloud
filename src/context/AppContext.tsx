import { DecodeTokenUserType } from '@/@types/UserType'
import { getCookie, setCookie } from 'cookies-next'
import jwt from 'jsonwebtoken'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface contextProviderProps {
  children: ReactNode
}

interface AppContextType {
  sidebarOpen: boolean
  setSidebarOpen: (state:boolean) => void
  userData?: DecodeTokenUserType
  updateToken: (token:string) => void
}


export const AppContext = createContext({} as AppContextType)

export function AppContexttProvider({ children }: contextProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userData, setUserData] = useState<DecodeTokenUserType>()

  const updateToken = async (token: string) => {
    setCookie('authorization', token)
    setUserData(jwt.decode(token) as DecodeTokenUserType )
  }

  useEffect(() => {
    const token = getCookie('authorization')
    if( token ) {
      setUserData( jwt.decode(token as string) as DecodeTokenUserType )
    }
  },[])
  
  return (
    <AppContext.Provider value={ { sidebarOpen, setSidebarOpen, userData, updateToken } }>
      {children}
    </AppContext.Provider>
  )
}