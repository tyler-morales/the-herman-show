import client from '../../client'

import {useNextSanityImage} from 'next-sanity-image'
import {PortableText} from '@portabletext/react'

import Image from 'next/image'

export default function Post({post}) {
  console.log(post)
  return (
    <main className="max-w-4xl px-5 m-auto mt-10">
      <h1 className="text-5xl font-bold text-center">{post.title}</h1>
      {/* Post Image */}
      <figure className="mt-8 max-h-[500px] overflow-hidden">
        <Image
          {...useNextSanityImage(client, post.mainImage)}
          layout="responsive"
          width={300}
          height={300}
          sizes="(max-height: 400px) 100%, 400px"
          className="object-cover"
          alt={post.title}
        />
      </figure>

      {/* Author Image */}
      <div className="flex items-center gap-6 mt-8">
        <figure className="h-[50px] w-[50px]">
          <Image
            {...useNextSanityImage(client, post.author.image)}
            layout="responsive"
            width={50}
            height={50}
            sizes="(max-width: 50px) 100vw, 50px"
            className="object-cover rounded-full"
            alt={post.author.name}
          />
        </figure>
        <span>{post.author.name}</span>
      </div>

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

  // console.log(paths)

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
   body
  }`

  const {slug} = params

  console.log(slug)
  const post = await client.fetch(query, {slug})

  return {props: {post}}
}

// const query = `*[_type == "post"]{
//   _id,
//   slug{
//     current
//   }
// }`

// const posts = await client.fetch(query)
// const paths = posts.map((post) => {
//   {
//     slug: post.slug.current
//   }
// })

// return {
//   paths,
//   fallback: true,
// }
