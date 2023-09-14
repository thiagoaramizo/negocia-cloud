import { DebtorType } from "@/@types/DebtorType"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import Store from "./icons/Store"
import User from "./icons/User"
import { Button } from "./Button"
import { createPortal } from "react-dom"
import Close from "./icons/Close"

interface DebtorListToImportProps {
  onSelect: (debtor: DebtorType) => void
}


export const DebtorListToImport = ( {onSelect}:DebtorListToImportProps ) => {

  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [clientList, setClientList] = useState<DebtorType[]>([])

  const getClientList = async () => {
    const token = getCookie('authorization')
    setLoading(true)
    const response = await axios.get('/api/clients', {
      headers: {
        'Authorization': token
      }
    })
    setClientList(response.data)
    console.log(response.data)
    setLoading(false)
  }

  const handleSelectDebtor = ( debtor: DebtorType ) => {
    onSelect( debtor )
    setOpenModal( false )
  }

  useEffect(()=>{
    getClientList()
  }, [])


  return ( <>
    
    <Button variant="secondary" className="transition-all hover:bg-emerald-500" type="button" onClick={() => setOpenModal(true)}>Importar cliente</Button>
    
    {openModal && createPortal (
    
    <div className="fixed top-0 left-0 w-full h-screen z-50 bg-white bg-opacity-50 backdrop-blur-sm p-6 flex items-center justify-center" >
      <div className="max-w-4xl h-5/6 overflow-y-auto bg-white rounded-xl shadow-2xl">

        <div className="flex items-center justify-between bg-white px-6 pt-10 pb-10 mb-4 sticky top-0 z-50 shadow-sm">
          <h4 className="text-green-700 font-semibold text-xl">Selecione um cliente</h4>
          <button onClick={() => setOpenModal(false)}>
            <Close className="-mt-4 transition-colors hover:fill-green-600" />
          </button>
        </div>
        

        <div className="px-12 mb-1 flex gap-4 items-center justify-between text-sm font-semibold text-emerald-700">
            <div className="w-10 flex items-center justify-center">
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4" >
              <span>Nome</span>
              <span>CPF/CNPJ</span>
              <span>E-mail</span>
            </div>
        </div>

        <div className="flex flex-col gap-3 px-6">
            {clientList.map( client => {
              return (
                <button onClick={() => handleSelectDebtor(client)} key={client.id} className="group/item bg-white border border-slate-50 px-6 py-6 rounded-lg shadow-sm flex gap-4 items-center justify-between transition-all hover:scale-101 hover:shadow-md hover:border-emerald-400">
                  <div className=" bg-slate-200 rounded-full h-10 w-10 flex items-center justify-center">
                    {client.typeOfDebtor === 'individual' ? <User className="h-6 fill-slate-400"/> : <Store className="h-6 fill-slate-400"/>}
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-4" >
                    <span>{client.name}</span>
                    <span>{client.fiscalDocument}</span>
                    <span className="truncate">{client.email}</span>
                  </div>
                </button>
              )
            })}
        </div>
      </div>
    </div>, document.body )}
  </>)
}