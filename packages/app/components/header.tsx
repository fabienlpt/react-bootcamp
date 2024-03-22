import * as React from 'react'
import { Button, XStack, Header } from '@my/ui'
import { Home, MapPin, User2 } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export const HeaderComponent = ({ styles }) => {
  const [id] = useParam('id')
  const homeLink = useLink({
    href: '/',
  })
  const loginLink = useLink({
    href: '/login',
  })
  const planetsLink = useLink({
    href: '/planets',
  })

  return (
    <Header style={styles}>
      <XStack f={1} ai="center" bg="#6750A4" w="100%" py="$1" jc="space-between">
        <Button {...homeLink} bg="transparent" color="#ffffff">
          SpaceCraft
        </Button>
        <XStack>
          <Button {...homeLink} icon={Home} bg="transparent" color="#ffffff"></Button>
          <Button {...planetsLink} icon={MapPin} bg="transparent" color="#ffffff"></Button>
          <Button {...loginLink} icon={User2} bg="transparent" color="#ffffff"></Button>
        </XStack>
      </XStack>
    </Header>
  )
}
