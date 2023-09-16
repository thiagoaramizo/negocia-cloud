import { FormEvent, useContext, useRef, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { ProposeType } from "@/@types/ProposeType";
import ArrowBack from "@/components/icons/ArrowBack";
import Camera from "react-html5-camera-photo";


interface IndividualSignProps {
  propose: ProposeType
  setPage: (value: any) => void
}

export function IndividualSign ({propose, setPage}: IndividualSignProps) {

  const {appConfig} = useContext(AppContext)
  const ui = appConfig.appInterface
  const [loading, setLoading] = useState(false)
  const camRef = useRef(null);

  const capture = () => {

  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const timer = await new Promise((r) => {setTimeout(r, 1000)})
    setLoading(false)
    setPage(2)
  }

  const goToPage = async ( page: number ) => {
    setLoading(true)
    const timer = await new Promise((r) => {setTimeout(r, 300)})
    setLoading(false)
    setPage(page)
  }

  return (

    <div className="w-full max-w-xl h-full flex-1 grid grid-rows-contract gap-4 pt-6 pb-16 opacity-0 animate-fade-in">

        <div className="text-center">
          <span className="text-2xl font-bold leading-tight">Assine seu contrato</span>
          <p className="text-xl leading-normal opacity-0 animate-fade-in-6">Tire uma foto do seu rosto para confirmar a assinatura.</p>
        </div>

        <div className="flex-1  flex items-center justify-center">
          <div ref={camRef} className="w-[300px] h-[400px] bg-black overflow-hidden rounded-lg shadow-lg">
            <Camera
              imageCompression={0.5} 
              imageType="jpg"
              idealResolution = {{width: 300, height: 400}}
              onTakePhotoAnimationDone={ (dataUri) => {} } 
              isImageMirror={true}
            />
          </div>
          
        </div>

        <div className="flex items-center justify-between gap-4 pt-2 xl:pt-12">
          <button className="opacity-0 animate-fade-in-12" onClick={() => goToPage(3)}>
            <div className="flex gap-2 items-center">
              <ArrowBack className="w-4"/>
              <span className="text-md">Voltar</span>
            </div>
          </button>
        </div>

    </div>
  )
}
