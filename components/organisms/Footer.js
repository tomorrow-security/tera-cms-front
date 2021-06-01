import Link from 'next/link'

import IconLogo from '../atoms/IconLogo'

// TODO ajouter du style au liens visité
// TODO ajouter du style au liens actif
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
          <div className="flex flex-col my-8 text-center lg:my-0 lg:flex-row">
          <Link href="/contact">
              <a className="relative flex items-center justify-center m-2 overflow-hidden group border-box ">
                  <div className="absolute z-10 text-base text-transparent transition-all duration-300 ease-in transform border-b-2 border-transparent border-white cursor-pointer -left-full group-hover:translate-x-full">
                      Contact
                  </div>
                  <div className="z-20 text-base bg-transparent border-b-2 border-transparent cursor-pointer">
                      Contact
                  </div>
              </a>
            </Link>
            <span className="hidden m-2 lg:block">-</span>
            <Link href="/legal">
              <a className="relative flex items-center justify-center m-2 overflow-hidden group border-box ">
                  <div className="absolute z-10 text-base text-transparent transition-all duration-300 ease-in transform border-b-2 border-transparent border-white cursor-pointer -left-full group-hover:translate-x-full">
                      Mentions légales
                  </div>
                  <div className="z-20 text-base bg-transparent border-b-2 border-transparent cursor-pointer">
                      Mentions légales
                  </div>
              </a>
            </Link>
            <span className="hidden m-2 lg:block">-</span>
            <Link href="/privacy">
              <a className="relative flex items-center justify-center m-2 overflow-hidden group border-box ">
                  <div className="absolute z-10 text-base text-transparent transition-all duration-300 ease-in transform border-b-2 border-transparent border-white cursor-pointer -left-full group-hover:translate-x-full">
                      Politique de confidentialité
                  </div>
                  <div className="z-20 text-base bg-transparent border-b-2 border-transparent cursor-pointer">
                      Politique de confidentialité
                  </div>
              </a>
            </Link>
          </div>
          <div className="text-center">© 2020-{today.getFullYear()} Tera Campus</div>
        </div>
      </div>
    </footer>
  )
}
