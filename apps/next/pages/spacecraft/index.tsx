import { StarshipFeedScreen } from 'app/features/starship-feed/screen'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Page() {
  return (
    <>
      <Head>
        <title>SpaceCraft</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <StarshipFeedScreen />
      </QueryClientProvider>
    </>
  )
}
