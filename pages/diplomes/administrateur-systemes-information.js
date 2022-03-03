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

        <img src="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/datacenter_p6szin" className="w-full h-48 md:h-96 object-cover object-center" />

				<div className="md:container md:mx-auto md:py-8 flex justify-center">
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
            <div className="mb-4 flex flex-col md:flex-row items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/fr/e/e0/FC_Certification_RNCP_Bleu.svg" className="w-2/3 md:w-1/3" />
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
              Le titre Administrateur des Systèmes d'Information se compose de trois blocs d'activités types,
              appelés "blocs de compétences". Ces blocs détaillent les compétences nécessaires à la validation du titre.
              La validation peut s'acquérir par bloc de compétences.
            </p>

            <div className="mt-8 grid lg:grid-cols-3 gap-8 lg:gap-4">

              <div className="p-2 flex flex-col flex-grow bg-tc-lavender rounded">
                <span className="text-xs">133 heures, 20 crédits ECTS</span>
                <span className="mt-4 text-xl font-bold">Administrer la mise en œuvre du projet informatique</span>
              </div>

              <div className="lg:row-start-2 flex flex-col gap-4">
                <ul className="px-4 list-disc">
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
                <div className="text-md font-bold">Modules enseignés :</div>
                <ul className="px-4 list-disc">
                  <li>Développement mobile</li>
                  <li>Architecture Cloud</li>
                  <li>Projet professionnel</li>
                </ul>
              </div>

              <div className="p-2 flex flex-col flex-grow bg-tc-lavender rounded">
                <span className="text-xs">252 heures, 20 crédits ECTS</span>
                <span className="mt-4 text-xl font-bold">Maintenir le système informatique en condition opérationnelle optimale</span>
              </div>

              <div className="lg:row-start-2 flex flex-col gap-4">
                <ul className="px-4 list-disc">
                  <li>Prévention des risques informatiques</li>
                  <li>Gestion de la sécurité de l{"'"}information</li>
                  <li>Veille de la fiabilité du système informatique</li>
                  <li>Gestion de l{"'"}information et de la connaissance</li>
                  <li>Mise en place des ressources informatiques</li>
                </ul>
                <div className="text-md font-bold">Modules enseignés :</div>
                <ul className="px-4 list-disc">
                  <li>Bases de Données Avancées</li>
                  <li>Architecture réseau</li>
                  <li>Expertise serveur</li>
                  <li>Cyber sécurité : Defense in depth</li>
                </ul>
              </div>

              <div className="p-2 flex flex-col flex-grow bg-tc-lavender rounded">
                <span className="text-xs">252 heures, 20 crédits ECTS</span>
                <span className="mt-4 text-xl font-bold">Faire évoluer le système informatique</span>
              </div>

              <div className="lg:row-start-2 flex flex-col gap-4">
                <ul className="px-4 list-disc">
                  <li>Veille technologique</li>
                  <li>Gestion de projet</li>
                  <li>Planification des opérations de maintenance informatiques</li>
                  <li>Pilotage du respect des délais du projet informatique</li>
                </ul>
                <div className="text-md font-bold">Modules enseignés :</div>
                <ul className="px-4 list-disc">
                  <li>Data Science : Intelligence Artificielle</li>
                  <li>Savoir-être {"&"} Intelligence Emotionnelle</li>
                  <li>Gestion de projets</li>
                  <li>Anglais</li>
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
                    "Avoir validé une 2ème année (BAC+2) en informatique ou une formation équivalente en France ou à l'international",
                    "Avoir un BAC et une expérience professionnelle à l'appui en informatique (après étude du dossier par la Direction Pédagogique)",
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

        <div className="py-8 md:py-16">
          <div className="md:container md:mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-lg md:text-2xl font-bold">Développeur web</span>
                <div className="mt-4 md:mt-8 text-justify">
                  <p>
                    Le Développeur web est en charge du développement informatique de sites, plateformes web et applications.
                    A la demande d'un client ou d'une entreprise, il conçoit des sites sur mesure et adapte des solutions techniques
                    tout en se basant sur un cahier des charges. Afin d'être apte à réaliser ces missions, le Développeur Web devra
                    parfaitement connaître les langages fondamentaux tels que HTML, CSS, Javascript, Python, PHP et savoir utiliser
                    et gérer des bases de données. Le monde du web évolue constamment, le Développeur Web devra sans cesse s'adapter
                    aux nouvelles techniques et aux besoins spécifiques de sa clientèle.
                  </p>
                  <p className="mt-4">
                    Rémunération moyenne : À partir de 36k€ pour un débutant et 65k€ pour un profil senior
                  </p>
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
                <span className="text-lg md:text-2xl font-bold">Administrateur Cloud</span>
                <div className="mt-4 md:mt-8 text-justify">
                  <p>
                    L'Administrateur Cloud est responsable de la configuration et de l'administration des systèmes et réseaux dans une
                    entreprise, c'est un spécialiste de la technique. Avec ses connaissances, il est en capacité de gérer des serveurs,
                    de construire et maintenir les réseaux de l'entreprise. Un Administrateur Cloud aime travailler en équipe et communique
                    facilement avec les utilisateurs et les clients. Il s'agit d'une personne polyvalente et rigoureuse qui saura également
                    résoudre des incidents pour optimiser le fonctionnement des infrastructures.
                  </p>
                  <p className="mt-4">
                    Rémunération moyenne : À partir de 36k€ pour un débutant et 50k€ pour un profil senior
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

        <div className="py-4 md:py-8 lg:py-20">
          <div className="md:container md:mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-lg md:text-2xl font-bold">Chef de projet</span>
                <div className="mt-4 md:mt-8 text-justify">
                  <p>
                    Le Chef de projet a la responsabilité de coordonner et de diriger un projet du début à la fin. Il doit veiller au budget mais aussi
                    au respect des délais. Son rôle est ainsi à la fois stratégique et opérationnel. Pour piloter le projet et atteindre les objectifs
                    visés, le Chef de Projet devra être organisé et très communicatif. La coordination, la délégation et le relationnel sont des atouts
                    indispensables pour ce métier. En ayant ces qualités, le Chef de Projet sera en capacité d'animer une équipe, de dialoguer avec les
                    clients et de mener à bien sa mission.
                  </p>
                  <p className="mt-4">
                    Rémunération moyenne : À partir de 40k€ pour un débutant et 55k€ pour un profil senior
                  </p>
                </div>
              </div>
              <div
                className="lg:w-1/2 h-48 md:h-96 bg-center bg-cover rounded-lg shadow-lg"
                style={{ backgroundImage: "url('https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/project-manager_gp8p4k')" }}
              />
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
