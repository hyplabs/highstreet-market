import { BigNumber, Contract, Signer } from 'ethers'
import { Provider } from '@ethersproject/providers'
import ERC20 from './config/ERC20.json'

// view functions for ERC20 tokens

async function execERC20Function<T>(
  signerOrProvider: Signer | Provider,
  tokenAddress: string,
  fnc: string,
  ...args: any[]
): Promise<T> {
  const contract = new Contract(tokenAddress, ERC20.abi, signerOrProvider)
  return contract[fnc](...args) as T
}

export const decimals = (signerOrProvider: Signer | Provider, tokenAddress: string) => (
  execERC20Function<number>(signerOrProvider, tokenAddress, 'decimals')
)

export const name = (signerOrProvider: Signer | Provider, tokenAddress: string) => (
  execERC20Function<string>(signerOrProvider, tokenAddress, 'name')
)

export const symbol = (signerOrProvider: Signer | Provider, tokenAddress: string) => (
  execERC20Function<string>(signerOrProvider, tokenAddress, 'symbol')
)

export const balanceOf = (signerOrProvider: Signer | Provider, tokenAddress: string, account: string) => (
  execERC20Function<BigNumber>(signerOrProvider, tokenAddress, 'balanceOf', account)
)
