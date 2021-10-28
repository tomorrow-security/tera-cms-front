import Head from "next/head"

const pageTitle = "Borchure - Tera Campus"
const pageDescription = "Notre brochure"
const pageUrl = "https://tera-campus.com/brochure"

export default function brochure() {
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
        <object
          name="brochure"
          type="application/pdf"
          data="/public/Brochure.pdf"
        ></object>
      </main>
    </>
  )
}
