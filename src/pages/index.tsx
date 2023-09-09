import { InterfaceWrap } from "@/components/InterfaceWrap";
import { GetServerSideProps } from "next";
import { middleAuth } from "@/functions/MiddleAuth";
import Head from "next/head";
import { HistoryBar } from "@/components/charts/HistoryBar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import WarningCircle from "@/components/icons/WarningCircle";
import { LinkButton } from "@/components/LinkButton";

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
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
              <Link href={'/cobrancas'} className="flex items-end text-lg flex-1 bg-emerald-500 px-6 py-8 h-36 rounded-lg shadow-md text-white relative transition-all hover:scale-101">
                <div className="absolute right-4 top-2"> 
                  <Image src={'/icons/gerenciar-cobrancas.svg'} alt='icon' width={130} height={100} />
                </div>
                Gerenciar cobranças
              </Link>

              <Link href={'/cobrancas/nova-cobranca'} className="flex items-end text-lg flex-1 bg-sky-700 px-6 py-8 h-36 rounded-lg shadow-md text-white relative transition-all hover:scale-101">
                <div className="absolute right-4 top-2"> 
                  <Image src={'/icons/nova-cobranca.svg'} alt='icon' width={130} height={100} /> 
                </div>
                Nova cobrança
              </Link>

              <Link href={'/clientes'} className="flex items-end text-lg flex-1 bg-yellow-500 px-6 py-8 h-36 rounded-lg shadow-md text-white relative transition-all hover:scale-101">
                <div className="absolute right-4 top-2"> 
                  <Image src={'/icons/gerenciar-clientes.svg'} alt='icon' width={130} height={100} />
                </div>
                Gerenciar clientes
              </Link>
          </div>

          <div className="bg-white px-6 py-8 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <WarningCircle className="fill-slate-300" />
              <span>Você tem <strong className="text-emerald-700">05</strong> acordos não cumpridos que precisam de análise.</span>
            </div>
            <LinkButton href={"/cobrancas"}>Analisar acordos</LinkButton>
          </div>

          <HistoryBar />
        </div>
      </InterfaceWrap>
    </>
  );
}
