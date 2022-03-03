import { AcademicCapIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'

import Button from "../../components/atoms/Button"

const Cardibee = ({ title, items }) => (
  <div className="">
    <div className="text-xl font-bold">{title}</div>
    <ul className="mt-4 px-4 list-disc">
      {
        items.map(item => (
          <li key={`list-${item}`}>{item}</li>
        ))
      }
    </ul>
  </div>
)

const SeparatorWithTitle = ({ title }) => (
  <div className="bg-tc-blue-navy">
    <div className="md:container md:mx-auto py-4 md:py-8">
        <p className="text-center text-white text-xl md:text-3xl font-bold">{title}</p>
    </div>
  </div>
)

const pageTitle = "Cycle préparatoire - Tera Campus"
const pageDescription = "Cycle préparatoire Tera Campus"
const pageUrl = "https://tera-campus.com/diplomes/cycle-preparatoire"

export default function CyclePreparatoire() {
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

        <img src="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/datacenter_p6szin" className="w-full h-48 md:h-96 object-cover object-center" />

				<div className="md:container md:mx-auto md:py-8 flex justify-center">
          <div className="w-max md:mx-4 p-4 lg:p-8 md:border md:shadow-lg rounded">
            <div className="relative mt-8 mb-8 lg:mb-16 flex items-center">
              <AcademicCapIcon className="absolute left-0 right-0 lg:m-auto w-16 lg:w-20 h-16 lg:h-20 p-2 text-tc-blue-navy border-2 border-tc-blue-navy rounded-full" />
              <div className="ml-20 lg:ml-0 w-full flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center lg:text-xl font-bold">
                <span>Post-Bac</span>
                <span>24 mois</span>
              </div>
            </div>
            <h1 className="my-8 text-center text-2xl lg:text-4xl font-bold">Cycle préparatoire</h1>
            <div className="mt-8 mb-4 p-4 flex flex-col bg-tc-lavender rounded text-center">
              <p className="md:text-xl">
                Formation initiale : 4 jours par semaine à l'école
              </p>
            </div>
            <div className="mb-4 flex flex-col md:flex-row items-center justify-center">
              <img src="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/logo-qualiopi_bjqgit" className="w-2/3 md:w-1/3" />
            </div>
            <Link href="/enrolment">
              <a>
                <Button label="Candidater" fullWidth />
              </a>
            </Link>
          </div>
        </div>

        <SeparatorWithTitle title="Objectifs de compétences en fin de cursus" />

        <div className="py-8 md:py-16">
          <div className="md:container md:mx-auto px-4">
            <p className="text-justify">
              Le cycle préparatoire permet de préparer l'étudiant à l'entrée en cycle Bachelor. D'une durée de 24 mois, l'objectif est d'acquérir
              les bases en informatique, de la programmation à la sécurité informatique en passant par les bases de données, les réseaux et les
              compétences soft-skills nécessaires à la poursuite d'étude. 
            </p>

            <div className="mt-8 grid lg:grid-cols-3 gap-8 lg:gap-4">

            <div className="p-2 flex flex-col flex-grow bg-tc-lavender rounded">
                <span className="text-xs">245 heures, 35 crédits ECTS</span>
                <span className="mt-4 text-xl font-bold">Data & Development</span>
              </div>

              <div className="lg:row-start-2 flex flex-col gap-4">
                <ul className="px-4 list-disc">
                  <li>Algorithmique</li>
                  <li>Introduction aux bases de données</li>
                  <li>Développement Web</li>
                  <li>Administration de base de données</li>
                  <li>Développement d'applications</li>
                  <li>Méthodologies de développement</li>
                </ul>
              </div>

              <div className="p-2 flex flex-col flex-grow bg-tc-lavender rounded">
                <span className="text-xs">245 heures, 35 crédits ECTS</span>
                <span className="mt-4 text-xl font-bold">Infrastructure</span>
              </div>

              <div className="lg:row-start-2 flex flex-col gap-4">
                <ul className="px-4 list-disc">
                  <li>Introduction au Cloud</li>
                  <li>Introduction au réseau</li>
                  <li>Introduction à la cybersécurité</li>
                  <li>Système d'exploitation Linux</li>
                  <li>Système d'exploitation Windows</li>
                  <li>Administration Cloud</li>
                  <li>Administration réseau</li>
                  <li>Cybersécurité : Ethical Hacking</li>
                  <li>Administration serveur</li>
                </ul>
              </div>

              <div className="p-2 flex flex-col flex-grow bg-tc-lavender rounded">
                <span className="text-xs">210 heures, 45 crédits ECTS</span>
                <span className="mt-4 text-xl font-bold">Soft-skills</span>
              </div>

              <div className="lg:row-start-2 flex flex-col gap-4">
                <ul className="px-4 list-disc">
                  <li>Savoir-être et intelligence émotionnelle</li>
                  <li>Gestion de projet</li>
                  <li>Anglais</li>
                  <li>Stages en entreprise</li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        <SeparatorWithTitle title="Déroulement" />

        <div className="py-8 md:py-16">
          <div className="md:container md:mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
              <div className="lg:w-1/3">
                <Cardibee
                  title="Prérequis"
                  items={[
                    "Soit, avoir validé un BAC ou une formation équivalente à l'étranger",
                    "Soit, avoir une expérience professionnelle à l'appui en informatique (après étude du dossier par la Direction Pédagogique)",
                  ]}
                />
              </div>
              <div className="lg:w-1/3">
                <Cardibee
                  title="Méthodes pédagogiques"
                  items={[
                    "Cours théoriques et exercices d'application en face à face pédagogique en télé-présentiel, dispensés par des consultants qui exercent en entreprise",
                    "Projets collaboratifs supervisés par l'équipe pédagogique",
                    "Périodes d'immersion technologique (bivouacs, projets, hackathons, ...)",
                    "Stages en entreprises",
                  ]}
                />
              </div>
              <div className="lg:w-1/3">
                <Cardibee
                  title="Modalités d'évaluation"
                  items={[
                    "Travaux de groupe ou individuels",
                    "Projets techniques",
                    "Projets inter-matières",
                    "Hackathons",
                  ]}
                />
              </div>
            </div>
            <div className="mt-8 md:mt-10 lg:mt-16 flex-grow flex items-end justify-center">
              <div className="flex flex-col items-center">
                <Link href="/enrolment">
                  <a>
                    <Button label="Candidater" />
                  </a>
                </Link>
                <span className="mt-2 text-sm italic text-gray-500">Délai d'accès : environ 7 jours.</span>
              </div>
            </div>
          </div>
        </div>

        <SeparatorWithTitle title="Débouchés" />

        <div className="py-8 md:py-16">
          <div className="md:container md:mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-lg md:text-2xl font-bold">Bachelor en informatique (BAC+3) en 12 mois</span>
                <div className="mt-4 md:mt-8 text-justify">
                  <p>
                    Après le cycle préparatoire, il est possible de rejoindre la formation Bachelor en informatique, et de valider le titre
                    RNCP de niveau 6 (BAC+3) en 12 mois en alternance.
                  </p>
                  <p>
                    Ce titre professionnel s'intitule "Administrateur des systèmes d'informations" et permet d'accéder à des postes techniques
                    dans le domaine informatique. De plus, cette formation se déroule en alternance, permettant de combiner une expérience
                    significative en entreprise avec une prise en charge financière intégrale de la formation.
                  </p>
                </div>
                <div className="mt-4">
                  <Link href="/diplomes/administrateur-systemes-information">
                    <a>
                      <Button label="En savoir plus ..." />
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className="lg:w-1/2 h-48 md:h-96 bg-center bg-cover rounded-lg shadow-lg"
                style={{ backgroundImage: "url('https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/web-developer_kfzlct')" }}
              />
            </div>
          </div>
        </div>

        <div className="py-4 md:py-8 lg:py-20 bg-tc-lavender">
          <div className="md:container md:mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse gap-4">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-lg md:text-2xl font-bold">Expert en informatique (BAC+5) en 24 mois</span>
                <div className="mt-4 md:mt-8 text-justify">
                  <p>
                    Après avoir validé un titre RNCP de niveau 6 (BAC+3), "Administrateur des Systèmes d'Informations", le cursus Tera Campus permet
                    d'atteindre une expertise en informatique sur les domaines d'actualités tels que le Big Data, l'Intelligence Artificielle, ou encore la Blockchain.
                  </p>
                  <p>
                    Le titre RNCP de niveau 7 (BAC+5) "Expert en Informatique" se découpe sur deux années et permet de se spécialiser et d'acquérir des compétences en
                    management. La gestion d'équipe et de projet font partie intégrante des missions quotidiennes des diplômés.
                  </p>
                </div>
                <div className="mt-4">
                  <Link href="/diplomes/expert-systemes-information">
                    <a>
                      <Button label="En savoir plus ..." />
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className="lg:w-1/2 h-48 md:h-96 bg-center bg-cover rounded-lg shadow-lg"
                style={{ backgroundImage: "url('https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/sysadmin_mncego')" }}
              />
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
