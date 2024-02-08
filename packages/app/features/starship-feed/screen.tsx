import { H2, H3, Image, Paragraph, ScrollView, YStack } from '@my/ui'
import { HeaderComponent } from '../../components/header'
import * as React from 'react'
import { useQuery } from '@tanstack/react-query'

async function getDataFromApi() {
  const result = await fetch(`https://swapi.py4e.com/api/starships/`)
  const data = await result.json()
  return data.results
}

export const StarshipFeedScreen = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['StarshipFeedScreen'],
    queryFn: getDataFromApi,
  })

  if (isLoading) {
    return <Paragraph>Loading…</Paragraph>
  }
  if (isError) {
    return <Paragraph>Something bad happened…</Paragraph>
  }
  return (
    <ScrollView>
      <HeaderComponent />
      <YStack>
        <H2 m={20}>Starships</H2>
        {data.map((starship: any) => (
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
            {/* <Image
              style={{ width: 250, height: 250, marginVertical: 32 }}
              source={{
                uri: useImage(starship.name),
              }}
            /> */}
            <Paragraph col="black">{starship.cost_in_credits} credits</Paragraph>
            <Paragraph col="purple">BUY THIS SPACESHIP</Paragraph>
          </YStack>
        ))}
      </YStack>
    </ScrollView>
  )
}
