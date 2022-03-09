import Head from 'next/head'

export default function MetaData({page}) {
  return (
    <Head>
      <title>The Herman Show | {page}</title>
      <meta property="og:title" content="The Herman Show" key="title" />

      {/* Description */}
      <meta
        name="description"
        content="The Herman Show is produced in collaboration with WLTL and delivered to stations across the U.S & Canada"
      />

      <meta
        property="og:description"
        content="The Herman Show is produced in collaboration with WLTL and delivered to stations across the U.S & Canada"
      />

      {/* Misc */}
      <meta name="twitter:card" content="summary" />
      <meta property="og:url" content="https://thehermanshow.com /" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/tyler-morales/the-herman-show/main/public/images/og.png"
      />
      <meta property="og:type" content="website" />
      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
