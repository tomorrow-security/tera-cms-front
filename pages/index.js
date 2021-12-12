import axios from "axios"
import Head from "next/head"

import BlockAgenda from "../components/organisms/BlockAgenda"
import BlockConcept from "../components/organisms/BlockConcept"
import BlockFaq from "../components/organisms/BlockFAQ"
import Hero from "../components/organisms/Hero"

const pageTitle = "École supérieure d'informatique - Tera Campus"
const pageDescription =
  "École supérieure d'informatique, Tera Campus propose des formations diplômantes Bac+3 et Bac+5 en développement informatique et infrastructure."
const pageUrl = "https://tera-campus.com"

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
