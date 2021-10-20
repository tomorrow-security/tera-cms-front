import BlockTitle from "../atoms/BlockTitle"
import LitleTile from "../atoms/LittleTitle"
import Paragraphe from "../atoms/Paragraphe"
import Cta from "../atoms/Cta"

const steps = [
  "Dossier de candidature",
  "Test de positionnement (100 questions sous forme de QCM autour de l'IT)",
  "Résultats du test et entretien en visioconférence avec l'un de nos Guides",
  "Signature du contrat d'inscription",
]

export default function BlockAdmission() {
  return (
    <section id="admission" className="py-5">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Admission"
          iconPicture={{ backgroundImage: "url('tente-welcome.png')" }}
        />
        <div className="mx-4">
          <div className="p-4 text-2xl font-semibold text-center lg:text-4xl md:text-3xl">
            <p>Tera Campus, une école post-bac</p>
            <p>100% en télé-présentiel</p>
          </div>
          <div>
            <LitleTile children="Prérequis" />
            <Paragraphe>
              La formation Tera Campus s'adresse avant tout à des personnes
              motivées. Les seuls prérequis sont: un ordinateur et une bonne
              connexion à Internet
            </Paragraphe>
          </div>
          <div className="p-2 text-2xl text-center lg:text-4xl md:text-3xl">
            <p>Vous pouvez candidater gratuitement dès maintenant</p>
            <p className="text-lg lg:text-2xl md:text-xl">
              (hors procédure Parcoursup)
            </p>
          </div>
          <div className="py-2">
            <LitleTile children="Procédure d'inscription" />
            <Paragraphe>
              <ol className="list-decimal list-inside">
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </Paragraphe>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 mb-8 space-y-4 md:space-y-0 md:flex-row md:justify-around bg-tc-blue">
          <Cta title="Candidature en ligne" id="/enrolment" />
          <Cta title="Télécharger la brochure" id="/brochure" />
        </div>
      </div>
    </section>
  )
}
