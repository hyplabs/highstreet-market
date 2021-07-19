import { getDefaultProvider, Signer } from 'ethers'
import { Web3Provider, Provider } from '@ethersproject/providers'
import { createContext, useCallback, useState } from 'react'
import { Nullable } from 'utils/types'
import { ARBITRUM_CHAIN_ID, ARBITRUM_NETWORK_PARAMS, MAINNET_CHAIN_ID } from 'utils/constants'

type Web3ContextType = {
  web3Provider: Nullable<Web3Provider>
  defaultProvider: Provider
  signer: Nullable<Signer>
  connectWallet: () => Promise<Nullable<{ walletAddress: string, signer: Signer }>>
  getConnectedWallet: () => Promise<Nullable<string>>
  switchToArbitrum: () => Promise<boolean>
  switchToMainnet: () => Promise<boolean>
}

const Web3Context = createContext<Web3ContextType>({
  web3Provider: null,
  defaultProvider: getDefaultProvider(),
  signer: null,
  connectWallet: async () => null,
  getConnectedWallet: async () => null,
  switchToArbitrum: async () => false,
  switchToMainnet: async () => false,
})

export const Web3ContextProvider: React.FC = ({ children }) => {
  if (typeof window === 'undefined') {
    return <>{children}</>
  }

  const [web3Provider] = useState<Nullable<Web3Provider>>(() => {
    if (window.ethereum) {
      return new Web3Provider(window.ethereum)
    } else if (window.web3) {
      return new Web3Provider(window.web3.currentProvider)
    } else {
      return null
    }
  })
  const [defaultProvider] = useState<Provider>(getDefaultProvider())
  const [signer, setSigner] = useState<Nullable<Signer>>(null)

  const connectWallet = useCallback(async () => {
    try {
      if (web3Provider) {
        const addresses: string[] = await web3Provider.send('eth_requestAccounts', [])
        const walletAddress = addresses[0]
        const signer = web3Provider.getSigner(walletAddress)
        setSigner(signer)
        return { walletAddress, signer }
      } else {
        console.error('No provider')
        return null
      }
    } catch (e) {
      console.error(e)
      return null
    }
  }, [web3Provider])

  const getConnectedWallet = useCallback(async () => {
    try {
      if (web3Provider) {
        return (await web3Provider.send('eth_accounts', []) as string[])[0] || null
      } else {
        return null
      }
    } catch (e) {
      console.error(e)
      return null
    }
  }, [web3Provider])

  const switchToArbitrum = useCallback(async () => {
    try {
      if (web3Provider) {
        await web3Provider.send('wallet_switchEthereumChain', [{ chainId: ARBITRUM_CHAIN_ID }])
        return true
      }
      return false
    } catch (e) {
      if ((e as any).code === 4902) {
        try {
          await web3Provider?.send('wallet_addEthereumChain', [ARBITRUM_NETWORK_PARAMS])
          return true
        } catch (e) {
          console.error(e)
          return false
        }
      }
      console.error(e)
      return false
    }
  }, [web3Provider])

  const switchToMainnet = useCallback(async () => {
    try {
      if (web3Provider) {
        await web3Provider.send('wallet_switchEthereumChain', [{ chainId: MAINNET_CHAIN_ID }])
        return true
      }
      return false
    } catch (e) {
      console.error(e)
      return false
    }
  }, [web3Provider])

  return (
    <Web3Context.Provider
      value={{
        web3Provider,
        defaultProvider,
        signer,
        connectWallet,
        getConnectedWallet,
        switchToArbitrum,
        switchToMainnet,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Context
