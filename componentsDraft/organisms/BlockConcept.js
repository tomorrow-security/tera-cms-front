import Link from "next/link"

import Button from "../../components/atoms/Button"

const Paragraph = ({ bold, gutterBottom, children }) => (
  <p className={`${gutterBottom ? "mb-4 md:mb-8" : "mb-2"} text-justify ${bold && "font-bold"}`}>
    {children}
  </p>
)

const LittleTitle = ({ children }) => (
  <div className="flex flex-row items-center my-2">
    <div className="w-5 h-5 mr-4 transform rotate-45 bg-tc-red"></div>
    <h2 className="text-lg xl:text-2xl font-bold">
      {children}
    </h2>
  </div>
)

export default function BlockConcept() {
  return (
    <section id="concept" className="pt-4 py-10 lg:py-20">
      <div className="md:container md:mx-auto">
        <div className="mx-4 flex flex-col lg:flex-row gap-4 md:gap-8">
          <ul className="md:pl-2 lg:w-2/3">
            <li>
              <LittleTitle>Tera Campus : un parcours professionnalisant et diplômant</LittleTitle>
              <Paragraph>
                Tera Campus est une école hybride d'informatique,
                et propose des formations diplômantes (en initial et en alternance)
                validées par un agrément officiel d'Etat (RNCP niveau 6 et 7).
              </Paragraph>
              <Paragraph gutterBottom>
                Nos cursus de 3 à 5 années (BAC+3 et BAC+5) orientés sur les
                technologies de l'information, réalisés et validés par des
                professionnels du secteur vous permettront d'acquérir non
                seulement de fortes compétences techniques, mais aussi des
                méthodes d'organisation, de collaboration et de communication
                indispensables à toute carrière professionnelle !
              </Paragraph>
            </li>
            <li>
              <LittleTitle>Un apprentissage hybride, depuis chez vous</LittleTitle>
              <Paragraph gutterBottom>
                La formation chez Tera Campus s'adresse avant tout à des personnes motivées.
                Les seuls prérequis sont un ordinateur, une webcam et une connexion internet.
              </Paragraph>
            </li>
            <li>
              <LittleTitle>À distance et tous ensemble, c'est possible !</LittleTitle>
              <Paragraph>
                Tout au long de l'année, Tera Campus organise trois Bivouacs de
                deux semaines complètes.
                En octobre, en janvier puis en mai, vous rejoindrez les autres
                étudiants de Tera Campus pour partager, créer et construire un
                esprit d'équipe au travers d'exercices de team building et de
                Hackathons.
                En améliorant la cohésion de groupe, nous améliorons aussi votre
                apprentissage pour mieux vous intégrer dans le monde professionnel.
              </Paragraph>
            </li>
          </ul>
          <div
            className="w-full h-64 bg-center bg-cover lg:w-1/2 lg:h-auto lg:hy-auto lg:mx-2 rounded-lg"
            style={{ backgroundImage: "url('https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/AdobeStock_63351346_j6v7kq')" }}
          ></div>
        </div>
        <div className="mx-auto mt-8 md:mt-12 w-max">
          <Link href="/brochure">
              <a>
                <Button label="Télécharger la brochure" />
              </a>
            </Link>
        </div>
      </div>
    </section>
  )
}
