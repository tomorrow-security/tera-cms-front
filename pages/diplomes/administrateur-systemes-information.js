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

				<div className="md:container md:mx-auto py-10 flex justify-center">
          <div className="w-max md:mx-4 p-4 lg:p-8 md:border md:shadow-lg rounded">
            <div className="relative mt-8 mb-8 lg:mb-16 flex items-center">
              <AcademicCapIcon className="absolute left-0 right-0 lg:m-auto w-16 lg:w-20 h-16 lg:h-20 p-2 text-tc-blue-navy border-2 border-tc-blue-navy rounded-full" />
              <div className="ml-20 lg:ml-0 w-full flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center lg:text-xl font-bold">
                <span>Bac +3</span>
                <span>Titre RNCP de niveau 6</span>
              </div>
            </div>
            <h1 className="my-8 text-center text-3xl lg:text-5xl font-bold">Administrateur des Systèmes d{"'"}Information</h1>
            <div className="mt-8 mb-4 p-4 flex flex-col bg-tc-lavender rounded text-center">
              <p className="md:text-xl">
                Cursus en initial et formation en alternance la 3ème année :
              </p>
              <p className="md:text-xl">
                4 jours par semaine en entreprise, 1 jour à l'école
              </p>
            </div>
            <div className="flex justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/fr/e/e0/FC_Certification_RNCP_Bleu.svg" className="w-2/3 md:w-1/2 lg:w-1/3" />
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
