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
                    className="w-full p-4 bg-gray-400 outline-none md:col-span-2"
                    disabled
                />
            case 'success':
                return <input
                    type="submit"
                    value="Envoyé !"
                    className="w-full p-4 bg-green-400 outline-none md:col-span-2"
                    disabled
                />
            default:
                return <input
                    type="submit"
                    value="Envoyer"
                    className="w-full p-4 bg-yellow-400 shadow outline-none cursor-pointer md:col-span-2 hover:bg-yellow-500 hover:shadow-none"
                />
        }
    }

    return (
      <form onSubmit={(handleSubmit(onSubmit))}>
        <div className="grid grid-cols-1 gap-12 py-10 md:py-24">
          <div>
            <div className="grid items-center grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2">
              <div className="space-y-1">
                <label htmlFor="gender">Civilité* :</label>
                <InputRadio
                  name="gender"
                  control={control}
                  choices={[
                      { label: 'Mme', value: 'F' },
                      { label: 'M.', value: 'M' },
                  ]}
                />
                <span className="col-span-2 text-tc-red">{errors?.gender?.message}</span>
              </div>
              <div className="space-y-1">
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
                <label htmlFor="email">E-mail* :</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="thomas.anderson@tera-campus.com"
                  className={`
                    w-full p-2 border rounded
                    ${errors.email ? 'border-tc-red' : 'border-black'}
                    outline-none
                  `}
                  {...register("email", { required: true })}
                />
                <span className="text-tc-red">{errors?.email?.message}</span>
              </div>
              <div className="space-y-1">
                 {/* // TODO importer la molecule Input à la place */}
                <label htmlFor="lastName">Nom* :</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Anderson"
                  className={`
                      w-full p-2 border
                      ${errors.lastName ? 'border-tc-red' : 'border-black'}
                      rounded-none outline-none
                  `}
                  {...register("lastName", { required: true })}
                />
                <span className="text-tc-red">{errors?.lastName?.message}</span>
              </div>
              <div className="space-y-1">
                 {/* // TODO importer la molecule Input à la place */}
                  <label htmlFor="firstName">Prénom* :</label>
                  <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Thomas"
                  className={`
                      w-full p-2 border
                      ${errors.firstName ? 'border-tc-red' : 'border-black'}
                      rounded-none outline-none
                  `}
                  {...register("firstName", { required: true })}
                  />
                  <span className="text-tc-red">{errors?.firstName?.message}</span>
              </div>
              <div className="space-y-1">
                 {/* // TODO importer la molecule Input à la place */}
                  <label htmlFor="phone">Prénom* :</label>
                  <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="1234567890"
                  className={`
                      w-full p-2 border
                      ${errors.phone ? 'border-tc-red' : 'border-black'}
                      rounded-none outline-none
                  `}
                  {...register("phone", { required: true })}
                  />
                  <span className="text-tc-red">{errors?.phone?.message}</span>
              </div>
              <div className="space-y-1">
                {/* // TODO le message d'erreur ne fonctionne pas 
                <InputCheckRGPD /> */}
                <label className="flex ">
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
          { renderSubmitButton() }
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

      <main className="w-full mx-2 md:mx-4">
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
