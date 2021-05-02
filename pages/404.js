import Head from 'next/head'

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
        <h1>Cette page n'existe pas !</h1>
      </main>
    </>
  )
}
