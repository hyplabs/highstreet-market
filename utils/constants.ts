import { AddEthereumChainParameter } from './types'

export const MIN_IN_SEC = 60
export const HOUR_IN_SEC = 60 * MIN_IN_SEC
export const DAY_IN_SEC = 24 * HOUR_IN_SEC

export const SEC_IN_MS = 1000
export const MIN_IN_MS = MIN_IN_SEC * SEC_IN_MS
export const HOUR_IN_MS = HOUR_IN_SEC * SEC_IN_MS
export const DAY_IN_MS = DAY_IN_SEC * SEC_IN_MS

export const HIGHSTREET_REFRESH_COOKIE = 'highstreet-refresh-cookie'

export const ACCESS_TOKEN_EXPIRATION_SEC = 15 * MIN_IN_SEC
export const ACCESS_TOKEN_EXPIRATION_MS = ACCESS_TOKEN_EXPIRATION_SEC * MIN_IN_MS
export const REFRESH_TOKEN_EXPIRATION_SEC = 1 * DAY_IN_SEC
export const REFRESH_TOKEN_EXPIRATION_MS = REFRESH_TOKEN_EXPIRATION_SEC * MIN_IN_MS

export const ARBITRUM_CHAIN_ID = '0x66eeb'
export const MAINNET_CHAIN_ID = '0x1'

// use arbitrum-rinkeby for now
export const ARBITRUM_NETWORK_PARAMS: AddEthereumChainParameter = {
  chainId: ARBITRUM_CHAIN_ID,
  chainName: 'Arbitrum Testnet Rinkeby',
  nativeCurrency: {
    decimals: 18,
    name: 'Arbitrum Rinkeby Ether',
    symbol: 'ARETH',
  },
  rpcUrls: ['https://rinkeby.arbitrum.io/rpc', 'wss://rinkeby.arbitrum.io/ws'],
  blockExplorerUrls: ['https://rinkeby-explorer.arbitrum.io'],
}
