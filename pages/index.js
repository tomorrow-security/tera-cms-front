import axios from "axios"
import Head from "next/head"
import Link from "next/link"

import BlockAgenda from "../components/organisms/BlockAgenda"
import BlockConcept from "../components/organisms/BlockConcept"
import BlockFaq from "../components/organisms/BlockFAQ"
import Hero from "../components/organisms/Hero"

const pageTitle = "École supérieure d'informatique - Tera Campus"
const pageDescription =
  "École supérieure d'informatique, Tera Campus propose des formations diplômantes Bac+3 et Bac+5 en développement informatique et infrastructure."
const pageUrl = "https://tera-campus.com"

function Card({ title, content }) {
  return (
    <div className="w-full bg-white rounded-3xl shadow-lg overflow-hidden">
      <img src="https://source.unsplash.com/random/800x800?landscape" className="h-96 sm:rounded-t-3xl object-cover object-center w-full" />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="mb-4 text-justify">{content}</p>
      </div>
    </div>
  )
}

function CardOverImage({ imageUrl, imageAlt, chipPrimary, chipSecondary, title, content }) {
  return (
    <div className="antialiased text-gray-900">
      <div>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-72 lg:rounded-lg lg:shadow-md object-cover object-center"
        />
        <div className="relative px-4 -mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-baseline">
              <span className="px-4 py-2 bg-tc-blue-navy text-white text-xs md:text-sm inline-block rounded-full uppercase font-semibold tracking-wide">
                { chipPrimary }
              </span>
              <div className="ml-2 text-gray-600 text-xs md:text-sm font-semibold tracking-wider">
                { chipSecondary }
              </div>
            </div>
            <h4 className="mt-8 text-center text-xl font-bold uppercase leading-tight">
              { title }
            </h4>
            <p className="mt-8 text-center truncate">
              { content }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

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

        <section id="concept" className="pb-8 md:py-10 lg:py-20 bg-tc-lavender">
          <div className="md:container md:mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <CardOverImage
                  imageUrl="https://source.unsplash.com/random/350x350?fuit"
                  imageAlt="random image"
                  chipPrimary="Bac +3"
                  chipSecondary="Titre RNCP de niveau 6"
                  title="Administrateur des Systèmes d'Information"
                  content="Parcours en alternance"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <CardOverImage
                  imageUrl="https://source.unsplash.com/random/350x350?animal"
                  imageAlt="random image"
                  chipPrimary="Bac +5"
                  chipSecondary="Titre RNCP de niveau 7"
                  title="Expert des Systèmes d'Information"
                  content="Parcours en alternance"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-tc-blue-navy">
          <div className="py-24 md:container md:mx-auto">
            <div className="text-center text-white">
              <p className="mb-8 text-4xl font-bold">Avec l'alternance, étudier et être salarié c'est possible !</p>
              <Link href="#">
                <a className="p-4 border border-white rounded bg-white text-tc-blue-navy hover:bg-tc-blue-navy hover:text-white font-bold">Je me renseigne</a>
              </Link>
            </div>
          </div>
        </section>

        <section id="bivouacs" className="py-4 md:py-10 lg:py-20 bg-tc-lavender">
          <div className="md:container md:mx-auto">
            <div className="p-4 lg:p-0 flex flex-col lg:flex-row-reverse gap-8">
              {/* Left */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-justify lg:text-left">
                <div className="text-lg lg:text-xl font-bold text-tc-red uppercase">Bivouacs</div>
                <div className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">6 semaines complètes en présentiel</div>
                <p className="mt-8">Avec Tera Campus vous partirez en aventure au mois d'octobre, janvier et mai. Ces séminaires sont entièrement financés par l'école.</p>
                <p className="mt-4">Les lieux de rendez-vous des séminaires sont définis par Tera Campus à l'avance, et sont entièrement financés par l'école.</p>
              </div>
              {/* Left End */}
              {/* Right */}
              <div className="w-full lg:w-1/2 lg:px-16 xl:px-32 flex justify-center">
                <Card
                  title={`Souvenir d'un bivouac en Ardèche`}
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi tenetur, voluptatibus harum consequuntur alias quaerat excepturi temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores dolorem assumenda totam."
                />
              </div>
              {/* Right End */}
            </div>
          </div>
        </section>

        <BlockConcept />

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
          text: "Chez Tera Campus, nous avons souhaité faire une proposition simple et accessible à 6500€ par année en formation initiale. Le cursus intégral ne vous coûtera qu'un maximum de deux années (1ère et 2ème année), soit 13000€, puisque le coût de ta formation sera ensuite prise en charge par votre contrat d'alternance.",
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
