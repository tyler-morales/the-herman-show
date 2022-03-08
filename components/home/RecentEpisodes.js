import React from 'react'
import Image from 'next/image'
import {AiOutlineLink} from 'react-icons/ai'

export default function RecentEpisodes({episodes}) {
  return (
    <section className="bg-gray-200">
      <div className="px-4 py-8 m-auto max-w-7xl md:py-12">
        <h2 className="text-2xl font-bold md:text-3xl">Recent Episodes</h2>

        {/* Episode Cards */}
        <ul className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          {episodes.map((episode, index) => {
            return (
              <li
                key={index}
                className="flex p-6 list-none bg-white border border-gray-300 rounded-md md:gap-8 md:items-center">
                <figure className="md:h-min md:w-[150px] h-0 w-0">
                  <Image
                    src="https://i1.sndcdn.com/artworks-d3ydzVw4nj8ogeLR-0zx27g-t500x500.jpg"
                    alt={episode.title}
                    layout="responsive"
                    width={500}
                    height={500}
                    className="block object-cover"
                  />
                </figure>
                <div className="w-full">
                  <span className="block mb-2 text-gray-400 text-md">
                    {episode.date}
                  </span>
                  <h3
                    className="text-xl font-bold"
                    dangerouslySetInnerHTML={{__html: episode.title}}></h3>
                  <a
                    className="block px-6 py-3 mt-4 text-lg text-white transition-all bg-orange-500 rounded-md md:w-min hover:scale-95"
                    href={`https://soundcloud.com${episode.link}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="flex items-center gap-2">
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
