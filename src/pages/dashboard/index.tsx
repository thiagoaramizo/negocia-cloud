import { InterfaceWrap } from '@/components/InterfaceWrap'
import { GetServerSideProps } from 'next'
import { middleAuth } from '@/functions/MiddleAuth'
import Head from 'next/head'
import { ActiveRiskStatusPie } from '@/components/charts/ActiveRiskStatusPie'
import { HistoryBar } from '@/components/charts/HistoryBar'
import { AsymmetricLayout } from '@/components/ AsymmetricLayout'


export const getServerSideProps: GetServerSideProps = async (context) => {
  return await middleAuth( context )
} 

export default function Dashboard() {

  return (<>
    <Head>
      <title>Dashboard - Negocia Cloud</title>
    </Head>
    <InterfaceWrap>
      
      <h1 className='font-light text-emerald-600 text-md mb-8'>Dashbord</h1>

      <HistoryBar />


    </InterfaceWrap>
  </>)
}
