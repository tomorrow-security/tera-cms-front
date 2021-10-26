import PageLink from "../atoms/PageLink"
import HeaderSubNav from "./HeaderSubNav"

// TODO mettre à jour les routes quand touts les pages et block seront fait
// TODO rassembler les datas communes au header et au plan
const ecole = [
  { id: "description", label: "Tera campus c'est quoi ?" },
  { id: "pedagogy", label: "Notre pédagogie" },
  { id: "bivouacs", label: "Bivouac" },
  { id: "schoolboard", label: "Conseil de perfectionnement" },
  { id: "handicap", label: "Etudier en situation de handicap" },
  { id: "quality", label: "Habilitation qualité" },
  { id: "#faq", label: "FAQ" },
]

const program = [
  {
    id: "program",
    label: "BAC+3 Administrateur des systèmes d'information",
  },
  { id: "partners", label: "Les partenaires" },
  { id: "career", label: "Les carrières" },
]

const alternance = [{ id: "releasetraining", label: "C'est quoi l'alternance" }]

const headernav = [
  { id: "#agenda", label: "Agenda" },
  { id: "contact", label: "Contact" },
]

export default function HeaderNav() {
  return (
    <nav className="lg:flex lg:justify-between">
      <ul className="space-y-2 lg:mx-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
        <li className="w-28 lg:text-center lg:mx-auto lg:w-max">
          <HeaderSubNav title="Notre école" pages={ecole} />
        </li>
        <li className="w-28 lg:text-center lg:mx-auto lg:w-max">
          <HeaderSubNav title="Le programme" pages={program} />
        </li>
        <li className="w-28 lg:text-center lg:mx-auto lg:w-max">
          <HeaderSubNav title="Alternance" pages={alternance} />
        </li>
        {headernav.map(({ id, label }) => (
          <li
            key={`${id}`}
            className="flex text-center lg:items-center lg:mx-auto lg:w-max"
          >
            <PageLink id={id} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
