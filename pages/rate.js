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

const pageTitle = "Tarifs - Tera Campus"
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

      <main className="md:container md:mx-auto">
        <section id="contact" className="py-10">
          <BlockTitle
            title="Tarifs"
            iconPicture={{ backgroundImage: "url('tarifs.png')" }}
          />
          <div className="mx-4">
            <SubTitle
              title="Formation initiale & alternance"
              iconPicture={{ backgroundImage: "url('dossier.png')" }}
            />
            <LitleTitle>Aucun frais à prévoir pour :</LitleTitle>
            <div className="ml-12 md:ml-8">
              <List>
                <li>le test de positionnement</li>
                <li>le test de positionnement</li>
                <li>les frais de dossier</li>
              </List>
            </div>
            {/* //TODO en attentes des tarifs exacts */}
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
                carrière sereinement, et <Strong>sans aucune dettes</Strong> !
              </Paragraphe>
            </div>
            <ExternalLink
              title="L'alternance"
              url="https://www.alternance.emploi.gouv.fr/accueil"
              aria="lien vers le site gouvernemental de l'alternance"
            />
          </div>
        </section>
      </main>
    </>
  )
}
