"use client"

import { ProposeType } from "@/@types/ProposeType"
import { ColorResponsiveBackground } from "@/components/debtorInterface/ColorResponsiveBackground"
import { IndividualConfirm } from "@/components/debtorInterface/sections/IndividualConfirm"
import { IndividualContract } from "@/components/debtorInterface/sections/IndividualContract"
import { IndividualDebt } from "@/components/debtorInterface/sections/IndividualDebt"
import { IndividualIntroction } from "@/components/debtorInterface/sections/IndividualIntroction"
import { IndividualPayment } from "@/components/debtorInterface/sections/IndividualPayment"
import { IndividualPropose } from "@/components/debtorInterface/sections/IndividualPropose"
import { IndividualSign } from "@/components/debtorInterface/sections/IndividualSign"
import { IndividualToken } from "@/components/debtorInterface/sections/IndividualToken"
import CircleNotch from "@/components/icons/CircleNotch"
import { WaveSvg } from "@/components/svgAnimations/WaveSvg"
import { AppContext } from "@/context/AppContext"
import axios from "axios"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

export default function ProposedPage() {

  const router = useRouter()
  const {id} = router.query
  const {appConfig} = useContext(AppContext)
  const ui = appConfig.appInterface
  const [loading, setLoading] = useState(false)
  const [propose, setPropose] = useState<ProposeType>()
  const [page, setPage] = useState(0)

  const debtorFirstName = propose ? propose.debt.debtor[0].name.split(' ')[0] : ''


  const getProposed = async () => {
    setLoading(true)
    try{
      const response = await axios.get(`/api/public-propose/${id}`)
      console.log(response.data)
      setPropose(response.data)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(!id) {
      return;
    }
    getProposed()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Head>
        <title>{propose ? `Proposta para ${debtorFirstName}` : "Proposta para você"}</title>
      </Head>
      <ColorResponsiveBackground background={ui.colors.background}>
        <div className="w-full h-screen overflow-y-auto overflow-x-hidden relative">
        <div className='h-screen w-full absolute top-0 left-0 flex flex-col items-end justify-end'>
          <WaveSvg color={ui.colors.primary} />
        </div>
          
          {loading && 
            <div className="h-full flex flex-col gap-4 items-center justify-center">
              <CircleNotch className="opacity-80 animate-spin" />
              <div className="text-center font-semibold opacity-80">Carregando sua proposta...</div>
            </div>
          }

          {(propose && propose.debt.debtor[0].typeOfDebtor === 'individual') && 
            <div className="h-full flex flex-col gap-4 p-8 items-center justify-between relative pb-24">

              <div className="max-w-xl flex">
                <Image src={`/company-logos/${ui.logo}`} className="w-42 h-auto opacity-0 animate-fade-in" width={192} height={192} alt={"logo"} />
              </div>

                {page === 0 && <IndividualIntroction propose={propose} setPage={setPage}/>}

                {page === 1 && <IndividualToken propose={propose} setPage={setPage}/>}

                {page === 2 && <IndividualDebt propose={propose} setPage={setPage}/>}

                {page === 3 && <IndividualPropose propose={propose} setPage={setPage}/>}

                {page === 4 && <IndividualPayment propose={propose} setPage={setPage}/>}

                {page === 5 && <IndividualContract propose={propose} setPage={setPage}/>}

                {page === 6 && <IndividualSign propose={propose} setPage={setPage}/>}

                {page === 7 && <IndividualConfirm propose={propose} setPage={setPage}/>}


              <div className="flex gap-4 text-center items-center justify-center font-light text-sm opacity-50 absolute bottom-4">
                <button>Termos de uso</button>
                <button>Política de privacidade</button>
              </div>
            </div>
          }

          {(propose && propose.debt.debtor[0].typeOfDebtor === 'company') && 
            <div className="h-full flex flex-col gap-4 p-8 items-center justify-between relative pb-24">
              <div className="max-w-xl flex">
                <Image src={`/company-logos/${ui.logo}`} className="w-42 h-auto opacity-0 animate-fade-in" width={192} height={192} alt={"logo"} />
              </div>

              <span className="pb-64 text-3xl opacity-50"> Em breve... </span>
            </div>
          }

        </div>
      </ColorResponsiveBackground>
      
    </>
  )
}