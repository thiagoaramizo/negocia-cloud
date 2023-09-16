import { FormEvent, useContext, useState } from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Input } from "../Input";
import { AppContext } from "@/context/AppContext";
import { ProposeType } from "@/@types/ProposeType";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Check from "@/components/icons/Check";

interface IndividualDebtProps {
  propose: ProposeType
  setPage: (value: any) => void
}

export function IndividualDebt ({propose, setPage}: IndividualDebtProps) {

  const {appConfig} = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const ui = appConfig.appInterface
  const debtorFirstName = propose ? propose.debt.debtor[0].name.split(' ')[0] : ''
  const debt = propose.debt
  const expirationToNow = formatDistanceToNow(new Date(debt.expirationDate), { addSuffix: true, locale: ptBR,})
  const calcCharges = debt.presentValue - debt.originalValue

  const moneyFormat = ( value: number ) => {
    return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }

  const goToPage = async ( page: number ) => {
    setLoading(true)
    const timer = await new Promise((r) => {setTimeout(r, 300)})
    setLoading(false)
    setPage(page)
  }

  return (

    <div className="w-full max-w-xl">
      <div className="flex flex-col gap-6 text-left">
        <Heading color={ui.colors.primary}><span className="opacity-0 animate-fade-in">{debtorFirstName},</span></Heading>
        <p className="text-3xl font-bold leading-tight opacity-0 animate-fade-in-2">Consta em nosso sistema uma <strong style={{color: ui.colors.primary}}>dívida de {moneyFormat(propose.debt.presentValue)}</strong> em seu nome.</p>
        <p className="text-xl leading-normal opacity-0 animate-fade-in-6">O vencimento desta dívida aconteceu aproximadamente {expirationToNow}, exatamente no dia <strong>{new Date(propose.debt.expirationDate).toLocaleDateString()}</strong> , por isso <strong>já se somaram {moneyFormat(calcCharges)} ao valor inicial da dívida</strong>.</p>
        <p className="text-xl leading-normal opacity-0 animate-fade-in-12">A cada dia esse valor aumenta e a falta do pagamento <strong>sujeita o seu nome a uma série de restrições</strong>.</p>

        <Button color={ui.colors.primary} className="opacity-0 animate-fade-in-24" onClick={() => goToPage(3)}>
          <div className="flex gap-2 items-center">
            <Check className="w-6" />
            <span className="text-lg">Quero desconto</span>
          </div>
        </Button>

      </div>
    </div>
  )
}
