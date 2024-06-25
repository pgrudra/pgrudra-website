import type { AppProps } from 'next/app'
import { LazyMotion, domAnimation } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} />
    </LazyMotion>
  )
}

export default MyApp