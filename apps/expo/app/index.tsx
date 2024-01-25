import { LoginScreen } from 'app/features/login/screen'
import { TermsScreen } from 'app/features/terms/screen'
import { StarshipFeedScreen } from 'app/features/starship-feed/screen'
import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Login',
        }}
      />
      <QueryClientProvider client={queryClient}>
        {/* <LoginScreen /> */}
        {/* <TermsScreen /> */}
        <StarshipFeedScreen />
      </QueryClientProvider>
    </>
  )
}
