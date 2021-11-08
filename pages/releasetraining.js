import Head from "next/head"
import BlockTitle from "../components/organisms/BlockTitle"
import BlockRelease from "../components/organisms/BlockRelease"
import BlockContract from "../components/organisms/BlockContract"

const pageTitle = "L'alternance - Tera Campus"
const pageDescription = "L'alternance"
const pageUrl = "https://tera-campus.com/blockreleasetraining"

export default function ReleaseTraining() {
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
        <div className="md:container md:mx-auto">
          <BlockTitle
            title="L'alternance"
            iconPicture={{ backgroundImage: "url('alternance.png')" }}
          />
          <BlockRelease />
          <BlockContract />
        </div>
      </main>
    </>
  )
}
