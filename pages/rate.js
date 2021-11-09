import Head from "next/head"
import PageLink from "../components/atoms/PageLink"

import BlockTitle from "../components/organisms/BlockTitle"

const pageTitle = "Tairfs - Tera Campus"
const pageDescription = "Les tarifs"

export default function Bivouacs() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main>
        <section id="contact" className="pt-10 md:py-20">
          <div className="md:container md:mx-auto">
            <BlockTitle
              title="Tarifs"
              iconPicture={{ backgroundImage: "url('tarifs.png')" }}
            />
          </div>
        </section>
      </main>
    </>
  )
}
