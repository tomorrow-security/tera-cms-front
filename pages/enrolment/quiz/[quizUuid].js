import Head from 'next/head'
import React from 'react'

import BlockTitle from '../../../components/atoms/BlockTitle'

const pageTitle = "Test de positionnement - Tera Campus"
const pageDescription = "Test de positionnement"
const pageUrl = 'https://tera-campus.com/enrolment/quiz/'
const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

export async function getServerSideProps(context) {
  const res = await fetch(`${apiUrl}/public/enrolment/quiz/${context.query.quizUuid}`)
  console.log(res)
  const data = await res.json()
  if (!data.status) return {notFound: true}
  return { props: {pageData: data}}
}

export default function Quiz({ pageData }) {
  const sendAnswer = (data = {}) => console.log(data)

  const renderBody = () => {
    switch(pageData.status) {
      case 'CREATED':
        return <QuizCreated pageData={pageData} sendAnswer={sendAnswer} />
      case 'ONGOING':
        return 'ongoing'
      case 'ENDED':
        return 'ended'
    }
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main className="mx-2 md:container md:mx-auto">
        <section id="quiz" className="py-10 md:py-20">
          <div className="flex flex-col justify-between flex-grow md:container md:mx-auto">
            <BlockTitle
              title="Test de positionnement"
              iconPicture={{ backgroundImage: "url('/inscription-red-into-blue.png')" }}
            />
          </div>
          <div className="xl:my-12">
            { renderBody() }
          </div>
        </section>
      </main>
    </>
  )
}

const QuizCreated = ({ pageData, sendAnswer }) => (
  <div className="text-center space-y-8">
    <div className="space-y-2">
      <p className="font-bold">{pageData.applicant}, merci pour ton inscription chez Tera Campus !</p>
      <p>Dans quelques instants tu pourras démarrer ton test de positionnement.</p>
      <p>
        Ce test se présente sous la forme d’un QCM de {pageData.remainingQuestions} questions autour
        des technologies de l’information et de certaines compétences générales.
      </p>
      <p className="underline">Si tu n’as pas les réponses à toutes les questions, pas d’inquiétude !</p>
      <p>
        Il s’agit d’un test de positionnement qui nous permettra de connaitre ton niveau afin de mieux
        te préparer à la rentrée scolaire chez Tera Campus !
      </p>
      <p>Quelques informations complémentaires :</p>
      <div>
        <ul className="list-disc list-inside">
          <li>Une ou plusieurs réponses seront possible selon les questions</li>
          <li>Une fois le test lancé, tu auras deux heures pour le valider</li>
          <li>Toute réponse est définitive, tu ne pourras plus revenir en arrière</li>
        </ul>
      </div>
      <p>Bon courage et à très vite !</p>
    </div>
    <button
        className="p-2 bg-tc-blue hover:bg-tc-red rounded-t rounded-b-xl text-white uppercase"
        onClick={() => sendAnswer()}
      >
        Démarrer le test !
      </button>
  </div>
)
