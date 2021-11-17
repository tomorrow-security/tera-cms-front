import LittleTitle from "../atoms/LittleTitle"

const syllabusTC3 = [
  {
    subject: "Administrer la mise en œuvre du projet informatique",
    duration: 133,
    credits: 20,
    topics: ["Développement Mobile", "Architecture Cloud", "Architeture Cloud"],
    competences: [
      "Prévention des problèmes",
      "Gestion des erreurs informatiques",
      "Pilotage du support utilisateur",
      "Définition du processus d’assistance",
      "Intégration des systèmes",
      "Mobilisation des compétences informatiques nécessaires",
      "Préparation des tests d'acceptation",
      "Validation et tests",
      "Préparation des documents supports",
      "Conduite des changements",
      "Formation des équipes",
      "Automatisation",
      "Fiabilisation du système informatique",
    ],
  },
  {
    subject:
      "Maintenir le système informatique en condition opérationnelle optimale",
    duration: 252,
    credits: 20,
    topics: [
      "Bases de Données Avancées",
      "Architecture réseau",
      "Expertise serveur",
      "Cyber sécurité : Defense in depth",
    ],
    competences: [
      "Prévention des risques informatiques",
      "Gestion de la sécurité de l’information",
      "Veille de la fiabilité du système informatique",
      "Gestion de l’information et de la connaissance",
      "Mise en place des ressources informatiques ",
    ],
  },
  {
    subject: "Faire évoluer le système informatique ",
    duration: 252,
    credits: 20,
    topics: [
      "Savoir-être & Intelligence Emotionnelle ",
      "Anglais",
      "Gestion de projets",
      "Data Science : Intelligence Artificielle",
    ],
    competences: [
      "Veille technologique",
      "Gestion de projet",
      "Planification des opérations de maintenance informatiques",
      "Pilotage du respect des délais du projet informatique",
    ],
  },
]

export default function Program({}) {
  return (
    <section className="py-3">
      <LittleTitle children="Programme détaillé :" />
      <ul className="p-4 space-y-2 divide-y rounded shadow md:grid md:grid-cols-3 md:space-y-0 md:divide-y-0 md:divide-x divide-tc-red md:space-x-2">
        {syllabusTC3.map((domain, index) => (
          <div
            key={index}
            className="p-2 md:grid md:grid-cols-1 md:grid-rows-program-domain"
          >
            <div className="grid grid-cols-1 p-2 text-lg font-semibold bg-opacity-25 rounded-lg grid-rows-objectif place-content-center md:row-start-1 md:row-end-2 bg-tc-red">
              <p className="row-start-1 text-center uppercase">Objectif :</p>
              <div className="flex items-center justify-center row-start-2 text-center">
                <h3>{domain.subject}</h3>
              </div>
            </div>
            <p className="row-start-2 text-sm text-right">
              {domain.duration} Heures, ECTS {domain.credits}
            </p>
            <ul className="row-start-3 p-2 space-y-2 list-inside list-square">
              {domain.topics.map((topic, index) => (
                <li key={`${index}-${topic}`} className="text-sm">
                  {topic}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center row-start-4 p-2 mx-4 my-2 text-base font-semibold text-center bg-opacity-25 rounded-lg bg-tc-blue">
              <p className="text-center">
                Les compétences acquises en fin de cursus :
              </p>
            </div>
            <ul className="row-start-5 p-2 space-y-2 list-inside list-square md:mt-1">
              {domain.competences.map((competence, index) => (
                <li
                  key={`${index}-${competence}`}
                  className="my-2 text-sm md:my-0"
                >
                  {competence}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <div className="md:flex md:justify-end">
        <p className="text-sm italic">
          La validation peut s’acquérir par bloc de compétences.
        </p>
      </div>
    </section>
  )
}
