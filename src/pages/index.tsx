import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full bg-gradient-to-r from-emerald-400	to-cyan-500'>

      <div className='h-screen flex items-center justify-center md:justify-end md:bg-login bg-contain bg-no-repeat py-36 px-8 container'>

        <div className='bg-white rounded-lg shadow-lg flex flex-col gap-2 px-8 py-12 w-96'>
          <Image src={'/images/negocia-cloud.svg'} alt='Negocia cloud' width={340} height={103}/>
          <Input name={'email'} title={'E-mail'} type='email'/>
          <Input name='password' title='Senha' type='password' />
          <span className='text-right text-sm cursor-pointer hover:text-green-700'>Esqueci a senha</span>
          <Button variant={'primary'} className='mt-4'>Entrar</Button>
        </div>
          
      </div>
      
    </div>
  )
}
