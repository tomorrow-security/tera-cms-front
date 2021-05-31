import Link from 'next/link'
import { useState } from 'react'

import IconLogo from '../atoms/IconLogo'
import IconX from '../atoms/IconX'
import IconMenu from '../atoms/IconMenu'

const links1 = [
    { id: 'agenda', label: 'Agenda' },
]

const links2 = [
    { id: 'faq', label: 'Questions' },
]

const pages = [
    { id: 'career', label: 'Carrières' },
    { id: 'guides', label: 'Nos guides' },
    { id: 'program', label: 'Programme' },
    { id: 'join', label: 'Rejoins-nous' },
    { id: 'contact', label: 'Contact' },
]

// TODO ajouter du style au liens visité
// TODO ajouter du style au liens actif
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
                <nav className={`${!isOpen && 'hidden'} lg:flex lg:justify-between text-center pr-2`}>
                    <ul className="space-y-2 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
                            {
                            links1.map(({ id, label }) => (
                                <li key={`navmd-${id}`} onClick={() => setIsOpen(false)}>
                                    <Link href={`/#${id}`}>
                                        {/* // TODO 'visited' et 'active' ne fonctionne pas */}
                                        <a className="relative flex items-center justify-center overflow-hidden group border-box visited:text-tc-red-light active:border-tc-red-light">
                                            <div className="absolute z-10 text-lg text-transparent transition-all duration-300 ease-in transform border-b-2 border-transparent border-white cursor-pointer -left-full group-hover:translate-x-full">
                                                {label}
                                            </div>
                                            <div className="z-20 text-lg bg-transparent border-b-2 border-transparent cursor-pointer">
                                                {label}
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="space-y-2 lg:mx-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
                        {
                            pages.map(({ id, label }) => (
                                <li key={`navmd-${id}`} onClick={() => setIsOpen(false)}>
                                    <Link href={`/${id}`}>
                                        <a className="relative flex items-center justify-center overflow-hidden group border-box">
                                            <div className="absolute z-10 text-lg text-transparent transition-all duration-300 ease-in transform border-b-2 border-transparent border-white cursor-pointer -left-full group-hover:translate-x-full">
                                                {label}
                                            </div>
                                            <div className="z-20 text-lg bg-transparent border-b-2 border-transparent cursor-pointer">
                                                {label}
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="space-y-2 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
                        {
                            links2.map(({ id, label }) => (
                                <li key={`navmd-${id}`} onClick={() => setIsOpen(false)}>
                                    <Link href={`/#${id}`}>
                                        <a className="relative flex items-center justify-center overflow-hidden group border-box">
                                            <div className="absolute z-10 text-lg text-transparent transition-all duration-300 ease-in transform border-b-2 border-transparent border-white cursor-pointer -left-full group-hover:translate-x-full">
                                                {label}
                                            </div>
                                            <div className="z-20 text-lg bg-transparent border-b-2 border-transparent cursor-pointer">
                                                {label}
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}
