export type User = {
  walletAddress: string
  registered: boolean
  nonce: number
  tokenVersion: number
  username?: string
}

export type CommunityUser = {
  email: string
  device: string
  joinAs: string
}
