import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import {ImSoundcloud2} from 'react-icons/im'

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse items-start justify-between gap-8 px-6 pb-20 m-auto mt-20 border-t-2 border-gray-200 md:flex-row max-w-7xl">
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
        <span className="block mt-4 text-xs">
          The Herman Radio Network © {new Date().getFullYear()}
        </span>
      </div>

      <ul className="flex gap-6 mt-6">
        <li className="font-bold">
          <Link href="episodes">
            <a>Episodes</a>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="stations">
            <a>Stations</a>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="about">
            <a>About</a>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
