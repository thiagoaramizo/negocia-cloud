import { InterfaceWrap } from '@/components/InterfaceWrap'
import { GetServerSideProps } from 'next'
import { middleAuth } from '@/functions/MiddleAuth'
import Head from 'next/head'


export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth( context )
} 

export default function Home() {
  return (<>
    <Head>
      <title>Negocia Cloud</title>
    </Head>
    <InterfaceWrap>
      Esse é o conteúdo
    </InterfaceWrap>
  </>)
}
