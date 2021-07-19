import { ExternalProvider } from '@ethersproject/providers'
import { CachedMongoConnection } from './types'

declare global {
  interface Window {
    ethereum?: ExternalProvider
    web3?: { currentProvider: ExternalProvider }
  }

  namespace NodeJS {
    interface Global extends NodeJS.Global {
      mongo?: CachedMongoConnection
    }
  }
}
