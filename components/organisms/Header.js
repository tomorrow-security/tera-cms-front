import Link from 'next/link'
import { useState } from 'react'

import HeaderNav from '../molecules/HeaderNav'
import IconLogo from '../atoms/IconLogo'
import IconX from '../atoms/IconX'
import IconMenu from '../atoms/IconMenu'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="py-2 text-white border-b-2 bg-tc-blue border-tc-red">
            <div className="md:container md:mx-auto">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="flex items-center justify-between w-full lg:w-max">
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
                    <div className="w-12 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        { isOpen ? <IconX /> : <IconMenu /> }
                    </div>
                        </div>
                    <div className={`${!isOpen && 'hidden'} lg:block`}>
                        <HeaderNav click={() => setIsOpen(false)} />
                    </div>
                </div>
            </div>
        </header>
    )
}
