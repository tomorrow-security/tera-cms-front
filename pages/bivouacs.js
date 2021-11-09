import Head from "next/head"
import Image from "next/dist/client/image"

import BlockTitle from "../components/organisms/BlockTitle"
import BlockBivouacPresentation from "../components/organisms/BlockBivouacPresentation"
import Cta from "../components/atoms/Cta"

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
          <div className="md:container md:mx-auto">
            <BlockTitle
              title="Bivouacs"
              iconPicture={{ backgroundImage: "url('bivouac.png')" }}
            />
            <BlockBivouacPresentation />
          </div>
          <div
            className="w-full bg-center bg-cover"
            style={{ backgroundImage: "url('vue-ardeche.jpg')" }}
          >
            <div className="flex flex-col justify-center h-64 mx-4 sm:h-96 lg:h-screen md:mx-8 lg:mx-24 ">
              <div className="space-y-2 text-2xl font-medium text-white lg:text-4xl">
                <p>S'unir pour mieux</p>
                <p>réussir...</p>
              </div>
              <div className="my-6">
                {/* // TODO changement pour choix des couleur et weight du CTA */}
                <Cta title="Brochure" id="/catalog" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
