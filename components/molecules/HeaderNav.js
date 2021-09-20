import PageLink from "../atoms/PageLink"

const pages1 = [
  { id: "#agenda", label: "Agenda" },
  { id: "career", label: "Carrières" },
  { id: "guides", label: "Nos guides" },
  { id: "program", label: "Programme" },
  { id: "brochure", label: "Brochure" },
  { id: "enrolment", label: "Inscription" },
  { id: "join", label: "Rejoins-nous" },
  { id: "#faq", label: "Faq" },
  { id: "contact", label: "Contact" },
]

export default function HeaderNav({ click }) {
  return (
    <nav className="pr-2 text-lg text-center lg:text-base xl:text-lg lg:flex lg:justify-between ">
      <ul className="space-y-2 lg:mx-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
        {pages1.map(({ id, label }) => (
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
