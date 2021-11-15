import Head from "next/head"

import Frame from "../components/molecules/Frame"

const pageTitle = "Inscription aux lives - Tera Campus"
const pageDescription = "Inscription aux lives de Tera Campus"
const pageUrl = "https://tera-campus.com/registration"

export default function Registration() {
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
        <Frame
          name="registrationLive"
          url="https://forms.monday.com/forms/embed/1a541465c5a732368f2738369e871b14?r=use1"
        />
      </main>
    </>
  )
}
