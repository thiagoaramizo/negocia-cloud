import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { FormEvent, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import axios, { AxiosError } from "axios";
import { WarningCircle } from '@phosphor-icons/react'
import { AppContext } from '@/context/AppContext'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const {updateToken} = useContext(AppContext)

  const handleSubmit = async ( e: FormEvent) => {
    e.preventDefault()
    try {
      const formData = {
        email,
        pass
      }
      setLoading(true)
      const response = await axios.post('/api/login', formData)
      console.log( response.data )
      if ( response.status !== 201 ) setError( response.data )
      updateToken(response.data)
      router.push('/')
    } catch (err) {
      setLoading(false)
      if( err instanceof AxiosError){
        
        if(err.response){
          setError(err.response.data)
        } else {
          setError('Erro ao fazer o cadastro')
        }
      } else if( err instanceof Error ) setError('Erro ao fazer o cadastro')
    }
  }



  return ( <>
    <Head>
      <title>Faça seu login - Negocia Cloud</title>
    </Head>
    <div className='w-full bg-gradient-to-r from-emerald-400	to-cyan-500'>

      <div className='h-screen flex items-center justify-center md:justify-end bg-none md:bg-login bg-contain bg-no-repeat py-24 md:py-36 px-8 container'>

        <div className='bg-white rounded-lg shadow-lg flex flex-col gap-2 px-8 py-12 w-96'>
          <Image src={'/images/negocia-cloud.svg'} alt='Negocia cloud' width={340} height={103}/>
          <form className="flex flex-col gap-2"  onSubmit={handleSubmit}>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              autoComplete="email" 
              required
              value={email} 
              onChange={(e) => {setEmail(e.target.value); setError('')}}
              disabled={loading} 
              title={'E-mail'}
            />
            <Input 
              id="pass" 
              name="pass" 
              type="password" 
              autoComplete="current-password" 
              required
              value={pass}
              disabled={loading} 
              onChange={(e) => {setPass(e.target.value); setError('')}}
              title='Senha' 
            />
            <span className='text-right text-sm cursor-pointer hover:text-green-700'>Esqueci a senha</span>

            {error && <div className="text-red-500 flex gap-1 items-center justify-center">
              <WarningCircle size={20} weight="bold" />
              <p className="font-semibold text-md">{error}</p>
            </div>}


            <Button variant={'primary'} className='mt-4' type='submit' isLoading={loading}>Entrar</Button>
          </form>
        </div>
          
      </div>
      
    </div>
    </>)
}
