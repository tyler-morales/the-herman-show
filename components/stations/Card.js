import React from 'react'

export default function Card({stations}) {
  return (
    <>
      {stations.map((station, index) => {
        return (
          <li key={index} className="p-6 border-2 border-blue-500 rounded-md">
            <span className="text-xl font-bold">{station.name}</span>
            <span className="block mt-2">{station.location}</span>
            <span className="block w-full p-2 mt-4 text-center text-blue-800 bg-blue-200 rounded-md">
              {station.time}
            </span>
          </li>
        )
      })}
    </>
  )
}
