import PartnersEuropean from "../atoms/PartnersEuropean"
import PartnersCollaboratives from "../atoms/PartnersCollaboratives"
import CarouselPartners from "../molecules/CarouselPartners"
import Approach from "../molecules/Approach"
import Strong from "../atoms/Strong"
import Paragraphe from "../atoms/Paragraphe"

export default function BlockPartners() {
  return (
    <section id="partners" className="py-5">
      <div className="md:container md:mx-auto">
        <div className="mx-4">
          <Approach />
          <CarouselPartners partners={<PartnersEuropean />} />
          <Paragraphe>
            A travers ses partenaires,&nbsp; Tera Campus veut te donner
            l&apos;opportunité d&apos;apprendre de tous les acteurs du
            marché.&nbsp; Notre approche est conceptuelle :&nbsp;
            <Strong>
              nous ne nous focalisons pas sur des technologies
              spécifiques,&nbsp;mais formons nos étudiants à savoir
              s&apos;adapter à n&apos;importe laquelle.
            </Strong>
          </Paragraphe>
          <div className="mx-auto mb-4 text-xl font-bold w-max md:mb-8"></div>
          <Paragraphe>
            Chez Tera Campus,&nbsp;il est possible d&apos;en apprendre plus sur
            l&apos;écosystème technique européen&nbsp;et nous privilégions les
            partenaires nationaux lorsque cela est possible.
          </Paragraphe>
          <CarouselPartners partners={<PartnersCollaboratives />} />
        </div>
      </div>
    </section>
  )
}
