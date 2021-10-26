import SubTitle from "../atoms/SubTitle"
import LittleTitle from "../atoms/LittleTitle"
import Paragraphe from "../atoms/Paragraphe"
import ExternalLink from "../molecules/ExternalLink"

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

export default function BlockContract() {
  return (
    <section id="contratc" className="py-5">
      <div className="md:container md:mx-auto">
        <SubTitle
          title="Les types de contrats"
          iconPicture={{ backgroundImage: "url('contract.png')" }}
        />
        <div className="mx-4">
          <section id="traineeship" className="py-5">
            <LittleTitle children="Le contrat d'apprentissage" />
            <Paragraphe>
              <span className="font-semibold">Public concerné :&nbsp;</span>Les
              jeunes âgés de 16 à 29 ans révolus. (Hors cas exceptionnels :
              Apprentis préparant un diplôme ou titre supérieur à celui obtenu,
              travailleurs handicapés ou encore toutes personnes ayant un projet
              de création ou de reprise d’entreprise).
            </Paragraphe>
            <Paragraphe>
              La durée moyenne d’un contrat d’apprentissage varie de 6 à 12 mois
              et peut être prolongée jusqu’à 36 mois après accord préalable
              entre le centre de formation et l’employeur. Les bénéficiaires et
              la nature des qualifications sont obligatoirement définis par
              accords collectifs préalables.
            </Paragraphe>
            <ExternalLink
              title="Le contrat d'apprentissage"
              url="https://travail-emploi.gouv.fr/formation-professionnelle/formation-en-alternance-10751/apprentissage/contrat-apprentissage"
              aria="lien vers le site gouvernemental travail emploi"
            />
          </section>
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
              La durée moyenne du contrat de professionnalisation varie de 6 à
              12 mois et peut être prolongée jusqu’à 36 mois dans les cas
              suivants :
              <ul className="w-11/12 mx-auto list-inside list-square">
                {helps.map((help, index) => (
                  <li key={index}>{help}</li>
                ))}
              </ul>
            </Paragraphe>
            <ExternalLink
              title="Le contrat de professionnalisation"
              url="https://travail-emploi.gouv.fr/formation-professionnelle/formation-en-alternance-10751/contrat-de-professionnalisation"
              aria="lien vers le site gouvernemental travail emploi"
            />
          </section>
          <LittleTitle children="Aides spécifiques" />
          <Paragraphe>
            Des aides spécifiques peuvent également être attribuées aux
            alternants... (APL, l’aide “Mobili jeune”)
          </Paragraphe>
        </div>
      </div>
    </section>
  )
}
