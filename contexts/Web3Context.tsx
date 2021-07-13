import { getDefaultProvider, Signer } from 'ethers'
import { ExternalProvider, Web3Provider, Provider } from '@ethersproject/providers'
import { createContext, useCallback, useState } from 'react'
import { Nullable } from '../utils/types'


declare global {
  interface Window {
    ethereum?: ExternalProvider
    web3?: { currentProvider: ExternalProvider }
  }
}

type Web3ContextType = {
  web3Provider: Nullable<Web3Provider>
  defaultProvider: Provider
  signer: Nullable<Signer>
  connectWallet: () => Promise<void>
}

const Web3Context = createContext<Web3ContextType>({
  web3Provider: null,
  defaultProvider: getDefaultProvider(),
  signer: null,
  connectWallet: async () => {},
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
        setSigner(web3Provider.getSigner(addresses[0]))
      } else {
        console.error('No provider')
      }
    } catch (e) {
      console.error(e)
    }
  }, [web3Provider])

  return (
    <Web3Context.Provider
      value={{
        web3Provider,
        defaultProvider,
        signer,
        connectWallet,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Context
