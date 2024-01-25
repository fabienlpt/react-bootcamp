import { LoginScreen } from 'app/features/login/screen'
import { TermsScreen } from 'app/features/terms/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        {/* <title>Login</title> */}
        <title>Terms</title>
      </Head>
      {/* <LoginScreen /> */}
      <TermsScreen />
    </>
  )
}
