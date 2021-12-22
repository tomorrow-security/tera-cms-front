import Head from "next/head";

import PageLink from "../componentsDraft/atoms/PageLink";

const pageTitle = "Brochure envoyée - Tera Campus";
const pageDescription = "Confirmation d'envoie de la brochure";
const pageUrl = "https://tera-campus.com/brochuresent";

export default function brochureSented() {
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
        <div className="flex flex-col items-center justify-center my-12 space-y-6 text-xl font bold">
          <p className="mt-8 text-center">
            Tera Campus vous remercie d'avoir demandé la brochure.
          </p>
          <p className="text-center">
            La brochure vous a été envoyé par email.
          </p>
          <div className="mx-auto w-max">
            <PageLink id="" label="Retour à l'accueil" />
          </div>
        </div>
      </main>
    </>
  );
}
