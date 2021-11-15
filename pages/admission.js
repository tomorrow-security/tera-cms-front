import Head from "next/head"

import BlockTitle from "../components/organisms/BlockTitle"
import BlockAdmission from "../components/organisms/BlockAdmission"

const pageTitle = "Admission - Tera Campus"
const pageDescription = "Nous rejoindre"
const pageUrl = "https://tera-campus.com/join"

export default function admission() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main className="md:container md:mx-auto">
        <section className="py-10">
          <BlockTitle
            title="Admission"
            iconPicture={{ backgroundImage: "url('tente-welcome.png')" }}
          />
          <BlockAdmission />
        </section>
      </main>
    </>
  )
}
