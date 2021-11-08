import Head from "next/head"
import BlockTitle from "../components/organisms/BlockTitle"
import BlockApproach from "../components/organisms/BlockApproach"
import BlockMethod from "../components/organisms/BlockMethod"
import Paragraphe from "../components/atoms/Paragraphe"

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
        <div className="mx-4 md:container md:mx-auto">
          <Paragraphe>
            À travers une pédagogie active, et innovante Tera Campus confronte
            ses étudiants aux problématiques réelles rencontrées dans les
            entreprises et adapte une pédagogie en mode « projet ».
          </Paragraphe>
        </div>
        <BlockApproach />
        <BlockMethod />
      </main>
    </>
  )
}
