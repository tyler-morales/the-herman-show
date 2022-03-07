import Nav from '../components/Nav'
import Footer from '../components/Footer'
import 'mapbox-gl/dist/mapbox-gl.css'

import '../styles/globals.scss'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
