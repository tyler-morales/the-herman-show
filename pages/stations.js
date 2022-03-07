import React from 'react'
import Card from '../components/stations/Card'
import MapBox from '../components/stations/Mapbox'
import stationData from '../data/stations.json'

export default function stations() {
  const coordinates = stationData.map((station) => {
    return {
      name: station.name,
      latitude: station.lat,
      longitude: station.lon,
    }
  })

  return (
    <main className="px-4 m-auto mt-10 max-w-7xl">
      <section>
        <h1 className="text-5xl font-bold">Stations</h1>
        <MapBox coordinates={coordinates} />
        <ul className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3">
          <Card stations={stationData} />
        </ul>
      </section>
    </main>
  )
}
