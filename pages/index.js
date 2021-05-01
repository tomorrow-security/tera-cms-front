import Head from 'next/head'

import BlockConcept from '../components/organisms/BlockConcept'
import BlockGuides from '../components/organisms/BlockGuides'
import Hero from '../components/organisms/Hero'

const pageTitle = "École supérieure d'informatique - Tera Campus"
const pageDescription = "École supérieure d'informatique, Tera Campus propose des formations diplômantes Bac+3 et Bac+5 en développement informatique et infrastructure."
const pageUrl = 'https://tera-campus.com'

export default function Home() {
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
        <BlockConcept />
        <BlockGuides />
      </main>

    </>
  )
}
