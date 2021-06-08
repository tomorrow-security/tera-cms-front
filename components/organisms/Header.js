import Link from 'next/link'
import { useState } from 'react'

import HeaderNav from '../molecules/HeaderNav'
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

// TODO ajouter du style au liens visité, 'visited'ne fonctionne pas : visited:text-tc-red => toujours red
// TODO ajouter du style au liens actif, remplacer focus (ne correcpond pas) par "current" 
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
                    <HeaderNav />
            </div>
        </div>
    </header>
  )
}
