import React, { useState } from "react"

import Paragraphe from "../atoms/Paragraphe"
import ExternalLink from "../molecules/ExternalLink"
import LittleTitle from "../atoms/LittleTitle"
import SubTitle from "../atoms/SubTitle"

const jobs = [
  {
    name: "Développeur web",
    description:
      "est en charge du développement informatique de sites, plateformes web et \
            applications. A la demande d'un client ou d'une entreprise, il conçoit des sites sur mesure et adapte des \
            solutions techniques tout en se basant sur un cahier des charges. Afin d'être apte à réaliser ces \
            missions, le Développeur Web devra parfaitement connaître les langages fondamentaux tels que Html, CSS, \
            Javascript, Python, PHP et savoir utiliser et gérer des bases de données. Le monde du web évolue \
            constamment, le Développeur Web devra sans cesse s'adapter aux nouvelles techniques et aux besoins \
            spécifiques de sa clientèle.",
    imageUrl: "/developer.jpg",
    salary: "À partir de 36k€ pour un débutant et 65k€ pour un profil senior",
    training: "3 ans minimum (BAC+3)",
  },
  {
    name: "Consultant en cybersécurité",
    description:
      "va étudier les risques encourus par une entreprise pour proposer des solutions\
            pertinentes, \
            grâce à ses compétences en gestion des données confidentielles.\
            Ces solutions peuvent être techniques ou organisationnelles, \
            et vont aider la société à se protéger contre les attaques \
            malveillantes des hackers. En apprentissage permanent, le consultant devra maîtriser plusieurs \
            technologies pour déjouer les attaques qui sont de plus en plus performantes afin de protéger des données \
            sensibles (bancaires, personnelles, médicales).",
    imageUrl: "/vpn.jpg",
    salary: "À partir de 36k€ pour un débutant et 65k€ pour un profil senior",
    training: "5 ans (BAC+5)",
  },
  {
    name: "Product Owner",
    description:
      "Le Product Owner est le responsable de la définition et de la conception d'un produit. Il joue \
            un rôle essentiel depuis la définition jusqu'au lancement du produit tout en passant par son amélioration. \
            Le Product Owner se base sur plusieurs méthodologies qui permettent une gestion de projet évolutive et \
            adaptative ainsi que la possibilité de faire face aux imprévus. Afin de concevoir le produit, il doit en \
            outre posséder une compréhension technique. Il s'agit d'un véritable Chef d'orchestre qui coordonne la \
            partie technique avec les équipes et les échanges clients.",
    imageUrl: "/kanban.jpg",
    salary: "À partir de 40k€ pour un débutant et 65k€ pour un profil senior",
    training: "3 ans minimum (BAC+3)",
  },
  {
    name: "Administrateur Cloud",
    description:
      "est responsable de la configuration et de l'administration des systèmes & \
            réseaux dans une entreprise, c'est un spécialiste de la technique. Avec ses connaissances, il est en \
            capacité de gérer des serveurs, de construire et maintenir les réseaux de l'entreprise. Un Administrateur \
            Cloud aime travailler en équipe et communique facilement avec les utilisateurs et les clients. Il s'agit \
            d'une personne polyvalente et rigoureuse qui saura également résoudre des incidents pour optimiser le \
            fonctionnement des infrastructures.",
    imageUrl: "/adminsys.jpg",
    salary: "À partir de 36k€ pour un débutant et 50k€ pour un profil senior",
    training: "3 ans minimum (BAC+3)",
  },
  {
    name: "Chef de projet",
    description:
      "a la responsabilité de coordonner et de diriger un projet du début à la \
            fin. Il doit veiller au budget mais aussi au respect des délais. Son rôle est ainsi à la fois stratégique \
            et opérationnel. Pour piloter le projet et atteindre les objectifs visés, le Chef de Projet devra être \
            organisé et très communicatif. La coordination, la délégation et le relationnel sont des atouts \
            indispensables pour ce métier. En ayant ces qualités, le Chef de Projet sera en capacité d'animer une \
            équipe, de dialoguer avec les clients et de mener à bien sa mission.",
    imageUrl: "/project.jpg",
    salary: "À partir de 40k€ pour un débutant et 55k€ pour un profil senior",
    training: "3 ans minimum (BAC+3)",
  },
]

export default function BlockCareer() {
  const [activeJobIndex, setActiveJobIndex] = useState(0)
  const careerName = `${jobs[activeJobIndex].name}}`
  const firstLetter = careerName.charAt(0)
  const vowel = /[aeiouy]/i
  const isAVowel = firstLetter.match(vowel) !== null ?? true
  return (
    <section id="career" className="flex flex-col flex-grow py-5">
      <div className="flex flex-col justify-between flex-grow md:container md:mx-auto">
        <SubTitle
          title="Les carrières"
          iconPicture={{ backgroundImage: "url('bulb.png')" }}
        />
        <Paragraphe>
          Après avoir obtenu votre diplôme d’Administrateur Systèmes
          d'Informations, vous pourrez intégrer la 4ème année chez Tera Campus
          avec un parcours en alternance (contrat d'apprentissage ou bien
          contrat de professionnalisation). En intégrant la 4ème année vous
          préparerez un diplôme enregistré par l’État au RNCP au niveau 7
          (BAC+5).
        </Paragraphe>
        <ExternalLink
          title=" Titre Bachelor Administrateur Systèmes d'Informations"
          url="https://www.francecompetences.fr/recherche/rncp/34022/"
          aria="lien vers le site France compétence"
        ></ExternalLink>
        <Paragraphe>
          Si vous faites le choix d’arrêter vos études vous pourrez également
          rejoindre une entreprise.
        </Paragraphe>
        <LittleTitle children="Quels débouchés après les études chez Tera Campus ?" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="mx-4 space-y-3 md:mx-0 md:pl-2 md:space-y-6">
            <form className="relative w-4/5 mx-auto mb-8 text-xl text-white transition-colors duration-700 rounded-t texte-center rounded-b-xl bg-tc-blue hover:bg-tc-red">
              <select
                className="w-full p-2 transition-colors duration-700 bg-transparent rounded-t appearance-none rounded-b-xl focus:outline-none hover:bg-tc-red"
                value={activeJobIndex}
                onChange={(e) => setActiveJobIndex(e.target.value)}
                aria-label="Sélecteur de carrière"
              >
                {jobs.map((job, index) => (
                  <option key={index} value={index}>
                    {job.name}
                  </option>
                ))}
              </select>
            </form>
            <div className="my-4">
              <p>
                {isAVowel ? "L'" : "Le"}
                <span className="text-tc-red">
                  &nbsp;{jobs[activeJobIndex].name}&nbsp;
                </span>
                {jobs[activeJobIndex].description}
              </p>
              <p className="my-4 font-bold">
                <span>Rémunération moyenne :</span>{" "}
                {jobs[activeJobIndex].salary}
              </p>
              <p className="my-4 font-bold">
                <span>Durée de formation :</span>{" "}
                {jobs[activeJobIndex].training}
              </p>
            </div>
          </div>
          <div
            className="w-full h-64 bg-center bg-cover md:h-full"
            style={{ backgroundImage: `url(${jobs[activeJobIndex].imageUrl})` }}
          />
        </div>
      </div>
    </section>
  )
}
