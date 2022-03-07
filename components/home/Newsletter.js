import React from 'react'
import Image from 'next/image'

export default function Newsletter() {
  return (
    <section className="bg-[url('../public/images/radio-bg.jpeg')] bg-cover h-[600px]">
      <div className="px-5 md:px-0 flex justify-center items-center h-[600px]">
        <div className="flex flex-col gap-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Sign up for our Monthly Newsletter
          </h2>
          <p className="max-w-lg">
            Get bi-monthly emails about what’s going on inside the Herman Radio
            Network, any events and the latest upcomingshows
          </p>
          <a
            href="https://blogspot.us8.list-manage.com/subscribe?u=edd69c1aa277bd5a1709fd621&id=c2c3c37fbd"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-4 m-auto mt-6 text-lg text-white transition-all bg-blue-700 rounded-lg w-max hover:scale-95">
            Join the mailing list
          </a>
        </div>
      </div>
    </section>
  )
}
