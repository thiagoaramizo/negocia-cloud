import { InterfaceWrap } from '@/components/InterfaceWrap'
import { GetServerSideProps } from 'next'
import { middleAuth } from '@/functions/MiddleAuth'
import Head from 'next/head'


export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth( context )
} 

export default function Clientes() {
  return (<>
    <Head>
      <title>Clientes - Negocia Cloud</title>
    </Head>
    <InterfaceWrap>
      Clientes
    </InterfaceWrap>
  </>)
}
