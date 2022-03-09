import client from '../../client'

import {useNextSanityImage} from 'next-sanity-image'
import {PortableText} from '@portabletext/react'

import Image from 'next/image'

export default function Post({post}) {
  return (
    <main className="max-w-4xl px-5 m-auto mt-10">
      <h1 className="text-5xl font-bold text-center">{post.title}</h1>
      {/* Post Image */}
      <figure className="mt-8 max-h-[500px] w-full overflow-hidden">
        <Image
          {...useNextSanityImage(client, post.mainImage)}
          layout="responsive"
          width={500}
          height={500}
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

  console.log(slug)
  const post = await client.fetch(query, {slug})

  return {props: {post}}
}
