import { InterfaceWrap } from "@/components/InterfaceWrap";
import { GetServerSideProps } from "next";
import { middleAuth } from "@/functions/MiddleAuth";
import Head from "next/head";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useState } from "react";
import { InputRadio } from "@/components/InputRadio";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth(context);
};

export default function NovaCobranca() {

  const [debtorType, setDebtorType] = useState<'individual' | 'company'>('individual')
  const [responsabilityOfDebtor, setResponsabilityOfDebtor] = useState<'debtor' | 'guarantor'>()


  return (
    <>
      <Head>
        <title>Nova Cobrança - Negocia Cloud</title>
      </Head>
      <InterfaceWrap>
        <h1 className="font-light text-emerald-600 text-md mb-8">Cobranças | Nova Cobrança</h1>

        <form className="bg-white rounded-lg p-8 shadow-md">

            <h2 className="text-green-700 font-semibold pb-4">Dados do devedor</h2>

            <div className="flex gap-4 pb-4">
              <InputRadio name={"debtorType"} value={"indvidual"} title={"Pessoa Física"} onChange={() => setDebtorType('individual')} checked={debtorType === 'individual'}/>
              <InputRadio name={"debtorType"} value={"company"} title={"Pessoa Jurídica"} onChange={() => setDebtorType('company')} checked={debtorType === 'company'}/>
            </div>

            {debtorType === 'individual' && <div className="grid grid-cols-2 gap-4">
              <Input name={"firstName"} title={"Primeiro nome"} required  />
              <Input name={"lastName"} title={"Sobrenome"} required />
              <Input name={"fiscalDocument"} title={"CPF"} required />
              <Input name={"email"} title={"E-mail"} required />
              <Input name={"cellphone"} title={"Celular"} />
              <Input name={"telphone"} title={"Telefone"} />
            </div>}

            {debtorType === 'company' && <div className="grid grid-cols-2 gap-4">
              <Input name={"legalName"} title={"Razão Social"} required  />
              <Input name={"fiscalDocument"} title={"CNPJ"} required />
              <Input name={"contactName"} title={"Nome do contato"} required/>
              <Input name={"contactEmail"} title={"E-mail do contato"} required/>
              <Input name={"contactPhone"} title={"Celular do contato"} />
            </div>}

            <div className="pt-4">
              <Input name={"address"} title={"Endereço"} />
            </div>

          <div className="pt-4">
            <Button variant={"primary"} >Salvar</Button>
          </div>
        </form>
      </InterfaceWrap>
    </>
  );
}
