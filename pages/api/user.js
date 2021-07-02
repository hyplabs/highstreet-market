import { connectToDatabase } from '../../utils/db'

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const users = db.collection('users');

  switch (req.method) {
    case 'POST':
      const { walletAddress } = req.body;
      try {
        const user = await users.findOne({ walletAddress });
        if (user) {
          res.send(user);
          return;
        }

        const insertRes = await users.insertOne({ walletAddress });
        res.send({ _id: insertRes.insertedId, walletAddress });
      } catch (e) {
        console.log(e);
        res.status(500).send({ status: 'ERR', msg: 'Error saving record' });
      }
      break;
    default:
      res.status(400).json({ error: 'method not supported' });
  }
}
