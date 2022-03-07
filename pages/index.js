import Hero from '../components/home/Hero'
import Newsletter from '../components/home/Newsletter'
import RecentEpisodes from '../components/home/RecentEpisodes'
import Nav from '../components/Nav'

export default function Home({episodes}) {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 gap-16 md:gap-32">
        <Hero />
        <RecentEpisodes episodes={episodes} />
        <Newsletter />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://soundcloud.com/the-herman-show/tracks')
  const documentString = await response.text()

  const document = documentString
    .split('<h2>The Herman Show’s tracks</h2>')[1]
    .split('</section>')[0]

  let articles = document.split('</article>')
  // console.log(articles)

  const episodes = articles.map((article) => {
    // console.log(article)
    let title = article?.split('">')[3]
    // console.log(title)
    return {title}
  })

  // console.log(episodes[0].title)

  return {
    props: {
      episodes: [
        {
          id: 1,
          title: 'Episode 1',
          date: 'July 1, 2020',
          img: 'https://i1.sndcdn.com/artworks-d3ydzVw4nj8ogeLR-0zx27g-t500x500.jpg',
          link: '',
        },
        {
          id: 2,
          title: 'Episode 2',
          date: 'July 15, 2022',
          img: 'https://i1.sndcdn.com/artworks-d3ydzVw4nj8ogeLR-0zx27g-t500x500.jpg',
          link: '',
        },
      ],
    },
  }
}
