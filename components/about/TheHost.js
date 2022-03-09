import Image from 'next/image'
import React from 'react'

export default function TheHost() {
  return (
    <section className="grid grid-cols-1 gap-6 px-4 m-auto md:grid-cols-2 max-w-7xl">
      <div>
        <h3 className="my-4 text-3xl font-bold ">About the Host</h3>
        <Image
          src="/images/brandonHerman.jpeg"
          width={400}
          height={250}
          layout="responsive"
          alt="Brandom Herman posing for a picutre"
          className="object-fit"
        />
      </div>

      <div className="self-end">
        <h3 className="my-4 text-2xl font-bold">Brandon Herman</h3>
        <p>
          I’m baby taiyaki next level gluten-free, polaroid hashtag streetart
          mumblecore farm-to-table quinoatypewriter salvia. Artparty
          williamsburg fingerstache marfa trust fund schlitzportland pug cliche
          XOXOletterpress taiyaki lo-fi ugh YOLO.
        </p>
      </div>
    </section>
  )
}
