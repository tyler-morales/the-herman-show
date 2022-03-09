import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useResize from '../../hooks/useResize'

export default function Hero() {
  const screenWidth = useResize()
  return (
    <div className="mt-6 md:mt-10">
      <h1 className="text-center">
        <span className="block text-3xl">The</span>
        <span className="block text-5xl font-bold md:text-7xl">
          Herman Show
        </span>
      </h1>
      <p className="mt-4 text-lg text-center">A Talk & Music Radio Show</p>
      <figure className="relative m-auto mt-6 max-w-7xl">
        <Image
          src="/images/hero.jpeg"
          height={screenWidth > 640 ? '400px' : '700'}
          width={1000}
          layout="responsive"
          alt="Brandon Herman recording a Radio show in the WLTL Studio"
          className="object-cover w-full h-full "
        />
        <Link href="/episodes">
          <a className="absolute left-0 right-0 z-10 px-8 py-4 m-auto text-white transition-all bg-blue-700 rounded-lg bottom-6 w-max hover:scale-95">
            Listen Now
          </a>
        </Link>
      </figure>
    </div>
  )
}
