import LittleTitle from "../atoms/LittleTitle"

const syllabusTC3 = [
  {
    subject: "Administrer la mise en œuvre du projet informatique",
    duration: 126,
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
    duration: 140,
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
    duration: 140,
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

export default function Program({ subject }) {
  return (
    <section className="mx-4">
      <LittleTitle children="Programme détaillé TC3" />
      <ul className="flex flex-col p-4 space-y-2 divide-y rounded shadow md:divide-y-0 md:divide-x md:flex-row divide-tc-red md:space-x-2">
        {syllabusTC3.map((domain, index) => (
          <div key={index} className="flex-1 p-2">
            <h3 className="p-2 text-lg font-semibold text-center bg-opacity-25 rounded-lg bg-tc-red">
              {domain.subject}
              &nbsp;année
            </h3>
            <p className="text-sm text-right ">
              {domain.duration} Heures, ECTS {domain.credits}
            </p>
            <ul className="p-2 space-y-2 list-inside list-square">
              {domain.topics.map((topic, index) => (
                <li key={`${index}-${topic}`} className="text-sm">
                  {topic}
                </li>
              ))}
            </ul>
            <h4 className="mx-4 mt-4 text-base font-semibold text-center bg-opacity-25 rounded-lg bg-tc-blue">
              Les compétences acquises en fin de cursus :
            </h4>
            <ul className="p-2 space-y-2 list-inside list-square">
              {domain.competences.map((competence, index) => (
                <li key={`${index}-${competence}`} className="my-2 text-sm">
                  {competence}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <p className="text-sm italic">
        La validation peut s’acquérir par bloc de compétences.{" "}
      </p>
    </section>
  )
}
