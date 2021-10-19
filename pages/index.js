import Head from "next/head"
import BlockPlan from "../components/organisms/BlockPlan"

import BlockAgenda from "../components/organisms/BlockAgenda"
import BlockConcept from "../components/organisms/BlockConcept"
import BlockFaq from "../components/organisms/BlockFAQ"
import Hero from "../components/organisms/Hero"

const pageTitle = "École supérieure d'informatique - Tera Campus"
const pageDescription =
  "École supérieure d'informatique, Tera Campus propose des formations diplômantes Bac+3 et Bac+5 en développement informatique et infrastructure."
const pageUrl = "https://tera-campus.com"

function Index({ agenda, questions }) {
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
        <Hero />
        <BlockAgenda events={agenda} />
        <BlockConcept />
        <BlockFaq questions={questions} />
        <BlockPlan />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      agenda: [
        {
          date: "23/09/2021",
          dateTimeDate: "2021-09-23",
          timetable: "18h30",
          dateTimeTimetable: "18:30",
          title: "Unity 2D - Zelda-like",
          description: "Thursday Tech Live",
          platform: "twitch",
          url: "https://www.twitch.tv/teracampus",
        },
        {
          date: "30/09/2021",
          dateTimeDate: "2021-09-30",
          timetable: "18h30",
          dateTimeTimetable: "18:30",
          title: "Motion Design - apprenez les effets spéciaux",
          description: "Thursday Tech Live",
          platform: "twitch",
          url: "https://www.twitch.tv/teracampus",
        },
      ],
      questions: [
        {
          name: "Qui peut rejoindre Tera Campus ?",
          text: "La formation Tera Campus s'adresse à des personnes motivées avant tout. Les seuls prérequis sont : un ordinateur et une connexion internet.",
        },
        {
          name: "Le diplôme est-il reconnu par l'état ?",
          text: "Les titres délivrés par Tera Campus sont des diplômes RNCP de type 6 et 7, reconnus par l'état.",
        },
        {
          name: "Quelle est la durée de la formation ?",
          text: "Le cursus complet se déroule sur 3 années et se décompose en deux périodes distinctes : D'octobre à septembre pour la première année délivrant un diplôme de niveau BAC+3 en formation par alternance, puis d'octobre à septembre les deux années suivantes, en contrat d'alternance également mais aussi intégralement en anglais. Ces deux années vous permettront de valider un titre RNCP de niveau BAC+5.",
        },
        {
          name: "Quel est le coût de la formation ?",
          text: "Chez Tera Campus, le coût de formation est intégralement pris en charge par les opérateurs de compétences affiliés aux entreprises, puisque nous avons fait le choix de proposer des formations par alternance uniquement. Elle n’aura donc aucun coût pour l’étudiant et vous serez rémunéré pour votre travail dans le cadre du contrat d’alternance.",
        },
        {
          name: "Comment se déroule l'inscription ?",
          text: "Après avoir reçu votre candidature en ligne, vous accèderez à notre test de positionnement sous forme de QCM (directement sur le site ou via un lien reçu par mail). Ce test ayant une simple valeur informative, nous permettra de connaître votre niveau afin de vous proposer un programme adapté. Une fois le test réalisé, l’école vous invitera à prendre un rendez-vous via un lien « Calendly » avec l’un de nos guides, avec qui vous passerez un court entretien par visioconférence pour nous faire part de votre situation, de vos motivations, mais aussi afin que nous vous expliquions notre vision de la formation et du parcours pédagogique",
        },
        {
          name: "Comment se déroule une année académique ?",
          text: "La rentrée débute avec un Bivouac de deux semaines complètes, dans un lieu choisi par Tera Campus. Ce premier Bivouac permettra de créer un esprit d'équipe qui va perdurer tout au long de l'année académique. Ensuite, jusqu'aux vacances de février, les étudiants suivent des cours en ligne avec des professionnels reconnus, ainsi que des ressources complémentaires pour pouvoir approfondir leurs connaissances à leur rythme. Un deuxième Bivouac de deux semaines complètes permettra de faire le point à mi-parcours, et de collaborer avec les autres étudiants lors d'un Hackathon et d'exercices stimulants de Team Building. À la suite de ce deuxième bivouac, les cours en ligne reprendront jusqu'au mois de juin pour finaliser le programme de l'année. Le dernier Bivouac quand-t à lui sera un moyen de clôturer l'année tous ensemble autour d'activités permettant de sceller les relations entre étudiants, et de fêter l'arrivée de l'été.",
        },
      ],
    },
  }
}

export default Index
