import Img from 'next/image'
import Link from 'next/link'
import {useNextSanityImage} from 'next-sanity-image'

import client from '../client'

export default function blog({posts}) {
  console.log(posts[0])
  return (
    <main className="px-5 m-auto mt-10 max-w-7xl">
      <h1 className="text-5xl font-bold">Blog</h1>
      <section className="mt-10">
        {/* Posts */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => {
            return (
              <li
                key={post._id}
                className="transition-all border-2 border-gray-300 rounded-md shadow-sm cursor-pointer hover:-translate-y-1 hover:shadow-lg">
                <Link href={`posts/${post.slug.current}`}>
                  <a>
                    {/* Post Image */}
                    <Img
                      {...useNextSanityImage(client, posts[index].mainImage)}
                      layout="responsive"
                      width={300}
                      height={300}
                      sizes="(max-width: 400px) 100%, 400px"
                      className="object-cover"
                    />

                    {/* Post info */}
                    <div className="p-4">
                      <h2 className="text-2xl font-bold ">{post.title}</h2>
                      {/* Author Image */}
                      <div className="flex items-center gap-6 mt-4">
                        <figure className="h-[50px] w-[50px]">
                          <Img
                            {...useNextSanityImage(
                              client,
                              posts[index].author.image
                            )}
                            layout="responsive"
                            width={50}
                            height={50}
                            sizes="(max-width: 50px) 100vw, 50px"
                            className="object-cover rounded-full"
                          />
                        </figure>
                        <span>{post.author.name}</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const query = `*[_type == "post"] {
   _id,
   title,
   author-> {
     name,
     image
    },
   mainImage,
   slug,
 }`

  const posts = await client.fetch(query)

  return {
    props: {posts},
  }
}
