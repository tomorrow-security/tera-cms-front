import { useState } from 'react'

import PageLink from '../atoms/PageLink'
import HashLink from '../atoms/HashLink'

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


// TODO view mobile ne s'ouvre pas

export default function HeaderNav(click, open) {
    return (
        // <nav className={`${!isOpen && 'hidden'} lg:flex lg:justify-between text-center pr-2`}>
            <nav className={`${!open && 'hidden'} lg:flex lg:justify-between text-center pr-2`}>
            <ul className="space-y-2 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
                {
                    links1.map(({ id, label }) => (
                        // <li key={`navmd-${id}`} onClick={() => setIsOpen(false)}>
                        <li key={`navmd-${id}`} onClick={click}>
                            <HashLink id={id} label={label} />
                        </li>
                    ))
                }
            </ul>
            <ul className="space-y-2 lg:mx-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
                {
                    pages.map(({ id, label }) => (
                        <li key={`navmd-${id}`} onClick={click}>
                            <PageLink id={id} label={label} />
                        </li>
                    ))
                }
            </ul>
            <ul className="space-y-2 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
                {
                    links2.map(({ id, label }) => (
                        <li key={`navmd-${id}`} onClick={click}>
                            <HashLink id={id} label={label} />
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}