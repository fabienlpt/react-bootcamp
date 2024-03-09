import { HeaderComponent } from 'app/components/header'
import Head from 'next/head'
import PlanetList from './planetList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
export default function Page() {
  return (
    <>
      <Head>
        <title>SpaceCraft</title>
      </Head>
      <HeaderComponent />
      <QueryClientProvider client={queryClient}>
        <PlanetList />
      </QueryClientProvider>
    </>
  )
}
