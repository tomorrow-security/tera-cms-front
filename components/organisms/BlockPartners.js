import BlockTitle from "../atoms/BlockTitle"
import LittleTitle from "../atoms/LittleTitle"
import PartnersEuropean from "../atoms/PartnersEuropean"
import PartnersCollaboratives from "../atoms/PartnersCollaboratives"
import CarouselPartners from "../molecules/CarouselPartners"
import PageLink from "../atoms/PageLink"

const axes = ["La technique", "Les soft skills", "La collaboration"]

const Strong = ({ children }) => (
  <strong className="font-bold text-tc-red">{children}</strong>
)

const Paragraph = ({ gutterBottom, children }) => (
  <p className={`${gutterBottom && "mb-4 md:mb-8 py-4 px-2"}`}>{children}</p>
)

export default function BlockPartners() {
  return (
    <section id="prerequis" className="py-10 md:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Nos partenaires"
          iconPicture={{ backgroundImage: "url('partenairs.png')" }}
        />
        <div className="mx-4">
          <div className="text-lg text-center">
            <Strong>
              Le programme Tera Campus s&apos;articule sur trois principaux axes
              de développement :
            </Strong>
          </div>
          <ul className="w-full my-12 md:my-14">
            {axes.map((axe, index) => (
              <li
                key={index}
                className="flex flex-row items-center justify-center w-full my-4 md:my-8"
              >
                <div className="w-5 h-5 mr-4 transform rotate-45 bg-tc-red"></div>
                <div className="py-1 text-2xl text-center text-white rounded-t w-52 md:w-1/3 bg-tc-blue rounded-b-xl">
                  {axe}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between mb-8 flex-nowrap">
            <CarouselPartners partners={<PartnersEuropean />} />
          </div>
          <Paragraph gutterBottom>
            A travers ses partenaires,&nbsp; Tera Campus veut te donner
            l&apos;opportunité d&apos;apprendre de tous les acteurs du
            marché.&nbsp; Notre approche est conceptuelle :&nbsp;
            <Strong>
              nous ne nous focalisons pas sur des technologies
              spécifiques,&nbsp; mais formons nos étudiants à savoir
              s&apos;adapter à n&apos;importe laquelle.
            </Strong>
          </Paragraph>
          <div className="mx-auto mb-4 text-xl font-bold w-max md:mb-8">
            <PageLink id="brochure" label="Télécharger la brochure" />
          </div>
          <Paragraph gutterBottom>
            Chez Tera Campus,&nbsp; il est possible d&apos;en apprendre plus sur
            l&apos;écosystème technique européen&nbsp; et nous privilégions les
            partenaires nationaux lorsque cela est possible.
          </Paragraph>

          <CarouselPartners partners={<PartnersCollaboratives />} />
        </div>
      </div>
    </section>
  )
}
