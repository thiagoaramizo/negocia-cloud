import { InterfaceWrap } from "@/components/InterfaceWrap";
import { GetServerSideProps } from "next";
import { middleAuth } from "@/functions/MiddleAuth";
import Head from "next/head";
import { useState } from "react";
import { DebtorForm } from "@/components/forms/DebtorForm";
import { DebtForm } from "@/components/forms/DebtForm";
import { ProposeForm } from "@/components/forms/ProposeForm";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth(context);
};

export default function NovaCobranca() {

  const [page, setPage] = useState(1)

  return (
    <>
      <Head>
        <title>Nova Cobrança - Negocia Cloud</title>
      </Head>
      <InterfaceWrap>
        <h1 className="font-light text-emerald-600 text-md mb-8">Cobranças | Nova Cobrança | Etapa {page} de 3</h1>

        {page === 1 && <>
          <DebtorForm setPage={setPage} />
        </>}

        {page === 2 && 
          <DebtForm setPage={setPage} />
        }

      {page === 3 && 
        <ProposeForm setPage={setPage} />
      }

      </InterfaceWrap>
    </>
  );
}


