import { Db, MongoClient } from 'mongodb'

export type Nullable<T> = T | null

export type MongoConnection = {
  client: MongoClient
  db: Db
}

export type CachedMongoConnection = {
  conn: Nullable<MongoConnection>
  promise: Nullable<Promise<MongoConnection>>
}

export type UserInfo = {
  username: string
}

export type AddEthereumChainParameter = {
  chainId: string
  blockExplorerUrls?: string[]
  chainName?: string
  iconUrls?: string[]
  nativeCurrency?: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls?: string[]
}
