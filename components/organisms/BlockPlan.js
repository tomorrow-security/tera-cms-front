import BlockTitle from "../atoms/BlockTitle"
import NavList from "../molecules/NavList"
import SubLink from "../atoms/SubLink"

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
  { id: "brochure", label: "La brochure" },
]
const pages3 = [
  { id: "blockreleasetraining", label: "C'est quoi l'alternance" },
]
const pages4 = [
  { id: "#", label: "CGV - Conditions Générales de Ventes" },
  { id: "#", label: "CGA - Conditions Générales d'Achats" },
  { id: "#", label: "CGI - Conditions Générales d'Inscription" },
  { id: "#", label: "Charte de l'utilisation du systè_me d'informations (SI)" },
  { id: "#", label: "Règlement intérieur" },
  { id: "legacy", label: "Mentions légales" },
  { id: "#", label: "Règlement des études" },
]

const pages5 = [
  { id: "#agenda", label: "agenda" },
  { id: "enrolment", label: "admission" },
  { id: "contact", label: "contact" },
]

export default function BlockPlan({ id, label }) {
  return (
    <section id="plan" className="px-4 pt-4 md:py-10 lg:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Plan du site"
          iconPicture={{ backgroundImage: "url('plan.png')" }}
        />
        <div className="flex flex-col pt-2 pb-4 space-y-8 text-sm md:pt-6 md:space-x-2 md:space-y-0 md:flex-row md:flex-wrap ">
          <div className="md:flex-1">
            <NavList id={id} label={label} title="Notre école" pages={pages1} />
          </div>
          <div className="md:flex-1">
            <NavList
              id={id}
              label={label}
              title="Le programme"
              pages={pages2}
            />
          </div>
          <div className="md:flex-1">
            <NavList id={id} label={label} title="Alternance" pages={pages3} />
          </div>
          <div className="md:flex-1">
            <NavList
              id={id}
              label={label}
              title="Règlement et mentions légales"
              pages={pages4}
            />
          </div>
        </div>
        <div className="md:flex md:justify-center">
          <ul className="space-y-2 font-semibold uppercase md:space-y-0 md:flex md:w-max-content md:text-center md:space-x-24">
            {pages5.map(({ id, label }) => (
              <li key={`navmd-${id}`}>
                <SubLink id={id} label={label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
