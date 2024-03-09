import React from 'react'
import Planet from './planet'
import { Canvas } from '@react-three/fiber'
import { useQuery } from '@tanstack/react-query'
import { Paragraph } from '@my/ui'
import styles from './PlanetList.module.css'

async function getDataFromApi() {
  const result = await fetch(`https://swapi.py4e.com/api/planets/`)
  const data = await result.json()
  return data.results
}

const PlanetList = () => {
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
  const rows = Math.ceil(data.length / 3)
  return (
    <div className={styles.planetListContainer}>
      {data.map((planet: any, index: number) => (
        <div key={index} className={styles.planetItem}>
          <Planet name={planet.name} />
        </div>
      ))}
    </div>
  )
}

export default PlanetList
