import * as React from 'react'
import { Button, XStack, Header } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export const HeaderComponent = () => {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <Header>
      <XStack f={1} jc="center" ai="center" bg="#6750A4" w="100%" p="$1" jc="flex-start">
        <Button {...link} icon={ChevronLeft} bg="transparent" col="#ffffff">
          Go Home
        </Button>
      </XStack>
    </Header>
  )
}
