import Image from "next/image"

import BlockTitle from "../atoms/BlockTitle"
import PartnersEuropean from "../atoms/PartnersEuropean"
import PartnersCollaboratives from "../atoms/PartnersCollaboratives"
import CarouselPartners from "../molecules/CarouselPartners"
import PageLink from "../atoms/PageLink"
import Program from "../molecules/Program"
import LittleTitle from "../atoms/LittleTitle"

// const cursus = [
// {
//   number: "1",
//   exp: "ère",
//   topics: [
//     "Système d'exploitation Windows",
//     "Système d'exploitation Linux",
//     "Algorithmique",
//     "Développement Web",
//     "Introduction aux bases de données",
//     "Introduction au réseau",
//     "Introduction au Cloud",
//     "Introduction à la cybersécurité",
//     "Gestion de projets",
//     "Savoir-être et intelligence émotionnelle",
//     "Anglais",
//   ],
// },
// {
//   number: "2",
//   exp: "ème",
//   topics: [
//     "Administration serveur",
//     "Méthodologie de développement",
//     "Développement d'applications",
//     "Introduction à la Data Science",
//     "Administration de base de données",
//     "Administration réseau",
//     "Administration Cloud",
//     "Cybersécurité : Ethical Hacking",
//     "Gestion de projets",
//     "Savoir-être et intelligence émotionnelle",
//     "Anglais",
//   ],
// },
// {
//   number: "3",
//   exp: "ème",
//   topics: [
//     "Expertise serveur",
//     "Développement mobile",
//     "Data science : Intelligence artificielle",
//     "Architecture de bases de données",
//     "Architecture réseau",
//     "Architecture Cloud",
//     "Cybersécurité : Defense in Depth",
//     "Gestion de projets",
//     "Savoir-être et intelligence émotionnelle",
//     "Anglais",
//   ],
// },
// {
//   number: "4",
//   exp: "ème",
//   topics: [
//     "Systèmes d'exploitation alternatifs",
//     "Développement et organisation",
//     "Data science : Machine learning",
//     "Expertise base de données",
//     "Expertise réseau",
//     "Automatisation Cloud",
//     "DevOps",
//     "Sécurité de l'information",
//     "Gestion de projets",
//     "Savoir-être et intelligence émotionnelle",
//     "Anglais",
//   ],
// },
// {
//   number: "5",
//   exp: "ème",
//   topics: [
//     "Évolution d'un système d'exploitation",
//     "Management du développement",
//     "Data Science : Big Data",
//     "Base de données : scaling",
//     "Architecture et choix technologiques",
//     "Création de Cloud",
//     "Sécurité et conformité (RGPD, ISO)",
//     "Management et économie des entreprises",
//     "Anglais",
//   ],
// },
// ]

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
          <div>
            <LittleTitle children="Les plus de Tera Campus" />
            <div className="grid w-full 2xl:w-11/12 2xl:mx-auto grid-programPlusRows grid-programPlusColumns gap-x-6">
              <h2 className="box-border col-start-2 row-start-1 py-2 text-xl font-medium">
                Le monde professionnel
              </h2>
              <div className="box-border flex items-center justify-center w-12 h-12 col-start-1 row-start-3">
                <p
                  className="w-full h-full text-center
                            text-xl text-tc-red font-bold p-1.5
                            border-2 border-tc-red rounded-full"
                >
                  1
                </p>
              </div>
              <p className="w-full col-start-2 row-span-3 row-start-2 px-2 py-4 text-white rounded bg-tc-blue">
                En complément de cet apprentissage technique, Tera Campus
                prépare tous ses étudiants à s&apos;adapter au monde
                professionnel d&apos;aujourd&apos;hui, pour pouvoir évoluer tout
                au long de sa carrière grâce aux mises en situation pour
                améliorer son équilibre de vie!
              </p>
              <div className="w-1/2 col-start-1 row-span-3 row-start-4 border-r-2 border-tc-red"></div>
              <h2 className="col-start-2 row-start-5 py-2 text-xl font-medium">
                English of course
              </h2>
              <div className="box-border flex items-center justify-center w-12 h-12 col-start-1 row-start-7">
                <p
                  className="w-full h-full text-center
                            text-xl text-tc-red font-bold p-1.5
                            border-2 border-tc-red rounded-full"
                >
                  2
                </p>
              </div>
              <p className="box-border w-full col-start-2 row-span-3 row-start-6 px-2 py-4 text-white rounded bg-tc-blue">
                Le programme Tera Campus est 100% en anglais à partir de la 4ème
                année.&nbsp; En effet, nous pensons que la langue anglaise est
                indispensable&nbsp; à maîtriser pour s&apos;adapter à tout
                environnement international.
              </p>
              <div className="flex flex-row w-1/2 col-start-1 row-span-3 border-r-2 row-start-8 flex-nowrap border-tc-red"></div>
              <h2 className="col-start-2 py-2 text-xl font-medium row-start-9">
                Les outils collaboratifs
              </h2>
              <div className="box-border flex items-center justify-center w-12 h-12 col-start-1 row-start-11">
                <p
                  className="w-full h-full text-center
                            text-xl text-tc-red font-bold p-1.5
                            border-2 border-tc-red rounded-full"
                >
                  3
                </p>
              </div>
              <p className="w-full col-start-2 row-span-3 px-2 py-4 text-white rounded row-start-10 bg-tc-blue">
                Et enfin,&nbsp; le monde d&apos;aujourd&apos;hui nécessite
                d&apos;adapter notre façon de travailler,&nbsp; et de
                collaborer.&nbsp; Tera Campus souhaite mettre un point
                d&apos;honneur à&nbsp; intégrer au sein de la formation,&nbsp;
                l&apos;utilisation des outils de collaboration
                professionnels&nbsp; permettant un travail commun en toute
                simplicité, même en distanciel !
              </p>
            </div>
          </div>
          <div className="flex items-center mb-8 flex-nowrap"></div>
          <CarouselPartners partners={<PartnersCollaboratives />} />
          {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {cursus.map((year, index) => (
              <div key={index} className="rounded shadow">
                <h3 className="p-2 text-2xl font-bold text-center text-white rounded-t bg-tc-red">
                  {year.number}
                  <sup>{year.exp}</sup>
                  &nbsp;année
                </h3>
                <ul className="p-2">
                  {year.topics.map((topic, index) => (
                    <li key={`${index}-${topic}`} className="my-2 text-sm">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
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
