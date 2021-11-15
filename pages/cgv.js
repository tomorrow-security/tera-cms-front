import Head from "next/head"
import PageLink from "../components/atoms/PageLink"

import IconLogoBig from "../components/atoms/IconLogoBig"

const pageTitle = "CGV - Tera Campus"
const pageDescription = "Nos Conditions Générales De Vente"

export default function Cgv() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main className="md:container md:mx-auto">
        <section className="py-10">
          <div className="flex flex-col justify-center w-full h-full text-center align-center flex-nowrap text-tc-blue">
            <div className="w-1/4 py-10 mx-auto">
              <IconLogoBig />
              <div className="text-base font-bold tracking-normal normal-case md:text-lg xl:text-2xl">
                The future of learning
              </div>
            </div>
            <h1 className="text-3xl font-extrabold text-tc-red">
              Cette pages est en construction
            </h1>
            <div className="px-2 mx-auto text-center w-max">
              <PageLink id="" label="retour à la page d'accueil" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
