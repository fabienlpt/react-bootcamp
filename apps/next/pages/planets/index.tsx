import { PlanetScreen } from 'app/features/planets/screen'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HeaderComponent } from 'app/components/header'

const queryClient = new QueryClient()

export default function Page() {
  return (
    <>
      <Head>
        <title>SpaceCraft</title>
      </Head>
      <HeaderComponent />
      <QueryClientProvider client={queryClient}>
        <PlanetScreen />
      </QueryClientProvider>
    </>
  )
}
