import BlockTitle from "../organisms/BlockTitle"
import NavList from "../molecules/NavList"
import PlanLink from "../atoms/PlanLink"
import SocialNav from "../molecules/SocialNav"

const ecole = [
  { id: "description", label: "Tera campus c'est quoi ?" },
  { id: "pedagogy", label: "Notre pédagogie" },
  { id: "bivouacs", label: "Bivouac" },
  { id: "schoolboard", label: "Conseil de perfectionnement" },
  { id: "handicap", label: "Etudier en situation de handicap" },
  { id: "quality", label: "Habilitation qualité" },
  { id: "faq", label: "FAQ" },
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
const legal = [
  { id: "cgv", label: "CGV - Conditions Générales de Ventes" },
  { id: "cga", label: "CGA - Conditions Générales d'Achats" },
  { id: "cgi", label: "CGI - Conditions Générales d'Inscription" },
  { id: "#", label: "Charte de l'utilisation du système d'informations (SI)" },
  { id: "schoolrules", label: "Règlement intérieur" },
  { id: "legacy", label: "Mentions légales" },
  { id: "studyrules", label: "Règlement des études" },
]

const autre = [
  { id: "#agenda", label: "agenda" },
  { id: "enrolment", label: "admission" },
  { id: "contact", label: "contact" },
]

export default function BlockPlan({ id, label }) {
  return (
    <section id="plan" className="px-4 pt-4 md:pt-10 md:pb-5">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Plan du site"
          iconPicture={{ backgroundImage: "url('plan.png')" }}
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
        <div className="mt-12 lg:mt-20 md:flex md:justify-between md:items-center">
          <p className="px-4 mx-auto my-4 text-lg border rounded md:mx-0 border-tc-red text-tc-red">
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
