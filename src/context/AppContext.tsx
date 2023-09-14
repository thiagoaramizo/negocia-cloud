import { ProposeType } from '@/@types/ProposeType'
import { DecodeTokenUserType } from '@/@types/UserType'
import { getCookie, setCookie } from 'cookies-next'
import { addDays, subDays } from 'date-fns'
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
  propose: ProposeType
  setPropose: (propose:ProposeType) => void
}


export const AppContext = createContext({} as AppContextType)

export function AppContexttProvider({ children }: contextProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userData, setUserData] = useState<DecodeTokenUserType>()
  const [propose, setPropose] = useState<ProposeType>(
    {  
      id: '',
      debt: {
        id: '',
        debtor: [],
        origin: '',
        documentId: '',
        expirationDate: subDays( new Date(), 30),
        originalValue: 0,
        fee: {
          name: 'fee',
          chargerType: 'fixed',
          value: 0,
        },
        interest: {
          name: 'interest',
          chargerType: 'fixed',
          value: 0,
        },
        otherCharges: [],
        presentValue: 0,
        collateral: [],
        correction: {
          name: 'INPC',
          value: 1,
          correctionStatus: 'no-correct'
        }
      },
      date: new Date,
      status: {
        updatedAt: new Date,
        situation: 'sent'
      },
      proposeValue: 0,
      expirationDate: addDays( new Date(), 30),
      paymentDeadline: 10,
      payments: [
        { 
          name: 'creditCard',
          status: true,
        },
        { 
          name: 'bankShip',
          status: true,
        },
        { 
          name: 'pix',
          status: true,
        }
      ],
      comunication: [
        { 
          name: 'email',
          status: true,
        },
        { 
          name: 'whatsapp',
          status: true,
        },
      ]
      }
  )

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
    <AppContext.Provider value={ { sidebarOpen, setSidebarOpen, userData, updateToken, propose, setPropose } }>
      {children}
    </AppContext.Provider>
  )
}