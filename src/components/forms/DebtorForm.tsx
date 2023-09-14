import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormEvent, useContext, useRef, useState } from "react";
import { InputRadio } from "@/components/InputRadio";
import { AppContext } from "@/context/AppContext";
import { DebtorType } from "@/@types/DebtorType";
import { DebtorListToImport } from "@/components/DebtorListToImport";


interface DebtorFormProps {
  setPage: (value: any) => void
}

export const DebtorForm = ({ setPage }: DebtorFormProps) => {

  const {propose, setPropose} = useContext(AppContext)
  const formDebtor = useRef<HTMLFormElement | null>( null )
  const [debtorType, setDebtorType] = useState<'individual' | 'company'>('individual')

  const getDateFromInput = ( inputDate: string ) => {
    const utcDate = new Date(inputDate); //Date object a day behind
    return new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000) //local Date
  }

  const getStringInputData = ( form: FormData, query: string ):string => {
    const inputData = form.get(query) as string
    return inputData ? inputData : ''
  } 

  const saveDebtorInContex = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    if ( formDebtor.current ){
      const formDebtorData = new FormData(formDebtor.current)
      const DebtorData: DebtorType = {
        id: '1',
        typeOfDebtor: formDebtorData.get('typeOfDebtor') as 'individual' | 'company',
        fiscalDocument: getStringInputData( formDebtorData, 'fiscalDocument'),
        name: getStringInputData( formDebtorData, 'name'),
        email: getStringInputData( formDebtorData, 'email'),
        address: {
          postalCode: getStringInputData( formDebtorData, 'postalCode'),
          city: getStringInputData( formDebtorData, 'city'),
          uf: getStringInputData( formDebtorData, 'uf'),
          street: getStringInputData( formDebtorData, 'street'),
          number: getStringInputData( formDebtorData, 'number'),
          complement: getStringInputData( formDebtorData, 'complement'),
        }
      }
      const updatedPropose = propose
      updatedPropose.debt.debtor[0] = DebtorData
      setPropose( updatedPropose )
      formDebtor.current.reset()
      setPage(2)
    }
  }

  const importDebtorFromClient = async (debtor: DebtorType) => {
    const updatedPropose = propose
    updatedPropose.debt.debtor[0] = debtor
    setPropose( updatedPropose )
    setPage(2)
  }

  return (
    <form ref={formDebtor} className="bg-white rounded-lg p-8 shadow-md" onSubmit={saveDebtorInContex}>

              <div className="flex justify-between pb-4">
                <h2 className="text-green-700 font-semibold pb-4 text-xl">Identificação do devedor</h2>
                <DebtorListToImport onSelect={importDebtorFromClient} />
              </div>
              

              <div className="flex gap-4 pb-4">
                <InputRadio name={"typeOfDebtor"} value={"indvidual"} title={"Pessoa Física"} onChange={() => setDebtorType('individual')} checked={debtorType === 'individual'}/>
                <InputRadio name={"typeOfDebtor"} value={"company"} title={"Pessoa Jurídica"} onChange={() => setDebtorType('company')} checked={debtorType === 'company'}/>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input name={"fiscalDocument"} title={debtorType === 'individual' ? "CPF" : "CNPJ"}  required/>
                <Input name={"name"} title={debtorType === 'individual' ? "Nome completo" : "Razão Social"}   required/>
                <Input name={"email"} title={"E-mail"}  required/>
                <Input name={"cellphone"} title={"Celular"} />
              </div>

              <div>
                <h2 className="text-green-700 font-semibold pt-8">Endereço do devedor</h2>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Input name={"postalCode"} title={"CEP"} />
                </div>
                <div className="grid grid-cols-address-number gap-4 pt-4">
                  <Input name={"street"} title={"Logradouro"} />
                  <Input name={"number"} title={"Número"} />
                </div>
                <div className="grid grid-cols-address-uf gap-4 pt-4">
                  <Input name={"complement"} title={"Complemento"} />
                  <Input name={"city"} title={"Cidade"} />
                  <Input name={"uf"} title={"UF"} />
                </div>
              </div>

            <div className="pt-8 flex gap-4 justify-end">
              <Button variant={"secondary"} disabled >Adicionar outro devedor <span className="text-sm">(Em breve)</span></Button>
              <Button variant={"primary"} type="submit">Próximo</Button>
            </div>
          </form>
  )
}