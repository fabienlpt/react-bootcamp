import * as React from 'react'
import { H3, YStack, Paragraph, Image } from '@my/ui'

export const StarshipCard = ({ starship }) => {
  return (
    <YStack bg="#F6F7F0" key={starship.name} p={4} mx={20} my={10}>
      <H3 col="black">{starship.name}</H3>
      <Paragraph col="black">{starship.model}</Paragraph>
      <Paragraph col="black">{starship.manufacturer}</Paragraph>
      <Image
        source={{
          uri: 'https://placekitten.com/300/200',
          width: 300,
          height: 200,
        }}
      />
      <Paragraph col="black">{starship.cost_in_credits} credits</Paragraph>
      <Paragraph col="purple">BUY THIS SPACESHIP</Paragraph>
    </YStack>
  )
}
