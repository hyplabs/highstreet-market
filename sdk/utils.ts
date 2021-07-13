import { Signer } from 'ethers'
import { Provider } from '@ethersproject/abstract-provider'

export const getNetwork = async (signerOrProvider: Signer | Provider) => {
  const network = await (Signer.isSigner(signerOrProvider) 
    ? signerOrProvider.provider?.getNetwork()
    : signerOrProvider.getNetwork())

  switch(network?.chainId) {
    case 1: return 'mainnet'
    case 4: return 'rinkeby'
    case 42161: return 'mainnetArbitrum'
    case 421611: return 'rinkebyArbitrum'
    default:
      return 'rinkebyArbitrum'
  }
}
