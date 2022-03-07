import React from 'react'
import Image from 'next/image'

export default function Newsletter() {
  return (
    <section className="bg-[url('../public/images/radio-bg.jpeg')] bg-cover h-[600px]">
      <div className="px-5 md:px-0 flex justify-center items-center h-[600px]">
        <div className="flex flex-col gap-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
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
            className="bg-blue-700 text-white w-max m-auto px-6 py-4 text-lg rounded-lg mt-6 block hover:scale-95 transition-all">
            Join the mailing list
          </a>
        </div>
      </div>
    </section>
  )
}

/*
absolute flex flex-col text-center text-white w-max left-1/2 top-1/2 translate-x-1/2 translate-y-1/2
*/
