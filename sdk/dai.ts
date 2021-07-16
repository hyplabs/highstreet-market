import { BigNumber, Contract, Signer } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import { Provider } from '@ethersproject/providers'
import { getNetwork } from './utils'
import Dai from './config/Dai.json'
import ERC20 from './config/ERC20.json'
import { balanceOf } from './ERC20'

export const getDaiContract = async (signerOrProvider: Signer | Provider) =>
  new Contract(Dai.network[await getNetwork(signerOrProvider)], ERC20.abi, signerOrProvider)

export const daiBalanceOf = async (signerOrProvider: Signer | Provider, account: string) =>
  balanceOf(signerOrProvider, Dai.network[await getNetwork(signerOrProvider)], account)

export const amountInDai = (amount: BigNumber) => formatUnits(amount, Dai.decimals)
