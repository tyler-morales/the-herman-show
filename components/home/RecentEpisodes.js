import React from 'react'
import Image from 'next/image'
import {AiOutlineLink} from 'react-icons/ai'

export default function RecentEpisodes({episodes}) {
  return (
    <section className="bg-gray-200">
      <div className="max-w-7xl m-auto py-8 md:py-12 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold">Recent Episodes</h2>

        {/* Episode Cards */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {episodes.map((episode) => {
            return (
              <li
                key={episode.id}
                className="list-none bg-white p-6 flex gap-8 rounded-md border border-gray-300 items-center">
                <figure className="h-[150px] w-[150px]">
                  <Image
                    src="https://i1.sndcdn.com/artworks-d3ydzVw4nj8ogeLR-0zx27g-t500x500.jpg"
                    alt={episode.title}
                    layout="responsive"
                    width={500}
                    height={500}
                    className="object-cover block"
                  />
                </figure>
                <div>
                  <span className="text-md text-gray-400 mb-2 block">
                    {episode.date}
                  </span>
                  <h3 className="font-bold text-xl">{episode.title}</h3>
                  <a
                    className="bg-orange-500 px-6 py-3 block rounded-md text-white text-lg mt-4 hover:scale-95 transition-all"
                    href={episode.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="flex gap-2 items-center">
                      <AiOutlineLink size="1.25em" />
                      <span>SoundCloud</span>
                    </span>
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
