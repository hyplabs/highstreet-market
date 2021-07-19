import { createContext, useContext, useEffect, useState } from 'react'
import Web3Context from './Web3Context'
import { getMessageToSign } from 'utils/signature'
import { refreshAuth, requestPost, setAccessToken } from 'utils/api'
import { Signer } from 'ethers'
import { Nullable, UserInfo } from 'utils/types'

type UserContextType = {
  userInfo: Nullable<UserInfo>
  connectMetaMask: () => Promise<Nullable<{ registered: boolean, nonce: number, signer: Signer, walletAddress: string }>>
  signMessage: (signer: Signer, nonce: number) => Promise<Nullable<string>>
  login: (signature: string, walletAddress: string) => Promise<boolean>
  register: (signature: string, walletAddress: string, username: string) => Promise<boolean>
}

const UserContext = createContext<UserContextType>({
  userInfo: null,
  connectMetaMask: async () => null,
  signMessage: async () => null,
  login: async () => false,
  register: async () => false,
})

export const UserContextProvider: React.FC = ({ children }) => {
  if (typeof window === 'undefined') {
    return <>{children}</>
  }

  const [userInfo, setUserInfo] = useState<Nullable<UserInfo>>(null)
  const { connectWallet, getConnectedWallet } = useContext(Web3Context)

  useEffect(() => {
    ;(async () => {
      try {
        const walletAddress = await getConnectedWallet()
        if (!walletAddress) return

        const refreshResponse = await refreshAuth(walletAddress)
        if (refreshResponse.status !== 200) return
        const { accessToken } = await refreshResponse.json() as { accessToken: string }
        if (accessToken)
          setAccessToken(accessToken)

        const userResponse = await requestPost('/api/user/current', true, { walletAddress })
        if (userResponse.status !== 200) return
        const { user } = await userResponse.json() as { user: UserInfo }
        setUserInfo(user)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  const connectMetaMask = async () => {
    const walletInfo = await connectWallet()
    if (!walletInfo) return null
    const { walletAddress, signer } = walletInfo
    const response = await requestPost('/api/user', false, { walletAddress })
    if (response.status === 200)
      return { ...(await response.json() as { registered: boolean, nonce: number }), signer, walletAddress }
    return null
  }

  const signMessage = async (signer: Signer, nonce: number) => {
    try {
      return await signer.signMessage(getMessageToSign(nonce))
    } catch (e) {
      console.error(e)
      return null
    }
  }

  const login = async (signature: string, walletAddress: string) => {
    const authResponse = await requestPost('/api/auth/metamask', false, { signature, walletAddress })
    if (authResponse.status !== 200) return false
    const { accessToken, user } = await authResponse.json() as { accessToken: string, user: UserInfo }
    setAccessToken(accessToken)
    setUserInfo(user)
    return true
  }

  const register = async (signature: string, walletAddress: string, username: string) => {
    const registerResponse = await requestPost('/api/auth/register', false, { signature, walletAddress, username })
    if (registerResponse.status !== 200) return false
    const { accessToken, user } = await registerResponse.json() as { accessToken: string, user: UserInfo }
    setAccessToken(accessToken)
    setUserInfo(user)
    return true
  }

  return (
    <UserContext.Provider
      value={{
        userInfo,
        connectMetaMask,
        signMessage,
        login,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
