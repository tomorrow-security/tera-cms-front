import Image from "next/image"

import BlockTitle from "../atoms/BlockTitle"
import PartnersEuropean from "../atoms/PartnersEuropean"
import PartnersCollaboratives from "../atoms/PartnersCollaboratives"
import CarouselPartners from "../molecules/CarouselPartners"
import PageLink from "../atoms/PageLink"
import Program from "../molecules/Program"

const axes = ["La technique", "Les soft skills", "La collaboration"]

const Strong = ({ children }) => (
  <strong className="font-bold text-tc-red">{children}</strong>
)

const Paragraph = ({ gutterBottom, children }) => (
  <p className={`${gutterBottom && "mb-4 md:mb-8 py-4 px-2"}`}>{children}</p>
)

export default function BlockProgramme() {
  return (
    <section id="programme" className="py-10 md:pt-20 md:pb-0">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Notre programme"
          iconPicture={{ backgroundImage: "url('programme.png')" }}
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
          <div className="flex items-center justify-between mb-8 flex-nowrap">
            <CarouselPartners partners={<PartnersEuropean />} />
          </div>

          <div className="flex items-center mb-8 flex-nowrap"></div>
          <CarouselPartners partners={<PartnersCollaboratives />} />
        </div>
        <section className="flex flex-col flex-nowrap md:flex-row md:justify-around md:items-center xl:w-9/12 xl:mx-auto">
          <div className="flex flex-col p-2 m-4 space-y-4 text-center text-white rounded xl:mr-12 2xl:mr-20 flex-nowrap bg-tc-blue md:w-1/2">
            <p className="text-xl">BAC+3</p>
            <h2 className="text-lg font-bold uppercase">
              Admnistrateur(rice) des systèmes d'information
            </h2>
            <div>
              <p>Titre RNCP de Niveau 6</p>
              <p>
                Formation en alternance : 4 jours par semaine en entreprise, 1
                jour à l'école.
              </p>
            </div>
            <p className="text-sm ">
              Contrat d’apprentissage ou de professionnalisation
            </p>
          </div>
          <div className="h-auto md:w-1/2">
            <Image
              src="/developpeurdevantordi.jpg"
              alt="développeur devant un ordinateur"
              width={1152}
              height={768}
              className="object-cover object-center w-full h-full lg:inline-flex"
            />
          </div>
        </section>
        <Program />
      </div>
    </section>
  )
}
