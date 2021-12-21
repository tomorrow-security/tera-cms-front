import Head from "next/head"
import Link from "next/link"

const pageTitle = "Tarifs - Tera Campus"
const pageDescription = "Les tarifs de l'école Tera Campus"
const pageUrl = "https://tera-campus.com/tarifs"

const PricingCard = ({ label, children }) => (
  <div className="h-full bg-white border-t-4 border-tc-red rounded-lg shadow-2xl flex flex-col">
    <div className="mt-4 px-4 text-center">
      <div className="text-lg uppercase font-bold">{label}</div>
      <div className="mt-4 text-4xl uppercase font-bold ">9500 €</div>
      <div className="text-lg uppercase font-bold text-gray-400">par an</div>
      <div className="mt-4 p-2 bg-tc-blue-navy text-white rounded">
        <p className="font-bold">Réduction de 3000 €</p>
        <p className="mt-1">pour toute inscription finalisée avant le 30 juin</p>
      </div>
    </div>
    <div>{children}</div>
    <div className="mb-4 flex-grow flex items-end justify-center">
      <div className="flex flex-col items-center">
        <Link href="/enrolment">
          <a className="p-4 w-max text-center font-semibold bg-yellow-300 rounded shadow-lg">Je m'inscris</a>
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

        <div class="py-4 md:py-10">
          <div className="md:container md:mx-auto">	
            <div className="mx-4 lg:mx-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <PricingCard label="Cycle préparatoire">
                <ul className="p-4 text-center text-sm border-b border-tc-blue-navy">
                  <li className="my-2">Financement possible par prêt étudiant</li>
                  <li className="my-2">Financement possible par CPF</li>
                  <li className="my-2">Possibilité d'échéancier en 10 fois sans frais</li>
                </ul>
                <ul className="p-4 text-center text-sm">
                  <li className="my-2">Préparation à l'entrée au cycle Bachelor</li>
                  <li className="my-2">805 heures de formation par année</li>
                  <li className="my-2">2 années en formation initiale</li>
                </ul>
              </PricingCard>
              <PricingCard label="Cycle Bachelor">
                <ul className="p-4 text-center text-sm border-b border-tc-blue-navy">
                  <li className="my-2 font-bold text-tc-red">Prise en charge intégrale possible par alternance</li>
                  <li className="my-2">Financement possible par CPF</li>
                  <li className="my-2">Possibilité d'échéancier en 10 fois sans frais</li>
                </ul>
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
              <PricingCard label="Cycle Expert">
                <ul className="p-4 text-center text-sm border-b border-tc-blue-navy">
                  <li className="my-2 font-bold text-tc-red">Prise en charge intégrale possible par alternance</li>
                  <li className="my-2">Financement possible par CPF</li>
                  <li className="my-2">Possibilité d'échéancier en 10 fois sans frais</li>
                </ul>
                <ul className="p-4 text-center text-sm">
                  <li className="my-2 font-bold">Titre RNCP de niveau 7 (BAC+5) "Expert des systèmes d'information"</li>
                  <li className="my-2">637 heures de formation</li>
                  <li className="my-2">1 année de formation en alternance</li>
                  <li className="my-2">Possible en contrat d'apprentissage</li>
                  <li className="my-2">Possible en contrat de professionalisation</li>
                </ul>
              </PricingCard>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
