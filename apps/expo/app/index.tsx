import { LoginScreen } from 'app/features/login/screen'
import { TermsScreen } from 'app/features/terms/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Login',
        }}
      />
      {/* <LoginScreen /> */}
      <TermsScreen />
    </>
  )
}
