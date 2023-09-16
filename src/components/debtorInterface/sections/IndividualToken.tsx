import { FormEvent, useContext, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { AppContext } from "@/context/AppContext";
import { ProposeType } from "@/@types/ProposeType";
import Lock from "@/components/icons/Lock";

interface IndividualTokenProps {
  propose: ProposeType
  setPage: (value: any) => void
}

export function IndividualToken ({propose, setPage}: IndividualTokenProps) {

  const {appConfig} = useContext(AppContext)
  const company = appConfig.company
  const ui = appConfig.appInterface
  const debtorFirstName = propose ? propose.debt.debtor[0].name.split(' ')[0] : ''
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const timer = await new Promise((r) => {setTimeout(r, 1000)})
    setLoading(false)
    setPage(2)
  }

  return (

    <div className="w-full max-w-xl flex-1 flex flex-col justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <Lock style={{fill: ui.colors.secondary}} className="opacity-0 animate-fade-in"/>
        <span className="text-3xl font-bold leading-tight opacity-0 animate-fade-in">Enviamos um código para o seu e-mail e WhatsApp</span>
        <span className="text-xl leading-normal opacity-0 animate-fade-in-6">Insira abaixo o código recebido:</span>
                  
        <form onSubmit={handleSubmit} className="grid grid-cols-address-number gap-4 items-center opacity-0 animate-fade-in-6">
          <Input name={'verify'} title="" placeholder="Código de segurança" required className="text-center" disabled={loading}/>
          <Button color={ui.colors.primary} type='submit' isLoading={loading} disabled={loading}>Enviar</Button>
        </form>

      </div>
    </div>
  )
}
