import axios from 'axios'
import Head from 'next/head'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import BlockTitle from '../../../components/atoms/BlockTitle'

const pageTitle = "Test de positionnement - Tera Campus"
const pageDescription = "Test de positionnement"
const pageUrl = 'https://tera-campus.com/enrolment/quiz/'
const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

export async function getServerSideProps(context) {
  const res = await fetch(`${apiUrl}/public/enrolment/quiz/${context.query.quizUuid}`)
  const data = await res.json()
  if (!data.status) return {notFound: true}
  return { props: {uuid: context.query.quizUuid, initialPageData: data}}
}

export default function Quiz({ uuid, initialPageData }) {
  const [pageData, setPageData] = useState(initialPageData)
  
  const mutation = useMutation(data => axios
    .post(`${apiUrl}/public/enrolment/quiz/${uuid}`, data)
    .then(({ data }) => setPageData(data))
  )

  const onSubmit = (data = {}) => mutation.mutate(data)

  const renderBody = () => {
    switch(pageData.status) {
      case 'CREATED':
        return <QuizCreated pageData={pageData} submit={onSubmit} />
      case 'ONGOING':
        return <QuizOngoing pageData={pageData} submit={onSubmit} />
      case 'ENDED':
        return <QuizEnded pageData={pageData} />
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

const QuizCreated = ({ pageData, submit }) => (
  <div className="space-y-8 text-center">
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
          <li>Si tu n'as pas le temps maintenant tu pourras lancer le test via un lien dans le mail que tu vas recevoir</li>
          <li>Toute réponse est définitive, tu ne pourras plus revenir en arrière</li>
        </ul>
      </div>
      <p>Bon courage et à très vite !</p>
    </div>
    <div className="w-auto pt-8 mx-auto group">
            <div className="relative z-0 px-4 mx-auto font-bold text-transparent transition-colors duration-700 border rounded-t shadow outline-none cursor-pointer w-max rounded-b-xl bg-tc-blue-light border-tc-blue-dark group-hover:bg-tc-red-light group-hover:border-tc-red-dark group-hover:shadow-none">
              Démarrer le test
              <input
                type="submit"
                value="Démarrer le test"
          className="absolute left-0 z-20 px-4 mx-auto font-bold text-white transition-colors duration-700 transform rounded-t shadow outline-none cursor-pointer -top-15/100 w-max rounded-b-xl bg-tc-blue group-hover:bg-tc-red group-hover:shadow-none group-hover:-top-20/100 active:translate-y-20/100"
          onClick={() => submit()}
              />
            </div>
          </div>
  </div>
)

const QuizOngoing = ({ pageData, submit }) => {
  const onSubmit = data => {
    const answers = []
    for (const [key, value] of Object.entries(data)) {
        if (value) {
            answers.push(parseInt(value))
        }
    }
    submit({ question: pageData.question.id, answers })
  }

  const renderForm = () => {
    switch(pageData.question.kind) {
      case 'SINGLE':
        return <SingleChoiceForm question={pageData.question} onSubmit={onSubmit} />
      case 'MULTIPLE':
        return <MultipleChoicesForm question={pageData.question} onSubmit={onSubmit} />
    }
  }
  
  const typeChoice = () => {
    switch(pageData.question.kind) {
      case 'SINGLE':
        return <div>il n'y a qu'une seule réponse possible</div>
      case 'MULTIPLE':
        return <div>il y a plusieur réponses possibles</div>
    }
  }

  return (
    <>
        <div className="flex flex-col max-w-full mx-auto space-y-4 w-max">
            <div className="text-xl text-center uppercase">Inscription de <span className="font-bold">{pageData.applicant}</span></div>
            <div className="text-xs text-right">Question : {pageData.question.id}/{pageData.remainingQuestions}</div>
        <div>
            <div>Domaine : <span className="my-4 italic font-bold uppercase">{ pageData.question.domain }</span></div>
            <div className="font-semibold">{pageData.question.title}</div>
            <div className="text-sm italic text-right">{ typeChoice() }</div>
        </div>
            { renderForm() }
        </div>
    </>
  )
}

const QuizEnded = ({ pageData }) => (
  <>
    <div className="mt-12 mb-8 text-xl font-bold text-center">Félicitations {pageData.applicant} !</div>
    <div className="text-center">Ton test est terminé, voici tes résultats : </div>
    {/* //TODO intégrer les résultats du test */}
    <div className="text-lg font-semibold text-center"> </div>
    <div className="text-center">Tu recevras également tes résultats par email.</div>
  </>
)

const SingleChoiceForm = ({ question, onSubmit }) => {
  const { register, handleSubmit } = useForm()
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            {question.choices.map(choice => (
                <div key={choice.body}>
                    <input
                        type="radio"
                        id={`choice${choice.id}`}
                        name="choice"
                        value={choice.id}
                  {...register("choice")}
                  className="mr-2"
                    />
                    <label htmlFor={`choice${choice.id}`}>{choice.body}</label>
                </div>
            ))}
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Valider ma réponse"
              className="box-border px-2 mx-auto mt-8 font-semibold border rounded bg-tc-blue-xlight border-tc-blue-bright" />
          </div>
      </form>
  )
}

const MultipleChoicesForm = ({ question, onSubmit }) => {
  const { register, handleSubmit } = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
          {question.choices.map(choice => (
              <div key={choice.body}>
                  <input
                      type="checkbox"
                      id={`choice${choice.id}`}
                      name="choice"
                      value={choice.id}
                      {...register("choice")}
                  />
                  <label htmlFor={`choice${choice.id}`}>{choice.body}</label>
              </div>
          ))}
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value="Valider ma réponse"
          className="box-border px-2 mx-auto mt-8 font-semibold border rounded bg-tc-blue-xlight border-tc-blue-bright" />
      </div>
      </form>
  )
}
