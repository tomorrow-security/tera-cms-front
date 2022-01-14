import axios from "axios"
import Head from "next/head"
import Link from "next/link"

import Block from "../components/atoms/Block"
import Button from "../components/atoms/Button"

import BlockAgenda from "../componentsDraft/organisms/BlockAgenda"
import BlockConcept from "../componentsDraft/organisms/BlockConcept"
import BlockFaq from "../componentsDraft/organisms/BlockFAQ"
import Hero from "../componentsDraft/organisms/Hero"

const pageTitle = "École hybride supérieure d'informatique - Tera Campus"
const pageDescription =
  "École hybride supérieure d'informatique, Tera Campus propose des formations diplômantes Bac+3 et Bac+5 en développement informatique et infrastructure."
const pageUrl = "https://tera-campus.com"

function Card({ title, content, imageUrl }) {
  return (
    <div className="w-full bg-white rounded-3xl shadow-lg overflow-hidden">
      <img src={imageUrl} className="h-96 sm:rounded-t-3xl object-cover object-center w-full" />
      <div className="p-4">
        <h5 className="text-lg md:text-xl font-semibold mb-2">{title}</h5>
        <p className="mb-4 text-sm md:text-base text-justify">{content}</p>
      </div>
    </div>
  )
}

export function CardOverImage({ imageUrl, imageAlt, chipPrimary, chipSecondary, title, content, cta }) {
  return (
    <div className="antialiased text-gray-900">
      <div>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-72 object-cover object-center rounded-lg"
        />
        <div className="relative px-4 -mt-16">
          <div className="bg-white px-2 py-4 lg:p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-baseline">
              <span className="px-4 py-2 bg-tc-blue-navy text-white text-xs md:text-sm inline-block rounded-full uppercase font-semibold tracking-wide">
                { chipPrimary }
              </span>
              <div className="ml-2 text-gray-600 text-xs md:text-sm font-semibold tracking-wider">
                { chipSecondary }
              </div>
            </div>
            <h4 className="mt-4 lg:mt-8 text-center text-xl font-bold uppercase leading-tight">
              { title }
            </h4>
            <p className="mt-2 lg:mt-8 text-center">
              { content }
            </p>
            {
              cta ? (<div className="mt-4 lg:mt-8 flex justify-center">{ cta }</div>) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export const SeparatorWithTitle = ({ title }) => (
  <div className="bg-tc-blue-navy">
    <div className="container mx-auto p-4 lg:py-8">
        <p className="text-center text-white text-2xl sm:text-2xl md:text-4xl font-bold">{title}</p>
    </div>
  </div>
)

function Index({ agenda, questions }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main>
        <Hero />

        <BlockAgenda events={agenda} />

        <section id="concept">
          <Block darken>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <CardOverImage
                  imageUrl="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/man-working_ltmrf6"
                  imageAlt="random image"
                  chipPrimary="Bac +3"
                  chipSecondary="Titre RNCP de niveau 6"
                  title="Administrateur des Systèmes d'Information"
                  content="Donnez de la hauteur à vos ambitions en devenant un administrateur polyvalent et reconnu du monde de la tech grâce au Bachelor ASI."
                  cta={
                    <Link href="/diplomes/administrateur-systemes-information"><a><Button label="En savoir plus" /></a></Link>
                  }
                />
              </div>
              <div className="relative w-full lg:w-1/2">
                <CardOverImage
                  imageUrl="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/woman-in-datacenter_cgxeck"
                  imageAlt="random image"
                  chipPrimary="Bac +5"
                  chipSecondary="Titre RNCP de niveau 7"
                  title="Expert des Systèmes d'Information"
                  content="Atteignez le sommet de votre potentiel en acquérant les compétences d'encadrement et d'expertise informatique dispensés dans le cursus ESI."
                  cta={
                    <div className="p-4 text-center font-semibold bg-red-300 rounded cursor-default">
                      Ouverture en 2022
                    </div>
                  }
                />
              </div>
            </div>
            </Block>
        </section>

        <SeparatorWithTitle title="Avec l'alternance, étudier et être salarié c'est possible !" />

        <section id="bivouacs" className="py-4 md:py-10 lg:py-20 bg-tc-lavender">
          <div className="md:container md:mx-auto">
            <div className="mx-4 py-4 lg:py-0 flex flex-col lg:flex-row-reverse gap-4 md:gap-0">
              {/* Left */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-justify lg:text-left">
                <div className="text-lg lg:text-xl font-bold text-tc-red uppercase">Bivouacs</div>
                <div className="mt-2 text-xl sm:text-2xl md:text-4xl font-bold">6 semaines complètes en présentiel</div>
                <p className="mt-4 md:mt-8 text-justify">
                  Tera Campus vous fait partir à l'aventure lors de périodes complètes en présentiel nommées
                  "bivouacs". L'objectif premier de ces périodes est de permettre aux étudiants de se rencontrer et de développer leurs
                  "soft-skills", tout en échangeant et en travaillant sur des projets professionnels communs.
                </p>
                <p className="mt-4 text-justify">
                  Les Bivouacs Tera Campus sont au nombre de trois pour une durée de 2 semaines chacun :
                  <ul className="list-disc list-inside">
                    <li>Au mois d'octobre, afin de bien entamer l'année</li>
                    <li>Au mois de janvier, pour faire le point sur les projets</li>
                    <li>Au mois de mai, afin de préparer la dernière ligne droite</li>
                  </ul>
                </p>
                <p className="mt-4 text-justify">
                  Le lieu de chaque Bivouac est défini à l'avance par l'équipe de Tera Campus. Ces séminaires font partie intégrante du
                  programme et ne requièrent aucun coût supplémentaire.
                </p>
              </div>
              {/* Left End */}
              {/* Right */}
              <div className="w-full lg:w-1/2 lg:px-16 xl:px-32 flex justify-center">
                <Card
                  title={`Souvenir d'un bivouac en Ardèche`}
                  content="Pour notre premier Bivouac de l'année 2021-2022, l'ensemble des étudiants et de l'équipe pédagogique de Tera Campus se sont retrouvés au sein d'un gîte ardéchois, le Mas de la Sardèche. L'environnement préservé et l'authenticité du lieu ont permis de créer des liens et une synergie forte entre les étudiants au travers des projets et expériences proposés tout au long de ces deux semaines en immersion. Un souvenir gravé, et une année bien entamée chez Tera Campus !"
                  imageUrl="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/IMG_9209_rq1cyl"
                />
              </div>
              {/* Right End */}
            </div>
          </div>
        </section>

        <BlockConcept />

        <SeparatorWithTitle title="Les réponses à vos questions" />

        <BlockFaq questions={questions} />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const getAgenda = async () => {
    const query = "query{boards(ids: 1201384641){items{name,column_values{id,text}}}}"
    const response = await axios.post(
      "https://api.monday.com/v2",
      JSON.stringify({ query: query }),
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.MONDAY_API_KEY,
        },
      }
    )
    
    let events = []
    let items = response.data.data.boards[0].items
  
    for (const event of items) {
    
      if (events.length < 3) {
        let eventConfirmed = false
        let eventStartDate = null
        let eventEndDate = null
        let eventPlatform = null
        let eventType = null
        let eventUrl = null
  
        for (const eventDetail of event.column_values) {
          if (eventDetail.id === 'statut' && eventDetail.text === 'Confirmé') {
            eventConfirmed = true
          }
  
          if (eventDetail.id === 'date4' && eventDetail.text) {
            const date = new Date(eventDetail.text)
            if (date >= new Date()) {
              eventStartDate = date
            }
          }

          if (eventDetail.id === 'date' && eventDetail.text) {
            const date = new Date(eventDetail.text)
            if (date >= new Date()) {
              eventEndDate = date
            }
          }
  
          if (eventDetail.id === 'statut_16' && eventDetail.text) {
            eventType = eventDetail.text
          }
  
          if (eventDetail.id === 'statut_1' && eventDetail.text) {
            eventPlatform = eventDetail.text
          }

          if (eventDetail.id === 'lien_internet' && eventDetail.text) {
            eventUrl = eventDetail.text
          }
        }
  
        if (event.name && eventConfirmed && eventStartDate && eventEndDate && eventType && eventPlatform) {
          events.push({name: event.name, startDate: `${eventStartDate}`, endDate: `${eventEndDate}`, description: eventType, platform: eventPlatform, url: eventUrl})
        }
  
      }
    }
  
    return events
  }
  
  return {
    props: {
      agenda: await getAgenda(),
      questions: [
        {
          name: "Qui peut rejoindre Tera Campus ?",
          text: "Aucun pré-requis n'est nécessaire pour rejoindre Tera Campus. Il faut un ordinateur, une webcam et avoir accès à une connexion internet. La formation s'adresse à des personnes motivées avant tout.",
        },
        {
          name: "Le diplôme est-il reconnu par l'état ?",
          text: "Les titres délivrés par Tera Campus sont des diplômes RNCP de type 6 et 7, reconnus par l'état.",
        },
        {
          name: "Quelle est la durée de la formation ?",
          text: "Le cursus complet se déroule en 5 années. D'octobre à juin pour les deux premières années en formation initiale, puis d'octobre à septembre les années suivantes en contrat d'alternance. Tera Campus propose aussi un diplôme optionnel en fin de troisième année, vous permettant ainsi de réduire la durée de votre cursus.",
        },
        {
          name: "Quel est le coût de la formation ?",
          text: "Chez Tera Campus, nous avons souhaité faire une proposition simple et accessible à 6500€ par année en formation initiale. Le cursus intégral ne vous coûtera qu'un maximum de deux années (1ère et 2ème année), soit 13000€, puisque le coût de votre formation sera ensuite prise en charge par votre contrat d'alternance.",
        },
        {
          name: "Comment se déroule l'inscription ?",
          text: "Après avoir rempli le formulaire de pré-inscription en ligne, vous accéderez à notre test de positionnement sous forme de QCM (vous recevrez aussi le lien par e-mail). Ce test nous permettra de connaître votre niveau afin de vous proposer un programme adapté. Une fois le test réalisé, Tera Campus vous inviteras à passer un court entretien par visioconférence pour motiver votre candidature et vous expliquer le concept de notre école. Enfin, vous recevrez une réponse sous 48 heures qui vous permettra de finaliser votre inscription.",
        },
        {
          name: "Comment se déroule une année académique ?",
          text: "La rentrée débute avec un Bivouac de deux semaines complètes, dans un lieu choisi par Tera Campus. Ce premier Bivouac permettra de créer un esprit d'équipe, entre tous les étudiants de l'école, qui va perdurer tout au long de l'année académique. Ensuite vous aurez des cours en ligne avec de vrais professionnels, ainsi que des ressources complémentaires pour pouvoir approfondir vos connaissances à votre rythme. Un deuxième Bivouac de deux semaines complètes permettra de faire le point à mi-parcours, et de collaborer avec les autre étudiants lors d'un Hackathon et d'exercices stimulants de Team Building. Et enfin, les cours en ligne reprendront jusqu'au mois de juin pour finaliser le programme de l'année. Le dernier Bivouac sera un moyen de clôturer l'année tous ensemble, autour d'activités permettant de sceller tous les étudiants et de fêter l'arrivée de l'été.",
        },
      ],
    },
  }
}

export default Index
