import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from 'utils/db'
import { User } from 'utils/models'
import { getAccessTokenSecret, verifyToken } from 'utils/authHelpers'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const { db } = await connectToDatabase()
  const users = db.collection<User>('users')
  switch (method) {
    case 'POST':
      try {
        const { authorization } = req.headers
        const token = (authorization ?? '').split(' ')[1]
        if (!token)
          return res.status(401).json({ error: 'No access token' })

        const accessTokenSecret = getAccessTokenSecret()
        const { success, payload } = verifyToken(token, accessTokenSecret)
        if (!success || !payload)
          return res.status(401).json({ error: 'Invalid access token' })

        const { walletAddress } = payload as { walletAddress: string }
        if (!walletAddress)
          return res.status(401).json({ error: 'Invalid access token' })

        const user = await users.findOne({ walletAddress })
        if (!user)
          return res.status(400).json({ error: 'No user with such address' })

        return res.status(200).json({
          user: {
            username: user.username,
          },
        })
      } catch (e) {
        console.error(e)
        return res.status(500).json({ error: 'Error retrieving current user' })
      }
    default:
      res.status(405).json({ error: 'method not supported' });
  }
}
