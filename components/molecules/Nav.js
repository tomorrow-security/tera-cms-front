import Link from 'next/link'
import React, { useState } from 'react'

import IconX from '../atoms/IconX'
import IconMenu from '../atoms/IconMenu'

const links1 = [
    { id: 'agenda', label: 'Agenda' },
]

const links2 = [
    { id: 'faq', label: 'FAQs' },
]

const pages = [
    { id: 'career', label: 'Carrières' },
    { id: 'guides', label: 'Nos guides' },
    { id: 'program', label: 'Programme' },
    { id: 'join', label: 'Rejoins-nous' },
    { id: 'contact', label: 'Contact' },
]

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className="w-12 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                { isOpen ? <IconX /> : <IconMenu /> }
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
            <ul className="lg:flex">
                {
                    links2.map(({ id, label }) => (
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
        </nav>
        </div>
    )
}
