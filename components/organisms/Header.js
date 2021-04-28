import Link from 'next/link'
import { useState } from 'react'

import IconLogo from '../atoms/IconLogo'
import IconMenu from '../atoms/IconMenu'
import IconX from '../atoms/IconX'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="py-2 bg-tc-blue border-b-2 border-tc-red text-white">
      <div className="md:container md:mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-max flex justify-between">
            <Link href="/">
              <a className="pl-2 flex items-center">
                <div className="w-12 mr-4">
                  <IconLogo />
                </div>
                <div className="flex flex-col ">
                  <div className="uppercase text-sm font-bold">
                    Tera Campus
                  </div>
                  <div className="text-xs">
                    Ecole Supérieure d&apos;Informatique
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
