import { Stack } from 'expo-router'
import { LoginScreen } from 'app/features/login/screen'

export default function Page() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Login',
        }}
      />
      <LoginScreen />
    </>
  )
}
