import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGO_URL
const MONGODB_DB = process.env.MONGO_DBNAME

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGO_DBNAME environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
if (!global.mongo) {
  global.mongo = { conn: null, promise: null }
}
let cached = global.mongo

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect(MONGODB_URI!, opts).then((client) => {
      return {
        client,
        db: client.db(MONGODB_DB!),
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}
