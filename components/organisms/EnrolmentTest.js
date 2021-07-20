import axios from 'axios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

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

const TestEnded = ({ applicant, test, uuid, setPageData }) => (
  <>
    <div className="mt-12 mb-8 text-xl font-bold text-center">Félicitations {applicant} !</div>
    <div className="text-center">Tu as terminé ton test avec {test.score}% de réussite.</div>
  </>
)

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
