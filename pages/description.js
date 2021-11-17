import Head from "next/head"

import BlockTitle from "../components/organisms/BlockTitle"
import Paragraphe from "../components/atoms/Paragraphe"
import ListUl from "../components/atoms/ListUl"
import BlockGuides from "../components/organisms/BlockGuides"
import InternalLink from "../components/molecules/InternalLink"

const pageTitle = "Description - Tera Campus"
const pageDescription = "Tera Campus c'est quoi ?"

export default function description() {
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
          <BlockTitle
            title="A propos de Tera Campus"
            iconPicture={{ backgroundImage: "url('info.png')" }}
          />
          <div className="mx-4">
            <Paragraphe>
              Tera Campus est une école Supérieure d'Informatique en
              télé-présentiel qui propose des formations allant du BAC+3 au
              BAC+5.
            </Paragraphe>
            <Paragraphe>
              Nos formations s’adressent aux professionnels en reconversion, aux
              étudiants autonomes souhaitant de se former à distance, et aux
              alternants souhaitant effectuer leur contrat d’apprentissage ou de
              professionnalisation dans une ville correspondante à leurs
              besoins.
            </Paragraphe>
            <Paragraphe>
              Le programme innovant et polyvalent proposé par Tera Campus permet
              aux étudiants de développer des compétences techniques mais
              également des compétences humaines (« soft-skills ») qui sont
              aujourd’hui indispensables au sein d’une entreprise (3 bivouacs
              dans l’année).
            </Paragraphe>
            <Paragraphe>
              Tera Campus est constamment à l’écoute du marché afin de garantir
              aux étudiants un parcours toujours plus adapté et
              professionnalisant.
            </Paragraphe>
            <ListUl>
              <li>
                Tera Campus :&nbsp;
                <span className="text-lg font-medium">
                  Une école engagée pour le développement durable
                </span>
                .
              </li>
              <li className="text-lg font-medium">
                Une stratégie digitale pour une démarche éco-responsable.
              </li>
              <li>
                Tera Campus travaille uniquement avec des outils digitaux, et
                tous les supports de formation sont numériques.
              </li>
            </ListUl>
          </div>
          <BlockGuides />
          <div className="flex justify-center lg:block">
            <InternalLink blue id="program" label="Découvrez nos formations" />
          </div>
        </section>
      </main>
    </>
  )
}
