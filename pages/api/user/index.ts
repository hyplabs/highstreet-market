import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from 'utils/db'
import { User } from 'utils/models'
import { generateNonce } from 'utils/signature'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase()
  const users = db.collection<User>('users')

  switch (req.method) {
    case 'POST':
      const { walletAddress } = req.body
      try {
        const user = await users.findOne({ walletAddress })
        if (user) {
          const { registered, nonce } = user
          return res.json({ registered, nonce })
        }
        const nonce = generateNonce()
        await users.insertOne({ walletAddress, nonce, registered: false, tokenVersion: 0 })
        return res.json({ registered: false, nonce })
      } catch (e) {
        console.log(e);
        return res.status(500).json({ status: 'ERR', msg: 'Error saving record' })
      }
    default:
      return res.status(405).json({ error: 'method not supported' })
  }
}
