import Head from "next/head"

import BlockTitle from "../components/organisms/BlockTitle"
import BlockPartners from "../components/organisms/BlockPartners"

const pageTitle = "Partenaires - Tera Campus"
const pageDescription = "Nos partenaires"

export default function partners() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main className="md:container md:mx-auto">
        <section className="py-10">
          <BlockTitle
            title="Nos partenaires"
            iconPicture={{ backgroundImage: "url('partenairs.png')" }}
          />
          <BlockPartners />
        </section>
      </main>
    </>
  )
}
