import SubTitle from "../atoms/SubTitle"
import ExternalLink from "../molecules/ExternalLink"

export default function BlockBachelorPresentation() {
  return (
    <section id="agenda" className="py-10 lg:py-20">
      <div className="md:container md:mx-auto">
        <SubTitle
          title="Le Bachelor"
          iconPicture={{ backgroundImage: "url('bachelor.png')" }}
        />
        <div className="flex flex-col lg:flex-row-reverse ">
          <div className="mx-4 md:mx-0 md:pl-4 lg:w-2/3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold uppercase md:text-2xl">BAC+3</h3>
              <h4 className="text-xl font-bold md:text-2xl">
                Titre de niveau 6
              </h4>
              <h3 className="text-lg font-semibold md:text-xl">
                Bachelor Administrateur(rice) des Systèmes d'Information
              </h3>
              <h4 className="text-xl font-semibold md:text-2xl">
                Parcours en alternance
              </h4>
              <p className="text-sm">
                (Titre de niveau II - anicenne nomenclature)
              </p>
              <p className="text-sm">
                Titre d'administrateur des systèmes d'information délivré par
                Adales-Sup de Vinci - code NSF 326 - RNCP n°34022 - enregistré
                au RNCP par décision de France Compétences du 23 mai 2019
              </p>
            </div>
            <div className="py-4">
              <ExternalLink
                title="Fiche officielle"
                url="https://www.francecompetences.fr/recherche/rncp/34022/#ancre3"
                arai="Blocs de compétences de la fiche officielle du RNCP"
              />
            </div>
          </div>
          <div
            className="w-full h-64 bg-center bg-cover lg:w-1/2 lg:h-auto"
            style={{ backgroundImage: "url('code-sur-ordi.jpg')" }}
          ></div>
        </div>
      </div>
    </section>
  )
}