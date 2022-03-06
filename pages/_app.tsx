import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import AuthenticatedRoutes from '../components/AuthenticatedRoutes'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Admin Panel - TheMovieplayDotCom</title>
        <link rel="shortcut icon" href="/TMP.ico" type="image/x-icon" />
      </Head>
      <AuthenticatedRoutes>
        <Component {...pageProps} />
      </AuthenticatedRoutes>
    </RecoilRoot>
  )
}

export default MyApp
