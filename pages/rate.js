import Head from "next/head"

import BlockTitle from "../components/organisms/BlockTitle"
import SubTitle from "../components/atoms/SubTitle"
import LitleTitle from "../components/atoms/LittleTitle"
import Bullet from "../components/atoms/Bullet"
import ListUl from "../components/atoms/ListUl"
import Paragraphe from "../components/atoms/Paragraphe"
import Strong from "../components/atoms/Strong"
import CtaBand from "../components/molecules/CtaBand"

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
              <ListUl>
                <li>le test de positionnement</li>
                <li>le test de positionnement</li>
                <li>les frais de dossier</li>
              </ListUl>
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
              <Paragraphe lg>Le reste à charge sera donc de 0 euro.</Paragraphe>
              <Paragraphe>
                Vous serez en plus <Strong red>rémunéré mensuellement</Strong>{" "}
                pour votre travail et en fonction de votre situation
              </Paragraphe>
              <Paragraphe>
                Le choix du télé-présentiel, couplé au financement de votre
                formation par l'entreprise, vous permettra donc d'entamer votre
                carrière sereinement, et <Strong red>sans aucune dettes</Strong>{" "}
                !
              </Paragraphe>
            </div>
            <CtaBand />
          </div>
        </section>
      </main>
    </>
  )
}
