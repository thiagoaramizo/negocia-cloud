import { ProposeType } from "@/@types/ProposeType"
import { InterfaceWrap } from "@/components/InterfaceWrap"
import Store from "@/components/icons/Store"
import User from "@/components/icons/User"
import File from "@/components/icons/File"
import { middleAuth } from "@/functions/MiddleAuth"
import axios from "axios"
import { getCookie } from "cookies-next"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth(context);
};

export default function ProposedAdminPage() {

  const router = useRouter()
  const {id} = router.query
  const [loading, setLoading] = useState(true)
  const [propose, setPropose] = useState<ProposeType>()


  const getProposed = async () => {
    setLoading(true)
    const token = getCookie('authorization')
    
    try{
      const response = await axios.get(`/api/proposes/${id}`, {
      headers: {
        'Authorization': token
        }
      })
      console.log(response.data)
      setPropose(response.data)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
    
  }

  const getSinc = async () => {
    const token = getCookie('authorization')
    try{
      const response = await axios.get(`/api/sinc/${propose?.debt.debtor[0].fiscalDocument}`, {
      headers: {
        'Authorization': token
        }
      })
      console.log(response.data)
      setPropose(response.data)
    } catch (error) {
      console.error(error)
    }    
  }

  const formatDate = ( date: Date | string ) => {
    const dateTypeDate = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat('pt-BR').format(dateTypeDate)
  }

  useEffect(()=>{
    if(!id) {
      return;
    }
    getProposed()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Head>
        <title>Visualizar Proposta - Negocia Cloud</title>
      </Head>
      <InterfaceWrap>
        {loading && <div><span>Carregando...</span></div> }
        { propose && 
          <div>
            <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
              <h2 className="text-emerald-700 font-semibold pb-4 text-xl">Identificação da Proposta <span className="text-sm font-medium">(id.: {propose.id})</span></h2>
              <Link href={`/proposta/${propose.id}`} target="_blank">Ver proposta</Link>
              <div className="flex gap-6 pt-6">

                <div className="w-1/2 border p-4 py-6 rounded-lg relative">
                  <h2 className="text-green-700 font-semibold bg-white absolute -top-3 left-2 px-2">Dados do devedor</h2>
                  <div className="flex flex-wrap gap-4">
                    <div className=" bg-slate-200 rounded-full h-10 w-10 flex items-center justify-center">
                        {propose.debt.debtor[0].typeOfDebtor === 'individual' ? <User className="h-6 fill-slate-400"/> : <Store className="h-6 fill-slate-400"/>}
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <span><strong className="text-green-700">Nome: </strong>{propose.debt.debtor[0].name}</span>
                        <span><strong className="text-green-700">{propose.debt.debtor[0].typeOfDebtor === 'individual' ? 'CPF' : 'CNPJ'}: </strong>{propose.debt.debtor[0].fiscalDocument}</span>
                        <span><strong className="text-green-700">E-mail: </strong>{propose.debt.debtor[0].email}</span>
                        <span><strong className="text-green-700">Celular: </strong>{propose.debt.debtor[0].phone || '-'}</span>
                        <span><strong className="text-green-700">Endereço: </strong>{propose.debt.debtor[0].address.street}, n. {propose.debt.debtor[0].address.number}, {propose.debt.debtor[0].address.complement + ', '} na cidade de {propose.debt.debtor[0].address.city} - {propose.debt.debtor[0].address.uf}, CEP {propose.debt.debtor[0].address.postalCode}</span> 
                    </div>
                  </div>
                </div>

                <div className="w-1/2 border p-4 py-6 rounded-lg relative">
                  <h2 className="text-green-700 font-semibold bg-white absolute -top-3 left-2 px-2">Dados da dívida</h2>
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

            <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
              <h2 className="text-emerald-700 font-semibold pb-4 text-xl">Estatísticas do devedor</h2>
              <Image src={'/images/score.png'} alt='score' width={1920} height={182} />
            </div>
          </div>
        }
      </InterfaceWrap>
    </>
  )
}