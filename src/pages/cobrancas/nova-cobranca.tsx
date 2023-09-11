import { InterfaceWrap } from "@/components/InterfaceWrap";
import { GetServerSideProps } from "next";
import { middleAuth } from "@/functions/MiddleAuth";
import Head from "next/head";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormEvent, useContext, useRef, useState } from "react";
import { InputRadio } from "@/components/InputRadio";
import { AppContext } from "@/context/AppContext";
import { DebtorType } from "@/@types/DebtorType";
import { ChargerType } from "@/@types/DebtType";
import { ChargesForm } from "@/components/forms/ChargesForm";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth(context);
};

interface ChargersWrapType {
  fee: ChargerType,
  interest: ChargerType,
  otherCharges: ChargerType[]
}

export default function NovaCobranca() {

  const [page, setPage] = useState(1)
  const {propose, setPropose} = useContext(AppContext)

  const formDebtor = useRef<HTMLFormElement | null>( null )
  const [debtorType, setDebtorType] = useState<'individual' | 'company'>('individual')
  
  const formDebt = useRef<HTMLFormElement | null>( null )
  const [originalValue, setOriginalValue] = useState<number>(100)
  const [expirationDate, setExpirationDate] = useState( new Date().toISOString().split('T')[0])
  const [chargers, setChargers] = useState<ChargersWrapType>({
    fee: {
      name: "fee",
      chargerType: "percentage",
      value: 2
    },
    interest: {
      name: "interest",
      chargerType: "percentage",
      value: 1
    },
    otherCharges: []
  })
  

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
      updatedPropose.debt.debtor.push(DebtorData)
      setPropose( updatedPropose )
      formDebtor.current.reset()
      setPage(2)
    }
  }

  const saveDebtInContex = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault
    setPage(3)
  }

  return (
    <>
      <Head>
        <title>Nova Cobrança - Negocia Cloud</title>
      </Head>
      <InterfaceWrap>
        <h1 className="font-light text-emerald-600 text-md mb-8">Cobranças | Nova Cobrança | Etapa {page} de 3</h1>

        {page === 1 && 
          <form ref={formDebtor} className="bg-white rounded-lg p-8 shadow-md" onSubmit={saveDebtorInContex}>

              <h2 className="text-green-700 font-semibold pb-4">Identificação do devedor {propose.debt.debtor.length + 1}</h2>

              <div className="flex gap-4 pb-4">
                <InputRadio name={"typeOfDebtor"} value={"indvidual"} title={"Pessoa Física"} onChange={() => setDebtorType('individual')} checked={debtorType === 'individual'}/>
                <InputRadio name={"typeOfDebtor"} value={"company"} title={"Pessoa Jurídica"} onChange={() => setDebtorType('company')} checked={debtorType === 'company'}/>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input name={"fiscalDocument"} title={debtorType === 'individual' ? "CPF" : "CNPJ"}  />
                <Input name={"name"} title={debtorType === 'individual' ? "Nome completo" : "Razão Social"}   />
                <Input name={"email"} title={"E-mail"}  />
                <Input name={"cellphone"} title={"Celular"} />
              </div>

              <div>
                <h2 className="text-green-700 font-semibold pt-8">Endereço do devedor {propose.debt.debtor.length + 1}</h2>
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
              <Button variant={"secondary"} disabled >Adicionar outro devedor</Button>
              <Button variant={"primary"} type="submit">Próximo</Button>
            </div>
          </form>
        }

        {page === 2 && 
          <form ref={formDebt} className="bg-white rounded-lg p-8 shadow-md" onSubmit={saveDebtInContex}>
            <h2 className="text-green-700 font-semibold pb-4">Identificação da dívida</h2>
            <div className="grid grid-cols-2 gap-4">
                <Input name={"origin"} title={"Origem da dívida"}  />
                <Input name={"documentId"} title={"Enviar arquivo (opcional)"} type="file" disabled />
                <Input name={"expirationDate"} title={"Data de vencimento"} type="date" value={expirationDate} onChange={(e) => setExpirationDate((e.target.value))}   />
                <Input name={"originalValue"} title={"Valor original"} type="number" min="0" value={originalValue} onChange={(e) => setOriginalValue(Number(e.target.value))}  />
            </div>    
            
            <ChargesForm originalValue={originalValue} expirationDate={new Date(expirationDate)} chargers={chargers} setCharges={setChargers} />

            <div className="pt-8 flex gap-4 justify-end">
              <Button variant="secondary" onClick={() => setPage(1)}>Voltar</Button>
              <Button variant={"secondary"} disabled >Adicionar outra dívida</Button>
              <Button variant={"primary"} type="submit">Próximo</Button>
            </div>
          </form>
        }

      {page === 3 && 
        <div>
          <Button variant="primary" onClick={() => setPage(2)}>Voltar</Button>
        </div>
      }

      </InterfaceWrap>
    </>
  );
}


