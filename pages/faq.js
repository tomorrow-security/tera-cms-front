import Head from "next/head"
import BlockTitle from "../components/organisms/BlockTitle"
import BlockFAQ from "../components/organisms/BlockFAQ"

const pageTitle = "FAQ - Tera Campus"
const pageDescription = "la FAQ"
const pageUrl = "https://tera-campus.com/faq"

export async function getServerSideProps() {
  return {
    props: {
      questions: [
        {
          name: "Qui peut rejoindre Tera Campus ?",
          text: "La formation Tera Campus s'adresse à des personnes motivées avant tout. Les seuls prérequis sont : un ordinateur, une webcam et une connexion internet.",
        },
        {
          name: "Le diplôme est-il reconnu par l'état ?",
          text: "Les titres délivrés par Tera Campus sont des diplômes RNCP de type 6 et 7, reconnus par l'état.",
        },
        {
          name: "Quelle est la durée de la formation ?",
          text: "Le cursus complet se déroule sur 5 années et se décompose en deux périodes distinctes. La première période commence par 2 ans de formation en contiue puis 1 an de formation en alternance sanctionné par un diplôme de niveau 5 (BAC+3). La deuxième période se déroule sur 2 ans, sous contrat d'alternance avec des cours intégralement en anglais. Ces deux années vous permettront de valider un titre RNCP de niveau 7 (BAC+5).",
        },
        {
          name: "Quel est le coût de la formation ?",
          text: "Chez Tera Campus, la formation initiale dépend de la date de l'inscription. Le coût de la formation en alternance est intégralement pris en charge par les opérateurs de compétences affiliés aux entreprises. Elle n’aura donc aucun coût pour l’étudiant et vous serez rémunéré pour votre travail dans le cadre du contrat d’alternance.",
        },
        {
          name: "Comment se déroule l'inscription ?",
          text: "Après avoir postulé en ligne, vous accèderez à notre test de positionnement sous forme de QCM. Ce test a une simple valeur informative et nous permettra de connaître votre niveau afin de vous proposer le programme le plus adapté. Une fois le test réalisé, l’école vous invitera à prendre un rendez-vous avec l’un de nos guides pour un court entretien par visioconférence afin d'échanger sur votre situation, vos motivations, et de vous expliquer notre vision de la formation et du parcours pédagogique",
        },
        {
          name: "Comment se déroule une année académique ?",
          text: "La rentrée débute avec un Bivouac de deux semaines complètes, dans un lieu choisi par Tera Campus. Ce premier Bivouac permettra de créer un esprit d'équipe qui va perdurer tout au long de l'année académique. Ensuite, jusqu'aux vacances de février, les étudiants suivent des cours en ligne avec des professionnels reconnus, et on accès à des ressources complémentaires pour pouvoir approfondir leurs connaissances à leur rythme. Un deuxième Bivouac de deux semaines complètes permettra de faire le point à mi-parcours, et de collaborer avec les autres étudiants lors d'un Hackathon et d'exercices stimulants de Team Building. À la suite de ce deuxième bivouac, les cours en ligne reprendront jusqu'au mois de juin pour finaliser le programme de l'année. Le dernier Bivouac du mois de mai, est un moyen de se retrouver avant la dernière ligne droite : stage, rapport d'alternance, mémoire. C'est le moment idéal pour sceller l'accomplissement de tous les étudiants ensemble et de se tourner vers l'avenir.",
        },
      ],
    },
  }
}

export default function faq({ questions }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main className="md:container md:mx-auto">
        <section className="py-10">
          <BlockTitle
            title="FAQ"
            iconPicture={{ backgroundImage: "url('faq.png')" }}
          />
          <BlockFAQ questions={questions} />
        </section>
      </main>
    </>
  )
}
