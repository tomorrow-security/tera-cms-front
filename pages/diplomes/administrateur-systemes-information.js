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

				<div className="md:container md:mx-auto md:py-10 flex justify-center">
          <div className="w-max md:mx-4 p-4 lg:p-8 md:border md:shadow-lg rounded">
            <div className="relative mt-8 mb-8 lg:mb-16 flex items-center">
              <AcademicCapIcon className="absolute left-0 right-0 lg:m-auto w-16 lg:w-20 h-16 lg:h-20 p-2 text-tc-blue-navy border-2 border-tc-blue-navy rounded-full" />
              <div className="ml-20 lg:ml-0 w-full flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center lg:text-xl font-bold">
                <span>Bac +3</span>
                <span>Titre RNCP de niveau 6</span>
              </div>
            </div>
            <h1 className="my-8 text-center text-2xl lg:text-4xl font-bold">Administrateur des Systèmes d{"'"}Information</h1>
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

        <div className="bg-tc-blue-navy">
          <div className="md:container md:mx-auto py-4 md:py-8">
              <p className="text-center text-white text-xl md:text-3xl font-bold">Objectifs de compétences en fin de cursus</p>
          </div>
        </div>

        <div className="pt-4 md:pt-8 lg:py-20">
          <div className="md:container md:mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="px-8 lg:w-1/2 flex flex-col justify-center">
                <span className="text-lg md:text-2xl font-bold">Administrer la mise en œuvre du projet informatique</span>
                <ul className="mt-4 md:mt-8 list-disc text-sm md:text-base">
                  <li>Prévention des problèmes</li>
                  <li>Gestion des erreurs informatiques</li>
                  <li>Pilotage du support utilisateur</li>
                  <li>Définition du processus d{"'"}assistance</li>
                  <li>Mobilisation des compétences informatiques nécessaires</li>
                  <li>Préparation des tests d'acceptation</li>
                  <li>Validation et tests</li>
                  <li>Préparation des documents supports</li>
                  <li>Conduite des changements</li>
                  <li>Formation des équipes</li>
                  <li>Automatisation</li>
                  <li>Fiabilisation du système informatique</li>
                </ul>
              </div>
              <div
                className="lg:w-1/2 h-48 md:h-96 bg-center bg-cover lg:rounded-3xl lg:shadow-lg"
                style={{ backgroundImage: "url('https://source.unsplash.com/random/350x350?animal')" }}
              />
            </div>
          </div>
        </div>

        <div className="pt-4 md:pt-8 lg:py-20 md:bg-tc-lavender">
          <div className="md:container md:mx-auto">
            <div className="flex flex-col lg:flex-row-reverse gap-4">
              <div className="px-8 lg:w-1/2 flex flex-col justify-center">
                <span className="text-lg md:text-2xl font-bold">Maintenir le système informatique en condition opérationnelle optimale</span>
                <ul className="mt-4 md:mt-8 list-disc text-sm md:text-base">
                  <li>Prévention des risques informatiques</li>
                  <li>Gestion de la sécurité de l{"'"}information</li>
                  <li>Veille de la fiabilité du système informatique</li>
                  <li>Gestion de l{"'"}information et de la connaissance</li>
                  <li>Mise en place des ressources informatiques</li>
                </ul>
              </div>
              <div
                className="lg:w-1/2 h-48 md:h-96 bg-center bg-cover lg:rounded-3xl lg:shadow-lg"
                style={{ backgroundImage: "url('https://source.unsplash.com/random/350x350?animal')" }}
              />
            </div>
          </div>
        </div>

        <div className="pt-4 md:pt-8 lg:py-20">
          <div className="md:container md:mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="px-8 lg:w-1/2 flex flex-col justify-center">
                <span className="text-lg md:text-2xl font-bold">Faire évoluer le système informatique</span>
                <ul className="mt-4 md:mt-8 list-disc text-sm md:text-base">
                  <li>Veille technologique</li>
                  <li>Gestion de projet</li>
                  <li>Planification des opérations de maintenance informatiques</li>
                  <li>Pilotage du respect des délais du projet informatique</li>
                </ul>
              </div>
              <div
                className="lg:w-1/2 h-48 md:h-96 bg-center bg-cover lg:rounded-3xl lg:shadow-lg"
                style={{ backgroundImage: "url('https://source.unsplash.com/random/350x350?animal')" }}
              />
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
