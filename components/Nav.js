import React, {useState, useEffect} from 'react'
import {Squeeze as Hamburger} from 'hamburger-react'

import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)
  const [isOpen, setOpen] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    setOpen(!isOpen)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    changeWidth()

    window.addEventListener('resize', changeWidth)

    // Close mobile menu on resize (browser increases width)
    if (screenWidth > 1024) {
      setToggleMenu(false)
      setOpen(false)
    }

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [screenWidth])

  return (
    <nav className="py-6 border-b-2 border-gray-200">
      <div className="flex items-center justify-between m-auto max-w-7xl lg:flex-row flex-col px-5">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <a className="flex items-center gap-6 group">
              <Image
                src="/../public/images/logo.jpg"
                width={75}
                height={75}
                layou="responsive"
                alt="THe Herman Radio Network Logo"
              />
              <div className="flex items-center justify-between w-full">
                <span className="text-xl md:text-2xl font-bold group-hover:text-blue-700 transition-all">
                  The Herman Radio Network
                </span>
              </div>
            </a>
          </Link>
          {screenWidth < 1024 && (
            <button onClick={toggleNav}>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          )}
        </div>
        {/* Page links */}
        {(toggleMenu || screenWidth > 1024) && (
          <div className="flex items-center lg:gap-6 flex-col lg:flex-row mt-4 lg:mt-0 w-full lg:w-auto">
            <Link href="/episodes">
              <a className="text-lg hover:bg-blue-700 hover:text-white transition-all px-4 py-4 border-b-2 border-gray-200 w-full text-center lg:border-0">
                Episodes
              </a>
            </Link>
            <Link href="/stations">
              <a className="text-lg hover:bg-blue-700 hover:text-white transition-all px-4 py-4 border-b-2 border-gray-200 w-full text-center lg:border-0">
                Stations
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-lg hover:bg-blue-700 hover:text-white transition-all px-4 py-4 border-b-2 border-gray-200 w-full text-center lg:border-0">
                Blog
              </a>
            </Link>
            <Link href="/about">
              <a className="text-lg hover:bg-blue-700 hover:text-white transition-all px-4 py-4 border-b-2 border-gray-200 w-full text-center lg:border-0">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-lg hover:bg-blue-700 hover:text-white transition-all px-4 py-4 border-b-2 border-gray-200 w-full text-center lg:border-0">
                Contact
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
