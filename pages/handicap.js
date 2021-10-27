import Head from "next/head"

import BlockTitle from "../components/organisms/BlockTitle"
import BlockHandicap from "../components/organisms/BlockHandicap"

const pageTitle = "Handicap - Tera Campus"
const pageDescription = "Situation de handicap"

export default function Handicap() {
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
          title="Etudier en situation de handicap"
          iconPicture={{ backgroundImage: "url('handicap.png')" }}
        />
        <BlockHandicap />
      </main>
    </>
  )
}
