import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import "react-phone-number-input/style.css"
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
// TODO faire la validation du numéro avec isPossiblePhoneNumber
// import { isPossiblePhoneNumber } from 'react-phone-number-input'

import BlockTitle from "../../components/organisms/BlockTitle"
import InputRadio from "../../components/molecules/InputRadio"
import InputButton from "../../components/molecules/InputButton"
// import InputCheckRGPD from '../components/molecules/InputCheckRGPD'
// import Input from '../components/molecules/Input'
import PageLink from "../../components/atoms/PageLink"
import Form from "../../components/molecules/Form"

//TODO importer une molécule Input
// TODO layout msg d'erreur des checkbox ()

// TODO importer la molecule EnrolmentForm à la place
const EnrolmentForm = ({ mutation, onSubmit }) => {
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    reset()
  }, [])

  // TODO style au focus du phoneInput border à enlever à l'intérieur
  return (
    <form className="w-full mx-2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <div className="space-y-1 xl:space-y-8 xl:flex xl:flex-col xl:items-center ">
            <div className="space-y-1 xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="xl:w-45% space-y-1">
                <div className="flex items-center">
                  <div className="w-30%">
                    <label htmlFor="gender">Civilité* :</label>
                  </div>
                  <InputRadio
                    name="gender"
                    control={control}
                    choices={[
                      { label: "Mme", value: "F" },
                      { label: "M.", value: "M" },
                    ]}
                  />
                </div>
                {errors.gender ? (
                  <div className="text-center text-tc-red">
                    Tu dois cocher la case qui te correspond pour continuer ton
                    inscription
                  </div>
                ) : null}
              </div>
              <div className="space-y-1 xl:w-45%">
                {/* // TODO importer la molecule Input à la place */}
                {/* //* Input composant ne fonctionne pas : à revoir */}
                <div className="flex items-center">
                  <label htmlFor="email" className="w-30%">
                    E-mail* :
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="thomas.anderson@tera-campus.com"
                    className={`p-2 flex-1 border rounded mx-2 outline-none ${
                      errors.email ? "border-tc-red" : "border-tc-blue"
                    }`}
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email ? (
                  <div className="text-center text-tc-red">
                    Tu dois donner ton email pour continuer ton inscription
                  </div>
                ) : null}
              </div>
            </div>
            <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="space-y-1 xl:w-45%">
                {/* // TODO importer la molecule Input à la place */}
                <div className="flex items-center">
                  <label htmlFor="lastName" className="w-30%">
                    Nom* :
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Anderson"
                    className={`mx-2 p-2 flex-1 border rounded outline-none ${
                      errors.lastName ? "border-tc-red" : "border-tc-blue"
                    }`}
                    {...register("lastName", { required: true })}
                  />
                </div>
                {errors.lastName ? (
                  <div className="text-center text-tc-red">
                    Tu dois donner ton nom pour continuer ton inscription
                  </div>
                ) : null}
              </div>
              <div className="space-y-1 xl:w-45%">
                {/* // TODO importer la molecule Input à la place */}
                <div className="flex items-center">
                  <label htmlFor="firstName" className="w-30%">
                    Prénom* :
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Thomas"
                    className={`mx-2 p-2 flex-1 border rounded outline-none ${
                      errors.firstName ? "border-tc-red" : "border-tc-blue"
                    }`}
                    {...register("firstName", { required: true })}
                  />
                </div>
                {errors.firstName ? (
                  <div className="text-center text-tc-red">
                    Tu dois donner ton prénom pour continuer ton inscription
                  </div>
                ) : null}
              </div>
            </div>
            <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="space-y-1 xl:w-45%">
                <div className="space-y-1">
                  <div className="flex items-center">
                    <label htmlFor="phone" className="w-30%">
                      Téléphone* :
                    </label>
                    {/* //TODO voir pour retirer le border intern au focus */}
                    <PhoneInputWithCountry
                      id="phone"
                      name="phone"
                      defaultCountry="FR"
                      international
                      withCountryCallingCode
                      control={control}
                      rules={{ required: true }}
                      className={`mx-2 p-2 flex-1 border w-65% rounded outline-none ${
                        errors.phone ? "border-tc-red" : "border-tc-blue"
                      }`}
                    />
                  </div>
                  {errors.phone ? (
                    <div className="text-center text-tc-red">
                      Tu dois donner ton numéro de téléphone pour continuer ton
                      inscription
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <label className="flex flex-col justify-center space-y-1">
              <div className="flex flex-row pt-8 mx-auto flex-nowrap w-max-full">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="w-6 h-6 my-auto rounded border-tc-blue md:w-4 md:h-4 text-tc-blue focus:ring-offset-0"
                  {...register("consent", { required: true })}
                />
                <div>
                  <div className="box-border flex flex-row flex-wrap items-center max-w-full ml-2 text-xs sm:text-base">
                    {/* // TODO vérifier alignement des éléments */}
                    <p className="border-b-2 border-transparent">
                      J'ai lu et j'accepte la&nbsp;
                    </p>
                    <PageLink
                      id="privacy"
                      label="politique de confidentialité"
                    />
                    <p className="border-b-2 border-transparent">
                      &nbsp;et j'accepte d'être recontacté par Tera Campus pour
                      finaliser mon inscription.
                    </p>
                  </div>
                </div>
              </div>
              {errors.consent ? (
                <div className="text-center text-tc-red">
                  Tu dois accepter la politique de confidentialité pour
                  continuer ton inscription.
                </div>
              ) : null}
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-4 xl:my-20">
        <InputButton
          defaultValue="Envoyer"
          loadingValue="En cours d'envoi ..."
          successValue="Envoyé"
          mutation={mutation}
        />
      </div>
    </form>
  )
}

const pageTitle = "Inscription - Tera Campus"
const pageDescription = "Inscription"
const pageUrl = "https://tera-campus.com/enrolment"
const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

export default function Enrolment() {
  const router = useRouter()

  const mutation = useMutation(
    (formData) => {
      axios
        .post(`${apiUrl}/enrolment/create`, formData)
        .then(({ data }) => router.push(`/enrolment/${data.enrolment}`))

        .catch((error) => console.log(error))
    },
    { retry: 3 }
  )

  const onSubmit = (formData) => mutation.mutate(formData)
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
        <section id="enrolment" className="py-10 md:py-20">
          <div className="flex flex-col justify-between flex-grow md:container md:mx-auto">
            <BlockTitle
              title="Inscription"
              iconPicture={{
                backgroundImage: "url('inscription-red-into-blue.png')",
              }}
            />
          </div>
          <div className="xl:my-12">
            {/* <EnrolmentForm
              status={mutation.status}
              onSubmit={onSubmit}
              mutation={mutation}
            /> */}
            <Form
              status={mutation.status}
              onSubmit={onSubmit}
              mutation={mutation}
            />
          </div>
        </section>
      </main>
    </>
  )
}
