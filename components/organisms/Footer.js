import Link from 'next/link'

import IconLogo from '../atoms/IconLogo'
const pages = [
    { id: 'contact', label: 'Contact' },
    { id: 'legal', label: 'Mentions légales' },
    { id: 'privacy', label: 'Politique de confidentialité' },
]

// TODO ajouter du style au liens visité
export default function Footer() {
  const today = new Date()

  return (
    <footer className="py-10 text-white bg-tc-blue">
      <div className="relative mx-2 md:container md:mx-auto md:px-2">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex items-center">
              <div className="w-10 mr-2"><IconLogo /></div>
              <span className="text-xl">Tera Campus</span>
          </div>
          <div className="flex flex-col my-8 text-center divide-x lg:my-0 lg:flex-row">
            <ul className="space-y-2 lg:mx-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center lg:divide-x">
              {
                pages.map(({ id, label }) => (
                  <li key={`navmd-${id}`}>
                    <Link href={`/${id}`}>
                      <a className="relative flex items-center justify-center m-2 overflow-hidden group border-box focus:border-t-2 focus:border-tc-red">
                        <div className="absolute z-10 text-base text-transparent transition-all duration-300 ease-in transform border-b-2 border-transparent border-white cursor-pointer -left-full group-hover:translate-x-full">
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
          </div>
          <div className="text-center">© 2020-{today.getFullYear()} Tera Campus</div>
        </div>
      </div>
    </footer>
  )
}
