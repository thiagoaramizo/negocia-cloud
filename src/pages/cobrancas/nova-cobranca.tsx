import { InterfaceWrap } from "@/components/InterfaceWrap";
import { GetServerSideProps } from "next";
import { middleAuth } from "@/functions/MiddleAuth";
import Head from "next/head";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth(context);
};

export default function NovaCobranca() {
  return (
    <>
      <Head>
        <title>Nova Cobrança - Negocia Cloud</title>
      </Head>
      <InterfaceWrap>
        <h1 className="font-light text-emerald-600 text-md mb-8">Cobranças | Nova Cobrança</h1>

        <form className="bg-white rounded-lg p-8 shadow-md">
          <div>
            <h2 className="text-green-700 font-semibold pb-4">Dados do devedor</h2>
            <div className="grid grid-cols-2 gap-4">
              <Input name={"firstName"} title={"Primeiro nome"} required  />
              <Input name={"lastName"} title={"Sobrenome"} />
              <Input name={"document"} title={"CPF"} />
              <Input name={"email"} title={"E-mail"} />
              <Input name={"cellphone"} title={"Celular"} />
              <Input name={"telphone"} title={"Telefone"} />
            </div>
            <div className="pt-4">
              <Input name={"address"} title={"Endereço"} />
            </div>
          </div>
          <div className="pt-4">
            <Button variant={"primary"} >Salvar</Button>
          </div>
        </form>
      </InterfaceWrap>
    </>
  );
}
