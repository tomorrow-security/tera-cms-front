import LitleTile from "../atoms/LittleTitle"
import Paragraphe from "../atoms/Paragraphe"
import StartOfTheSchool from "../molecules/StartOfTheSchool"
import CtaBand from "../molecules/CtaBand"

const steps = [
  "Dossier de candidature",
  "Test de positionnement (100 questions sous forme de QCM autour de l'IT)",
  "Résultats du test et entretien en visioconférence avec l'un de nos Guides",
  "Signature du contrat d'inscription",
]

export default function BlockAdmission() {
  return (
    <section id="admission" className="py-5">
      <div className="mx-4">
        <div className="p-4 text-2xl font-semibold text-center lg:text-4xl md:text-3xl">
          <p>Tera Campus, une école post-bac</p>
          <p>100% en télé-présentiel</p>
        </div>
        <div className="p-6 mx-auto my-8 text-xl border-2 rounded lg:text-2xl xl:text-3xl text-tc-red w-max border-tc-red">
          <StartOfTheSchool />
        </div>
        <div>
          <LitleTile children="Prérequis" />
          <Paragraphe>
            La formation Tera Campus s'adresse avant tout à des personnes
            motivées. Les seuls prérequis sont: un ordinateur et une bonne
            connexion à Internet
          </Paragraphe>
        </div>
        <div className="p-2 text-center">
          <Paragraphe xl>
            Vous pouvez candidater gratuitement dès maintenant
          </Paragraphe>
          <Paragraphe xl>(hors procédure Parcoursup)</Paragraphe>
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
      <CtaBand />
    </section>
  )
}
