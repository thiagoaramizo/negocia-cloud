import { FormEvent, useContext, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { AppContext } from "@/context/AppContext";
import { ProposeType } from "@/@types/ProposeType";
import Lock from "@/components/icons/Lock";
import { ColorResponsiveBackground } from "../ColorResponsiveBackground";
import ArrowBack from "@/components/icons/ArrowBack";
import { TitleContract } from "../TitleContract";
import { Heading } from "../Heading";
import { Subtitle } from "../Subtitle";

interface IndividualContractProps {
  propose: ProposeType
  setPage: (value: any) => void
}

export function IndividualContract ({propose, setPage}: IndividualContractProps) {

  const {appConfig} = useContext(AppContext)
  const debt = propose.debt
  const ui = appConfig.appInterface
  const company = appConfig.company
  const [loading, setLoading] = useState(false)
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const timer = await new Promise((r) => {setTimeout(r, 1000)})
    setLoading(false)
    setPage(2)
  }

  const moneyFormat = ( value: number ) => {
    return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }

  const dateFormat = ( value: string | Date ) => {
    if( typeof value === 'string' ){
      return new Date(value).toLocaleDateString()
    } else return value.toLocaleDateString()
  }

  const goToPage = async ( page: number ) => {
    setLoading(true)
    const timer = await new Promise((r) => {setTimeout(r, 300)})
    setLoading(false)
    setPage(page)
  }

  return (

    <div className="w-full max-w-xl h-full flex-1 grid grid-rows-contract gap-4 pt-6 pb-16 opacity-0 animate-fade-in">

        <span className="text-2xl font-bold leading-tight">Revise os termos do acordo</span>

        <div className="block w-full max-h-full bg-white overflow-y-scroll overflow-x-hidden hyphens-auto text-justify rounded-lg shadow-lg">

          <div className="py-4 px-2 mb-4" style={{backgroundColor: ui.colors.primary}}>
            <h1 className="text-xl text-center hyphens-none font-bold text-white uppercase">Termo de confissão e novação de dívida</h1>
          </div>

          <div className="flex flex-col gap-2 py-4 px-6">

            <div className="border rounded-md relative p-3 -ml-2 my-2 flex flex-col gap-2" style={{borderColor: ui.colors.primary}}>
              <span className="absolute text-sm font-semibold uppercase bg-white -top-3 px-1 left-1" style={{color: ui.colors.primary}}>a) Devedor(a)</span>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>Nome:</span> <span className="uppercase">{debt.debtor[0].name}</span></p>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>CPF:</span> {debt.debtor[0].fiscalDocument}</p>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>E-mail:</span> {debt.debtor[0].email}</p>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>Endereço:</span> {debt.debtor[0].address.street}, {debt.debtor[0].address.number}, {debt.debtor[0].address.city}/{debt.debtor[0].address.uf}, CEP {debt.debtor[0].address.postalCode}</p>
            </div>

            <div className="border rounded-md relative p-3 -ml-2 my-2 flex flex-col gap-2" style={{borderColor: ui.colors.primary}}>
              <span className="absolute text-sm font-semibold uppercase bg-white -top-3 px-1 left-1" style={{color: ui.colors.primary}}>b) Credora</span>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>Razão social:</span> <span className="uppercase">{company.name}</span></p>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>CNPJ:</span> {company.fiscalDocument}</p>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>E-mail:</span> {company.email}</p>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>Endereço:</span> {company.address.street}, {company.address.number}, {company.address.city}/{company.address.uf}, CEP {company.address.postalCode}</p>
            </div>

            <div className="border rounded-md relative p-3 -ml-2 my-2 flex flex-col gap-2" style={{borderColor: ui.colors.primary}}>
              <span className="absolute text-sm font-semibold uppercase bg-white -top-3 px-1 left-1" style={{color: ui.colors.primary}}>c) Dívida</span>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>Origem:</span> {debt.origin}</p>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>Vencimento:</span> {dateFormat( debt.expirationDate )}</p>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>Valor atualizado:</span> {moneyFormat(debt.presentValue)}</p>
              <p><span className="text-sm" style={{color: ui.colors.primary}}>Valor com desconto:</span> {moneyFormat(propose.proposeValue)}</p>
            </div>          

            <p>As Partes, justas e contratadas, firmam o presente instrumento nos termos das cláusulas abaixo.</p>

            <TitleContract>1. Objeto</TitleContract>
            <p>1.1. É objeto deste contrato a CONFISSÃO pelo(a) DEVEDOR(A) em favor do CREDOR(A) da obrigação de pagar quantia certa vencida e não paga decorrente do inadimplemento contratual, no valor total de {moneyFormat(propose.debt.presentValue)}.</p>
            
            <TitleContract>2. Declaração do(a) devedor</TitleContract>
            <p>2.1. Pelo presente instrumento e na melhor forma de direito, o(a) DEVEDOR(A) confessa expressamente existir e ser válida a dívida vencida e não paga descrita no item C supra e na cláusula 1.1 deste contrato.</p>
            <p>2.2. A declaração de confissão da dívida é irretratável e irrevogável, de modo que produzirá efeitos tão logo seja aperfeiçoado o presente instrumento após a aposição da assinatura do(a) DEVEDOR(A).</p>
            <p>2.3.	As Partes declaram que a utilidade da presente confissão cinge-se exclusivamente à realização dos pagamentos no exato tempo e modo descritos no item C e 3.1, de modo que a superveniência de mora ex re no pagamento das parcelas acordadas, em qualquer parcela, implicará seu total inadimplemento do valor confessado e, consequentemente, o vencimento antecipado das demais, com possibilidade de protesto do valor inadimplido do presente instrumento, inclusão do nome do(a) DEVEDOR(A) nos órgãos restritivos de crédito e incidência de multa moratória correspondente a 10% do valor inadimplido.</p>

            <TitleContract>3. Forma de pagamento</TitleContract>
            <p>3.1.	Assim, pelo presente instrumento e na melhor forma de direito, o(a) DEVEDOR(A) se obriga a entregar ao CREDOR(A) a quantia certa de {moneyFormat(propose.proposeValue)}, da forma descrita no item C supra, mediante {'Boleto bancário'} no prazo de {propose.paymentDeadline} da assinatura do presente.</p>
            <p>3.2. Além do valor descrito no item 3.1, o(a) DEVEDOR(A) tem plena ciência que, caso o(a) CREDOR(A) venha a protestar o presente título, as custas/emolumentos do Cartório de Protesto, para baixa do referido débito, ficará a seu cargo, sendo que a Carta de Anuência será expedida após confirmação do pagamento do débito.</p>
            
            <TitleContract>4. Mora</TitleContract>
            <p>4.1. Caso haja o descumprimento do presente Instrumento pela Confitente, o valor da dívida será o confessado na Cláusula Primeira, o qual deverá ser acrescido dos encargos legais até a época do efetivo pagamento, corrigido pelo índice IGPM-FGV ou, na falta deste, por outro que o venha a substituir, mais juros de 1% ao mês pro rata die, sem prejuízo da multa prevista no item 2.3.</p>
            
            <TitleContract>5. Foro de eleição</TitleContract>
            <p>5.1.	As Partes elegem o foro da Comarca de {company.address.city}/{company.address.uf}, para dirimir quaisquer pendências decorrentes do presente instrumento de contrato.</p>
            
            <p className="pt-4">E, por estarem de pleno acordo, assinam o presente instrumento em formato eletrônico, certificado e armazenado digitalmente por Negocia.cloud, sendo uma cópia encaminhada para o e-mail do(a) DEVEDOR(A).</p>

          </div>
      
        </div>

        <div className="flex items-center justify-between gap-4 pt-2 xl:pt-12">
          <button className="opacity-0 animate-fade-in-12" onClick={() => goToPage(3)}>
            <div className="flex gap-2 items-center">
              <ArrowBack className="w-4"/>
              <span className="text-md">Voltar</span>
            </div>
          </button>

          <Button color={ui.colors.secondary} className="opacity-0 animate-fade-in-24" onClick={() => goToPage(6)}>
            <div className="flex gap-2 items-center">
              <span className="text-lg leading-tight">Concordar e Assinar</span>
              <ArrowBack className="w-6 rotate-180"/>
            </div>
          </Button>
        </div>

    </div>
  )
}
