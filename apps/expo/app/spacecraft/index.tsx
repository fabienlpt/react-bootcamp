import { StarshipFeedScreen } from 'app/features/starship-feed/screen'
import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Page() {
  return (
    <>
    <Stack.Screen
      options={{
        title: 'SpaceCraft',
      }}
    />
      <QueryClientProvider client={queryClient}>
        <StarshipFeedScreen />
      </QueryClientProvider>
    </>
  )
}
