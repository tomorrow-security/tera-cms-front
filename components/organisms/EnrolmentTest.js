import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import InputButton from './../molecules/InputButton'

const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

export default function EnrolmentTest({ applicant, test, uuid, setPageData }) {
  const renderBody = () => {
    switch(test.status) {
      case 'CREATED':
        return <TestCreated applicant={applicant} test={test} uuid={uuid} setPageData={setPageData} />
      case 'ONGOING':
        return <TestOngoing applicant={applicant} test={test} uuid={uuid} setPageData={setPageData} />
      case 'ENDED':
        return <TestEnded applicant={applicant} test={test} uuid={uuid} setPageData={setPageData} />
    }
  }

  return (
    <div className="xl:my-12">
      { renderBody() }
    </div>
  )
}

const TestCreated = ({ applicant, test, uuid, setPageData }) => {
  const mutation = useMutation(() => axios
    .post(`${apiUrl}/enrolment/${uuid}/start-test`)
    .then(({ data }) => setPageData(data))
  )
  
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-2">
        <p className="font-bold">{applicant}, merci pour ton inscription chez Tera Campus !</p>
        <p>Dans quelques instants tu pourras démarrer ton test de positionnement.</p>
        <p>
          Ce test se présente sous la forme d’un QCM de {test.remainingQuestions} questions autour
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
            <li>Si tu n'as pas le temps maintenant, tu pourras lancer le test via un lien dans le mail que tu vas recevoir</li>
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
            onClick={() => mutation.mutate()}
          />
        </div>
      </div>
    </div>
  )
}

const TestOngoing = ({ applicant, test, uuid, setPageData }) => {
  const mutation = useMutation(data => axios
    .post(`${apiUrl}/enrolment/${uuid}/save-test-answer`, data)
    .then(({ data }) => setPageData(data))
  )

  const onSubmit = ({ choice }) => {
    const answers = []
    if (Array.isArray(choice)) {
      for (const [key, value] of Object.entries(choice)) {
        if (value) { answers.push(parseInt(value)) }
      }
    } else {
      answers.push(parseInt(choice))
    }
    mutation.mutate({ question: test.question.id, answers })
  }

  const renderForm = () => {
    switch(test.question.kind) {
      case 'SINGLE':
        return <SingleChoiceForm question={test.question} onSubmit={onSubmit} />
      case 'MULTIPLE':
        return <MultipleChoicesForm question={test.question} onSubmit={onSubmit} />
    }
  }
  
  const typeChoice = () => {
    switch(test.question.kind) {
      case 'SINGLE':
        return <div>il n'y a qu'une seule réponse possible</div>
      case 'MULTIPLE':
        return <div>il y a plusieurs réponses possibles</div>
    }
  }

  return (
    <>
      <div className="flex flex-col max-w-full mx-auto space-y-4 w-max">
        <div className="text-xl text-center uppercase">Inscription de <span className="font-bold">{applicant}</span></div>
        <div className="text-xs text-right">Question : {test.progress}</div>
        <div>
          <div>Domaine : <span className="my-4 italic font-bold uppercase">{ test.question.domain }</span></div>
          <div className="font-semibold">{test.question.title}</div>
          <div className="text-sm italic text-right">{ typeChoice() }</div>
        </div>
        { renderForm() }
      </div>
    </>
  )
}

