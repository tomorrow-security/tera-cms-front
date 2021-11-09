import SubTitle from "../atoms/SubTitle"
import ParagrapheXl from "../atoms/ParagrapheXl"
import Paragraphe from "../atoms/Paragraphe"
import Bullet from "../atoms/Bullet"
import List from "../atoms/List"
import Cta from "../atoms/Cta"

export default function BlockBivouacPresentation() {
  return (
    <section id="bivouacpresentation" className="py-5">
      <SubTitle
        title="Présentation des bivouacs"
        iconPicture={{ backgroundImage: "url('feu-de-camp.png')" }}
      />
      <div className="flex flex-col lg:flex-row">
        <div
          className="w-full h-64 bg-center bg-cover lg:w-1/2 lg:h-auto"
          style={{ backgroundImage: "url('etudiants-ardeche.jpg')" }}
        ></div>
        <div className="mx-4  lg:pl-4 lg:w-1/2">
          <ParagrapheXl>
            6 semaines en présentiel grâce aux 3 Bivouacs dans l'année!*
          </ParagrapheXl>
          <Paragraphe>
            Avec Tera Campus vous partirez en aventure au moins d'octobre, au
            mois de février et au mois de mai.
          </Paragraphe>
          <Bullet>Objectifs :</Bullet>
          <List>
            <li>Instaurer un esprit d'équipe,</li>
            <li>Créer des synergies</li>
            <li>Acquérir des compétences managériales et comportementales.</li>
          </List>
          <Paragraphe>
            Les lieux de rendez-vous des séminaires sont définit par Tera Campus
            à l'avance, et ils sont entièrement financés par l'école.
          </Paragraphe>
          <i>*frais inclus dans le prix de la formation</i>
          <div className="m-4 mx-auto border-2 rounded w-max border-tc-blue">
            <Cta title="Candidature" id="/enrolment" />
          </div>
        </div>
      </div>
    </section>
  )
}
