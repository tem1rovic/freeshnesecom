import '../styles/normalize.css'
import '../styles/design_token.css'
import '../styles/globals.css'
import '../styles/utils.css'
import '../static/fonts/stylesheet.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
