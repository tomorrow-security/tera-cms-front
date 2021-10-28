import Head from "next/head"
import BlockTitle from "../components/organisms/BlockTitle"
import BlockApproach from "../components/organisms/BlockApproach"
import BlockMethod from "../components/organisms/BlockMethod"

const pageTitle = "Pédagogie - Tera Campus"
const pageDescription = "Notre pédagogie"

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
        <BlockTitle
          title="Notre pedagogie"
          iconPicture={{ backgroundImage: "url('montagnard.png')" }}
        />
        <BlockApproach />
        <BlockMethod />
      </main>
    </>
  )
}
