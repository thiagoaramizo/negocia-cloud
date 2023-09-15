import { AppConfigType } from '@/@types/AppConfigType'
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
  appConfig: AppConfigType
  setAppConfig: (appConfig: AppConfigType) => void
}


export const AppContext = createContext({} as AppContextType)

export function AppContexttProvider({ children }: contextProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [appConfig, setAppConfig] = useState<AppConfigType>({
    company : {
      name: 'ALGAR TELECOM S/A',
      tradingName: 'ALGAR TELECOM',
      fiscalDocument: '71.208.516/0001-74',
      email: 'contato@algar.com.br',
      address: {
        postalCode: '38400-668',
        city: 'Uberlândia',
        uf: 'MG',
        street: 'Rua Jose Alves Garcia',
        number: '415',
        complement: '',
      },
      legalRepresentative: {
        name: 'Jean Carlos Borges',
        fiscalDocument: '562.273.900-46'
      }
    },
    appInterface: {
      logo: 'algar-telecom.png',
      colors: {
        background: '#e5f0f6',
        primary: '#0068a6',
        secondary: '#00813e',
      }
    },
    apis: {
      whatsappApi: {
        conection: true,
        secret: '97c997e9-3926-4823-b490-e61543054e29'
      },
      serasaApi: {
        connection: true,
        secret: '65c95369-75de-44ef-a07a-2fa7e586d4b0'
      }
    }
  })
  const [userData, setUserData] = useState<DecodeTokenUserType>()
  const [propose, setPropose] = useState<ProposeType>(
    {  
      id: '',
      debt: {
        id: '',
        debtor: [],
        origin: '',
        documentId: '',
        expirationDate: subDays( new Date(), 60),
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
    <AppContext.Provider value={ { sidebarOpen, setSidebarOpen, userData, updateToken, propose, setPropose, appConfig, setAppConfig } }>
      {children}
    </AppContext.Provider>
  )
}