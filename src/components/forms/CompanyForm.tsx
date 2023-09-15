import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormEvent, useContext, useRef } from "react";
import { AppContext } from "@/context/AppContext";



export const CompanyForm = () => {

  const {appConfig, setAppConfig} = useContext(AppContext)
  const company = appConfig.company
  const formCompany = useRef<HTMLFormElement | null>( null )

  const updateCompanyInContex = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
  }

  return (
    <form ref={formCompany} className="bg-white rounded-lg p-8 shadow-md" onSubmit={updateCompanyInContex}>

      <div className="flex justify-between pb-4">
        <h2 className="text-green-700 font-semibold pb-4 text-xl">Minha empresa</h2>
      </div>
              
      <div className="grid grid-cols-2 gap-4">
        <Input name={"fiscalDocument"} title={"CNPJ"} value={company.fiscalDocument}  readOnly/>
        <Input name={"name"} title={"Razão Social"} value={company.name}  readOnly/>
        <Input name={"name"} title={"Nome Fantasia"}  value={company.tradingName} readOnly/>
        <Input name={"email"} title={"E-mail"} value={company.email}  readOnly/>
        <Input name={"email"} title={"E-mail"} value={company.email}  readOnly/>
        <Input name={"postalCode"} title={"CEP"} value={company.address.postalCode}  readOnly/>
        
      </div>
      <div className="grid grid-cols-address-number gap-4 pt-4">
        <Input name={"street"} title={"Logradouro"} value={company.address.street}  readOnly />
        <Input name={"number"} title={"Número"} value={company.address.number}  readOnly/>
      </div>
      <div className="grid grid-cols-address-uf gap-4 pt-4">
        <Input name={"complement"} title={"Complemento"} value={company.address.complement}  readOnly/>
        <Input name={"city"} title={"Cidade"} value={company.address.city}  readOnly/>
        <Input name={"uf"} title={"UF"} value={company.address.uf}  readOnly/>
      </div>
            

      <div className="pt-8 flex gap-4 justify-end">
        <Button variant={"secondary"} type="button" disabled >Atualizar dados</Button>
      </div>
    </form>
  )
}