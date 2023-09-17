import { useContext, useState } from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { AppContext } from "@/context/AppContext";
import { ProposeType } from "@/@types/ProposeType";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import ArrowBack from "@/components/icons/ArrowBack";
import { ColorResponsiveBackground } from "../ColorResponsiveBackground";

interface IndividualProposeProps {
  propose: ProposeType
  setPage: (value: any) => void
}

export function IndividualPropose ({propose, setPage}: IndividualProposeProps) {

  const {appConfig} = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const ui = appConfig.appInterface
  const debtorFirstName = propose ? propose.debt.debtor[0].name.split(' ')[0] : ''
  const debt = propose.debt
  const expirationToNow = formatDistanceToNow(new Date(debt.expirationDate), { addSuffix: true, locale: ptBR,})
  const calcCharges = debt.presentValue - debt.originalValue
  const [PercentualChargesDiscount, PercentualPrincipalDiscount, PercentualTotalDiscount] = calcDiscount( debt.originalValue, debt.presentValue, propose.proposeValue )

  function calcDiscount (originalValue: number, presentValue: number, proposeValue: number) {
    const discountValue = presentValue - proposeValue
    const chargesValue = presentValue - originalValue
    const discountOnCharges = chargesValue - discountValue < 0 ? chargesValue : discountValue
    const discountOnPrincipal = chargesValue - discountValue < 0 ? (chargesValue - discountValue)*-1 : 0
    const discountOnChargesPercentage = discountOnCharges/chargesValue || 0
    const discountOnPrincipalPercentage = discountOnPrincipal/originalValue || 0
    const discountOnTotalPercentage = discountValue/presentValue || 0
    return [
      discountOnChargesPercentage, 
      discountOnPrincipalPercentage,
      discountOnTotalPercentage
    ]
  }

  const moneyFormat = ( value: number ) => {
    return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }

  const percentualFormtat = (value: number) => {
    return value.toLocaleString('pt-BR', {style: 'percent', maximumFractionDigits: 2})
  }

  const goToPage = async ( page: number ) => {
    setLoading(true)
    const timer = await new Promise((r) => {setTimeout(r, 300)})
    setLoading(false)
    setPage(page)
  }

  return (

    <div className="w-full max-w-xl pt-6">
      <div className="flex flex-col gap-6 text-left">
        <Heading color={ui.colors.secondary}><span className="opacity-0 animate-fade-in">Nossa proposta</span></Heading>

        <div className="grid grid-cols-2 gap-4 h-fit max-h-32 animate-fade-in" style={{color: ui.colors.secondary}}>
          <ColorResponsiveBackground background={ui.colors.secondary} className="rounded-lg max-h-fit">
            <div className="flex flex-col items-center justify-center p-4 text-center rounded-lg">
              <span className="text-4xl md:text-6xl font-extrabold">{percentualFormtat(PercentualChargesDiscount)}</span>
              <span className="font-extrabold text-lg leading-6 uppercase">de desconto nos encargos</span>
              {PercentualPrincipalDiscount > 0 && <span className="text-sm font-semibold pt-2 leading-tight"> + {percentualFormtat(PercentualPrincipalDiscount)} de desconto no valor original da dívida</span>}
            </div>
          </ColorResponsiveBackground>

            <div className="flex flex-col items-center justify-center p-4 text-center border-2 rounded-lg" style={{borderColor: ui.colors.secondary}}>
              <span className="font-bold text-lg uppercase">De  <strong>{moneyFormat(propose.debt.presentValue)}</strong> por </span>
              <span className="font-extrabold text-2xl md:text-3xl leading-8 uppercase"> {moneyFormat(propose.proposeValue)}</span>
            </div>
        </div>
        
        <div className="block mt-12">
          <p className="text-3xl font-bold leading-tight opacity-0 animate-fade-in-2"><strong style={{color: ui.colors.secondary}}>Removas as restrições no seu nome</strong> e pague em até {propose.paymentDeadline} dias.</p>
          <p className="text-xl leading-normal opacity-0 animate-fade-in-6">Ao renovar a dívida você aproveita o <strong> desconto total de {percentualFormtat(PercentualTotalDiscount)} sobre o valor atual da dívida</strong> e ainda tem {propose.paymentDeadline} dias para pagar.</p>
        </div>
        

        <div className="flex items-center justify-between gap-4 pt-2 xl:pt-12">
          <button className="opacity-0 animate-fade-in-24" onClick={() => goToPage(2)}>
            <div className="flex gap-2 items-center">
              <ArrowBack className="w-4"/>
              <span className="text-md">Voltar</span>
            </div>
          </button>

          <Button color={ui.colors.secondary} className="opacity-0 animate-fade-in-24" onClick={() => goToPage(4)}>
            <div className="flex gap-2 items-center">
              <span className="text-lg leading-tight">Quero renovar com desconto</span>
              <ArrowBack className="w-6 rotate-180"/>
            </div>
          </Button>
        </div>
        

      </div>
    </div>
  )
}
