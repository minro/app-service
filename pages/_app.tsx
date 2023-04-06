import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AzureAppInsights from "../utils/insights"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AzureAppInsights>
      <Component {...pageProps} />
    </AzureAppInsights>
  )
}
