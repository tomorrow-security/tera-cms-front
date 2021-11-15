import SubTitle from "../atoms/SubTitle"
import NavList from "./NavList"
import PlanLink from "../atoms/PlanLink"
import SocialNav from "./SocialNav"

const ecole = [
  { id: "description", label: "A propos de Tera Campus" },
  { id: "pedagogy", label: "Notre pédagogie" },
  { id: "bivouacs", label: "Bivouac" },
  { id: "handicap", label: "Etudier en situation de handicap" },
  { id: "rate", label: "Tarifs" },
  { id: "faq", label: "FAQ" },
]
const program = [
  {
    id: "program/#programtc3",
    label: "BAC+3 Administrateur des systèmes d'information",
  },
  { id: "partners", label: "Les partenaires" },
  { id: "program/#career", label: "Les carrières" },
]
const alternance = [{ id: "releasetraining", label: "C'est quoi l'alternance" }]
const legal = [
  { id: "cgv", label: "CGV - Conditions Générales de Ventes" },
  { id: "legal", label: "Mentions légales" },
  { id: "studyrules", label: "Règlement des études" },
  { id: "privacy", label: "Politique de confidentialité" },
]

const autre = [
  { id: "#agenda", label: "actualités" },
  { id: "enrolment", label: "admission" },
  { id: "contact", label: "contact" },
]

export default function Plan({ id, label }) {
  return (
    <section id="plan" className="py-3">
      <div className="mx-4">
        <SubTitle
          title="Plan du site"
          iconPicture={{ backgroundImage: "url('plan-blue.png')" }}
        />
        <div className="md:relative">
          <div className="flex flex-col mt-2 mb-4 space-y-8 text-sm md:mt-6 md:space-x-2 md:space-y-0 md:flex-row md:flex-wrap md:justify-around">
            <div className="md:w-1/5">
              <NavList
                id={id}
                label={label}
                title="Notre école"
                pages={ecole}
              />
            </div>
            <div className="md:w-1/5">
              <NavList
                id={id}
                label={label}
                title="Le programme"
                pages={program}
              />
            </div>
            <div className="md:w-1/5">
              <NavList
                id={id}
                label={label}
                title="Alternance"
                pages={alternance}
              />
            </div>
            <div className="md:w-1/5">
              <NavList
                id={id}
                label={label}
                title="Règlement et mentions légales"
                pages={legal}
              />
            </div>
          </div>
          <div className="md:bottom-6 lg:bottom-2 md:absolute md:mx-auto md:w-1/2 md:inset-x-0">
            <ul className="space-y-2 font-semibold uppercase md:space-y-0 md:flex md:w-max-content md:text-center md:justify-evenly">
              {autre.map(({ id, label }) => (
                <li key={`${id}`}>
                  <PlanLink id={id} label={label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-4 mt-12 lg:mt-20 md:flex md:justify-between md:items-center">
          <p className="px-4 mx-auto my-4 text-lg text-center border rounded md:mx-0 border-tc-red text-tc-red">
            Suivez-nous
          </p>
          <div className="flex-grow">
            <SocialNav />
          </div>
        </div>
      </div>
    </section>
  )
}
