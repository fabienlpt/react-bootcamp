import { H2, Paragraph, ScrollView, YStack } from '@my/ui'
import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import { StarshipCard } from '../../components/starship-card'

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
      <YStack>
        <H2 m={20}>Starships</H2>
        {data.map((starship: any) => (
          <StarshipCard starship={starship} key={starship.name} />
        ))}
      </YStack>
    </ScrollView>
  )
}
