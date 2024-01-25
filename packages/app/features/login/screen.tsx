import { Button, H1, Input, Paragraph, XStack, YStack } from '@my/ui'
import * as React from 'react'
import { useLink } from 'solito/link'

export function LoginScreen() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  React.useEffect(() => {
    console.log('email', email)
  }, [email])

  React.useEffect(() => {
    console.log('email', password)
  }, [password])

  const onLogin = () => {
    if (!email || !password) {
      return
    }

    window.location.href = '/user/nate'
  }

  return (
    <YStack f={1} jc="center" ai="center">
      <XStack f={1} jc="center" ai="center" bg="#6750A4" w="100%" p="$1">
        <H1 ta="center">SPACECRAFT</H1>
      </XStack>
      <YStack f={1} jc="space-around" ai="center" p="$6" bg="#ffffff">
        <InputDemo placeholder="Email" value={email} setValue={setEmail} />
        <InputDemo placeholder="Password" value={password} setValue={setPassword} />
        <XStack>
          <Button bg="#6750A4" col="#ffffff" w={250} h={30} br={50} onPress={onLogin}>
            Login
          </Button>
        </XStack>

        <Paragraph ta="center" col="#A0A0A0">
          by login you accept the Terms and Conditions.
        </Paragraph>
      </YStack>
    </YStack>
  )
}

function InputDemo({ placeholder, setValue, value }) {
  return (
    <XStack jc="center" ai="center">
      <Input
        size="$4"
        w={300}
        br={0}
        bw={0}
        bg="#E7E0EC"
        bbc="#6750A4"
        bbw={2}
        col="#000000"
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </XStack>
  )
}
