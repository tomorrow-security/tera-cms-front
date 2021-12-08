import axios from "axios"
import Head from "next/head"

import BlockAgenda from "../components/organisms/BlockAgenda"
import BlockConcept from "../components/organisms/BlockConcept"
import Hero from "../components/organisms/Hero"
import BlockBachelorPresentation from "../components/organisms/BlockBachelorPresentation"

const pageTitle = "École supérieure d'informatique - Tera Campus"
const pageDescription =
  "École supérieure d'informatique, Tera Campus propose des formations diplômantes Bac+3 et Bac+5 en développement informatique et infrastructure."
const pageUrl = "https://tera-campus.com"

function Index({ agenda }) {
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
        <section className="md:container md:mx-auto">
          <BlockAgenda events={agenda} />
          <BlockBachelorPresentation />
          <BlockConcept />
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const getAgenda = async () => {
    const query =
      "query{boards(ids: 1201384641){items{name,column_values{id,text}}}}"
    const response = await axios.post(
      "https://api.monday.com/v2",
      JSON.stringify({ query: query }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.MONDAY_API_KEY,
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
    },
  }
}

export default Index
