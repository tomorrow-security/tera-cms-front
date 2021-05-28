import Link from 'next/link'

import IconLogo from '../atoms/IconLogo'

// TODO ajouter du style au liens visité
// TODO améliorer le style du hover sur les lien
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
              <a className="m-2 hover:underline">Contact</a>
            </Link>
            <span className="hidden m-2 lg:block">-</span>
            <Link href="/legal">
              <a className="m-2 hover:underline">Mentions légales</a>
            </Link>
            <span className="hidden m-2 lg:block">-</span>
            <Link href="/privacy">
              <a className="m-2 hover:underline">Politique de confidentialité</a>
            </Link>
          </div>
          <div className="text-center">© 2020-{today.getFullYear()} Tera Campus</div>
        </div>
      </div>
    </footer>
  )
}
