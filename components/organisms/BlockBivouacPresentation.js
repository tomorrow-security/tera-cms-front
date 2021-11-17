import Paragraphe from "../atoms/Paragraphe"
import Bullet from "../atoms/Bullet"
import ListUl from "../atoms/ListUl"
import Cta from "../atoms/Cta"

export default function BlockBivouacPresentation() {
  return (
    <section id="bivouacpresentation" className="py-5">
      <div className="flex flex-col lg:flex-row">
        <div
          className="w-full h-64 bg-center bg-cover lg:w-1/2 lg:h-auto"
          style={{ backgroundImage: "url('etudiants-ardeche.jpg')" }}
        ></div>
        <div className="mx-4 lg:pl-4 lg:w-1/2">
          <Paragraphe lg>
            6 semaines en présentiel grâce aux 3 Bivouacs dans l'année!*
          </Paragraphe>
          <Paragraphe>
            Avec Tera Campus vous partirez en aventure au moins d'octobre, au
            mois de février et au mois de mai.
          </Paragraphe>
          <Bullet>Objectifs :</Bullet>
          <ListUl>
            <li>Instaurer un esprit d'équipe,</li>
            <li>Créer des synergies</li>
            <li>Acquérir des compétences managériales et comportementales.</li>
          </ListUl>
          <Paragraphe>
            Les lieux de rendez-vous des séminaires sont définis par Tera Campus
            à l'avance, et ils sont entièrement financés par l'école.
          </Paragraphe>
          <i>*frais inclus dans le prix de la formation</i>
          <div className="flex justify-center my-4">
            <Cta red title="Candidature" id="/enrolment" />
          </div>
        </div>
      </div>
    </section>
  )
}
