import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ContextProvider } from 'contexts/Web3Context'
import { ProductContextProvider } from 'contexts/ProductContext'
import { UserContextProvider } from 'contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <ProductContextProvider>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </ProductContextProvider>
    </Web3ContextProvider>
  )
}
export default MyApp
