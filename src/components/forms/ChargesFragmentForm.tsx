import { ChargerType, CorrectionType } from "@/@types/DebtType"
import { Input } from "../Input"
import { InputRadio } from "../InputRadio"
import { differenceInDays, differenceInMonths } from "date-fns"
import { Button } from "../Button"
import { useContext } from "react"
import { AppContext } from "@/context/AppContext"


export const ChargesFragmentForm = () => {
  
  const {propose, setPropose} = useContext(AppContext)
  
  const expirationDate = typeof propose.debt.expirationDate !== 'string' ? propose.debt.expirationDate : new Date(propose.debt.expirationDate)
  const originalValue = propose.debt.originalValue
  const daysPassed = differenceInDays(Date.now(), expirationDate)

  const correctedValue = originalValue * propose.debt.correction.value
  const correctionValue = correctedValue - originalValue
  const feeValue = correctedValue * propose.debt.fee.value/100

  const dayInterestValue = (propose.debt.interest.value/100)/30
  const interestValue = correctedValue * dayInterestValue * daysPassed
  const presentValue = propose.debt.presentValue

  const handleCorrectionRadio = (option: 'correct' | 'no-correct') => {
    const monthsPassed = differenceInMonths(Date.now(), expirationDate)
    const newCorretion = {
      name: option === 'correct' ? 'INPC' : '-',
      value: option === 'correct' ? 1 + (0.00294 * monthsPassed) : 1,
      correctionStatus: option
    }
    const newCorrectedValue = propose.debt.originalValue * newCorretion.value
    const newFeeValue = newCorrectedValue * propose.debt.fee.value/100
    const newInterestValue = newCorrectedValue * (propose.debt.interest.value/100)/30 * daysPassed
    setPropose( {
      ...propose,
      debt: {
        ...propose.debt,
        correction: newCorretion,
        presentValue: newCorrectedValue + newFeeValue + newInterestValue
      }
    })
  }

  const handleFeeChange = (value: string) => {
    const newFee: ChargerType = {
      name: "fee",
      chargerType: "percentage",
      value: Number(value)
    }
    const correctedValue = propose.debt.originalValue * propose.debt.correction.value
    const newFeeValue = correctedValue * newFee.value/100
    const interestValue = correctedValue * (propose.debt.interest.value/100)/30 * daysPassed
    setPropose( {
      ...propose,
      debt: {
        ...propose.debt,
        fee: newFee,
        presentValue: correctedValue + newFeeValue + interestValue
      }
    })
  }

  const handleInterestChange = (value: string) => {
    const newInterest: ChargerType = {
      name: "interest",
      chargerType: "percentage",
      value: Number(value)
    }
    const correctedValue = propose.debt.originalValue * propose.debt.correction.value
    const feeValue = correctedValue * propose.debt.fee.value/100
    const newInterestValue = correctedValue * (newInterest.value/100)/30 * daysPassed
    setPropose( {
      ...propose,
      debt: {
        ...propose.debt,
        interest: newInterest,
        presentValue: correctedValue + feeValue + newInterestValue
      }
    })
  }
  
  return (
    <>
      <h2 className="text-green-700 font-semibold pt-12">Cálculo dos encargos ({daysPassed} dias)</h2>
      <div className="flex justify-between gap-8 py-6">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex gap-4 p-4 border border-green-500 w-full rounded-md relative">
            <span className="absolute -top-2 left-2 text-sm font-semibold text-slate-700 bg-white px-2">Correção monetária</span>
            <InputRadio name={"correctionStatus"} value={"no-correct"} title={"Não aplicar"} checked={propose.debt.correction.correctionStatus === 'no-correct'} onChange={() => handleCorrectionRadio('no-correct')}/>
            <InputRadio name={"correctionStatus"} value={"correct"} title={"Aplicar"} checked={propose.debt.correction.correctionStatus === 'correct'} onChange={() => handleCorrectionRadio('correct')}/>
            {propose.debt.correction.correctionStatus === 'correct' && <Input name={"correction"} title={""} value={'INPC'} disabled />}
          </div>
          <div className="flex items-center gap-4 p-4 border border-green-500 w-full rounded-md relative">
            <span className="absolute -top-2 left-2 text-sm font-semibold text-slate-700 bg-white px-2">Multa</span>
            <div className="relative">
              <Input name={"fee"} title={""} type="number" min={0} value={propose.debt.fee.value} onChange={(e) => handleFeeChange(e.target.value) } />
              <span className="absolute top-2.5 right-2 bg-slate-100 font-semibold text-slate-400 px-2 py-0 rounded-full">%</span>
            </div>
            <div className="flex gap-4 pt-1 pl-4">
              <InputRadio name={"fee-chargerType"} value={"percentage"} title={"Percentual"} checked/>
              <div className="opacity-50"><InputRadio name={"fee-chargerType"} value={"fixed"} title={"Fixa (em breve)"} disabled/></div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border border-green-500 w-full rounded-md relative">
            <span className="absolute -top-2 left-2 text-sm font-semibold text-slate-700 bg-white px-2">Juros mensal</span>
            <div className="relative">
              <Input name={"interest"} title={""} type="number" min={0} value={propose.debt.interest.value}  onChange={(e) => handleInterestChange(e.target.value) }/>
              <span className="absolute top-2.5 right-2 bg-slate-100 font-semibold text-slate-400 px-2 py-0 rounded-full">%</span>
            </div>
          </div>
          <div className="flex items-center pt-2">
            <Button variant="secondary" title="Em breve" disabled>Adicionar outro encargo <span className="text-sm">(em breve)</span></Button>
          </div>
        </div>
        
        <div className="bg-green-100 py-8 px-12 w-1/2 rounded-md shadow-md flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-2 items-center justify-between">

            <span className="font-semibold">Valor original</span> 
            <span className="text-right font-semibold">{originalValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            
            <div>Correção Monetária <span className="text-xs">(INPC)</span></div> 
            <span className="text-right">{correctionValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            
            <span>Multa</span>
            <span className="text-right">{ feeValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            
            <div>Juros mensais <span className="text-xs">({dayInterestValue.toLocaleString('pt-BR', {style: 'percent', maximumFractionDigits: 3})}/dia)</span></div> 
            <span className="text-right">{ interestValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            
          </div>
          <div className="grid grid-cols-2 mt-2 border-t border-slate-400 pt-4 items-center justify-between text-green-800 text-lg">
            <span className="font-semibold">Valor total</span> <span className="font-semibold text-right">{propose.debt.presentValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
          </div>
        </div>
      </div>
    </>
  )
}