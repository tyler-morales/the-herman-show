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
      <div>
        <h2 className="text-3xl font-bold text-center">Contest Rules</h2>
        <a
          className="block px-6 py-4 m-auto mt-6 text-lg text-white transition-all bg-blue-700 rounded-lg w-max hover:scale-95"
          href="/contest_rules.pdf"
          target="_blank"
          rel="noopener noreferrer">
          View Contest Rules
        </a>
      </div>
    </main>
  )
}
