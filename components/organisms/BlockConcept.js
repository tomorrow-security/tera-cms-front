import Cta from '../atoms/Cta'
import IconCurvedArrow from '../atoms/IconCurvedArrow'

const Paragraph = ({ bold, gutterBottom, children }) => (
    <p
        className={`${gutterBottom && 'mb-4 md:mb-8'}
        ml-9 text-left
        ${bold && 'font-bold'}`}>
        {children}
    </p>
)

const Strong = ({ children }) => <strong className="font-bold text-tc-red">{children}</strong>

const LittleTitle = ({ children }) => (
    <div className="flex flex-row items-center my-2">
        <div className="w-5 h-5 mr-4 transform rotate-45 bg-tc-red"></div>
        <h2 className="text-lg font-bold text-tc-blue sm:text-xl xl:text-2xl">{children}</h2>
    </div>
)

export default function BlockConcept() {
  return (
    <section id="concept" className="pt-4 md:py-10 lg:py-20">
        <div className="md:container md:mx-auto">
        <div className="relative flex flex-col justify-center max-w-full mx-auto mb-8 text-xl font-bold text-center sm:text-2xl border-box w-max">
                <div className="absolute w-16 h-16 transform sm:w-20 sm:h-20 bottom-3 right-7 text-tc-blue -rotate-6">
                    <IconCurvedArrow />
                </div>
                <div className="px-6">
                    <div>Prochaine rentrée académique</div>
                    <div>le lundi 04 octobre 2021</div>
          </div>
                <Cta />
            </div>
            <div className="flex flex-col lg:flex-row">
                <ul className="mx-2 md:mx-0 md:pl-2 lg:w-2/3">
                    <li>
                        <LittleTitle>
                            Tera Campus c&apos;est quoi ?
                        </LittleTitle>
                        <Paragraph gutterBottom>
                            <Strong>
                                Tera Campus est une école Supérieure d&apos;Informatique en télé-présentiel,&nbsp;
                            </Strong>
                            et propose des formations diplômantes&nbsp;
                            <em className="not-italic font-bold ">
                                &#x00028;
                                <span className="underline">
                                    en initial et en alternance
                                </span>
                                &#x00029;&nbsp;
                            </em>
                            validées par un agrément officiel d&apos;Etat &#x00028;RNPC niveau 6 et 7&#x00029;.&nbsp;
                            Nos cursus de 3 à 5 années &#x00028;BAC+3 et BAC+5&#x00029;&nbsp;
                            orientés sur les technologies de l&apos;information,&nbsp;
                            réalisés et validés par des professionnels du secteurs,&nbsp;
                            qui te permettront d&apos;acquérir non seulement de fortes compétences techniques,&nbsp;
                            mais aussi des méthodes d'organisation,&nbsp;
                            de collaboration et de communication indispensables à toute carrière professionnelle !
                        </Paragraph>
                    </li>
                    <li>
                        <LittleTitle>
                            Comment étudier avec Tera Campus ?
                        </LittleTitle>
                        <Paragraph gutterBottom>
                            <Strong>
                                La formation Tera Campus peut être suivie de n&apos;importe où,&nbsp;
                                le seul pré-requis : un ordinateur et une connexion internet.&nbsp;
                            </Strong>
                            Tous les cours seront animés par un formateur qualifié.&nbsp;
                            Oublie les déplacements, cette fois-ci c&apos;est l&apos;école qui vient à toi !
                        </Paragraph>
                    </li>
                    <li>
                        <LittleTitle>
                            Vais-je rencontrer les étudiants ?
                        </LittleTitle>
                        <Paragraph gutterBottom>
                            Tout au long de l&apos;année, Tera Campus organise trois Bivouacs de
                            deux semaines complètes.&nbsp;
                            <Strong>
                                En octobre, en février puis en mai,&nbsp;
                                tu rejoindras les autres étudiants de Tera Campus pour partager,&nbsp;
                                créer et construire un esprit d&apos;équipe au&nbsp;
                                travers d&apos;exercices de team building et de Hackathons.&nbsp;
                            </Strong>
                            En améliorant la cohésion de groupe, nous améliorons aussi ton&nbsp;
                            apprentissage pour mieux t&apos;intégrer dans le monde professionnel.
                        </Paragraph>
                    </li>
                </ul>
                <div
                    className="w-full h-64 bg-center bg-cover lg:w-1/2 lg:h-auto lg:hy-auto lg:mx-2"
                    style={{ backgroundImage: "url('students-collaboration.jpg')" }}
                ></div>
            </div>
        </div>
    </section>
  )
}
