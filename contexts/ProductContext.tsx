import { BigNumber } from 'ethers'
import { TransactionResponse } from '@ethersproject/providers'
import { createContext, useContext } from 'react'
import { Nullable } from 'utils/types'
import Web3Context from './Web3Context'
import {
  getAvailability,
  getTotalSupply,
  getCurrentPrice,
  getPriceForN,
  calculateBuyReturn,
  calculateSellReturn,
  getLatestDaiEthPrice,
  retrieveToken,
  buyWithDai,
  buyWithEth,
  sell,
  daiBalanceOf,
  amountInDai,
} from 'sdk'
import { formatEther } from 'ethers/lib/utils'

type ProductContextType = {
  productTokenAvailability: (address: string) => Promise<number>
  productTokenTotalSupply: (address: string) => Promise<number>
  productTokenCurrentPrice: (address: string) => Promise<BigNumber>
  productTokenPriceForN: (address: string, amount: number) => Promise<BigNumber>
  productTokenCalculateBuyReturn: (address: string, amount: BigNumber) => Promise<number>
  productTokenCalculateSellReturn: (address: string, amount: number) => Promise<BigNumber>
  latestDaiEthPrice: (address: string) => Promise<BigNumber>
  addressFromProductName: (name: string) => Promise<string>

  buyTokenWithDai: (address: string, daiAmount: BigNumber, tokenAmount: number) => Promise<Nullable<TransactionResponse>>
  buyTokenWithEth: (address: string, ethAmount: BigNumber, tokenAmount: number) => Promise<Nullable<TransactionResponse>>
  sellToken: (address: string, tokenAmount: number) => Promise<Nullable<TransactionResponse>>

  getEthBalance: (address: string) => Promise<BigNumber>
  getDaiBalance: (address: string) => Promise<BigNumber>
  getEthBalanceFormatted: (address: string) => Promise<string>
  getDaiBalanceFormatted: (address: string) => Promise<string>
}

const ProductContext = createContext<ProductContextType>({
  productTokenAvailability: async () => 0,
  productTokenTotalSupply: async () => 0,
  productTokenCurrentPrice: async () => BigNumber.from(0),
  productTokenPriceForN: async () => BigNumber.from(0),
  productTokenCalculateBuyReturn: async () => 0,
  productTokenCalculateSellReturn: async () => BigNumber.from(0),
  latestDaiEthPrice: async () => BigNumber.from(0),
  addressFromProductName: async () => '',

  buyTokenWithDai: async () => null,
  buyTokenWithEth: async () => null,
  sellToken: async () => null,

  getEthBalance: async () => BigNumber.from(0),
  getDaiBalance: async () => BigNumber.from(0),
  getEthBalanceFormatted: async () => '0',
  getDaiBalanceFormatted: async () => '0',
})

export const ProductContextProvider: React.FC = ({ children }) => {
  const { web3Provider, defaultProvider, signer } = useContext(Web3Context)

  const provider = web3Provider || defaultProvider
  const productTokenAvailability = async (address: string) => getAvailability(provider, address)
  const productTokenTotalSupply = async (address: string) => getTotalSupply(provider, address)
  const productTokenCurrentPrice = async (address: string) => getCurrentPrice(provider, address)
  const productTokenPriceForN = async (address: string, amount: number) => getPriceForN(provider, address, amount)
  const productTokenCalculateBuyReturn = async (address: string, amount: BigNumber) => calculateBuyReturn(provider, address, amount)
  const productTokenCalculateSellReturn = async (address: string, amount: number) => calculateSellReturn(provider, address, amount)
  const latestDaiEthPrice = async (address: string) => getLatestDaiEthPrice(provider, address)
  const addressFromProductName = async (name: string) => retrieveToken(provider, name)

  const buyTokenWithDai = async (address: string, daiAmount: BigNumber, tokenAmount: number) =>
    signer ? buyWithDai(signer, address, daiAmount, tokenAmount) : null
  
  const buyTokenWithEth = async (address: string, ethAmount: BigNumber, tokenAmount: number) =>
    signer ? buyWithEth(signer, address, ethAmount, tokenAmount) : null
  
  const sellToken = async (address: string, tokenAmount: number) =>
    signer ? sell(signer, address, tokenAmount) : null

  const getEthBalance = async (address: string) => provider.getBalance(address)
  const getDaiBalance = async (address: string) => daiBalanceOf(provider, address)
  const getEthBalanceFormatted = async (address: string) => formatEther(await getEthBalance(address))
  const getDaiBalanceFormatted = async (address: string) => amountInDai(await getDaiBalance(address))

  return (
    <ProductContext.Provider
      value={{
        productTokenAvailability,
        productTokenTotalSupply,
        productTokenCurrentPrice,
        productTokenPriceForN,
        productTokenCalculateBuyReturn,
        productTokenCalculateSellReturn,
        latestDaiEthPrice,
        addressFromProductName,

        buyTokenWithDai,
        buyTokenWithEth,
        sellToken,

        getEthBalance,
        getDaiBalance,
        getEthBalanceFormatted,
        getDaiBalanceFormatted,
      }}
    >
      {children}  
    </ProductContext.Provider>
  )
}

export default ProductContext
