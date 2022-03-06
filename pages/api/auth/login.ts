import jwt from 'jsonwebtoken'
import { NextApiResponse, NextApiRequest } from 'next'
import getConfig from 'next/config'
import { apiHandler } from '../../../helpers/api/apiHandler'
const { serverRuntimeConfig } = getConfig()
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const login = async () => {
    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: 14 }, serverRuntimeConfig.secret, {
      expiresIn: '7d',
    })

    // return basic user details and token
    return res.status(200).json({
      token,
    })
  }
  switch (req.method) {
    case 'POST':
      return await login()
    default:
      return res.status(200).json({ message: 'Method not allowed' })
  }
}
export default apiHandler(handler)
