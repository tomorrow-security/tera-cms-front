import Head from "next/head"
import BlockProgram from "../components/organisms/BlockProgram"
import BlockPreRequisite from "../components/organisms/BlockPreRequisite"
import BlockPartners from "../components/organisms/BlockPartners"
import BlockCurriculum from "../components/organisms/BlockCurriculum"
import BlockMethod from "../components/organisms/BlockMethod"
import BlockEval from "../components/organisms/BlockEval"
import Registration from "../components/molecules/Registration"

const pageTitle = "Programme - Tera Campus"
const pageDescription = "Notre programme"
const pageUrl = "https://tera-campus.com/program"

export default function Legal() {
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
        <BlockMethod />
        <BlockPartners />
        <BlockCurriculum />
        <BlockProgram />
        <BlockEval />
        <BlockPreRequisite />
        <Registration />
      </main>
    </>
  )
}
