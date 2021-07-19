import type { NextApiRequest, NextApiResponse } from 'next'
import { WithId } from 'mongodb'
import { connectToDatabase } from 'utils/db'
import { generateNonce, isValidSignature } from 'utils/signature'
import { User } from 'utils/models'
import { setRefreshTokenCookie, signAccessToken, signRefreshToken } from 'utils/authHelpers'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const { db } = await connectToDatabase()
  const users = db.collection<User>('users')
  switch (method) {
    case 'POST':
      try {
        const { signature, walletAddress, username } = req.body
        if (!signature || !walletAddress || !username)
          return res.status(400).json({ error: 'Requires signature, wallet address, and username' })

        const user = await users.findOne({ walletAddress }) as WithId<User> | null
        if (!user)
          return res.status(401).json({ error: 'Did not find user with such address' })
        
        if (user.registered)
          return res.status(400).json({ error: 'User is already registered' })

        if (!isValidSignature(signature, walletAddress, user.nonce))
          return res.status(401).json({ error: 'Invalid signature' })

        const accessToken = signAccessToken({ walletAddress })
        const refreshToken = signRefreshToken({ walletAddress, tokenVersion: user.tokenVersion })
        await users.updateOne({ walletAddress }, {
          $set: {
            nonce: generateNonce(),
            registered: true,
            username,
          },
        })
        setRefreshTokenCookie(res, refreshToken)
        return res.status(200).json({
          accessToken,
          user: {
            username,
          },
        })
      } catch (e) {
        console.error(e)
        return res.status(500).json({ error: 'Error during registration' })
      }
    default:
      return res.status(405).json({ error: 'Method not supported' })
  }
}
