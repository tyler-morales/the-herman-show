import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import {ImSoundcloud2} from 'react-icons/im'

export default function Footer() {
  return (
    <footer className="flex-col-reverse md:flex-row px-6 border-t-2 border-gray-200 mt-20 max-w-7xl m-auto flex items-start justify-between pb-20 gap-8">
      <div>
        <figure className="max-w-[400px] h-auto">
          <Image
            src="/../public/images/cover.png"
            layout="responsive"
            height={100}
            width={200}
            alt="The Herman Show Logo"
            className="object-contain"
          />
        </figure>

        <p className="max-w-[400px] text-sm">
          The Herman Show is produced in collaboration with WLTL and delivered
          to stations across the U.S & Canada
        </p>

        <div className="flex gap-2 mt-6">
          <a
            href="https://twitter.com/thehermanshow"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitterSquare size="2.25em" />
          </a>
          <a
            href="https://www.facebook.com/thehermanshow"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookSquare size="2.25em" />
          </a>
          <a
            href="https://soundcloud.com/the-herman-show"
            target="_blank"
            rel="noopener noreferrer">
            <ImSoundcloud2 size="2.25em" />
          </a>
        </div>
        <span className="text-xs block mt-4">
          The Herman Radio Network © {new Date().getFullYear()}
        </span>
      </div>

      <ul className="flex gap-6 mt-6">
        <li className="font-bold">
          <Link href="about">
            <a>About</a>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="listen">
            <a>Listen</a>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="episodes">
            <a>Episodes</a>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
