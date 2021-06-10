import Head from 'next/head'
import PageLink from '../components/atoms/PageLink'

const pageTitle = "Page non trouvée - Tera Campus"
const pageDescription = "Page non trouvée"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main className="text-center">
        <div className="flex flex-col justify-center w-full h-full my-40 flex-nowrap align-center text-tc-blue">
          <h1 className="text-xl font-extrabold">Cette page n'existe pas !</h1>
          <div className="px-2 mx-auto text-center w-max">
            <PageLink id='' label="retour à la page d'accueil" />
          </div>

        </div>
      </main>
    </>
  )
}
