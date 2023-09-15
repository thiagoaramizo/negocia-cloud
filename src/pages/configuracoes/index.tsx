import { InterfaceWrap } from "@/components/InterfaceWrap";
import { GetServerSideProps } from "next";
import { middleAuth } from "@/functions/MiddleAuth";
import Head from "next/head";
import { useState } from "react";
import { CompanyForm } from "@/components/forms/CompanyForm";
import { InterfaceForm } from "@/components/forms/InterfaceForm";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth(context);
};

export default function Configuracoes() {

  const [page, setPage] = useState<'Company' | 'Inteface'>('Company')

  return (
    <>
      <Head>
        <title>Configurações - Negocia Cloud</title>
      </Head>
      <InterfaceWrap>
        <h1 className="font-light text-emerald-600 text-md mb-8">Configurações</h1>

        <div className="grid grid-cols-section-menu gap-4">
          <div className="flex-1 flex flex-col gap-4">
            <button onClick={() => setPage('Company')} aria-selected={page === 'Company'} className="px-6 py-6 bg-white w-full text-left rounded-md shadow-md aria-selected:bg-slate-300">
              Minha empresa
            </button>
            <button onClick={() => setPage('Inteface')} aria-selected={page === 'Inteface'} className="px-6 py-6 bg-white w-full text-left rounded-md shadow-md aria-selected:bg-slate-300">
              Interface
            </button>
          </div>

          <div className="w-full">
            {page === 'Company' && <CompanyForm />}
            {page === 'Inteface' && <InterfaceForm />}
          </div>
        </div>
          
        


      </InterfaceWrap>
    </>
  );
}
