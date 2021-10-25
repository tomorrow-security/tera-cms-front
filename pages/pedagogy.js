import Head from "next/head"
import PageLink from "../components/atoms/PageLink"

import IconLogoBig from "../components/atoms/IconLogoBig"
import BlockCurriculum from "../components/organisms/BlockCurriculum"

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
        <BlockCurriculum />
      </main>
    </>
  )
}
