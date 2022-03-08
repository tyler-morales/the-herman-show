import React from 'react'
import Image from 'next/image'
import {AiOutlineLink} from 'react-icons/ai'

export default function episodes({episodes}) {
  return (
    <main className="px-4 m-auto mt-10 max-w-7xl">
      <section>
        <div className="px-4 py-8 m-auto max-w-7xl md:py-12">
          <h2 className="text-2xl font-bold md:text-3xl">Recent Episodes</h2>

          {/* Episode Cards */}
          <ul className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
            {episodes.map((episode, index) => {
              return (
                <li
                  key={index}
                  className="flex p-6 list-none transition-all bg-white border border-gray-300 rounded-md shadow-sm md:gap-8 md:items-center hover:-translate-y-1">
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

          <a
            href="http://soundcloud.com/the-herman-show"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 m-auto mt-16 text-lg text-center text-white transition-all bg-orange-500 rounded-md md:w-max hover:scale-95">
            View all Episodes
          </a>
        </div>
      </section>
    </main>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://soundcloud.com/the-herman-show/tracks')
  const documentString = await response.text()

  const document = documentString
    .split('<h2>The Herman Show’s tracks</h2>')[1]
    .split('</section>')[0]

  let articles = document.split('</article>')

  const episodes = articles.slice(0, 10).map((article) => {
    let title = article?.split('">')[3].split('</a>')[0]
    let date = article?.split('<time pubdate>')[1].split('T')[0]
    let link = article?.split('href="')[1].split('">')[0]
    return {title, date, link}
  })

  return {
    props: {
      episodes: episodes,
    },
  }
}
