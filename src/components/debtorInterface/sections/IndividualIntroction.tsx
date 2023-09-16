import { FormEvent, useContext, useState } from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Input } from "../Input";
import { AppContext } from "@/context/AppContext";
import { ProposeType } from "@/@types/ProposeType";

interface IndividualIntroctionProps {
  propose: ProposeType
  setPage: (value: any) => void
}

export function IndividualIntroction ({propose, setPage}: IndividualIntroctionProps) {

  const {appConfig} = useContext(AppContext)
  const company = appConfig.company
  const ui = appConfig.appInterface
  const debtorFirstName = propose ? propose.debt.debtor[0].name.split(' ')[0] : ''
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const timer = await new Promise((r) => {setTimeout(r, 500)})
    setLoading(false)
    setPage(1)
  }

  return (

    <div className="w-full max-w-xl">
      <div className="flex flex-col gap-6 text-left">
        <Heading color={ui.colors.primary}><span className="opacity-0 animate-fade-in-2">Olá {debtorFirstName},</span></Heading>
        <span className="text-3xl font-bold leading-tight opacity-0 animate-fade-in-6">Temos uma oferta super especial para você quitar sua dívida conosco!</span>
        <span className="text-xl leading-normal opacity-0 animate-fade-in-12">Por questões de segurança, para continuar, nos <strong>informe os 04 primeiros dígitos do seu CPF</strong>:</span>
                  
        <form onSubmit={handleSubmit} className="grid grid-cols-address-number gap-4 items-center opacity-0 animate-fade-in-24">
          <Input name={'verify'} title="" placeholder="04 primeiros dígitos do seu CPF" required className="text-center" disabled={loading}/>
          <Button color={ui.colors.primary} type='submit' isLoading={loading} disabled={loading}>Enviar</Button>
        </form>

      </div>
    </div>
  )
}
