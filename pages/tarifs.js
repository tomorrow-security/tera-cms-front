import Head from "next/head"
import Link from "next/link"

import Block from "../components/atoms/Block"
import Button from "../components/atoms/Button"
import { SeparatorWithTitle } from "."

const pageTitle = "Tarifs - Tera Campus"
const pageDescription = "Les tarifs de l'école Tera Campus"
const pageUrl = "https://tera-campus.com/tarifs"

const PricingCard = ({ children, highlight, label, yearlyPrice }) => (
  <div className="h-full bg-white border-t-4 border-tc-red rounded-lg shadow-2xl flex flex-col">
    <div className="mt-4 px-4 text-center">
      <div className="text-lg uppercase font-bold">{label}</div>
      <div className="mt-4 text-4xl uppercase font-bold ">{yearlyPrice} €</div>
      <div className="text-lg uppercase font-bold text-gray-400">par an</div>
      <div className="mt-4 p-2 bg-tc-blue-navy text-white rounded flex items-center justify-center">
        <p className="my-2 font-semibold">{highlight}</p>
      </div>
    </div>
    <div>{children}</div>
    <div className="mb-4 flex-grow flex items-end justify-center">
      <div className="flex flex-col items-center">
        <Link href="/enrolment">
          <a>
            <Button label="Je m'inscris" />
          </a>
        </Link>
        <span className="mt-2 text-sm italic text-gray-500">Inscription gratuite, sans frais de dossier !</span>
      </div>
    </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
            <PricingCard
              label="Cycle préparatoire"
              yearlyPrice="6500"
              highlight={`Pour une inscription finalisée avant le 30 juin`} 
            >
              <ul className="p-4 text-center text-sm">
                <li className="my-2">Préparation à l'entrée au cycle Bachelor</li>
                <li className="my-2">805 heures de formation par année</li>
                <li className="my-2">2 années en formation initiale</li>
              </ul>
            </PricingCard>
            <PricingCard
              label="Cycle Bachelor"
              yearlyPrice="0"
              highlight="Avec un contrat d'alternance"
            >
              <ul className="p-4 text-center text-sm">
                <li className="my-2 font-bold">
                  Titre RNCP de niveau 6 (BAC+3) "Administrateur des systèmes d'information".{" "}
                  <Link href="/diplomes/administrateur-systemes-information">
                    <a className="underline italic text-blue-500">
                      En savoir plus ...
                    </a>
                  </Link>
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
                L'année de formation chez Tera Campus coûte 9500€. Il est possible de financer soit même la formation sans
                faire de contrat d'alternance.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Financement par le dispositif d'alternance</div>
              <p className="mt-2 text-justify">
                À partir du cycle Bachelor, vous avez la possibilité de réaliser un contrat de professionnalisation.
                Ce type de contrat vous permet d'être en alternance dans une entreprise, en tant que salarié. Vous serez donc
                rémunéré mensuellement et vos frais de scolarité seront intégralement pris en charge par la société qui vous
                accueille.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Compte Personnel de Formation (CPF)</div>
              <p className="mt-2 text-justify">
                La formation Tera Campus est reconnue par l'État et est éligible au Compte Personnel de Formation. Les étudiants
                ayant déjà travaillé peuvent utiliser leur CPF pour financer une partie de leur formation. En vous connectant
                sur <Link href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/">
                <a className="underline text-blue-500">Mon Compte Formation</a>
                </Link>, vous pourrez consulter vos droits CPF.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Échelonnement du paiement</div>
              <p className="mt-2 text-justify">
                Dans le cas d'un autofinancement, vous avez la possibilité de régler en 10 fois sans frais.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Financement par prêt étudiant</div>
              <p className="mt-2 text-justify">
                Tera Campus est partenaire de Qonto. À ce titre, nos étudiants bénéficient de prêts étudiants à des conditions tarifaires
                préférentielles, taux à 1% (selon conditions consultables en agence).
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Puis-je rejoindre les cycles Bachelor et Expert en formation initiale ?</div>
              <p className="mt-2 text-justify">
                Oui.
              </p>
            </div>
          </div>
        </Block>

      </main>
    </>
  )
}
