import Head from 'next/head'
import { useRouter } from 'next/router'

import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'


import BlockTitle from '../components/atoms/BlockTitle'
import InputRadio from '../components/molecules/InputRadio'
// import InputCheckRGPD from '../components/molecules/InputCheckRGPD'
import Input from '../components/molecules/Input'
import PageLink from '../components/atoms/PageLink'

// TODO importer la molecule EnrolmentForm à la place
const EnrolmentForm = ({ status, onSubmit }) => {
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState :{ errors }
  } = useForm()
  
    useEffect(() => { reset() }, [])

  // TODO importer la molecule InputButton à la place
    const renderSubmitButton = () => {
        switch (status) {
            case 'loading':
                return <input
                    type="submit"
                    value="En cours d'envoi ..."
                    className="w-1/3 p-4 bg-gray-400 outline-none md:col-span-2"
                    disabled
                />
            case 'success':
                return <input
                    type="submit"
                    value="Envoyé !"
                    className="w-1/3 p-4 bg-green-400 outline-none md:col-span-2"
                    disabled
                />
            default:
                return <input
                    type="submit"
                    value="Envoyer"
                    className="w-1/3 p-4 bg-yellow-400 shadow outline-none cursor-pointer md:col-span-2 hover:bg-yellow-500 hover:shadow-none"
                />
        }
    }

    return (
      <form classname="w-full mx-2" onSubmit={(handleSubmit(onSubmit))}>
        <div>
          <div>
            <div className="space-y-1">
              <div className="flex items-center space-y-1">
                <label htmlFor="gender" className="w-1/4">Civilité* :</label>
                <InputRadio
                  name="gender"
                  control={control}
                  choices={[
                      { label: 'Mme', value: 'F' },
                      { label: 'M.', value: 'M' },
                  ]}
                />
                <span className=" text-tc-red">{errors?.gender?.message}</span>
              </div>
              <div className="flex items-center space-y-1">
                {/* // TODO importer la molecule Input à la place */}
                {/* //* errors ne fonctionne pas
                <Input
                id="email"
                type="email"
                name="email"
                placeholder="thomas.anderson@tera-campus.com"
                label="E-mail :"
                register={register("email", { required: true })}
                /> */}
                <label htmlFor="email" className="w-1/4">E-mail* :</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="thomas.anderson@tera-campus.com"
                  className={`p-2 flex-1 border rounded mx-2 outline-none
                    ${errors.email ? 'border-tc-red' : 'border-black'}
                  `}
                  {...register("email", { required: true })}
                />
                <span className="text-tc-red">{errors?.email?.message}</span>
              </div>
              <div className="flex items-center space-y-1">
                 {/* // TODO importer la molecule Input à la place */}
                <label htmlFor="lastName" className="w-1/4">Nom* :</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Anderson"
                  className={`mx-2 p-2 flex-1 border rounded outline-none
                    ${errors.lastName ? 'border-tc-red' : 'border-black'}
                  `}
                  {...register("lastName", { required: true })}
                />
                <span className="text-tc-red">{errors?.lastName?.message}</span>
              </div>
              <div className="flex items-center space-y-1">
                 {/* // TODO importer la molecule Input à la place */}
                  <label htmlFor="firstName" className="w-1/4">Prénom* :</label>
                  <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Thomas"
                  className={`mx-2 p-2 flex-1 border rounded outline-none
                      ${errors.firstName ? 'border-tc-red' : 'border-black'}
                  `}
                  {...register("firstName", { required: true })}
                  />
                  <span className="text-tc-red">{errors?.firstName?.message}</span>
              </div>
              <div className="flex items-center space-y-1">
                 {/* // TODO importer la molecule Input à la place */}
                  <label htmlFor="phone" className="w-1/4">Prénom* :</label>
                  <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="1234567890"
                  className={`mx-2 p-2 flex-1 border rounded outline-none
                      ${errors.phone ? 'border-tc-red' : 'border-black'}
                  `}
                  {...register("phone", { required: true })}
                  />
                  <span className="text-tc-red">{errors?.phone?.message}</span>
              </div>
              <div className="space-y-1">
                {/* // TODO le message d'erreur ne fonctionne pas 
                <InputCheckRGPD /> */}
                <label className="flex my-4">
                  <div className="flex flex-row content-center flex-nowrap align-center w-max">
                    <input
                      type="checkbox"
                      className="my-auto mr-2 border outline-none "
                      {...register("acceptPrivacyRules", { required: true })}
                    />
                    <div className="flex flex-row flex-wrap max-w-full text-xs align-items sm:text-base">
                      <p>J'ai lu et j'accepte la&nbsp;</p>
                      <PageLink id="privacy" 
                        label="politique de confidentialité" />
                      <p>&nbsp;de Tera Campus.</p>
                    </div>
                  </div>
                </label>
                {
                  errors.acceptPrivacyRules && <span className="text-tc-red">
                    Tu dois accepter la politique de confidentialité pour continuer.
                  </span>
                }
              </div>
            </div>
          </div>
        </div>
          <div className="flex items-center justify-center my-4">{ renderSubmitButton() }</div>
      </form>
    )
}

const pageTitle = "Inscription - Tera Campus"
const pageDescription = "Inscription"
const pageUrl = 'https://tera-campus.com/enrolment'

export default function Enrolment() {
  const orderDocuments = input => {
    const output = {
      email: input.email,
      gender: input.gender,
      firstName: input.firstName,
      lastName: input.lastName,
      phone: imput.phone
    }
    return output
  }
  
  const router = useRouter()


    const mutation = useMutation(data => axios.post('/arpette/enrolments/', data).then(
        ({ data }) => router.push(`/enrolment-quiz?key=${data.quizSession}`)
    ), { retry: 3 })

  const onSubmit = formData => mutation.mutate(orderDocuments(formData))
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main className="mx-2 md:mx-4">
        <section id="enrolment" className="py-10 md:py-20">
          <div className="flex flex-col justify-between flex-grow md:container md:mx-auto">
            <BlockTitle
              title="Pré-inscription"
              iconPicture={{ backgroundImage: "url('inscription-red-into-blue.png')" }}
            />
          </div>
          <EnrolmentForm status={mutation.status} onSubmit={onSubmit} />
        </section>
      </main>
    </>
  )
}
