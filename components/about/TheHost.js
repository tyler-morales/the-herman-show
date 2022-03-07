import Image from 'next/image'
import React from 'react'

export default function TheHost() {
  return (
    <section className="px-4 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl m-auto">
      <div>
        <h3 className="text-3xl font-bold my-4 ">About the Host</h3>
        <Image
          src="/../public/images/brandonHerman.jpeg"
          width={400}
          height={250}
          layout="responsive"
          alt="Brandom Herman posing for a picutre"
          className="object-fit"
        />
      </div>

      <div className="self-end">
        <h3 className="text-2xl font-bold my-4">Brandon Herman</h3>
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
