import Link from 'next/link'
import { useState } from 'react'

import IconLogo from '../atoms/IconLogo'
import Nav from '../molecules/Nav'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="py-2 text-white border-b-2 bg-tc-blue border-tc-red">
      <div className="md:container md:mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex items-center justify-between w-full lg:w-full">
            <Link href="/">
              <a className="flex items-center pl-2">
                <div className="w-12 mr-4">
                  <IconLogo />
                </div>
                <div className="flex flex-col ">
                  <div className="text-sm font-bold uppercase">
                    Tera Campus
                  </div>
                  <div className="text-xs">
                    Ecole Supérieure d&apos;Informatique
                  </div>
                </div>
              </a>
            </Link>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )
}
