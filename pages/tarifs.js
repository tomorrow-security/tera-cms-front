import Head from "next/head"
import Link from "next/link"

import Block from "../components/atoms/Block"
import Button from "../components/atoms/Button"
import { SeparatorWithTitle } from "."

const pageTitle = "Tarifs - Tera Campus"
const pageDescription = "Les tarifs de l'école Tera Campus"
const pageUrl = "https://tera-campus.com/tarifs"

const PricingCard = ({ children, cycleURL, highlight, label, yearlyPrice }) => (
  <div className="h-full bg-white border-t-4 border-tc-red rounded-lg shadow-2xl flex flex-col">
    <div className="mt-4 px-4 text-center">
      <div className="text-lg uppercase font-bold">{label}</div>
      <div className="mt-4 text-4xl uppercase font-bold ">{yearlyPrice} €</div>
      <div className="text-lg uppercase font-bold text-gray-400">par an</div>
      <span className="mt-2 text-sm italic text-gray-500">Inscription gratuite, sans frais de dossier !</span>
      <div className="mt-4 p-2 bg-tc-blue-navy text-white rounded flex items-center justify-center">
        <p className="my-2 font-semibold">{highlight}</p>
      </div>
    </div>
    <div>{children}</div>
    {cycleURL && (
      <div className="mb-8 flex-grow flex items-end justify-center">
      <div className="flex flex-col items-center">
        <Link href="/enrolment">
          <a>
            <Button label="Voir le programme" />
          </a>
        </Link>
      </div>
    </div>
    )}
  </div>
)

export default function Tarifs() {
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

        <img src="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/adventure-begins_mmpz2f" className="w-full h-48 md:h-96 object-cover object-center" />

        <Block darken>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
            <PricingCard
              label="Cycle Bachelor"
              yearlyPrice="0"
              highlight="Avec un contrat d'alternance"
              cycleURL="/diplomes/administrateur-systemes-information"
            >
              <ul className="p-4 text-center text-sm">
                <li className="my-2 font-bold">
                  Titre RNCP de niveau 6 (BAC+3) "Administrateur des systèmes d'information".{" "}
                </li>
                <li className="my-2">637 heures de formation</li>
                <li className="my-2">1 année de formation en alternance</li>
                <li className="my-2">Possible en contrat d'apprentissage</li>
                <li className="my-2">Possible en contrat de professionalisation</li>
              </ul>
            </PricingCard>
            <PricingCard
              label="Cycle Expert"
              yearlyPrice="0"
              highlight="Avec un contrat d'alternance"
            >
              <ul className="p-4 text-center text-sm">
                <li className="my-2 font-bold">Titre RNCP de niveau 7 (BAC+5) "Expert des systèmes d'information"</li>
                <li className="my-2">637 heures de formation</li>
                <li className="my-2">2 années de formation en alternance</li>
                <li className="my-2">Possible en contrat d'apprentissage</li>
                <li className="my-2">Possible en contrat de professionalisation</li>
              </ul>
            </PricingCard>
          </div>
        </Block>

        <SeparatorWithTitle title="Financements" />

        <Block darken>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="font-bold text-xl">Tarif de l'année de formation</div>
              <p className="mt-2 text-justify">
                Une année de formation chez Tera Campus coûte 9500€. Ce tarif passe à 6500€ (soit une remise de 3000€) en cas
                d'inscription anticipée avant le 30 juin de l'année de démarrage de la formation.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Financement par le dispositif d'alternance</div>
              <p className="mt-2 text-justify">
                À partir du cycle Bachelor (BAC+3), vous avez la possibilité d'effectuer votre année de formation en alternance via
                un contrat d'apprentissage ou de professionnalisation. Ce type de contrat vous permet alors de suivre la formation
                tout en étant salarié d'une entreprise. Vous serez rémunéré mensuellement et vos frais de scolarité seront
                intégralement pris en charge par la société qui vous accueille.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Compte Personnel de Formation (CPF)</div>
              <p className="mt-2 text-justify">
                La formation Tera Campus est reconnue par l'État et est éligible au Compte Personnel de Formation. Les futurs étudiants
                ayant déjà travaillé peuvent donc utiliser leur CPF pour financer tout ou partie de leur formation. Vous pourrez consulter
                vos droits CPF en vous connectant sur <Link href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/">
                <a className="underline text-blue-500">Mon Compte Formation</a></Link>.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Échelonnement du paiement</div>
              <p className="mt-2 text-justify">
                Dans le cas d'un autofinancement, vous avez la possibilité de régler en 10 fois sans frais après un premier acompte de
                validation de votre inscription.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Financement par prêt étudiant</div>
              <p className="mt-2 text-justify">
                Emprunter de l'argent pour financer ses études peut également être une option. L'Etat peut se porter garant de votre prêt, afin
                de faciliter son obtention. Retrouvez plus d'informations sur <Link href="https://www.etudiant.gouv.fr/fr/pret-etudiant-garanti-par-l-etat-1723">
                <a className="underline text-blue-500">https://www.etudiant.gouv.fr/</a></Link>.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Puis-je rejoindre les cycles Bachelor et Expert en formation initiale ?</div>
              <p className="mt-2 text-justify">
                Oui, il est tout à fait possible de suivre l'intégralité des cursus de Tera Campus en formation initiale.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <Link href="/brochure">
              <a>
                <Button label="Télécharger la brochure" />
              </a>
            </Link>
            <Link href="/enrolment">
              <a>
                <Button label="Candidater" />
              </a>
            </Link>
          </div>
        </Block>

      </main>
    </>
  )
}
