import 'styles/normalize.css'
import 'styles/design_token.css'
import 'styles/globals.scss'
import 'styles/utils.scss'
import 'static/fonts/stylesheet.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
