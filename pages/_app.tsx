import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AzureAppInsights from "../utils/insights"

export default function App({ Component, pageProps }: AppProps) {
  // Azure Application insights, also add .env with NEXT_PUBLIC_APP_INSIGHTS
  // return (
  //   <AzureAppInsights>
  //     <Component {...pageProps} />
  //   </AzureAppInsights>
  // )
}