const TestEnded = ({ applicant, test, uuid, setPageData }) => {
  const { reset, register, handleSubmit, formState: {errors} } = useForm()
  useEffect(() => { reset() }, [])

  const mutation = useMutation(data => axios
    .post(`${apiUrl}/enrolment/${uuid}/save-files`, data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(({ data }) => setPageData(data))
  )

  const onSubmit = ({ document, resume }) => {
    let formData = new FormData()
    formData.append("resume", resume[0])
    formData.append("document", document[0])
    mutation.mutate(formData)
  }
  
  const uploaded = "1 document chargé"

  const [resumeValue, setResumeValue] = useState("Ajouter mon CV")
  const onChangeResume = event => {
    setResumeValue(uploaded);
  };

  const [identityValue, setIdentityValue] = useState("Ajouter mon identité")
  const onChangeIdentity = event => {
    setIdentityValue(uploaded);
  };

  return(
    <>
      <div className="flex flex-col items-stretch">
        <div className="mt-12 mb-8 text-xl font-bold text-center">Félicitations {applicant} !</div>
        <div className="text-center">Tu as terminé ton test avec {test.score}% de réussite.</div>
        <div className="mt-12 text-center">
          Pour continuer ton inscription, tu dois nous transmettre un document d'indentité ainsi que ton CV à jour :
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full mx-auto my-4 lg:flex-row lg:justify-around 2xl:justify-evenly">

            <div className="flex flex-col justify-center w-3/4 my-8 space-y-2 md:w-2/3 lg:w-1/4 xl:w-1/5 2xl:w-2/12">
              <label htmlFor="document" className="cursor-pointer">
                Document d'identité* :
              </label>
              {/* //TODO rendre l'errors fonctionnel */}
              <div className="relative group">
                <label htmlFor="document"
                  // className="absolute p-4 border rounded cursor-pointer bg-tc-blue-xlight border-tc-blue group-hover:border-2"
                  className={`absolute p-4 border rounded cursor-pointer group-hover:border-4 ${errors.document ? 'border-tc-red bg-tc-red-xlight' : 'border-tc-blue bg-tc-blue-xlight'}`}
                >
                  {identityValue}
                </label>
                <input
                  type="file"
                  name="document"
                  id="document"
                  accept="application/pdf"
                  {...register("document", { required: true })}
                  className="absolute opacity-0"
                  onChange={onChangeIdentity}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center w-3/4 my-8 space-y-2 md:w-2/3 lg:w-1/4 xl:w-1/5 2xl:w-2/12">
              <label htmlFor="resume" className="cursor-pointer">CV* :</label>
              <div className="relative group">
                <label htmlFor="resume"
                  // className="absolute p-4 border rounded cursor-pointer bg-tc-blue-xlight border-tc-blue group-hover:border-2"
                  className={`absolute p-4 border rounded cursor-pointer group-hover:border-4 ${errors.resume ? 'border-tc-red bg-tc-red-xlight' : 'border-tc-blue bg-tc-blue-xlight'}`}
                >
                  {resumeValue}
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  accept="application/pdf"
                  {...register("resume", { required: true })}
                  className="absolute opacity-0"
                  onChange={onChangeResume}
                />
              </div>
            </div>
            
          </div>
          <div className="mt-12">
            <InputButton mutation={ mutation } />
          </div>
        </form>
      </div>
    </>
  )
}

const SingleChoiceForm = ({ question, onSubmit }) => {
  const { reset, register, handleSubmit } = useForm()
  useEffect(() => { reset() }, [])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        {question.choices.map(choice => (
          <div key={choice.body}>
            <input
              type="radio"
              id={`choice${choice.id}`}
              className="mr-2"
              name="choice"
              value={choice.id}
              {...register("choice", { required: true })}
            />
            <label htmlFor={`choice${choice.id}`}>{choice.body}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          className="box-border px-2 mx-auto mt-8 font-semibold border rounded bg-tc-blue-xlight border-tc-blue-bright"
          value="Valider ma réponse"
        />
      </div>
    </form>
  )
}

const MultipleChoicesForm = ({ question, onSubmit }) => {
  const { reset, register, handleSubmit } = useForm()
  useEffect(() => { reset() }, [])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        {question.choices.map(choice => (
          <div key={choice.body}>
            <input
              type="checkbox"
              id={`choice${choice.id}`}
              className="mr-2"
              name="choice"
              value={choice.id}
              {...register("choice", { required: true })}
            />
            <label htmlFor={`choice${choice.id}`}>{choice.body}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          className="box-border px-2 mx-auto mt-8 font-semibold border rounded bg-tc-blue-xlight border-tc-blue-bright"
          value="Valider ma réponse"
        />
      </div>
      </form>
  )
}
