import PageLink from "../atoms/PageLink"
import LittleTitle from "../atoms/LittleTitle"
import Strong from "../atoms/Strong"
import Paragraphe from "../atoms/Paragraphe"

export default function BlockConcept() {
  return (
    <section id="concept" className="pt-4 md:py-10 lg:py-20">
      <div className="md:container md:mx-auto">
        <div className="flex flex-col lg:flex-row">
          <ul className="mx-4 md:mx-0 md:pl-2 lg:w-2/3">
            <li>
              <LittleTitle>Tera Campus c'est quoi ?</LittleTitle>
              <Paragraphe>
                <Strong>
                  Tera Campus est une école Supérieure d'Informatique en
                  télé-présentiel,&nbsp;
                </Strong>
                et propose des formations diplômantes&nbsp;
                <em className="not-italic font-bold ">
                  (en initial et en alternance)&nbsp;
                </em>
                validées par un agrément officiel d'Etat (RNPC niveau 6 et 7).
                Nos cursus de 3 à 5 années (BAC+3 et BAC+5) orientés sur les
                technologies de l'information, réalisés et validés par des
                professionnels du secteur te permettront d'acquérir non
                seulement de fortes compétences techniques, mais aussi des
                méthodes d'organisation, de collaboration et de communication
                indispensables à toute carrière professionnelle !
              </Paragraphe>
            </li>
            <li>
              <LittleTitle>Comment étudier avec Tera Campus ?</LittleTitle>
              <Paragraphe>
                <Strong>
                  La formation Tera Campus peut être suivie de n'importe
                  où,&nbsp;
                </Strong>
                les seuls prérequis sont un ordinateur et une connexion
                internet. Tous les cours seront animés par un formateur
                qualifié. Oublie les déplacements, cette fois-ci c'est l'école
                qui vient à toi !
              </Paragraphe>
            </li>
            <li>
              <LittleTitle>Vais-je rencontrer les étudiants ?</LittleTitle>
              <Paragraphe>
                Tout au long de l'année, Tera Campus organise trois Bivouacs de
                deux semaines complètes.&nbsp;
                <Strong>
                  En octobre, en janvier puis en mai, vous rejoindrez les autres
                  étudiants de Tera Campus pour partager, créer et construire un
                  esprit d'équipe au travers d'exercices de team building et de
                  Hackathons.&nbsp;
                </Strong>
                En améliorant la cohésion de groupe, nous améliorons aussi votre
                apprentissage pour mieux vous intégrer dans le monde
                professionnel.
              </Paragraphe>
            </li>
          </ul>
          <div
            className="w-full h-64 bg-center bg-cover lg:w-1/2 lg:h-auto lg:mx-2"
            style={{ backgroundImage: "url('students-collaboration.jpg')" }}
          ></div>
        </div>
        <div className="mx-auto mt-8 text-lg font-bold md:text-xl w-max md:mt-12">
          <PageLink id="brochure" label="Télécharger la brochure" />
        </div>
      </div>
    </section>
  )
}
