import Head from 'next/head'

const pageTitle = "Politique de confidentialité - Tera Campus"
const pageDescription = "Politique de confidentialité"
const pageUrl = 'https://tera-campus.com/privacy'

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main>
        <div className="md:container mx-2 md:mx-auto py-10 md:py-20">
          <h1 className="mb-10 text-center text-3xl md:text-6xl font-bold">
            Politique de confidentialité
          </h1>
          <p className="text-justify">
            La présente politique de confidentialité définit et vous informe de la manière dont Tomorrow
            Security (sous la marque Tera Campus) utilise et protège les informations que vous nous transmettez.
          </p>
          <br />
          <p className="text-justify">
            Vous pouvez choisir d&apos;accéder et de naviguer sur nos sites Internet sans communiquer vos
            données personnelles. Lorsque Tomorrow Security collecte vos données personnelles, cette collecte
            est effectuée de manière loyale et transparente grâce à la mention d&apos;informations ou de renvoi
            à la présente politique de confidentialité.
          </p>
          <br />
          <p className="text-justify">
            Les données personnelles sont les informations vous concernant qui permettent de vous identifier
            telle que le prénom, le nom, l&apos;adresse postale, le lieu de résidence, le numéro de téléphone ou
            l&apos;adresse email. Elles sont collectées via les différents formulaires présents sur nos sites
            (<a href="https://tera-campus.com">www.tera-campus.com</a>) pour une demande d&apos;information commerciale
            ou pour déposer un dossier de pré-inscription aux formations Tera Campus. Le caractère obligatoire
            des réponses est indiqué dans les formulaires. Si vous ne souhaitez pas fournir de tels
            renseignements, vous ne pourrez éventuellement pas accéder à certains services ou fonctionnalités
            de nos sites.
          </p>
          <br />
          <p className="text-justify">
            Conformément au Règlement Général sur la Protection des Données (General Data Protection Régulation)
            adopté par le Parlement Européen le 14 avril 2016, et à la Loi Informatique et Libertés du 6 janvier
            1978 modifiée, Tomorrow Security vous informe des points suivants :
          </p>
          <ul className="mx-4 my-2">
            <li>
              <span className="font-bold">
                1. Identité du responsable du traitement
              </span>
              <p>
                Le responsable du traitement des données est la société Tomorrow Security, vous pouvez
                retrouver ses informations de contact dans les mentions légales.
              </p>
            </li>
            <li>
              <span className="font-bold">
                2. Finalités du traitement
              </span>
              <p>
                Tomorrow Security est susceptible de traiter vos informations personnelles aux fins de
                vous fournir les informations ou les services que vous avez demandés
                (notamment : l&apos;envoi de la newsletter, demande d&apos;inscription à une formation
                Tera Campus, demande d&apos;informations commerciales à propos des formations Tera Campus).
              </p>
            </li>
            <li>
              <span className="font-bold">
                3. Durée de conservation
              </span>
              <p>
                Les données personnelles que nous collectons et traitons ne sont conservées que pour la
                durée strictement nécessaire au regard des finalités précédemment exposées. Les dossiers
                d&apos;inscription seront conservés pour une durée maximum de 24 mois à partir du dépôt
                de celui-ci. Les données personnelles liées à une demande d&apos;information seront
                conservées pour une durée maximum de 6 mois.
              </p>
            </li>
            <li>
              <span className="font-bold">
                4. Accès et modification de vos données
              </span>
              <p>
                Vous pouvez nous faire une demande par mail
                à <a href="mailto:dpo@tomorrow-security.com">dpo@tomorrow-security.com</a> pour connaître
                les données vous concernant, les modifier ou les supprimer. Dans le cas d&apos;une demande
                par mail, nous pourrons vous demander une preuve de votre identité. Tomorrow Security
                s&apos;engage à répondre à votre demande d&apos;accès, de rectification ou d&apos;opposition
                ou toute autre demande complémentaire d&apos;informations dans un délai raisonnable qui ne
                saurait dépasser 1 mois à compter de la réception de votre demande.
              </p>
            </li>
            <li>
              <span className="font-bold">
                5. Prestataires utilisés dans le cadre de la collecte de vos données
              </span>
              <p>
                Tomorrow Security ne s&apos;appuie sur aucun prestataire pour le traitement de vos données
                personnelles, à l&apos;exception de l&apos;hébergeur spécifié dans les mentions légales.
              </p>
            </li>
            <li>
              <span className="font-bold">
                6. Cookies
              </span>
              <p>
                Tera Campus n&apos;utilise pas de cookies.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
