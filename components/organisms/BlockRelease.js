import LittleTitle from "../atoms/LittleTitle"
import Paragraphe from "../atoms/Paragraphe"
import Strong from "../atoms/Strong"
import ExternalLink from "../molecules/ExternalLink"

export default function BlockRelease() {
  return (
    <section id="blockrelease" className="py-5">
      <section id="DayReleaseTraining" className="py-5">
        <div className="md:container md:mx-auto">
          <section className="mt-10 md:flex md:flex-row md:justify-between md:items-center">
            <div className="mx-4 md:w-1/2">
              <LittleTitle children="L'alternance chez TERA CAMPUS" />
              <Paragraphe>
                Dès la troisième année (BAC +2/3), l’ensemble des formations
                Tera Campus sont dispensées à 100% par alternance. Cette période
                est rythmée sur un cycle hebdomadaire de&nbsp;
                <em className="not-italic font-semibold">
                  1 jour de cours en télé-présentiel et 4 jours en entreprise
                </em>
              </Paragraphe>
            </div>
            <div
              className="w-screen bg-center bg-no-repeat bg-cover h-33vh sm:h-50vh md:bg-contain md:bg-right md:w-1/2"
              style={{ backgroundImage: "url('groupe-ordi.jpg')" }}
            ></div>
          </section>
        </div>
      </section>
      <section id="releasetrainingdef" className="py-5">
        <div className="md:container md:mx-auto">
          <div className="mx-4">
            <LittleTitle children=" L'alternance c'est quoi ?" />
            <Paragraphe>
              Un système de formation qui est fondé sur une phase pratique et
              une phase théorique qui alternent, permettant de se préparer plus
              efficacement à un métier.
              <div>
                <Strong>
                  Étudier gratuitement tout en étant salarié : la vraie force de
                  l’alternance !
                </Strong>
              </div>
            </Paragraphe>
            <div className="my-2 md:m-6 lg:mx-12">
              <section id="trainingreleasefunding">
                <div className="p-2 border border-opacity-50 rounded md:container md:mx-auto lg:text-lg 2xl:text-xl md:bg-tc-blue md:bg-opacity-25 border-tc-blue">
                  <p className="font-semibold">
                    Le coût total de la formation est pris en charge par
                    l’entreprise.
                  </p>
                  <Paragraphe className="mt-4">
                    Avec un double statut, l’alternant profite du statut
                    d’étudiant (formation, réduction pour les activités
                    culturelles, transports) et du statut de salarié
                    (rémunération, congés payés, insertion professionnelle).
                  </Paragraphe>
                  <Paragraphe>
                    Contrats longue durée (de 6 à 24 mois).{" "}
                  </Paragraphe>
                </div>
              </section>
            </div>
            <Paragraphe>
              Durant cette période, l’alternant suit un ensemble de cours
              techniques en télé-présentiel, lui permettant de restituer son
              savoir au travers des missions professionnelles qui lui sont
              confiées au sein de l’entreprise. Le lien ainsi créé entre
              enseignement théorique et application en entreprise, permet
              d’exploiter les acquis immédiatement. Dans cette démarche, notre
              école s’engage à aider tous ses étudiants dans leur recherche
              d’entreprise, et propose deux solutions : le contrat
              d'apprentissage et le contrat de professionnalisation.
              Connaissez-vous le plan “1 jeune, 1 solution” ? Une solution
              d’Etat pour former, accompagner et faciliter l’insertion
              professionnelle de tous les jeunes...
            </Paragraphe>
            <ExternalLink
              title="#1jeune1solution"
              url="https://www.1jeune1solution.gouv.fr/"
              aria="lien vars le site gouvernemental 1jeune1solution"
            />
          </div>
        </div>
      </section>
    </section>
  )
}
