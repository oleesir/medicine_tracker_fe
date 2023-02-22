import type { AppProps } from 'next/app'
import Navbar from "@/component/Navbar";
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return(
      <>
        <Navbar/>
        <Component {...pageProps} />
      </>
  )
}
