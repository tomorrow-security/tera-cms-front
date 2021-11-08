import Head from "next/head"
import BlockTitle from "../components/organisms/BlockTitle"
import BlockProgramTC3 from "../components/organisms/BlockProgramTC3"
import BlockPrerequisite from "../components/organisms/BlockPrerequisite"
import BlockMethod from "../components/organisms/BlockMethod"
import BlockEval from "../components/organisms/BlockEval"
import BlockRegistration from "../components/organisms/BlockRegistration"
import BlockCurriculum from "../components/organisms/BlockCurriculum"
import BlockCareer from "../components/organisms/BlockCareer"

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
        <BlockTitle
          title="Programme"
          iconPicture={{ backgroundImage: "url('programme.png')" }}
        />
        <BlockCurriculum />
        <BlockProgramTC3 />
        <BlockPrerequisite />
        <BlockRegistration />
        <BlockEval />
        <BlockMethod />
        <BlockCareer />
      </main>
    </>
  )
}
