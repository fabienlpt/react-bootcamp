import { LoginScreen } from 'app/features/login/screen'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Page() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <LoginScreen />
      </QueryClientProvider>
    </>
  )
}
