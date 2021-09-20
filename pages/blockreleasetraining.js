import Head from "next/head"
// import BlockCareer from "../components/organisms/BlockCareer"

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

      <main>{/* <BlockCareer /> */}</main>
    </>
  )
}
