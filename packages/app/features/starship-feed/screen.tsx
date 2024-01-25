import { Button, H2, Input, Paragraph, Image, YStack } from '@my/ui'
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
    queryKey: ['FilmListScreen'],
    queryFn: getDataFromApi,
  })

  React.useEffect(() => {
    console.log('data', data)
  }, [data])

  if (isLoading) {
    return <Paragraph>Loading…</Paragraph>
  }
  if (isError) {
    return <Paragraph>Something bad happened…</Paragraph>
  }
  return (
    <YStack>
      <HeaderComponent />
      <YStack></YStack>
    </YStack>
  )
}
