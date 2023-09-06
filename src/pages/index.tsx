import { InterfaceWrap } from "@/components/InterfaceWrap";
import { GetServerSideProps } from "next";
import { middleAuth } from "@/functions/MiddleAuth";
import Head from "next/head";
import { HistoryBar } from "@/components/charts/HistoryBar";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth(context);
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Negocia Cloud</title>
      </Head>
      <InterfaceWrap>
        <div className="flex items-start justify-between">
          <h1 className="font-light text-emerald-600 text-md mb-8">
            Página Inicial
          </h1>
          <div className=""></div>
        </div>

        <HistoryBar />
      </InterfaceWrap>
    </>
  );
}
