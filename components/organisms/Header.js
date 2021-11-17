import Link from "next/link"
import { useState } from "react"

import HeaderNav from "../molecules/HeaderNav"
import IconLogoBig from "../atoms/IconLogoBig"
import IconX from "../atoms/IconX"
import IconMenu from "../atoms/IconMenu"
import Cta from "../atoms/Cta"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="py-2 text-white border-b-2 bg-tc-blue border-tc-red">
      <div className="mx-4 md:container md:mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="flex items-center justify-between w-full lg:w-max">
            <Link href="/">
              <a className="flex items-center pl-2">
                <div className="mr-4 w-14">
                  <IconLogoBig />
                </div>
              </a>
            </Link>
            <div className="w-12 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IconX /> : <IconMenu />}
            </div>
          </div>
          <div className="flex flex-col ml-1 lg:items-center lg:flex-grow lg:justify-between lg:flex-row lg:ml-0">
            <div className={`${!isOpen && "hidden"} lg:block`}>
              <HeaderNav click={() => setIsOpen(false)} />
            </div>
            <div
              className={`${
                !isOpen && "hidden"
              } lg:block bg-tc-blue text-white flex flex-col lg:flex-row uppercase space-y-2 lg:space-y-0 lg:mr-1 xl:mr-6 lg:space-x-1 xl:space-x-8 2xl:mr-8`}
            >
              <Cta white id="/admission" title="Admission" color="white" />
              <Cta white id="/catalog" title="Brochure" />
              <Cta white id="/contact" title="Contact" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
