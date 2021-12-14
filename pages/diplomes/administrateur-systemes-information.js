import { AcademicCapIcon } from '@heroicons/react/outline'
import Head from 'next/head'

const pageTitle = "Administrateur des Systèmes d'Information - Tera Campus"
const pageDescription = "Diplôme BAC+3 administrateur des systèmes d'information"
const pageUrl = "https://tera-campus.com/diplomes/administrateur-systemes-information"

export default function AdministrateurSystemesInformation() {
  return (
    <>
      <Head>
				<title>{pageTitle}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={pageDescription} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:description" content={pageDescription} />
			</Head>

      <main>

        <img src="https://source.unsplash.com/random" className="w-full h-96 object-cover object-center" />

      </main>
    </>
  )
}
