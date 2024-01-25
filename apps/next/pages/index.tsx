import { LoginScreen } from 'app/features/login/screen'
import { TermsScreen } from 'app/features/terms/screen'
import { StarshipFeedScreen } from 'app/features/starship-feed/screen'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Page() {
  return (
    <>
      <Head>
        {/* <title>Login</title> */}
        <title>Terms</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        {/* <LoginScreen /> */}
        {/* <TermsScreen /> */}
        <StarshipFeedScreen />
      </QueryClientProvider>
    </>
  )
}
