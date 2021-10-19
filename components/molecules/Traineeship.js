import LittleTitle from "../atoms/LittleTitle"
import Paragraphe from "../atoms/Paragraphe"

export default function Traineeship() {
  return (
    <section id="traineeship" className="py-5">
      <LittleTitle children="Le contrat d'apprentissage" />
      <Paragraphe>
        <span className="font-semibold">Public concerné :&nbsp;</span>Les jeunes
        âgés de 16 à 29 ans révolus. (Hors cas exceptionnels : Apprentis
        préparant un diplôme ou titre supérieur à celui obtenu, travailleurs
        handicapés ou encore toutes personnes ayant un projet de création ou de
        reprise d’entreprise).
      </Paragraphe>
      <Paragraphe>
        La durée moyenne d’un contrat d’apprentissage varie de 6 à 12 mois et
        peut être prolongée jusqu’à 36 mois après accord préalable entre le
        centre de formation et l’employeur. Les bénéficiaires et la nature des
        qualifications sont obligatoirement définis par accords collectifs
        préalables.
      </Paragraphe>
    </section>
  )
}
