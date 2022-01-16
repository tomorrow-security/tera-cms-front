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

const pageTitle = "Expert des Systèmes d'Information - Tera Campus"
const pageDescription = "Diplôme BAC+5 expert des systèmes d'information"
const pageUrl = "https://tera-campus.com/diplomes/expert-systemes-information"

export default function ExpertSystemesInformation() {
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
                <span>Bac +5</span>
                <span>Titre RNCP de niveau 7</span>
              </div>
            </div>
            <h1 className="my-8 text-center text-2xl lg:text-4xl font-bold">Expert des Systèmes d{"'"}Information</h1>
            <div className="mt-8 mb-4 p-4 flex flex-col bg-tc-lavender rounded text-center">
              <p className="md:text-xl">
                Cursus en initial et formation en alternance la 3ème année :
              </p>
              <p className="md:text-xl">
                4 jours par semaine en entreprise, 1 jour à l'école
              </p>
            </div>
            <div className="mb-4 flex justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/fr/e/e0/FC_Certification_RNCP_Bleu.svg" className="w-2/3 md:w-1/2 lg:w-1/3" />
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
              Le cycle expert vous délivre le titre RNCP "Expert des Systèmes d'Information" de niveau 7 (BAC+5). Il est composé
              de trois blocs d'enseignement, permettant d'obtenir des compétences techniques avancées et managériales.
            </p>

            <div className="mt-8 grid lg:grid-cols-3 gap-8 lg:gap-4">

              <div className="p-2 flex flex-col flex-grow bg-tc-lavender rounded">
                <span className="text-xs">245 heures, 35 crédits ECTS</span>
                <span className="mt-4 text-xl font-bold">Data & Development</span>
              </div>

              <div className="lg:row-start-2 flex flex-col gap-4">
                <ul className="px-4 list-disc">
                  <li>DevOps</li>
                  <li>Base de données : scaling</li>
                  <li>Développement et organisation</li>
                  <li>Data science : Big Data & Machine learning</li>
                </ul>
              </div>

              <div className="p-2 flex flex-col flex-grow bg-tc-lavender rounded">
                <span className="text-xs">245 heures, 35 crédits ECTS</span>
                <span className="mt-4 text-xl font-bold">Infrastructure</span>
              </div>

              <div className="lg:row-start-2 flex flex-col gap-4">
                <ul className="px-4 list-disc">
                  <li>Gestion d'un Cloud</li>
                  <li>Expertise réseau</li>
                  <li>Sécurité de l'information</li>
                  <li>Architecture et choix technologiques</li>
                  <li>Sécurité et conformité (RGPD, ISO)</li>
                  <li>Évolution d'un système d'exploitation</li>
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
                  <li>Mémoire et soutenance d'alternance</li>
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
                    "Soit, avoir validé un équivalent BAC+3 en informatique en France ou à l'international",
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
                    "Périodes professionnelles en entreprises",
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
                    "Projets professionnels"
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

        <SeparatorWithTitle title="Carrières" />

        <div className="py-4 md:py-8 lg:py-20">
          <div className="md:container md:mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-lg md:text-2xl font-bold">Product Owner</span>
                <div className="mt-4 md:mt-8 text-justify">
                  <p>
                    Le Product Owner est le responsable de la définition et de la conception d'un produit. Il joue un rôle essentiel depuis la
                    définition jusqu'au lancement du produit tout en passant par son amélioration. Le Product Owner se base sur plusieurs méthodologies
                    qui permettent une gestion de projet évolutive et adaptative ainsi que la possibilité de faire face aux imprévus. Afin de concevoir
                    le produit, il doit en outre posséder une compréhension technique. Il s'agit d'un véritable Chef d'orchestre qui coordonne la partie
                    technique avec les équipes et les échanges clients.
                  </p>
                  <p className="mt-4">
                    Rémunération moyenne : À partir de 40k€ pour un débutant et 65k€ pour un profil senior
                  </p>
                </div>
              </div>
              <div
                className="lg:w-1/2 h-48 md:h-96 bg-center bg-cover rounded-lg shadow-lg"
                style={{ backgroundImage: "url('https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/product-owner_mahx3t')" }}
              />
            </div>
          </div>
        </div>

        <div className="py-4 md:py-8 lg:py-20 bg-tc-lavender">
          <div className="md:container md:mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse gap-4">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-lg md:text-2xl font-bold">Consultant en cybersécurité</span>
                <div className="mt-4 md:mt-8 text-justify">
                  <p>
                    Le Consultant en cybersécurité va étudier les risques encourus par une entreprise pour proposer des solutions pertinentes, grâce à
                    ses compétences en gestion des données confidentielles. Ces solutions peuvent être techniques ou organisationnelles, et vont aider
                    la société à se protéger contre les attaques malveillantes des hackers. En apprentissage permanent, le consultant devra maîtriser
                    plusieurs technologies pour déjouer les attaques qui sont de plus en plus performantes afin de protéger des données sensibles
                    (bancaires, personnelles, médicales).
                  </p>
                  <p className="mt-4">
                    Rémunération moyenne : À partir de 36k€ pour un débutant et 65k€ pour un profil senior
                  </p>
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
