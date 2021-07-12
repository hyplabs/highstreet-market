import { BigNumber, Contract, Signer } from 'ethers'
import { Provider } from '@ethersproject/providers'
import ProductTokenV1 from './config/ProductTokenV1.json'

// view functions for ProductTokenV1

async function execProductTokenFunction<T>(
  signerOrProvider: Signer | Provider,
  productTokenAddress: string,
  fnc: string,
  ...args: any[]
): Promise<T> {
  const contract = new Contract(productTokenAddress, ProductTokenV1.abi, signerOrProvider)
  return contract[fnc](...args) as T
}

export const getAvailability = async (signerOrProvider: Signer | Provider, productTokenAddress: string) => (
  execProductTokenFunction<number>(signerOrProvider, productTokenAddress, 'getAvailability')
)

export const getTotalSupply = async (signerOrProvider: Signer | Provider, productTokenAddress: string) => (
  execProductTokenFunction<number>(signerOrProvider, productTokenAddress, 'getTotalSupply')
)

export const getCurrentPrice = async (signerOrProvider: Signer | Provider, productTokenAddress: string) => (
  execProductTokenFunction<BigNumber>(signerOrProvider, productTokenAddress, 'getCurrentPrice')
)

export const getPriceForN = async (signerOrProvider: Signer | Provider, productTokenAddress: string, amount: number) => (
  execProductTokenFunction<BigNumber>(signerOrProvider, productTokenAddress, 'getPriceForN', amount)
)

export const calculateBuyReturn = async (signerOrProvider: Signer | Provider, productTokenAddress: string, amount: BigNumber) => (
  execProductTokenFunction<number>(signerOrProvider, productTokenAddress, 'calculateBuyReturn', amount)
)

export const calculateSellReturn = async (signerOrProvider: Signer | Provider, productTokenAddress: string, amount: number) => (
  execProductTokenFunction<BigNumber>(signerOrProvider, productTokenAddress, 'calculateSellReturn', amount)
)

export const getLatestDaiEthPrice = async (signerOrProvider: Signer | Provider, productTokenAddress: string) => (
  execProductTokenFunction<BigNumber>(signerOrProvider, productTokenAddress, 'getLatestDaiEthPrice')
)
