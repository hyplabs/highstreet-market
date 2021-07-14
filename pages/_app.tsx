import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ContextProvider } from 'contexts/Web3Context'
import { ProductContextProvider } from 'contexts/ProductContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <ProductContextProvider>
        <Component {...pageProps} />
      </ProductContextProvider>
    </Web3ContextProvider>
  )
}
export default MyApp
