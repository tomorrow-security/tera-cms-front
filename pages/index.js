import Head from 'next/head'

import BlockAgenda from '../components/organisms/BlockAgenda'
import BlockConcept from '../components/organisms/BlockConcept'
import BlockGuides from '../components/organisms/BlockGuides'
import Hero from '../components/organisms/Hero'

const pageTitle = "École supérieure d'informatique - Tera Campus"
const pageDescription = "École supérieure d'informatique, Tera Campus propose des formations diplômantes Bac+3 et Bac+5 en développement informatique et infrastructure."
const pageUrl = 'https://tera-campus.com'

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
        <BlockAgenda events={agenda} />
        <BlockConcept />
        <BlockGuides />
      </main>

    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      agenda: [
        {
          date: '08/05/2021',
          dateTimeDate: '2021-05-08',
          timetable: '14h00',
          dateTimeTimetable: '14:00',
          title: 'Après-midi open doors !',
          description: 'Découvre Tera Campus grâce aux portes ouvertes !',
          platform: 'twitch',
        },
        {
          date: '11/05/2021',
          dateTimeDate: '2021-05-11',
          timetable: '18h00',
          dateTimeTimetable: '18:00',
          title: 'Soirée open doors',
          description: 'Tu n\'es pas libre le samedi ? \
          Découvre Tera Campus grâce à la soirée portes ouvertes !',
          platform: 'twitch',
        },
        {
          date: '21/05/2021',
          dateTimeDate: '2021-05-21',
          timetable: '17h00',
          dateTimeTimetable: '17:00',
          title: 'Webinaire : Prépare ton alternance !',
          description: 'Tera Campus te donne des conseils pour préparer tes supports \
          et trouver rapidement une alternance !',
          platform: 'twitch',
        },
      ]
    }
  }
}

export default Index
