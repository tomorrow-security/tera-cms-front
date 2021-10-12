import Head from "next/head"
import axios from "axios"

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
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const agenda = await axios.get("http://localhost:3000/api/agenda")

  // const agenda = () => {
  //   axios
  //     .get("http://localhost:3000/api/agenda")
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  return {
    props: {
      events: [
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
          text: "Aucun pré-requis n'est nécessaire pour rejoindre Tera Campus. La formation s'adresse à des personnes motivées avant tout.",
        },
        {
          name: "Le diplôme est-il reconnu par l'état ?",
          text: "Les titres délivrés par Tera Campus sont des diplômes RNCP de type 6 et 7, reconnus par l'état.",
        },
        {
          name: "Quelle est la durée de la formation ?",
          text: "Le cursus complet se déroule en 5 années. D'octobre à juin pour les deux premières années en formation initiale, puis d'octobre à septembre les années suivantes en contrat d'alternance. Tera Campus propose aussi un diplôme optionnel en fin de troisième année, te permettant ainsi de réduire la durée de ton cursus.",
        },
        {
          name: "Quel est le coût de la formation ?",
          text: "Chez Tera Campus, nous avons souhaité faire une proposition simple et accessible à 6000€ par année en formation initiale. Le cursus intégral ne te coûtera qu'un maximum de deux années (1ère et 2ème année), soit 12000€, puisque le coût de ta formation sera ensuite prise en charge par ton contrat d'alternance.",
        },
        {
          name: "Comment se déroule l'inscription ?",
          text: "Après avoir reçu ta candidature en ligne, Tera Campus t'inviteras à passer un court entretien par visioconférence avec l'un de nos guides pour motiver ta candidature ainsi que t'expliquer le concept de notre école. Tu accéderas ensuite à notre test de positionnement sous forme de QCM (via un lien reçu par e-mail). Ce test nous permettra de connaître ton niveau afin de te proposer un programme adapté. Une fois le test réalisé, tu recevras une réponse sous 48 heures qui te permettras de finaliser ton inscription.",
        },
        {
          name: "Comment se déroule une année académique ?",
          text: "La rentrée débute avec un Bivouac de deux semaines complètes, dans un lieu choisi par Tera Campus. Ce premier Bivouac permettra de créer un esprit d'équipe qui va perdurer tout au long de l'année académique entre tous les étudiants de l'école. Ensuite, jusqu'aux vacances de février, tu auras des cours en ligne avec des vrais professionnels, ainsi que des ressources complémentaires pour pouvoir approfondir tes connaissances à ton rythme. Un deuxième Bivouac de deux semaines complètes permettra de faire le point à mi-parcours, et de collaborer avec les autre étudiants lors d'un Hackathon et d'exercices stimulants de Team Building. Et enfin, les cours en ligne reprendront jusqu'au mois de juin pour finaliser le programme de l'année. Le dernier Bivouac sera un moyen de clôturer l'année tous ensemble, autour d'activités permettant de sceller tous les étudiants et de fêter l'arrivée de l'été.",
        },
      ],
    },
  }
}

export default Index
