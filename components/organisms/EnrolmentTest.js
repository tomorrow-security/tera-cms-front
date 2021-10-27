import axios from "axios"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"

import InputButton from "./../molecules/InputButton"

const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

export default function EnrolmentTest({ applicant, test, uuid, setPageData }) {
  const renderBody = () => {
    switch (test.status) {
      case "CREATED":
        return (
          <TestCreated
            applicant={applicant}
            test={test}
            uuid={uuid}
            setPageData={setPageData}
          />
        )
      case "ONGOING":
        return (
          <TestOngoing
            applicant={applicant}
            test={test}
            uuid={uuid}
            setPageData={setPageData}
          />
        )
      case "ENDED":
        return (
          <TestEnded
            applicant={applicant}
            test={test}
            uuid={uuid}
            setPageData={setPageData}
          />
        )
    }
  }

  return <div className="xl:my-12">{renderBody()}</div>
}

const TestCreated = ({ applicant, test, uuid, setPageData }) => {
  const mutation = useMutation(() =>
    axios
      .post(`${apiUrl}/enrolment/${uuid}/start-test`)
      .then(({ data }) => setPageData(data))
  )

  const handleClick = () => {
    mutation.mutate()
  }

  return (
    <div className="mx-4 space-y-8 text-center">
      <div className="space-y-2">
        <p className="font-bold">
          <span className="capitalize">{applicant}</span>, merci pour votre
          inscription chez Tera Campus !
        </p>
        <p>
          Dans quelques instants vous pourrez démarrer votre test de
          positionnement.
        </p>
        <p>
          Ce test se présente sous la forme d’un QCM de{" "}
          {test.remainingQuestions} questions autour des technologies de
          l’information et de certaines compétences générales.
        </p>
        <p className="underline">
          Si vous n’avez pas les réponses à toutes les questions, pas
          d’inquiétude !
        </p>
        <p>
          Il s’agit d’un test de positionnement qui nous permettra de connaitre
          votre niveau afin de mieux vous préparer à la rentrée scolaire chez
          Tera Campus !
        </p>
        <p>Quelques informations complémentaires :</p>
        <div>
          <ul className="list-disc list-inside">
            <li>
              Une ou plusieurs réponses seront possible selon les questions
            </li>
            <li>
              Une fois le test lancé, vous aurez deux heures pour le valider
            </li>
            <li>
              Si vous n'avez pas le temps maintenant, vous pourrez lancer le
              test via un lien dans le mail que vous allez recevoir
            </li>
            <li>
              Toute réponse est définitive, vous ne pourrez plus revenir en
              arrière
            </li>
          </ul>
        </div>
        <p>Bon courage et à très vite !</p>
      </div>
      <div className="flex flex-row justify-center">
        <InputButton
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
  const mutation = useMutation((data) =>
    axios
      .post(`${apiUrl}/enrolment/${uuid}/save-test-answer`, data)
      .then(({ data }) => setPageData(data))
  )

  const onSubmit = ({ choice }) => {
    const answers = []
    if (Array.isArray(choice)) {
      for (const [key, value] of Object.entries(choice)) {
        if (value) {
          answers.push(parseInt(value))
        }
      }
    } else {
      answers.push(parseInt(choice))
    }
    mutation.mutate({ question: test.question.id, answers })
  }

  const renderForm = () => {
    switch (test.question.kind) {
      case "SINGLE":
        return (
          <SingleChoiceForm
            question={test.question}
            onSubmit={onSubmit}
            mutation={mutation}
          />
        )
      case "MULTIPLE":
        return (
          <MultipleChoicesForm
            question={test.question}
            onSubmit={onSubmit}
            mutation={mutation}
          />
        )
    }
  }

  /**
   * Defines the type of questions
   * @param {string} test.question.kind
   * @returns {HTMLElement}
   */
  const typeChoice = () => {
    switch (test.question.kind) {
      case "SINGLE":
        return <div>il n'y a qu'une seule réponse possible</div>
      case "MULTIPLE":
        return <div>il y a plusieurs réponses possibles</div>
    }
  }

  return (
    <>
      <div className="flex flex-col max-w-full mx-auto space-y-4 w-max">
        <div className="text-xl text-center uppercase">
          Inscription de&nbsp;
          <span className="font-bold">{applicant}</span>
        </div>
        <div className="mr-4 text-xs text-right">
          Question : {test.progress}
        </div>
        <div>
          <div className="ml-4">
            Domaine :{" "}
            <span className="my-4 italic font-bold uppercase">
              {test.question.domain}
            </span>
          </div>
          <div className="ml-4 font-semibold">{test.question.title}</div>
          <div className="mr-4 text-sm italic text-right">{typeChoice()}</div>
        </div>
        {renderForm()}
      </div>
    </>
  )
}

const SingleChoiceForm = ({ question, onSubmit, mutation }) => {
  const { reset, register, handleSubmit } = useForm()

  useEffect(() => {
    reset()
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        {question.choices.map((choice) => (
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
        <InputButton
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
  useEffect(() => {
    reset()
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        {question.choices.map((choice) => (
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
        <InputButton
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
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    reset()
  }, [])

  const mutation = useMutation((data) =>
    axios
      .post(`${apiUrl}/enrolment/${uuid}/save-files`, data, {
        headers: { "Content-Type": "multipart/form-data" },
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
  const onChangeResume = (event) => {
    setResumeValue(uploaded)
  }

  const [identityValue, setIdentityValue] = useState("Ajouter mon identité")
  const onChangeIdentity = (event) => {
    setIdentityValue(uploaded)
  }

  return (
    <>
      <div className="flex flex-col items-stretch mx-4">
        <div className="mt-12 mb-8 text-xl font-bold text-center capitalize">
          Félicitations {applicant} !
        </div>
        <div className="text-center">
          Vous avez terminé votre test avec {test.score}% de réussite.
        </div>
        <div className="mt-12 text-center">
          Pour continuer votre inscription, vous devez nous transmettre un
          document d'indentité ainsi que votre CV à jour :
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-full mx-auto my-4 lg:flex-row lg:justify-around 2xl:justify-evenly">
            <div className="flex flex-col justify-center w-3/4 my-8 space-y-2 md:w-2/3 lg:w-1/4 xl:w-1/5 2xl:w-2/12">
              <label htmlFor="document" className="cursor-pointer">
                Document d'identité* :
              </label>
              {/* //TODO rendre l'errors fonctionnel */}
              <div className="relative group">
                <label
                  // TODO pb de couleur
                  htmlFor="document"
                  // className="absolute p-4 border rounded cursor-pointer bg-tc-blue-xlight border-tc-blue group-hover:border-2"
                  className={`absolute p-4 border rounded cursor-pointer group-hover:border-4 ${
                    errors.document
                      ? "border-tc-red bg-tc-red-xlight"
                      : "border-tc-blue bg-tc-blue-xlight"
                  }`}
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
              <label htmlFor="resume" className="cursor-pointer">
                CV* :
              </label>
              <div className="relative group">
                <label
                  htmlFor="resume"
                  // className="absolute p-4 border rounded cursor-pointer bg-tc-blue-xlight border-tc-blue group-hover:border-2"
                  className={`absolute p-4 border rounded cursor-pointer group-hover:border-4 ${
                    errors.resume
                      ? "border-tc-red bg-tc-red-xlight"
                      : "border-tc-blue bg-tc-blue-xlight"
                  }`}
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
            <InputButton
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
