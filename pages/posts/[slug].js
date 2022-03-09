import client from '../../client'

import {useNextSanityImage} from 'next-sanity-image'
import {PortableText} from '@portabletext/react'

import Image from 'next/image'

export default function Post({post}) {
  return (
    <main className="max-w-4xl px-5 m-auto mt-10">
      <h1 className="text-5xl font-bold text-center">{post.title}</h1>
      {/* Post Image */}
      <figure className="w-full mt-8">
        <Image
          {...useNextSanityImage(client, post.mainImage)}
          layout="responsive"
          className="object-cover"
          alt={post.title}
        />
      </figure>

      <div className="flex items-center justify-between mt-8">
        {/* Date */}
        <div>{post.publishedAt.split('T')[0]}</div>
        {/* Author Image */}
        <div className="flex items-center gap-6">
          <figure className="h-[50px] w-[50px]">
            <Image
              {...useNextSanityImage(client, post.author.image)}
              layout="responsive"
              width={50}
              height={50}
              // sizes="(max-width: 50px) 100vw, 50px"
              className="object-cover rounded-full"
              alt={post.author.name}
            />
          </figure>
          <span>{post.author.name}</span>
        </div>
      </div>

      <hr className="mt-10" />

      <section className="block mt-10">
        <PortableText value={post.body} />
      </section>

      <hr className="my-20" />

      {/* CTA */}
      <section className="text-center">
        <h3 className="mb-4 text-3xl font-bold">Liked what you read?</h3>
        <p>Consider joing my newsletter!</p>
      </section>
      <a
        href="https://blogspot.us8.list-manage.com/subscribe?u=edd69c1aa277bd5a1709fd621&id=c2c3c37fbd"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-6 py-4 m-auto mt-6 text-lg text-white transition-all bg-blue-700 rounded-lg w-max hover:scale-95">
        Join the mailing list
      </a>
    </main>
  )
}

export const getStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  )

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({params}) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
   title,
   author-> {
     name,
     image
    },
   mainImage,
   slug,
   publishedAt,
   body
  }`

  const {slug} = params

  const post = await client.fetch(query, {slug})

  return {props: {post}}
}
