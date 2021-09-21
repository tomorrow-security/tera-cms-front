import Head from "next/head"
import BlockDayReleaseTraining from "../components/organisms/BlockDayReleaseTraining"
import BlockReleaseTrainingDef from "../components/organisms/BlockTrainingReleaseDef"
import BlockTrainingReleseFunding from "../components/organisms/BlockTrainingReleseFunding"

const pageTitle = "L'alternance - Tera Campus"
const pageDescription = "L'alternance"
const pageUrl = "https://tera-campus.com/blockreleasetraining"

export default function BlockReleaseTraining() {
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
        <BlockDayReleaseTraining />
        <BlockReleaseTrainingDef />
        <BlockTrainingReleseFunding />
      </main>
    </>
  )
}
