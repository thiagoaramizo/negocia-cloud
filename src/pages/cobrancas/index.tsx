import { InterfaceWrap } from "@/components/InterfaceWrap";
import { GetServerSideProps } from "next";
import { middleAuth } from "@/functions/MiddleAuth";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import { DebtorType } from "@/@types/DebtorType";
import User from "@/components/icons/User";
import Store from "@/components/icons/Store";
import Link from "next/link";
import Plus from "@/components/icons/Plus";
import Funel from "@/components/icons/Funel";
import Search from "@/components/icons/Search";
import Refresh from "@/components/icons/Refresh";
import ArrowBack from "@/components/icons/ArrowBack";
import { Input } from "@/components/Input";
import { ProposeStatusBadge } from "@/components/ProposeStatusBadge";
import { ProposeType } from "@/@types/ProposeType";
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth(context);
};

export default function Cobrancas() {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState(false)
  const [proposeList, setProposeList] = useState<ProposeType[]>([])

  const getProposeList = async () => {
    const token = getCookie('authorization')
    setLoading(true)
    const response = await axios.get('/api/proposes', {
      headers: {
        'Authorization': token
      }
    })
    setProposeList(response.data)
    console.log(response.data)
    setLoading(false)
  }

  useEffect(()=>{
    getProposeList()
  }, [])

  return (
    <>
      <Head>
        <title>Cobranças - Negocia Cloud</title>
      </Head>
      <InterfaceWrap>
        <h1 className="font-light text-emerald-600 text-md mb-8">Cobranças</h1>

        <div className="bg-white p-6 mb-12 rounded-lg shadow-md flex gap-4 items-center justify-between">
          <div className="flex gap-4">
            <Link href={'/cobrancas/nova-cobranca'} className=" bg-emerald-500 rounded-full h-10 w-10 flex items-center justify-center transition-all hover:scale-105 hover:bg-emerald-400">
              <Plus className="h-6 fill-white" />
            </Link>

            <button onClick={getProposeList} className="rounded-full h-10 w-10 flex items-center justify-center transition-all hover:bg-slate-200">
              <Refresh className="h-6 fill-slate-400" />
            </button>

            <button className="rounded-full h-10 w-10 flex items-center justify-center transition-all hover:bg-slate-200">
              <Funel className="h-6 fill-slate-400" />
            </button>

            <button onClick={() => setSearch(!search)} aria-expanded={search} className="rounded-full h-10 w-10 flex items-center justify-center transition-all aria-expanded:bg-emerald-500 hover:bg-slate-200">
              <Search aria-expanded={search} className="h-6 fill-slate-400 aria-expanded:fill-white" />
            </button>
          </div>

          <div className="flex-1">
            {search && <Input name="search" title="" />}
          </div>

          <div className="flex gap-4">
            <ArrowBack className="h-6 fill-slate-400 cursor-not-allowed" />
            1 de 1
            <ArrowBack className="rotate-180 h-6 fill-slate-400 cursor-not-allowed" />
          </div>
        </div>

        <div className="px-6 mb-1 flex gap-4 items-center justify-between text-sm font-semibold text-emerald-700">

          <div className="flex-1 grid grid-cols-6 gap-4" >
            <span>Cliente(s)</span>
            <span>CPF/CNPJ</span>
            <span>Identificador</span>
            <span>Dívida total</span>
            <span>Criação</span>
            <span>Status</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {proposeList.map( propose => {
            return (
              <div key={propose.id} className="group/item bg-white border border-slate-50 px-6 py-6 rounded-lg shadow-sm flex gap-4 items-center justify-between transition-all hover:scale-101 hover:shadow-md hover:border-emerald-400">

                <div className="flex-1 grid grid-cols-6 gap-4" >
                  <span className="truncate">{propose.debt.debtor[0].name} {propose.debt.debtor.length > 1 && "e outro(s)" }</span>
                  <span>{propose.debt.debtor[0].fiscalDocument} {propose.debt.debtor.length > 1 && "e outra(s)" }</span>
                  <span>{propose.debt.origin} {propose.debt.debtor.length > 1 && "e outra(s)" }</span>
                  <span>{propose.debt.presentValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                  <span title={new Date(propose.date).toLocaleDateString()}>
                    {formatDistanceToNow(new Date(propose.date), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                  <ProposeStatusBadge status={propose.status} />
                </div>
              </div>
            )
          })}
        </div>


      </InterfaceWrap>
    </>
  );
}
