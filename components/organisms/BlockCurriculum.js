import React from "react"

import PageLink from "../atoms/PageLink"
import LittleTitle from "../atoms/LittleTitle"
import SubTitle from "../atoms/SubTitle"
import List from "../atoms/List"
import CardList from "../atoms/CardList"
import ParagrapheXl from "../atoms/ParagrapheXl"

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
  return (
    <section id="curriculum" className="py-5">
      <div className="flex flex-col justify-between flex-grow md:container md:mx-auto">
        <SubTitle
          title="Le programme de Tera Campus"
          iconPicture={{ backgroundImage: "url('cursus-TC.png')" }}
        />
        <div className="mx-4">
          <div className="font-semibold">
            <ParagrapheXl>
              Deux premières années en formation initiale pour acquérir des
              bases solides.
            </ParagrapheXl>
            <ParagrapheXl>
              À partir de la troisième année et jusqu’à la fin du parcours la
              formation est 100% en alternance (contrat d’apprentissage ou
              contrat de professionnalisation).
            </ParagrapheXl>
          </div>
          <div className="my-6">
            <LittleTitle children="Cursus 1&2 année :" />
            <List>
              <li>
                Des cours en télé-présentiel du lundi au vendredi avec des
                professionnels de l’Informatique
              </li>
              <li>
                6 semaines en présentiel avec les trois bivouacs dans l’année
                (frais compris dans le tarif de la formation).
                <span className="underline">
                  <PageLink
                    id="bivouac"
                    label="En savoir plus sur le Bivouac"
                  />
                </span>
              </li>
              <li>
                Un encadrement personnalisé, et des outils performants qui vous
                permettront à préparer votre intégration en entreprise dès la 3
                <sup>ème</sup> année.
              </li>
            </List>
          </div>
          <div className="w-11/12 mx-auto md:mx-0 md:flex md:flex-nowrap md:justify-center md:items-strech">
            {initialYears.map((initialYear, index) => (
              <CardList
                key={index}
                title={initialYear.name}
                items={initialYear.subjects}
              />
            ))}
          </div>
          <div className="my-6">
            <LittleTitle children="Cursus à partir de la 3ème année :" />
            <List>
              <li>
                Des cours en télé-présentiel tous les vendredis avec des
                professionnels de l’Informatique
              </li>
              <li>4 jours en entreprise</li>
              <li>
                6 semaines en présentiel avec les trois bivouacs dans l’année
                (frais compris dans le tarif de la formation).
                <span className="underline">
                  <PageLink
                    id="bivouac"
                    label="En savoir plus sur le Bivouac"
                  />
                </span>
              </li>
              <li>
                Vous associez la partie théorique avec la partie pratique. Ces
                deux phases vous permettront non seulement d’être efficace plus
                rapidement en entreprise mais également d’être plus compétitif
                sur le marché du travail après votre formation Tera Campus.
              </li>
            </List>
          </div>
          <div className="w-11/12 mx-auto md:mx-0 md:flex md:flex-nowrap md:justify-center md:items-strech">
            {releaseYears.map((releaseYear, index) => (
              <CardList
                key={index}
                title={releaseYear.name}
                items={releaseYear.subjects}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
