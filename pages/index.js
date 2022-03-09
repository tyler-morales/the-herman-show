import Hero from '../components/home/Hero'
import Newsletter from '../components/home/Newsletter'
import RecentEpisodes from '../components/home/RecentEpisodes'
import MetaData from '../components/MetaData'

export default function Home({episodes}) {
  return (
    <>
      <MetaData page="Home" />
      <div className="grid grid-cols-1 gap-16 md:gap-32">
        <Hero />
        <RecentEpisodes episodes={episodes} />
        <Newsletter />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://soundcloud.com/the-herman-show/tracks')
  const documentString = await response.text()

  const document = documentString
    .split('<h2>The Herman Show’s tracks</h2>')[1]
    .split('</section>')[0]

  let articles = document.split('</article>')

  const episodes = articles.slice(0, 4).map((article) => {
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
