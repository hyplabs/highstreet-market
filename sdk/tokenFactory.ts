import { Contract, Signer } from 'ethers'
import { Provider } from '@ethersproject/abstract-provider'
import { getNetwork } from './utils'
import TokenFactory from './config/TokenFactory.json'

// view functions for TokenFactory

async function execTokenFactoryFunction<T>(
  signerOrProvider: Signer | Provider,
  fnc: string,
  ...args: any[]
): Promise<T> {
  const network = await getNetwork(signerOrProvider)
  const contract = new Contract(TokenFactory.network[network], TokenFactory.abi, signerOrProvider)
  return contract[fnc](...args) as T
}

export const retrieveToken = async (signerOrProvider: Signer | Provider, productName: string) => (
  execTokenFactoryFunction<string>(signerOrProvider, 'retrieveToken', productName)
)
