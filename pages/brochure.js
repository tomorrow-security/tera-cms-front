import Head from 'next/head'

// import ExternalQuestionnaire from '../components/molecules/ExternalQuestionnaire'

const pageTitle = "Brochure - Tera Campus"
const pageDescription = "Demande de brochure"
const pageUrl = 'https://tera-campus.com/brochure'

export default function Brochure() {
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
            <div className="flex justify-center mt-24 text-xl font bold">Page en construction</div>
            {/* <ExternalQuestionnaire
                  name="requestBrochure"
                  // TODO mettre le lien correct
                    url="à définir"
            /> */}
        </main>
    </>
  )
}
