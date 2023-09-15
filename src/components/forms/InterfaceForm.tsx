import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormEvent, useContext, useRef, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { ColorResponsiveBackground } from "../debtorInterface/ColorResponsiveBackground";
import { ColorPicker } from "../ColorPicker";
import Image from "next/image";
import { Heading } from "../debtorInterface/Heading";
import { Subtitle } from "../debtorInterface/Subtitle";
import { Button as DebtorButton } from "../debtorInterface/Button";



export const InterfaceForm = () => {

  const {appConfig, setAppConfig} = useContext(AppContext)
  const appInterface = appConfig.appInterface
  const formInterface = useRef<HTMLFormElement | null>( null )

  const [background, setBackground] = useState(appInterface.colors.background)
  const [primary, setPrimary] = useState(appInterface.colors.primary)
  const [secondary, setSecondary] = useState(appInterface.colors.secondary);

  const saveColors = () => {
    setAppConfig( {
      ...appConfig,
      appInterface: {
        ...appConfig.appInterface,
        colors: {
          background,
          primary,
          secondary
        }
      }
    } )
  }

  const updateAppInterfaceInContex = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    saveColors()
  }

  return (
    <form ref={formInterface} className="bg-white rounded-lg p-8 shadow-md" onSubmit={updateAppInterfaceInContex}>

      <div className="flex justify-between pb-4">
        <h2 className="text-green-700 font-semibold pb-4 text-xl">Interface de negociação</h2>
      </div>
      
      <div className="rounded-xl overflow-hidden border">
        <ColorResponsiveBackground  background={background}>
          <div className="w-full relative px-8 pb-10 pt-12">
            <span className="text-xs absolute top-2 left-4">Exemplo da interface</span>
            <div className="flex items-start gap-10">
              <Image src={`/company-logos/${appInterface.logo}`} className="w-48 h-auto" width={192} height={192} alt={"logo"} />
              <div className="flex-1 flex flex-col gap-4">
                <Heading color={primary}>Título 1</Heading>
                <Subtitle color={secondary}>Título 2</Subtitle>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit metus at justo tincidunt semper. Morbi lacus purus, porttitor non tincidunt a, fermentum non ex. Phasellus elementum velit neque. Curabitur sodales, velit et porta consectetur, tellus metus scelerisque elit. </span>
                <div className="flex gap-4">
                  <DebtorButton color={primary} >Botão primário</DebtorButton>
                  <DebtorButton color={secondary} >Botão secundário</DebtorButton>
                </div>
              </div>
            </div>
            
          </div>
        </ColorResponsiveBackground>
      </div>
      

      <div className="grid grid-cols-3 gap-4 mt-12">
        <ColorPicker color={background} setColor={setBackground} title={"Cor de fundo"} />
        <ColorPicker color={primary} setColor={setPrimary} title={"Cor primária"} />
        <ColorPicker color={secondary} setColor={setSecondary} title={"Cor secundária"} />
      </div>

      <div className="flex items-start gap-10 relative p-8 border rounded-lg mt-8">
        <label className="block text-sm font-medium leading-6 text-gray-900 absolute -top-3 left-4 bg-white px-2">Logotipo</label>
        <Image src={`/company-logos/${appInterface.logo}`} className="w-48 h-auto" width={192} height={192} alt={"logo"} />
        <div className="flex-1">
            <Input name={"logotipo"} title={"Alterar logotipo (em breve)"} type="file" disabled />
        </div>
      </div>
      
            

      <div className="pt-8 flex gap-4 justify-end">
        <Button variant={"primary"} type="submit">Atualizar dados</Button>
      </div>
    </form>
  )
}