import { verifyMessage } from 'ethers/lib/utils'

export const generateNonce = () => Math.floor(Math.random() * 100000)

export const getMessageToSign = (nonce: number) =>
`A signature is required to verify that you have access to this wallet.

This operation will not cost any fee.

Nonce: ${nonce}`

export const isValidSignature = (signature: string, walletAddress: string, nonce: number) =>
  verifyMessage(getMessageToSign(nonce), signature).toLowerCase() === walletAddress.toLowerCase()
