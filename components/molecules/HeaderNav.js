import PageLink from "../atoms/PageLink"
import HeaderSubNav from "./HeaderSubNav"

// TODO rassembler les datas communes au header et au plan
const ecole = [
  { id: "concept", label: "Tera campus c'est quoi ?" },
  { id: "pedagogy", label: "Notre pédagogie" },
  { id: "bivouac", label: "Bivouac" },
  { id: "schoolboard", label: "Conseil de perfectionnement" },
  { id: "handicap", label: "Etudier en situation de handicap" },
  { id: "quality", label: "Habilitation qualité" },
  { id: "faq", label: "FAQ" },
]
// TODO test entre career et #career pour le route des bloque hors homePage
const program = [
  { id: "program", label: "BAC+3 Administrateur des systèmes d'information" },
  { id: "partner", label: "Les partenaires" },
  { id: "#career", label: "Les carrières" },
]

const alternance = [
  { id: "blockreleasetraining", label: "C'est quoi l'alternance" },
]

const headernav = [
  { id: "#agenda", label: "Agenda" },
  { id: "enrolment", label: "Admission" },
  { id: "contact", label: "Contact" },
]
export default function HeaderNav({ click, id, label }) {
  return (
    <nav className="lg:flex lg:justify-between ">
      <ul className="space-y-2 lg:mx-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
        <li className="w-32 lg:text-center lg:mx-auto lg:w-max">
          <HeaderSubNav
            id={id}
            label={label}
            title="Notre école"
            pages={ecole}
          />
        </li>
        <li className="w-28 lg:text-center lg:mx-auto lg:w-max">
          <HeaderSubNav
            id={id}
            label={label}
            title="Le programme"
            pages={program}
          />
        </li>
        <li className="w-32 lg:text-center lg:mx-auto lg:w-max">
          <HeaderSubNav
            id={id}
            label={label}
            title="Alternance"
            pages={alternance}
          />
        </li>
        {headernav.map(({ id, label }) => (
          <li
            key={`${id}`}
            onClick={click}
            className="flex text-center lg:items-center lg:mx-auto lg:w-max"
          >
            <PageLink id={id} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
