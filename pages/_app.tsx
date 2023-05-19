import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import '@/styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
