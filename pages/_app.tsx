import Header from '@/components/header/header'
import '@/styles/globals.css'
import styled from '@emotion/styled'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Margin />
    </>
  )
}

const Margin = styled.div`
  height: 100px;
`