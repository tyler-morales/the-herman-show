import React from 'react'
import Hero from '../components/about/Hero'
import TheHost from '../components/about/TheHost'
import TheTeam from '../components/about/TheTeam'

export default function about() {
  return (
    <main className="grid gap-20">
      <Hero />
      <TheHost />
      <TheTeam />
    </main>
  )
}
