import { getPropose } from '@/services/proposes'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const query = req.query;
      const { id } = query;
      const response = getPropose( id as string )
      const timer = await new Promise((r) => {setTimeout(r, 500)})
      res.status(200).json(response)

    } catch (err) {
      if( err instanceof Error ){
        res.status(400).json(err.message)
      }
    }
  }  else {
    res.status(400).json('Método de requisição inválido')
  }
}