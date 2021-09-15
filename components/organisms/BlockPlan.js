import BlockTitle from "../atoms/BlockTitle"
import NavList from "../molecules/NavList"

const pages1 = [
  { id: "concept", label: "Tera campus c'est quoi ?" },
  { id: "#", label: "Notre pédagogie" },
  { id: "#", label: "Bivouac" },
  { id: "#", label: "Conseil de perfectionnement" },
  { id: "#", label: "Etudier en situatin de handicap" },
  { id: "#", label: "Habilitation qualité" },
  { id: "faq", label: "FAQ" },
]
const pages2 = [
  { id: "program", label: "BAC+3 Administrateur des systèmes d'information" },
  { id: "#", label: "Les partenaires" },
  { id: "career", label: "Les carrières" },
]
const pages3 = [{ id: "#", label: "C'est quoi l'alternance" }]
const pages4 = [
  { id: "#", label: "CGV - Conditions Générales de Ventes" },
  { id: "#", label: "CGA - Conditions Générales d'Achats" },
  { id: "#", label: "CGI - Conditions Générales d'Inscription" },
  { id: "#", label: "Charte de l'utilisation du systè_me d'informations (SI)" },
  { id: "#", label: "Règlement intérieur" },
  { id: "legacy", label: "Mentions légales" },
  { id: "#", label: "Règlement des études" },
]

export default function BlockPlan({ id, label }) {
  return (
    <section id="plan" className="pt-4 mx-4 md:py-10 lg:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Plan du site"
          iconPicture={{ backgroundImage: "url('plan.png')" }}
        />
      </div>
      <div className="flex space-x-3 justify-evenly md:container md:mx-auto">
        <div className="mt-8 text-lg md:mt-12">
          <NavList id={id} label={label} title="Notre école" pages={pages1} />
        </div>
        <div className="mt-8 text-lg md:mt-12">
          <NavList id={id} label={label} title="Le programme" pages={pages2} />
        </div>
        <div className="mt-8 text-lg md:mt-12">
          <NavList id={id} label={label} title="Alternance" pages={pages3} />
        </div>
        <div className="mt-8 text-lg md:mt-12">
          <NavList
            id={id}
            label={label}
            title="Règlement et mantions légales"
            pages={pages4}
          />
        </div>
      </div>
    </section>
  )
}
