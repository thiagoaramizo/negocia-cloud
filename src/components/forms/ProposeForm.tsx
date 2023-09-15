import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormEvent, useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import User from "@/components/icons/User";
import Store from "@/components/icons/Store";
import File from "@/components/icons/File";
import { formatISO } from "date-fns";
import { InputToggle } from "@/components/InputToggle";
import axios, { AxiosError } from "axios";
import router from "next/router";
import { getCookie } from "cookies-next";

interface ProposeFormProps {
  setPage: (value: any) => void
}

export const ProposeForm = ({ setPage }: ProposeFormProps) => {

  const {propose, setPropose} = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const formatDate = ( date: Date | string ) => {
    const dateTypeDate = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat('pt-BR').format(dateTypeDate)
  }

  const handleProposeValue = (value: number) => {
    if(value <= (propose.debt.presentValue + 1))
    setPropose({
      ...propose,
      proposeValue: value
    })
  }

  const calcDiscount = (originalValue: number, presentValue: number, proposeValue: number) => {
    const discountValue = presentValue - proposeValue
    const chargesValue = presentValue - originalValue
    const discountOnCharges = chargesValue - discountValue < 0 ? chargesValue : discountValue
    const discountOnPrincipal = chargesValue - discountValue < 0 ? (chargesValue - discountValue)*-1 : 0
    const discountOnChargesPercentage = discountOnCharges/chargesValue || 0
    const discountOnPrincipalPercentage = discountOnPrincipal/originalValue || 0
    const discountOnTotalPercentage = discountValue/presentValue || 0
    return [
      discountOnChargesPercentage.toLocaleString('pt-BR', {style: 'percent', maximumFractionDigits: 2}), 
      discountOnPrincipalPercentage.toLocaleString('pt-BR', {style: 'percent', maximumFractionDigits: 2}),
      discountOnTotalPercentage.toLocaleString('pt-BR', {style: 'percent', maximumFractionDigits: 2})
    ]
  }

  const getStringFromDate = ( date: Date ) => {
    try {   
      return formatISO(date, {representation:'date'})
    } catch (e) {
      console.log(e)
      return formatISO(new Date(), {representation:'date'})
    }   
  }

  const paymentTitleToString = ( name: string ) => {
    if ( name === 'creditCard') {
      return 'Cartão de crédito'
    }
    if ( name === 'bankShip') {
      return 'Boleto'
    }
    if ( name === 'pix') {
      return 'PIX'
    }
    return ''
  }

  const handlePaymentChange = ( name: string, value: boolean ) => {
    const payments = [...propose.payments]
    const index = payments.findIndex( (payment) => payment.name === name )
    payments[index] = {
      name: name,
      status: value
    }
    setPropose( {
      ...propose,
      payments
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    console.log('Enviando prosposta')
    e.preventDefault();
    try {
      setLoading(true);
      const token = getCookie('authorization')
      const response = await axios.post("/api/proposes", propose, {
        headers: {
          'Authorization': token
        }
      });
      console.log(response.data);
      if (response.status !== 201) setError(response.data);
      router.push("/cobrancas");
    } catch (err) {
      setLoading(false);
      if (err instanceof AxiosError) {
        if (err.response) {
          setError(err.response.data);
        } else {
          setError("Erro ao fazer o cadastro");
        }
      } else if (err instanceof Error) setError("Erro ao fazer o cadastro");
    }
  };

  return (
    <div>
    <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
      <h2 className="text-green-700 font-semibold pb-4 text-xl">Revisão das informações</h2>
      <div className="flex gap-6 pt-6">

        <div className="w-1/2 border p-4 py-6 rounded-lg relative">
          <h2 className="text-green-700 font-semibold bg-white absolute -top-3 left-2 px-2">Quem deverá pagar?</h2>
          <div className="flex flex-wrap gap-4">
            <div className=" bg-slate-200 rounded-full h-10 w-10 flex items-center justify-center">
                {propose.debt.debtor[0].typeOfDebtor === 'individual' ? <User className="h-6 fill-slate-400"/> : <Store className="h-6 fill-slate-400"/>}
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <span><strong className="text-green-700">Nome: </strong>{propose.debt.debtor[0].name}</span>
                <span><strong className="text-green-700">{propose.debt.debtor[0].typeOfDebtor === 'individual' ? 'CPF' : 'CNPJ'}: </strong>{propose.debt.debtor[0].fiscalDocument}</span>
                <span><strong className="text-green-700">E-mail: </strong>{propose.debt.debtor[0].email}</span>
                <span><strong className="text-green-700">Endereço: </strong>{propose.debt.debtor[0].address.street}, n. {propose.debt.debtor[0].address.number}, {propose.debt.debtor[0].address.complement + ', '} na cidade de {propose.debt.debtor[0].address.city} - {propose.debt.debtor[0].address.uf}, CEP {propose.debt.debtor[0].address.postalCode}</span> 
            </div>
          </div>
        </div>

        <div className="w-1/2 border p-4 py-6 rounded-lg relative">
          <h2 className="text-green-700 font-semibold bg-white absolute -top-3 left-2 px-2">O que deveria ser pago?</h2>
          <div className="flex flex-wrap gap-4">
            <div className=" bg-slate-200 rounded-full h-10 w-10 flex items-center justify-center">
              <File className="h-6 fill-slate-400"/>
            </div>

            <div className="flex-1 flex flex-col gap-2">
                <span><strong className="text-green-700">Origem: </strong>{propose.debt.origin}</span>
                <span><strong className="text-green-700">Vencimento: </strong>{formatDate(propose.debt.expirationDate)}</span>
                <span><strong className="text-green-700">Valor original: </strong>{propose.debt.originalValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                <span><strong className="text-green-700">Encargos totais: </strong>{(propose.debt.presentValue - propose.debt.originalValue).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }</span>
                <span><strong className="text-green-700">Valor atualizado: </strong>{propose.debt.presentValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form  className="bg-white rounded-lg p-8 shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-green-700 font-semibold pb-8 text-xl">Definindo a proposta</h2>

      <div className="border p-4 py-6 rounded-lg relative flex flex-col items-center">
          <h2 className="text-green-700 font-semibold bg-white absolute -top-3 left-2 px-2">O que será pago?</h2>

          <div className="flex items-center gap-4">
            <div className="relative w-96 text-xl text-green-700 font-bold">
              <input 
                value={propose.proposeValue}
                onChange={(e) => handleProposeValue(Number(e.target.value))} 
                type="number" 
                min={0}
                max={propose.debt.presentValue} 
                step="0.01"
                className="block pl-12 w-full rounded-md border text-right border-gray-300 px-3 py-2 bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 focus:border-green-500 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:opacity-50"
                style={{fontSize:'2rem'}}
                required  
              />
              <span className="block absolute top-3.5 left-3">R$</span>
            </div>
            <div className="bg-green-100 p-4 min-w-fit rounded-md shadow-md flex flex-col justify-between">
              <ul className="list-disc pl-4 text-green-700 flex flex-col gap-2">
                <li><strong>{calcDiscount(propose.debt.originalValue, propose.debt.presentValue, propose.proposeValue)[0]}</strong> de desconto nos encargos</li>
                <li><strong>{calcDiscount(propose.debt.originalValue, propose.debt.presentValue, propose.proposeValue)[1]}</strong> de desconto sobre o valor original</li>
                <li><strong>{calcDiscount(propose.debt.originalValue, propose.debt.presentValue, propose.proposeValue)[2]}</strong> de desconto sobre o total da dívida</li>
              </ul>
            </div>
          </div>
      </div>


      <div className="border p-4 py-6 mt-8 rounded-lg relative flex flex-col">
          <h2 className="text-green-700 font-semibold bg-white absolute -top-3 left-2 px-2">Prazo e forma de pagamento</h2>
          <div className="grid grid-cols-2 items-center gap-6 w-1/2">
            <Input type="date"  title="Prazo para o aceite" min={ new Date().toISOString().split('T')[0]} value={getStringFromDate(propose.expirationDate)}  name={""}/>
            <Input type="number" title="Prazo para o pagamento" min={1} value={propose.paymentDeadline}  name={""}/>
          </div>
          
          <div className="flex gap-6 pt-6">
            <span className="text-sm font-medium leading-6 text-gray-900">Formas de pagamento</span>
            <div className="flex gap-6">
              {propose.payments.map( (payment) => {
                return (
                  <InputToggle name={payment.name} title={paymentTitleToString(payment.name)} value={payment.status} onChange={ () => handlePaymentChange(payment.name, !payment.status) } />
                )
              } )}
            </div>
          </div>
          
      </div>

      <div className="flex items-center justify-between pt-8">
        <Button variant="secondary" onClick={() => setPage(2)}>Voltar</Button>
        <Button variant="primary" type="submit" isLoading={loading} disabled={loading}>Salvar</Button>
      </div>
    </form>
    
  </div>
  )
}