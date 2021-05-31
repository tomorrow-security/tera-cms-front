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
// TODO améliorer le style du hover sur les lien
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
                    <ul className="lg:flex">
                        {
                            links1.map(({ id, label }) => (
                                <li key={`navmd-${id}`} onClick={() => setIsOpen(false)}>
                                    <Link href={`/#${id}`}>
                                        <a>
                                            <div className="my-2 text-lg border-b-2 border-transparent cursor-pointer lg:my-0 lg:px-4 hover:border-white">
                                                {label}
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="lg:flex">
                        {
                            pages.map(({ id, label }) => (
                                <li key={`navmd-${id}`} onClick={() => setIsOpen(false)}>
                                    <Link href={`/${id}`}>
                                        <a className="my-2 text-lg border-b-2 border-transparent cursor-pointer lg:my-0 lg:px-4 hover:border-white"
                                        >
                                            {label}
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="space-y-2 lg:flex">
                        {
                            links2.map(({ id, label }) => (
                                <li key={`navmd-${id}`} onClick={() => setIsOpen(false)}>
                                    <Link href={`/#${id}`}>
                                        <a className="relative flex items-center justify-center group border-box">
                                            <div className="absolute text-lg text-transparent border-b-2 border-transparent border-white cursor-pointer -left-full group-hover:translate-x-full">
                                                {label}
                                            </div>
                                            <div className="my-2 text-lg border-b-2 border-transparent cursor-pointer lg:my-0 lg:px-4">
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
