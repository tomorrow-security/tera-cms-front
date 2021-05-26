import Head from 'next/head'

import BlockAgenda from '../components/organisms/BlockAgenda'
import BlockConcept from '../components/organisms/BlockConcept'
import BlockFAQ from '../components/organisms/BlockFaq'
import Hero from '../components/organisms/Hero'

const pageTitle = "École supérieure d'informatique - Tera Campus"
const pageDescription = "École supérieure d'informatique, Tera Campus propose des formations diplômantes Bac+3 et Bac+5 en développement informatique et infrastructure."
const pageUrl = 'https://tera-campus.com'

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
      </main>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      agenda: [
        {
          date: '27/05/2021',
          dateTimeDate: '2021-05-27',
          timetable: '17h00',
          dateTimeTimetable: '17:00',
          title: 'A découvrire bientôt',
          description: 'Thurday Tech Live',
          platform: 'twitch',
          url: 'https://www.twitch.tv/teracampus'
        },
        {
          date: '03/06/2021',
          dateTimeDate: '2021-06-03',
          timetable: '17h00',
          dateTimeTimetable: '17:00',
          title: 'A découvrire bientôt',
          description: 'Thurday Tech Live',
          platform: 'twitch',
          url: 'https://www.twitch.tv/teracampus'
        },
      ],
    }
  }
}

export default Index
