import LittleTitle from "../atoms/LittleTitle"
import TrainingReleaseFunding from "../molecules/TrainingReleaseFunding"
import Strong from "../atoms/Strong"
import Paragraphe from "../atoms/Paragraphe"

export default function ReleaseTrainingDef() {
  return (
    <section id="releasetrainingdef" className="py-5">
      <div className="md:container md:mx-auto">
        <div className="mx-4">
          <LittleTitle children=" L'alternance c'est quoi ?" />
          <Paragraphe>
            Un système de formation qui est fondé sur une phase pratique et une
            phase théorique qui alternent, permettant de se préparer plus
            efficacement à un métier.
            <div>
              <Strong>
                Étudier gratuitement tout en étant salarié : la vraie force de
                l’alternance !
              </Strong>
            </div>
          </Paragraphe>
          <div className="my-2 md:m-6 lg:mx-12">
            <TrainingReleaseFunding />
          </div>
          <Paragraphe>
            Durant cette période, l’alternant suit un ensemble de cours
            techniques en télé-présentiel, lui permettant de restituer son
            savoir au travers des missions professionnelles qui lui sont
            confiées au sein de l’entreprise. Le lien ainsi créé entre
            enseignement théorique et application en entreprise, permet
            d’exploiter les acquis immédiatement. Dans cette démarche, notre
            école s’engage à aider tous ses étudiants dans leur recherche
            d’entreprise, et propose deux solutions : le contrat d'apprentissage
            et le contrat de professionnalisation. Connaissez-vous le plan “1
            jeune, 1 solution” ? Une solution d’Etat pour former, accompagner et
            faciliter l’insertion professionnelle de tous les jeunes...
          </Paragraphe>
        </div>
      </div>
    </section>
  )
}
