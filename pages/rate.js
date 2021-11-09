import Head from "next/head"

import BlockTitle from "../components/organisms/BlockTitle"
import SubTitle from "../components/atoms/SubTitle"
import LitleTitle from "../components/atoms/LittleTitle"
import Bullet from "../components/atoms/Bullet"
import List from "../components/atoms/List"
import Paragraphe from "../components/atoms/Paragraphe"
import ParagrapheXl from "../components/atoms/ParagrapheXl"
import Strong from "../components/atoms/Strong"
import ExternalLink from "../components/molecules/ExternalLink"

const pageTitle = "Tairfs - Tera Campus"
const pageDescription = "Les tarifs"

export default function Bivouacs() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main>
        <section id="contact" className="pt-10 md:py-20">
          <div className="md:container md:mx-auto">
            <BlockTitle
              title="Tarifs"
              iconPicture={{ backgroundImage: "url('tarifs.png')" }}
            />
            <SubTitle
              title="Formation initial & alternance"
              iconPicture={{ backgroundImage: "url('tarifs.png')" }}
            />
            <div className="md:w-1/4 md:border md:border-tc-blue md:rounded md:px-6 md:pb-6 md:mx-auto md:my-6">
              <div className="font-semibold">
                <Bullet>Aucun frais à prévoir pour :</Bullet>
              </div>
              <List>
                <li>le test de positionnement</li>
                <li>le test de positionnement</li>
                <li>les frais de dossier</li>
              </List>
            </div>
            {/* <LitleTitle>Frais de Scolarité 1 & 2 années</LitleTitle> */}
            <LitleTitle>Payer en plusieurs fois :</LitleTitle>
            <div className="md:w-11/12 md:mx-auto">
              <Bullet>Alternance à partir de la 3ème année :</Bullet>
              <Paragraphe>
                Les 3 années de formation en alternance seront entièrement
                financées par votre entreprise d’accueil !
              </Paragraphe>
              <ParagrapheXl>
                Le reste à charge sera donc de 0 euro.
              </ParagrapheXl>
              <Paragraphe>
                Tu seras en plus <Strong>rémunéré(e) mensuellement</Strong> pour
                ton travail et en fonction de ta situation
              </Paragraphe>
              <Paragraphe>
                Le choix du télé-présentiel, couplé au financement de ta
                formation par l'entreprise, te permettra donc d'entamer ta
                carrière sereinement, et <Strong>sans aucune dettes</Stron> !
              </Paragraphe>
            </div>
            <ExternalLink
              title="l'alternance"
              url="https://www.alternance.emploi.gouv.fr/accueil"
              aria="lien vers le site gouvernemental de l'alternance"
            />
          </div>
        </section>
      </main>
    </>
  )
}
