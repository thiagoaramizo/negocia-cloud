import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function ProposedPage() {

  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [proposed, setProposed] = useState()


  const getProposed = async () => {
    setLoading(true)
    const proposedId = router.query.id
    try{
      const response = await axios.get(`/api/proposta/${proposedId}`, {
      headers: {
        'Authorization': ''
        }
      })
      setProposed(response.data)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
    
  }

  useEffect(()=>{
    getProposed()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h1>Acesso dinâmico à proposta {JSON.stringify(proposed)}</h1>
    </>
  )
}