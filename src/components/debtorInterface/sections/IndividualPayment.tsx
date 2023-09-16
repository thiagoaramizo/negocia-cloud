import { FormEvent, useContext, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { AppContext } from "@/context/AppContext";
import { ProposeType } from "@/@types/ProposeType";
import Lock from "@/components/icons/Lock";
import { ColorResponsiveBackground } from "../ColorResponsiveBackground";
import ArrowBack from "@/components/icons/ArrowBack";

interface IndividualPaymentProps {
  propose: ProposeType
  setPage: (value: any) => void
}

export function IndividualPayment ({propose, setPage}: IndividualPaymentProps) {

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

  const goToPage = async ( page: number ) => {
    setLoading(true)
    const timer = await new Promise((r) => {setTimeout(r, 300)})
    setLoading(false)
    setPage(page)
  }

  return (

    <div className="w-full max-w-xl flex-1 flex flex-col justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="text-3xl font-bold leading-tight opacity-0 animate-fade-in">Selecione a forma de pagamento</span>

        <ColorResponsiveBackground background={ui.colors.secondary} className="rounded-lg opacity-0 animate-fade-in-2">
          <button className="w-full flex flex-col items-center justify-center p-4 text-center rounded-lg" onClick={()=>goToPage(5)}>
            <span className="text-xl">Boleto bancário</span>
            <span className="text-sm">com vencimento em até 10 dias</span>
          </button>
        </ColorResponsiveBackground>

        <ColorResponsiveBackground background={ui.colors.secondary} className="rounded-lg opacity-0 animate-fade-in-2">
          <button className="w-full flex flex-col items-center justify-center p-4 text-center rounded-lg" onClick={()=>goToPage(5)}>
            <span className="text-xl">Pix à vista</span>
            <span className="text-sm">Pagamento imediato</span>
          </button>
        </ColorResponsiveBackground>

        <ColorResponsiveBackground background={ui.colors.secondary} className="rounded-lg opacity-0 animate-fade-in-2">
          <button className="w-full flex flex-col items-center justify-center p-4 text-center rounded-lg" onClick={()=>goToPage(5)}>
            <span className="text-xl">Cartão de Crédito à vista</span>
            <span className="text-sm">Pagamento imediato</span>
          </button>
        </ColorResponsiveBackground>

        <ColorResponsiveBackground background={ui.colors.secondary} className="rounded-lg opacity-0 animate-fade-in-2">
          <button className="w-full flex flex-col items-center justify-center p-4 text-center rounded-lg" onClick={()=>goToPage(5)}>
            <span className="text-xl">Cartão de Crédito parcelado</span>
            <span className="text-sm">Em até 10x com juros</span>
          </button>
        </ColorResponsiveBackground>

        <div className="flex items-center justify-between gap-4 pt-2 xl:pt-12">
          <button className="opacity-0 animate-fade-in-12" onClick={() => goToPage(3)}>
            <div className="flex gap-2 items-center">
              <ArrowBack className="w-4"/>
              <span className="text-md">Voltar</span>
            </div>
          </button>
        </div>


      </div>
    </div>
  )
}
