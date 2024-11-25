// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse } from "next"
import { NextRequest } from "next/server"

export default function handler(_req: NextRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" })
}
