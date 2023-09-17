import { FormEvent, useContext, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { AppContext } from "@/context/AppContext";
import { ProposeType } from "@/@types/ProposeType";
import Lock from "@/components/icons/Lock";
import Check from "@/components/icons/Check";

interface IndividualConfirmProps {
  propose: ProposeType
  setPage: (value: any) => void
}

export function IndividualConfirm ({propose, setPage}: IndividualConfirmProps) {

  const {appConfig} = useContext(AppContext)
  const ui = appConfig.appInterface
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
        <Check style={{fill: ui.colors.secondary}} className="w-32 h-32 opacity-0 animate-fade-in"/>
        <span className="text-3xl font-bold leading-tight opacity-0 animate-fade-in">Assinatura confirmada!</span>
        <span className="text-xl leading-normal opacity-0 animate-fade-in-6">Seu contrato e instruções para pagamento foram enviadas para o seu e-mail.</span>
        <span className="text-sm leading-normal opacity-0 animate-fade-in-6">Você pode fechar essa janela.</span>

      </div>
    </div>
  )
}
