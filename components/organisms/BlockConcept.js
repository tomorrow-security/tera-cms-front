import LittleTitle from "../atoms/LittleTitle"
import Strong from "../atoms/Strong"
import Paragraphe from "../atoms/Paragraphe"
import SubTitle from "../atoms/SubTitle"
import ParagrapheXl from "../atoms/ParagrapheXl"
import InternalLink from "../molecules/InternalLink"

export default function BlockConcept() {
  return (
    <section id="concept" className="py-5">
      <SubTitle
        title="Future Of Learning"
        iconPicture={{ backgroundImage: "url('book-and-world.png')" }}
      />
      <div className="px-4 mb-4 bg-tc-blue bg-opacity-20 md:rounded md:flex md:justify-between md:items-center">
        <div>
          <div className="font-bold">
            <Paragraphe>Alternance pour qui ? Pourquoi ?</Paragraphe>
          </div>
          <ParagrapheXl>
            &#x000C9;tudier gratuitement et avoir un statut de salarié c'est
            possible !
          </ParagrapheXl>
        </div>
        <div className="pb-1 mx-auto md:pb-0 md:mr-32 w-max">
          <InternalLink
            whiteR
            label="Je me renseigne"
            id="releasetraining"
            background="white"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <ul className="mx-4 lg:w-3/4">
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
              validées par un agrément officiel d'Etat (RNPC niveau 6 et 7). Nos
              cursus de 3 à 5 années (BAC+3 et BAC+5) orientés sur les
              technologies de l'information, réalisés et validés par des
              professionnels du secteur, vous permettront d'acquérir non
              seulement de fortes compétences techniques, mais aussi des
              méthodes d'organisation, de collaboration et de communication
              indispensables à toute carrière professionnelle !
            </Paragraphe>
          </li>
          <li>
            <LittleTitle>Comment étudier avec Tera Campus ?</LittleTitle>
            <Paragraphe>
              <Strong>
                La formation chez Tera Campus s'adresse avant tout à des
                personnes motivées.&nbsp;
              </Strong>
              Les seuls prérequis sont un ordinateur et une connexion internet.
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
        {/* //TODO voir pour changer l'image car mauvaise qualité de rendu */}
        <div
          className="w-full h-64 bg-center bg-cover lg:w-1/2 lg:h-auto"
          style={{ backgroundImage: "url('students-collaboration.jpg')" }}
        ></div>
      </div>
    </section>
  )
}
