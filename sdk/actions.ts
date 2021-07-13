import { BigNumber, Contract, Signer } from 'ethers'
import { TransactionResponse } from '@ethersproject/providers'
import { getDaiContract } from './dai'
import ProductTokenV1 from './config/ProductTokenV1.json'

const execProductTokenTx = async (signer: Signer, productTokenAddress: string, fnc: string, ...args: any[]) => {
  const productTokenContract = new Contract(productTokenAddress, ProductTokenV1.abi, signer)
  return productTokenContract[fnc](...args) as TransactionResponse
}

export const buyWithDai = async (signer: Signer, productTokenAddress: string, daiAmount: BigNumber, tokenAmount: number) => {
  const daiContract = await getDaiContract(signer)
  await daiContract.approve(productTokenAddress, daiAmount)
  return execProductTokenTx(signer, productTokenAddress, 'buyWithDai', daiAmount, tokenAmount)
}

export const buyWithEth = async (signer: Signer, productTokenAddress: string, ethAmount: BigNumber, tokenAmount: number) => (
  execProductTokenTx(signer, productTokenAddress, 'buy', tokenAmount, { value: ethAmount })
)

export const sell = async (signer: Signer, productTokenAddress: string, tokenAmount: number) => (
  execProductTokenTx(signer, productTokenAddress, 'sell', tokenAmount)
)
