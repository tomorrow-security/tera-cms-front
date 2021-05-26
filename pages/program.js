import Head from 'next/head'
import BlockProgram from '../components/organisms/BlockProgram'

const pageTitle = "Programme - Tera Campus"
const pageDescription = "Notre programme"
const pageUrl = 'https://tera-campus.com/program'

export default function Legal() {
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
        <BlockProgram />
      </main>
    </>
  )
}
