import { login } from "@/services/users";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const token = await login(req.body);
    res.status(201).json(token);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json(err.message);
    }
  }
}
