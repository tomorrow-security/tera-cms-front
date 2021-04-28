import Link from 'next/link'

import IconLogo from '../atoms/IconLogo'

export default function Footer() {
  const today = new Date()

  return (
    <footer className="py-10 bg-tc-blue text-white">
      <div className="relative md:container mx-2 md:mx-auto md:px-2">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center">
              <div className="w-10 mr-2"><IconLogo /></div>
              <span className="text-xl">Tera Campus</span>
          </div>
          <div className="my-8 lg:my-0 flex flex-col lg:flex-row text-center">
            <Link href="/legal">
              <a className="m-2 hover:underline">Mentions légales</a>
            </Link>
          </div>
          <div className="text-center">© 2020-{today.getFullYear()} Tera Campus</div>
        </div>
      </div>
    </footer>
  )
}
