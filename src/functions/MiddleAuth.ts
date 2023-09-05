import { auth } from "@/services/users"
import { getCookie } from "cookies-next"
import { GetServerSidePropsContext, PreviewData } from "next"
import { ParsedUrlQuery } from "querystring"

export async function middleAuth(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
  try {
    const token = getCookie('authorization', context)
    if (!token) throw new Error('Não autenticado')
    auth(token as string)
    return {
      props: {}
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    }
  }
} 