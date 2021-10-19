import LittleTitle from "../atoms/LittleTitle"
import Paragraphe from "../atoms/Paragraphe"

const publics = [
  "Jeunes âgés de 16 à 25 ans révolus en complément de leur formation",
  "Bénéficiaires du RSA",
  "Bénéficiaires de l'allocation de solidarité spécifique (ASS)",
  "Bénéficiaires de l'allocation aux adultes handicapés (AAH)",
  "Personnes sortant d'un contrat unique d'insertion (CUI)",
]

const helps = [
  "Demandeurs d'emploi de 26 ans et plus inscrits depuis plus d'un an à Pôle emploi.",
  "Bénéficiaires du revenu de solidarité active (RSA), de l'allocation de solidarité spécifique (ASS) ou de l'allocation aux adultes handicapés (AAH)",
  "Personnes sortant d'un contrat unique d'insertion (CUI)",
]

export default function Professionalization() {
  return (
    <section id="professionalization" className="py-5">
      <LittleTitle children="Le contrat de professionnalisation" />
      <Paragraphe>
        <span className="font-semibold">Public concerné :&nbsp;</span>
        <ul className="list-inside list-square">
          {publics.map((people, index) => (
            <li key={index}>{people}</li>
          ))}
        </ul>
      </Paragraphe>
      <Paragraphe>
        La durée moyenne du contrat de professionnalisation varie de 6 à 12 mois
        et peut être prolongée jusqu’à 36 mois dans les cas suivants :
        <ul className="w-11/12 mx-auto list-inside list-square">
          {helps.map((help, index) => (
            <li key={index}>{help}</li>
          ))}
        </ul>
      </Paragraphe>
    </section>
  )
}
