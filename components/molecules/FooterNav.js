import Link from 'next/link'


const pages = [
    { id: 'contact', label: 'Contact' },
    { id: 'legal', label: 'Mentions légales' },
    { id: 'privacy', label: 'Politique de confidentialité' },
]

// TODO ajouter du style au liens visité, 'visited'ne fonctionne pas : visited:text-tc-red => toujours red
// TODO ajouter du style au liens actif, remplacer focus (ne correcpond pas) par "current" 

export default function FooterNav() {
    return (
        <nav className="flex flex-col my-8 text-center divide-x lg:my-0 lg:flex-row">
            <ul className="space-y-2 lg:mx-2 lg:space-y-0 lg:flex lg:justify-around lg:divide-x">
                {
                pages.map(({ id, label }) => (
                    <li key={`navmd-${id}`} className="text-center">
                        <Link href={`/${id}`}>
                            <a className="relative flex items-center justify-center p-2 mx-4 my-2 overflow-hidden lg:p-0 group border-box focus:font-bold">
                                <div className="absolute z-10 text-base text-transparent transition-all duration-300 ease-in transform border-b-2 border-transparent border-white cursor-pointer -left-full lg:group-hover:translate-x-full">
                                    {label}
                                </div>
                            <div className="z-20 text-base bg-transparent border-b-2 border-transparent cursor-pointer">
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