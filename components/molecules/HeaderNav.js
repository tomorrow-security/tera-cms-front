import PageLink from "../atoms/PageLink"
import HeaderSubNav from "./HeaderSubNav"

// TODO rassembler les datas communes au header et au plan
const pages1 = [
  { id: "concept", label: "Tera campus c'est quoi ?" },
  { id: "#", label: "Notre pédagogie" },
  { id: "#", label: "Bivouac" },
  { id: "#", label: "Conseil de perfectionnement" },
  { id: "#", label: "Etudier en situation de handicap" },
  { id: "#", label: "Habilitation qualité" },
  { id: "faq", label: "FAQ" },
]
const pages2 = [
  { id: "program", label: "BAC+3 Administrateur des systèmes d'information" },
  { id: "#", label: "Les partenaires" },
  { id: "career", label: "Les carrières" },
]
const pages3 = [
  { id: "blockreleasetraining", label: "C'est quoi l'alternance" },
]

const pages5 = [
  { id: "#agenda", label: "Agenda" },
  { id: "enrolment", label: "Admission" },
  { id: "contact", label: "Contact" },
]
export default function HeaderNav({ click, id, label }) {
  return (
    <nav className="text-center lg:flex lg:justify-between ">
      <ul className="space-y-2 lg:mx-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
        <li className="mx-auto text-center w-max">
          <HeaderSubNav
            id={id}
            label={label}
            title="Notre école"
            pages={pages1}
          />
        </li>
        <li className="mx-auto text-center w-max">
          <HeaderSubNav
            id={id}
            label={label}
            title="Le programme"
            pages={pages2}
          />
        </li>
        <li className="mx-auto text-center w-max">
          <HeaderSubNav
            id={id}
            label={label}
            title="Alternance"
            pages={pages3}
          />
        </li>
        {pages5.map(({ id, label }) => (
          <li
            key={`navmd-${id}`}
            onClick={click}
            className="mx-auto text-center w-max"
          >
            <PageLink id={id} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
