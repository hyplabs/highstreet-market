import { connectToDatabase } from 'utils/db'

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const communityUsers = db.collection('communityUsers');

  switch (req.method) {
    case 'GET':
      const users = await communityUsers.find({}).toArray();
      res.send(users);
      break;
    case 'POST':
      const { email, device, joinAs } = req.body;
      try {
        await communityUsers.insertOne({ email, device, joinAs });
      } catch (e) {
        console.log(e);
        res.status(500).send({ status: 'ERR', msg: 'Error saving record' });
        return;
      }
      res.send({ status: 'OK' });
      break;
    default:
      res.status(400).json({ error: 'method not supported' });
  }
}
