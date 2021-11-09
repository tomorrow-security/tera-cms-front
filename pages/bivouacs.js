import Head from "next/head"

import BlockTitle from "../components/organisms/BlockTitle"
import BlockBivouacPresentation from "../components/organisms/BlockBivouacPresentation"

const pageTitle = "Bivouacs - Tera Campus"
const pageDescription = "Nos Bivouacs"

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
        <section className="py-5">
          <div className="mx-4 md:container md:mx-auto">
            <BlockTitle
              title="Bivouacs"
              iconPicture={{ backgroundImage: "url('bivouac.png')" }}
            />
            <BlockBivouacPresentation />
          </div>
        </section>
      </main>
    </>
  )
}
