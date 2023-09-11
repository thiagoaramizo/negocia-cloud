import { ChargerType } from "@/@types/DebtType"
import { Input } from "../Input"
import { InputRadio } from "../InputRadio"
import { differenceInDays, differenceInMonths } from "date-fns"
import { Button } from "../Button"

interface ChargersWrapType {
  fee: ChargerType,
  interest: ChargerType,
  otherCharges: ChargerType[]
}

interface ChargesFormProps {
  originalValue: number
  expirationDate: Date
  chargers: ChargersWrapType
  setCharges: ( chargers: ChargersWrapType) => void
}

export const ChargesForm = ({originalValue, expirationDate, chargers, setCharges}: ChargesFormProps) => {
  
  const monthsPassed = differenceInMonths(new Date(), expirationDate)
  const daysPassed = differenceInDays(new Date(), expirationDate)
  const correctionValue = originalValue * 0.0353 * monthsPassed
  const correctedValue = originalValue + correctionValue
  const fee = correctedValue*chargers.fee.value/100
  const dayInterestValue = chargers.interest.value/100/30
  const interest = correctedValue*chargers.interest.value/100/30*daysPassed

  const presentValue = correctedValue + fee + interest
  
  return (
    <>
      <h2 className="text-green-700 font-semibold pt-12">Cálculo dos encargos</h2>
      <div className="flex justify-between gap-8 py-6">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <InputRadio name={"correctionValue"} value={"correct"} title={"Aplicar correção"} checked/>
            <InputRadio name={"correctionValue"} value={"no-correct"} title={"Não aplicar correção"}/>
          </div>
          <div className="flex items-center">
            <Input name={"fee"} title={"Multa"} type="number" value={chargers.fee.value} />
            <div className="flex gap-4 pt-8 pl-4">
              <InputRadio name={"fee-chargerType"} value={"fixed"} title={"Fixa"}/>
              <InputRadio name={"fee-chargerType"} value={"percentage"} title={"Percentual"} checked/>
            </div>
          </div>
          <div className="flex items-center">
            <Input name={"interest"} title={"Juros mensal"} type="number"  value={chargers.interest.value}  />
          </div>
          <div className="flex items-center pt-2">
            <Button variant="secondary" disabled>Adicionar outro encargo</Button>
          </div>
        </div>
        
        <div className="bg-green-100 py-6 px-12 mt-4 w-1/2 rounded-xl shadow-md">
          <div className="grid grid-cols-2 gap-2 items-center justify-between">
            <span className="font-semibold">Valor original</span> <span className="text-right font-semibold">{originalValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            <div>Correção Monetária <span className="text-xs">({monthsPassed}m)</span></div> <span className="text-right">{correctionValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            <span>Multa</span> <span className="text-right">{ fee.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            <div>Juros mensais <span className="text-xs">({dayInterestValue.toLocaleString('pt-BR', {style: 'percent', maximumFractionDigits: 2})}/dia)</span></div> <span className="text-right">{ interest.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            
          </div>
          <div className="grid grid-cols-2 mt-2 border-t border-emerald-700 pt-2 items-center justify-between">
            <span className="font-semibold">Valor total</span> <span className="font-semibold text-right">{presentValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
          </div>
        </div>
      </div>
    </>
  )
}