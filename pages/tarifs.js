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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum congue ex, at pretium dui bibendum ut.
                Duis risus lacus, auctor id sodales nec, consectetur quis lacus. Mauris rutrum nulla eu neque rutrum rutrum.
                Donec eget nibh in erat commodo finibus. Praesent felis urna, tincidunt sed pharetra sed, consequat eget
                nisi. Phasellus congue neque elit. Mauris sagittis sem nec viverra pellentesque. Praesent pharetra tincidunt
                elit, non sollicitudin turpis malesuada in. Curabitur et malesuada sem. Nullam eu nisl id odio bibendum
                scelerisque. Aenean at dolor eget quam tincidunt gravida id vel nulla. In dapibus est ut velit rutrum, eu
                semper mauris efficitur. Vivamus rhoncus leo sapien, in viverra ante lobortis nec.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Financement par le dispositif d'alternance</div>
              <p className="mt-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum congue ex, at pretium dui bibendum ut.
                Duis risus lacus, auctor id sodales nec, consectetur quis lacus. Mauris rutrum nulla eu neque rutrum rutrum.
                Donec eget nibh in erat commodo finibus. Praesent felis urna, tincidunt sed pharetra sed, consequat eget
                nisi. Phasellus congue neque elit. Mauris sagittis sem nec viverra pellentesque. Praesent pharetra tincidunt
                elit, non sollicitudin turpis malesuada in. Curabitur et malesuada sem. Nullam eu nisl id odio bibendum
                scelerisque. Aenean at dolor eget quam tincidunt gravida id vel nulla. In dapibus est ut velit rutrum, eu
                semper mauris efficitur. Vivamus rhoncus leo sapien, in viverra ante lobortis nec.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Mon compte formation (CPF)</div>
              <p className="mt-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum congue ex, at pretium dui bibendum ut.
                Duis risus lacus, auctor id sodales nec, consectetur quis lacus. Mauris rutrum nulla eu neque rutrum rutrum.
                Donec eget nibh in erat commodo finibus. Praesent felis urna, tincidunt sed pharetra sed, consequat eget
                nisi. Phasellus congue neque elit. Mauris sagittis sem nec viverra pellentesque. Praesent pharetra tincidunt
                elit, non sollicitudin turpis malesuada in. Curabitur et malesuada sem. Nullam eu nisl id odio bibendum
                scelerisque. Aenean at dolor eget quam tincidunt gravida id vel nulla. In dapibus est ut velit rutrum, eu
                semper mauris efficitur. Vivamus rhoncus leo sapien, in viverra ante lobortis nec.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Échelonnement du paiement</div>
              <p className="mt-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum congue ex, at pretium dui bibendum ut.
                Duis risus lacus, auctor id sodales nec, consectetur quis lacus. Mauris rutrum nulla eu neque rutrum rutrum.
                Donec eget nibh in erat commodo finibus. Praesent felis urna, tincidunt sed pharetra sed, consequat eget
                nisi. Phasellus congue neque elit. Mauris sagittis sem nec viverra pellentesque. Praesent pharetra tincidunt
                elit, non sollicitudin turpis malesuada in. Curabitur et malesuada sem. Nullam eu nisl id odio bibendum
                scelerisque. Aenean at dolor eget quam tincidunt gravida id vel nulla. In dapibus est ut velit rutrum, eu
                semper mauris efficitur. Vivamus rhoncus leo sapien, in viverra ante lobortis nec.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Financement par prêt étudiant</div>
              <p className="mt-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum congue ex, at pretium dui bibendum ut.
                Duis risus lacus, auctor id sodales nec, consectetur quis lacus. Mauris rutrum nulla eu neque rutrum rutrum.
                Donec eget nibh in erat commodo finibus. Praesent felis urna, tincidunt sed pharetra sed, consequat eget
                nisi. Phasellus congue neque elit. Mauris sagittis sem nec viverra pellentesque. Praesent pharetra tincidunt
                elit, non sollicitudin turpis malesuada in. Curabitur et malesuada sem. Nullam eu nisl id odio bibendum
                scelerisque. Aenean at dolor eget quam tincidunt gravida id vel nulla. In dapibus est ut velit rutrum, eu
                semper mauris efficitur. Vivamus rhoncus leo sapien, in viverra ante lobortis nec.
              </p>
            </div>
            <div>
              <div className="font-bold text-xl">Puis-je rejoindre les cycles Bachelor et Expert en formation initiale ?</div>
              <p className="mt-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum congue ex, at pretium dui bibendum ut.
                Duis risus lacus, auctor id sodales nec, consectetur quis lacus. Mauris rutrum nulla eu neque rutrum rutrum.
                Donec eget nibh in erat commodo finibus. Praesent felis urna, tincidunt sed pharetra sed, consequat eget
                nisi. Phasellus congue neque elit. Mauris sagittis sem nec viverra pellentesque. Praesent pharetra tincidunt
                elit, non sollicitudin turpis malesuada in. Curabitur et malesuada sem. Nullam eu nisl id odio bibendum
                scelerisque. Aenean at dolor eget quam tincidunt gravida id vel nulla. In dapibus est ut velit rutrum, eu
                semper mauris efficitur. Vivamus rhoncus leo sapien, in viverra ante lobortis nec.
              </p>
            </div>
          </div>
        </Block>

      </main>
    </>
  )
}
