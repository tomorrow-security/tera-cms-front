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
                <li>les entretiens</li>
                <li>les frais de dossier</li>
              </ListUl>
            </div>
            <LitleTitle>Frais de Scolarité 1 & 2 années</LitleTitle>
            <Paragraphe>
              Chez Tera Campus, nous avons souhaité faire une proposition simple
              à 9500€ par année en formation initiale. Le cursus intégral ne
              coûtera qu'un maximum de deux années (1ère et 2ème année), soit
              19000€.
            </Paragraphe>
            <div className="py-4 text-center">
              <Paragraphe lg>
                3000€ de réduction pour une inscription avant le 30 juin, ce qui
                porte les frais à 6500€ l'année.
              </Paragraphe>
            </div>
            <Bullet>Paiement :</Bullet>
            <div className="mx-6 space-y-4">
              <ListUl>
                <p>Acompte :</p>
                <li>
                  A verser pour finaliser l'inscription : 1500€ pour une
                  inscription anticipée (avant le 30 juin)
                </li>
                <li>
                  A verser à l'inscription : 2500€ pour une inscription tardive
                  (après le 30 juin)
                </li>
              </ListUl>
              <ListUl>
                <p>Solde :</p>
                <li>Paiement au comptant avant le 30 septembre</li>
                <li>
                  Paiement échelonné en 10 fois sans frais, à partir du 30
                  septembre via prélèvement, avec dernière mensualité 30 juin.
                </li>
              </ListUl>
            </div>
            <LitleTitle>Alternance à partir de la 3ème année :</LitleTitle>
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
              carrière sereinement, et <Strong red>sans aucune dettes</Strong> !
            </Paragraphe>
            <div className="py-6">
              <CtaBand />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
