import PageLink from "../atoms/PageLink"

const Paragraph = ({ bold, gutterBottom, children }) => (
  <p
    className={`${gutterBottom && "mb-4 md:mb-8"}
		ml-9 text-left
		${bold && "font-bold"}`}
  >
    {children}
  </p>
)

const Strong = ({ children }) => (
  <strong className="font-bold text-tc-red">{children}</strong>
)

const LittleTitle = ({ children }) => (
  <div className="flex flex-row items-center my-2">
    <div className="w-5 h-5 mr-4 transform rotate-45 bg-tc-red"></div>
    <h2 className="w-3/4 text-lg font-bold text-tc-blue sm:text-xl xl:text-2xl">
      {children}
    </h2>
  </div>
)

export default function BlockConcept() {
  return (
    <section id="concept" className="pt-4 md:py-10 lg:py-20">
      <div className="md:container md:mx-auto">
        <div className="flex flex-col lg:flex-row">
          <ul className="mx-4 md:mx-0 md:pl-2 lg:w-2/3">
            <li>
              <LittleTitle>Tera Campus c'est quoi ?</LittleTitle>
              <Paragraph gutterBottom>
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
                professionnels du secteur vous permettront d'acquérir non
                seulement de fortes compétences techniques, mais aussi des
                méthodes d'organisation, de collaboration et de communication
                indispensables à toute carrière professionnelle !
              </Paragraph>
            </li>
            <li>
              <LittleTitle>Comment étudier avec Tera Campus ?</LittleTitle>
              <Paragraph gutterBottom>
                <Strong>
                  La formation Tera Campus peut être suivie de n'importe où avec
                  un seul pré-requis : un ordinateur, une webcam et une connexion
                  internet.&nbsp;
                </Strong>
                Tous les cours seront animés par un formateur qualifié. Oubliez
                les déplacements, cette fois-ci c'est l'école qui vient à vous !
              </Paragraph>
            </li>
            <li>
              <LittleTitle>Vais-je rencontrer les étudiants ?</LittleTitle>
              <Paragraph gutterBottom>
                Tout au long de l'année, Tera Campus organise trois Bivouacs de
                deux semaines complètes.&nbsp;
                <Strong>
                  En octobre, en janvier puis en mai, vous rejoindrez les autres
                  étudiants de Tera Campus pour partager, créer et construire un
                  esprit d'équipe au travers d'exercices de team building et de
                  Hackathons.&nbsp;
                </Strong>
                En améliorant la cohésion de groupe, nous améliorons aussi votre
                apprentissage pour mieux vous intégrer dans le monde professionnel.
              </Paragraph>
            </li>
          </ul>
          <div
            className="w-full h-64 bg-center bg-cover lg:w-1/2 lg:h-auto lg:hy-auto lg:mx-2"
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
