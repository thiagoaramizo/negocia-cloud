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

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth(context);
};

export default function Clientes() {

  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState(false)
  const [clientList, setClientList] = useState<DebtorType[]>([])

  const getClientList = async () => {
    const token = getCookie('authorization')
    setLoading(true)
    const response = await axios.get('/api/clients', {
      headers: {
        'Authorization': token
      }
    })
    setClientList(response.data)
    console.log(response.data)
    setLoading(false)
  }

  useEffect(()=>{
    getClientList()
  }, [])

  return (
    <>
      <Head>
        <title>Clientes - Negocia Cloud</title>
      </Head>
      <InterfaceWrap>
        <h1 className="font-light text-emerald-600 text-md mb-8">Clientes</h1>

        <div className="bg-white p-6 mb-12 rounded-lg shadow-md flex gap-4 items-center justify-between">
          <div className="flex gap-4">
            <Link href={'#'} className=" bg-emerald-500 rounded-full h-10 w-10 flex items-center justify-center transition-all hover:scale-105 hover:bg-emerald-400">
              <Plus className="h-6 fill-white" />
            </Link>

            <button onClick={getClientList} className="rounded-full h-10 w-10 flex items-center justify-center transition-all hover:bg-slate-200">
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
          <div className="w-10 flex items-center justify-center">
          </div>
          <div className="flex-1 grid grid-cols-5 gap-4" >
            <span>Nome</span>
            <span>Documento</span>
            <span>E-mail</span>
            <span>Dívida total</span>
            <span>Última proposta</span>
          </div>
          <div className="w-12">
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {clientList.map( client => {
            return (
              <div key={client.id} className="group/item bg-white border border-slate-50 px-6 py-6 rounded-lg shadow-sm flex gap-4 items-center justify-between transition-all hover:scale-101 hover:shadow-md hover:border-emerald-400">
                <div className=" bg-slate-200 rounded-full h-10 w-10 flex items-center justify-center">
                  {client.typeOfDebtor === 'individual' ? <User className="h-6 fill-slate-400"/> : <Store className="h-6 fill-slate-400"/>}
                </div>
                <div className="flex-1 grid grid-cols-5 gap-4" >
                  <span>{client.name}</span>
                  <span>{client.fiscalDocument}</span>
                  <span className="truncate">{client.email}</span>
                  <span>{client.totalDebt ? client.totalDebt.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : '-'}</span>
                  <ProposeStatusBadge status={client.lastStats} />
                </div>
                <div className="w-12">
                  <Link href={'#'} className="transition-all group-hover/item:font-bold" >...</Link>
                </div>
              </div>
            )
          })}
        </div>


      </InterfaceWrap>
    </>
  );
}
