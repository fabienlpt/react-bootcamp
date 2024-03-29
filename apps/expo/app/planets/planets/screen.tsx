import PlanetExpo from './planet-expo'
import { useQuery } from '@tanstack/react-query'
import { Paragraph, YStack } from '@my/ui'

async function getDataFromApi() {
  const result = await fetch(`https://swapi.py4e.com/api/planets/`)
  const data = await result.json()
  return data.results
}

export const PlanetScreen = () => {
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
    <YStack fw="wrap" jc="space-around" ai="flex-start" fd="row" mt={50}>
      {data.map((planet, index) => (
        <YStack key={index} w="40%" h={200} pos="relative">
          <PlanetExpo name={planet.name} />
        </YStack>
      ))}
    </YStack>
  )
}
