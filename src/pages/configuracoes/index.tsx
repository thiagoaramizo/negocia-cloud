import { InterfaceWrap } from "@/components/InterfaceWrap";
import { GetServerSideProps } from "next";
import { middleAuth } from "@/functions/MiddleAuth";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth(context);
};

export default function Configuracoes() {

  return (
    <>
      <Head>
        <title>Configurações - Negocia Cloud</title>
      </Head>
      <InterfaceWrap>
        <h1 className="font-light text-emerald-600 text-md mb-8">Configurações</h1>


      </InterfaceWrap>
    </>
  );
}
