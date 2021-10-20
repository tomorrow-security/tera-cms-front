import BlockTitle from "../atoms/BlockTitle"
import LitleTile from "../atoms/LittleTitle"
import Paragraphe from "../atoms/Paragraphe"
import Cta from "../atoms/Cta"

import Registration from "../molecules/Registration"

export default function BlockAdmission() {
  return (
    <section id="admission" className="py-5">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Admission"
          iconPicture={{ backgroundImage: "url('tente-welcome.png')" }}
        />
        <div className="mx-4">
          <div className="p-4 text-2xl font-semibold text-center lg:text-4xl md:text-3xl">
            <p>Tera Campus, une école post-bac</p>
            <p>100% en télé-présentiel</p>
          </div>
          <div className="mx-4">
            <LitleTile children="Prérequis" />
            <Paragraphe>
              La formation Tera Campus s'adresse avant tout à des personnes
              motivées. Les seuls prérequis sont: un ordinateur et une bonne
              connexion à Internet
            </Paragraphe>
          </div>
          <Registration />
          <div className="flex justify-around p-8 bg-tc-blue">
            <Cta title="Candidature en ligne" id="/enrolment" />
            <Cta title="Télécharger la brochure" id="/brochure" />
          </div>
        </div>
      </div>
    </section>
  )
}
