import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormEvent, useContext, useRef } from "react";
import { ChargesFragmentForm } from "@/components/forms/ChargesFragmentForm";
import { formatISO } from "date-fns";
import { AppContext } from "@/context/AppContext";

interface DebtFormProps {
  setPage: (value: any) => void
}

export const DebtForm = ({ setPage }: DebtFormProps) => {

  const {propose, setPropose} = useContext(AppContext)
  
  const origin = propose.debt.origin
  const handleChangeOrigin = ( value: string ) => {
    setPropose(
      { ...propose,
        debt: {
          ...propose.debt,
          origin: value
        }
      }
    )
  }

  const originalValue = propose.debt.originalValue
  const handleChangeOriginalValue = ( value: number ) => {
    setPropose(
      { ...propose,
        debt: {
          ...propose.debt,
          originalValue: value
        }
      }
    )
  }

  const expirationDate = propose.debt.expirationDate
  const handleChangeExpirationDate = ( value: Date | null ) => {

    setPropose(
      { ...propose,
        debt: {
          ...propose.debt,
          expirationDate: value ? value : new Date()
        }
      }
    )
  }
  
  const formDebt = useRef<HTMLFormElement | null>( null )

  const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault
    setPage(3)
  }

  const getDateFromInput = ( inputDate: string ) => {
    const utcDate = new Date(inputDate); //Date object a day behind
    return new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000) //local Date
  }

  const getStringFromDate = ( date: Date ) => {
    try {   
      return formatISO(date, {representation:'date'})
    } catch (e) {
      console.log(e)
      return formatISO(new Date(), {representation:'date'})
    }   
  }

  return (
    <form ref={formDebt} className="bg-white rounded-lg p-8 shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-green-700 font-semibold pb-6 text-xl">Identificação da dívida</h2>
      <div className="grid grid-cols-2 gap-4">
        <Input name={"origin"} title={"Origem da dívida"} value={origin} onChange={(e) => handleChangeOrigin(e.target.value)} required/>
        <Input name={"documentId"} title={"Enviar arquivo (em breve)"} type="file" disabled />
        <Input name={"expirationDate"} title={"Data de vencimento"} type="date" value={getStringFromDate(expirationDate as Date)} max={ new Date().toISOString().split('T')[0]} onChange={(e) => handleChangeExpirationDate( getDateFromInput(e.target.value) )}  required />
        <Input name={"originalValue"} title={"Valor original"} type="number" min="0" value={originalValue} onChange={(e) => handleChangeOriginalValue(Number(e.target.value))} required />
      </div>    
            
      <ChargesFragmentForm />

      <div className="pt-8 flex gap-4 justify-end">
        <Button variant="secondary" onClick={() => setPage(1)}>Voltar</Button>
        <Button variant={"primary"} type="submit">Próximo</Button>
      </div>
    </form>
  )
}