import axios from 'axios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import InputButtonMutation from '../molecules/InputButtonMutation'
// import InputButtonSimple from '../molecules/InputButtonSimple'

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

  const handleClick = () => {
    mutation.mutate()
  }

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
      <div className="flex flex-row justify-center">
        <InputButtonMutation
          defaultValue="Démarrer de le test"
          loadingValue="Test en cours de chargement ..."
          successValue="Test chargé"
          mutation={mutation}
          onClick={handleClick}
        />
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
        return <SingleChoiceForm
          question={test.question}
          onSubmit={onSubmit}
          mutation={mutation}
        />
      case 'MULTIPLE':
        return <MultipleChoicesForm
          question={test.question}
          onSubmit={onSubmit}
          mutation={mutation}
        />
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

const SingleChoiceForm = ({ question, onSubmit, mutation }) => {
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
      <div className="flex justify-center pt-4">
        {/* <InputButtonSimple
          defaultValue="Valider ma réponse"
          submitedValue="Réponse envoyée"
        /> */}
        <InputButtonMutation
          defaultValue="Valider ma réponse"
          loadingValue="En cours d'envoi ..."
          successValue="Réponse envoyée"
          mutation={mutation}
        />
      </div>
    </form>
  )
}

const MultipleChoicesForm = ({ question, onSubmit, mutation }) => {
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
      <div className="flex justify-center pt-4">
         {/* <InputButtonSimple
          defaultValue="Valider ma réponse"
          submitedValue="Réponse envoyée"
        /> */}
        <InputButtonMutation
          defaultValue="Valider ma réponse"
          loadingValue="En cours d'envoi ..."
          successValue="Réponse envoyée"
          mutation={mutation}
        />
      </div>
    </form>
  )
}

const TestEnded = ({ applicant, test, uuid, setPageData }) => {
  const { reset, register, handleSubmit } = useForm()
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
  
  // const uploaded = "1 document chargé"

  // const [resumeValue, setResumeValue] = useState("Ajouter mon CV")
  // // const [inputResumeValue, setInputResumeValue] = useState()
  // const onChangeResume = event => {
  //   // setInputResumeValue(event.target.value);
  //   setResumeValue(uploaded);
  // };

  // const [identityValue, setIdentityValue] = useState("Ajouter mon identité")
  // // const [inputIdentityValue, setInputIdentityValue] = useState()
  // const onChangeIdentity = event => {
  //   // setInputIdentityValue(event.target.value);
  //   setIdentityValue(uploaded);
  // };

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
              {/* <label htmlFor="document" className={`p-8 text-center rounded cursor-pointer  hover:bg-tc-blue-light  ${errors.resume ? 'border-tc-red bg-tc-red-xlight border-4' : 'border-tc-blue bg-tc-blue-xlight border'}`}>
                <p id="document-trigger" className="font-bold">
                  {identityValue}
                  Ajouter mon identité
                </p>
                <p>{ inputIdentityValue }</p>
                <div className="text-xs italic">
                  <p >Maximum 1 fichier de 2MB</p>
                  <p>Format accepté : PDF</p>
                </div>
              </label> */}
              <input
                type="file"
                name="document"
                id="document"
                accept="application/pdf"
                {...register("document", { required: true })}
                // className="hidden"
                // onChange={onChangeIdentity}
              />
            </div>

            <div className="flex flex-col justify-center w-3/4 my-8 space-y-2 md:w-2/3 lg:w-1/4 xl:w-1/5 2xl:w-2/12">
              <label htmlFor="resume" className="cursor-pointer">CV* :</label>
              {/* <label htmlFor="resume" className={`p-8 text-center rounded cursor-pointer  hover:bg-tc-blue-light  ${errors.resume ? 'border-tc-red bg-tc-red-xlight border-4' : 'border-tc-blue bg-tc-blue-xlight border'}`}>
                <p className="font-bold">
                  {resumeValue}
                  Ajouter mon CV
                </p>
                <p>{ inputResumeValue }</p>
                <div className="text-xs italic">
                  <p>Maximum 1 fichier de 2MB</p>
                  <p>Format accepté : PDF</p>
                </div>
              </label> */}
              <input
                type="file"
                name="resume"
                id="resume"
                accept="application/pdf"
                {...register("resume", { required: true })}
                // className="hidden"
                // onChange={onChangeResume}
              />
            </div>
            
          </div>
          <div className="mt-12">
            <InputButtonMutation
              defaultValue="Envoyer"
              loadingValue="En cours d'envoi ..."
              successValue="Envoyé"
              mutation={mutation}
            />
          </div>
        </form>
      </div>
    </>
  )
}


