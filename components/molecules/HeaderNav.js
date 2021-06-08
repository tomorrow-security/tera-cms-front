import Link from 'next/link'
import { useState } from 'react'

import PageLink from '../atoms/PageLink'

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
// TODO ajouter du style au liens visité, 'visited'ne fonctionne pas : visited:text-tc-red => toujours red
// TODO ajouter du style au liens actif, remplacer focus (ne correcpond pas) par "current" 

export default function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={`${!isOpen && 'hidden'} lg:flex lg:justify-between text-center pr-2`}>
            <ul className="space-y-2 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
                {
                    links1.map(({ id, label }) => (
                        <li key={`navmd-${id}`} onClick={() => setIsOpen(false)}>
                            <Link href={`/#${id}`}>
                                <a className="relative flex items-center justify-center overflow-hidden group border-box focus:font-bold">
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
                            <PageLink id={id} label={label} />
                        </li>
                    ))
                }
            </ul>
            <ul className="space-y-2 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
                {
                    links2.map(({ id, label }) => (
                        <li key={`navmd-${id}`} onClick={() => setIsOpen(false)}>
                            <Link href={`/#${id}`}>
                                <a className="relative flex items-center justify-center overflow-hidden group border-box focus:font-bold">
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
    )
}