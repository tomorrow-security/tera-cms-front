import React, { useState } from "react"

import BlockTitle from "../atoms/BlockTitle"

const initialYears = [
  {
    name: "1ère année",
    subjects: [
      "Système d'exploitation Windows",
      "Système d'exploitation Linux",
      "Algorithmique",
      "Développement Web",
      "Introduction aux bases de données",
      "Introduction au réseau",
      "Introduction au Cloud",
      "Introduction à la cybersécurité",
      "Gestion de projets",
      "Savoir-être et intelligence émotionnelle",
      "Anglais",
    ],
  },
  {
    name: "2ème année",
    subjects: [
      "Administration serveur",
      "Méthodologie de développement",
      "Développement d'applications",
      "Introduction à la Data Science",
      "Administration de base de données",
      "Administration réseau",
      "Administration Cloud",
      "Cybersécurité : Ethical Hacking",
      "Gestion de projets",
      "Savoir-être et intelligence émotionnelle",
      "Anglais",
    ],
  },
]

const releaseYears = [
  {
    name: "3ème année",
    subjects: [
      "Expertise serveur",
      "Développement mobile",
      "Data science : Intelligence artificielle",
      "Architecture de bases de données",
      "Architecture réseau",
      "Architecture Cloud",
      "Cybersécurité : Defense in Depth",
      "Gestion de projets",
      "Savoir-être et intelligence émotionnelle",
      "Anglais",
    ],
  },
  {
    name: "4ème année",
    subjects: [
      "Systèmes d'exploitation alternatifs",
      "Développement et organisation",
      "Data science : Machine learning",
      "Expertise base de données",
      "Expertise réseau",
      "Automatisation Cloud",
      "DevOps",
      "Sécurité de l'information",
      "Gestion de projets",
      "Savoir-être et intelligence émotionnelle",
      "Anglais",
    ],
  },
  {
    name: "5ème année",
    subjects: [
      "Évolution d'un système d'exploitation",
      "Management du développement",
      "Data Science : Big Data",
      "Base de données : scaling",
      "Architecture et choix technologiques",
      "Création de Cloud",
      "Sécurité et conformité (RGPD, ISO)",
      "Management et économie des entreprises",
      "Anglais",
    ],
  },
]

export default function BlockCurriculum() {
  const [activeYearIndex, setActiveYearIndex] = useState(0)
  return (
    <section id="curriculum" className="py-10 md:py-20">
      <div className="flex flex-col justify-between flex-grow md:container md:mx-auto">
        <BlockTitle
          title="Notre cursus"
          iconPicture={{ backgroundImage: "url('montagnard.png')" }}
        />
        {/* // TODO mise en page flex-row en md */}
        <div classname="mx-4 md:flex md:mx-0">
          <div className="mb-8 space-y-3 md:pl-2 md:space-y-6">
            <form className="relative w-5/6 mx-auto mb-8 text-xl text-white transition-colors duration-700 rounded-t lg:w-1/3 sm:w-3/4 md:w-1/2 rounded-b-xl bg-tc-blue hover:bg-tc-red">
              <select
                className="w-full p-2 font-semibold text-center transition-colors duration-700 bg-transparent rounded-t appearance-none rounded-b-xl focus:outline-none hover:bg-tc-red"
                value={activeYearIndex}
                onChange={(e) => setActiveYearIndex(e.target.value)}
                aria-label="Sélecteur d'année scolaire'"
              >
                {initialYears.map((year, index) => (
                  <option key={index} value={index}>
                    {year.name}
                  </option>
                ))}
              </select>
            </form>
            <ul className="w-5/6 mx-auto my-4 space-y-1 lg:w-1/3 md:w-1/2 sm:w-3/4">
              {initialYears[activeYearIndex].subjects.map((subject, index) => (
                <li key={index} className="list-inside list-square">
                  {subject}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-4 space-y-3 md:mx-0 md:pl-2 md:space-y-6">
            <form className="relative w-5/6 mx-auto mb-8 text-xl text-white transition-colors duration-700 rounded-t lg:w-1/3 sm:w-3/4 md:w-1/2 rounded-b-xl bg-tc-blue hover:bg-tc-red">
              <select
                className="w-full p-2 font-semibold text-center transition-colors duration-700 bg-transparent rounded-t appearance-none rounded-b-xl focus:outline-none hover:bg-tc-red"
                value={activeYearIndex}
                onChange={(e) => setActiveYearIndex(e.target.value)}
                aria-label="Sélecteur d'année scolaire'"
              >
                {releaseYears.map((year, index) => (
                  <option key={index} value={index}>
                    {year.name}
                  </option>
                ))}
              </select>
            </form>
            <ul className="w-5/6 mx-auto my-4 space-y-1 lg:w-1/3 md:w-1/2 sm:w-3/4">
              {releaseYears[activeYearIndex].subjects.map((subject, index) => (
                <li key={index} className="list-inside list-square">
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
