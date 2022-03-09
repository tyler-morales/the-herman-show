/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MAPBOX_API_KEY: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
  },
  images: {
    domains: ['i1.sndcdn.com', 'i.picsum.photos', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
