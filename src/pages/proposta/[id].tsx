"use client"

import { ProposeType } from "@/@types/ProposeType"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function ProposedPage() {

  const router = useRouter()
  const {id} = router.query
  const [loading, setLoading] = useState(false)
  const [propose, setPropose] = useState<ProposeType>()


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
      <h1>Acesso dinâmico à proposta</h1>
      {propose && <span>{propose.id}</span>}
    </>
  )
}