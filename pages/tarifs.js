import Head from "next/head"

const pageTitle = "Tarifs - Tera Campus"
const pageDescription = "Les tarifs de l'école Tera Campus"
const pageUrl = "https://tera-campus.com/tarifs"

export default function Tarifs() {
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

        <img src="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/adventure-begins_mmpz2f" className="w-full h-48 md:h-96 object-cover object-center" />

      </main>
    </>
  )
}
