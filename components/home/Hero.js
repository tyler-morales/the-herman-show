import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useResize from '../../hooks/useResize'

export default function Hero() {
  const screenWidth = useResize()
  console.log(screenWidth)
  return (
    <div className="mt-6 md:mt-10">
      <h1 className="text-center">
        <span className="text-3xl block">The</span>
        <span className="text-5xl md:text-7xl block font-bold">
          Herman Show
        </span>
      </h1>
      <p className="text-center text-lg mt-4">A Talk & Music Radio Show</p>
      <figure className="mt-6 m-auto max-w-7xl relative">
        <Image
          src="/../public/images/hero.jpeg"
          height={screenWidth > 640 ? '400px' : '700'}
          width={1000}
          layout="responsive"
          alt="Brandon Herman recording a Radio show in the WLTL Studio"
          className=" object-cover w-full h-full"
        />
        <Link href="/episodes">
          <a className="absolute bottom-6 z-10 text-white bg-blue-700 rounded-lg py-4 px-8 m-auto left-0 right-0 w-max hover:bg-blue-800 transition-all">
            Listen Now
          </a>
        </Link>
      </figure>
    </div>
  )
}
