import { StarshipFeedScreen } from 'app/features/starship-feed/screen'
import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HeaderComponent } from 'app/components/header'

const queryClient = new QueryClient()

export default function Screen() {
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
      <HeaderComponent />
    </>
  )
}
