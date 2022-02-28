import Head from "next/head"

import Block from "../../components/atoms/Block"
import Stepper from "../../components/organisms/Stepper"

const pageTitle = "Candidature - Tera Campus"
const pageDescription = "Candidature chez Tera Campus"
const pageUrl = "https://tera-campus.com/enrolment"

export default function EnrolmentWelcome() {

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
        <Stepper />

        <Block darken={false}>
          <div className="text-xl md:text-4xl font-bold">
            Merci pour votre pré-inscription chez Tera Campus !
          </div>
          <div className="mt-8 text-lg md:text-2xl">
            Next step ?
          </div>
          <div className="mt-8">
            Rendez-vous dans votre boîte e-mail pour passer le test de positionnement. Ce test
            aura une durée de 2h et nous permettra d'identifier vos points forts et vos lacunes
            pour vous proposer le meilleur accompagnement.
          </div>
          <div className="mt-8">
            Bonne journée futur(e) champion(nne) de la tech !
          </div>
        </Block>
      
      </main>
    </>
  )
}
