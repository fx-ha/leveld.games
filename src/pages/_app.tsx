import '@fontsource/inter'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider resetCSS theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
