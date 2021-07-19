import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from 'utils/db'
import { User } from 'utils/models'
import { HIGHSTREET_REFRESH_COOKIE } from 'utils/constants'
import { getRefreshTokenSecret, setRefreshTokenCookie, signAccessToken, signRefreshToken, verifyToken } from 'utils/authHelpers'
import { parse as parseCookies } from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const { db } = await connectToDatabase()
  const users = db.collection<User>('users')
  switch (method) {
    case 'POST':
      try {
        const { walletAddress } = req.body
        if (!walletAddress)
          return res.status(400).json({ error: 'Requires wallet address '})

        const cookies = parseCookies(req.headers.cookie ?? '')
        const currentRefreshToken = cookies[HIGHSTREET_REFRESH_COOKIE]

        if (!currentRefreshToken)
          return res.status(400).json({ error: 'Refresh token not found' })

        const refreshTokenSecret = getRefreshTokenSecret()
        const { success, payload } = verifyToken(currentRefreshToken, refreshTokenSecret)
        if (!success || !payload)
          return res.status(401).json({ error: 'Invalid refresh token' })

        const user = await users.findOne({ walletAddress })
        if (!user)
          return res.status(401).json({ error: 'Did not find user with such address' })
          
        const { tokenVersion, walletAddress: tokenWalletAddress } = payload as { tokenVersion: number, walletAddress: string }
        if (tokenWalletAddress !== walletAddress || tokenVersion !== user.tokenVersion)
          return res.status(401).json({ error: 'Invalid refresh token' })

        const accessToken = signAccessToken({ walletAddress })
        const refreshToken = signRefreshToken({ walletAddress, tokenVersion: user.tokenVersion })
        setRefreshTokenCookie(res, refreshToken)
        return res.status(200).json({ accessToken })
      } catch (e) {
        console.error(e)
        return res.status(500).json({ error: 'Error while refreshing tokens' })
      }
    default:
      return res.status(405).json({ error: 'Method not supported' })
  }
}
