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

//TODO descendre un peu le submit en view desktop


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
            return <div className="w-auto pt-2 mx-auto group">
              <div className="relative z-0 px-4 font-bold text-transparent border border-t-0 rounded-t outline-none cursor-pointer w-max rounded-b-xl bg-tc-red-xlight border-tc-red-dark">
                En cours d'envoi ...
                <input
                        type="submit"
                        value="En cours d'envoi ..."
                        className="absolute top-0 left-0 z-20 px-4 mx-auto font-bold text-white rounded-t outline-none cursor-pointer w-max rounded-b-xl bg-tc-red-medium"
                        disabled
                    />
              </div>
            </div>
            case 'success':
                return <div className="w-auto pt-2 mx-auto group">
                        <div className="relative z-0 px-4 font-bold text-transparent border border-t-0 rounded-t outline-none cursor-pointer w-max rounded-b-xl bg-tc-blue-xlight border-tc-blue">
                          Envoyé !
                          <input
                          type="submit"
                          value="Envoyé !"
                          className="absolute left-0 z-20 px-4 mx-auto font-bold text-white rounded-t outline-none cursor-pointer bg-tc-blue-medium -top-20/100 w-max rounded-b-xl"
                          disabled
                          />
                        </div>
                      </div>
            default:
                return <div className="w-auto pt-2 mx-auto group">
                        <div className="relative z-0 px-4 font-bold text-transparent transition-colors duration-700 border rounded-t shadow outline-none cursor-pointer w-max rounded-b-xl bg-tc-blue-light border-tc-blue-dark group-hover:bg-tc-red-light group-hover:border-tc-red-dark group-hover:shadow-none">
                          Envoyer
                          <input
                          type="submit"
                          value="Envoyer"
                          className="absolute left-0 z-20 px-4 mx-auto font-bold text-white transition-colors duration-700 transform rounded-t shadow outline-none cursor-pointer -top-15/100 w-max rounded-b-xl bg-tc-blue group-hover:bg-tc-red group-hover:shadow-none group-hover:-top-20/100 active:translate-y-20/100"
                          />
                        </div>
                      </div>
        }
    }

    return (
      <form classname="w-full mx-2" onSubmit={(handleSubmit(onSubmit))}>
        <div>
          <div>
            <div className="space-y-1 xl:space-y-8 xl:flex xl:flex-col xl:items-center">
              <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
                <div className="flex items-center space-y-1 xl:w-45%">
                  <label htmlFor="gender" className="w-30%">Civilité* :</label>
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
                <div className="flex items-center space-y-1 xl:w-45%">
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
                  <label htmlFor="email" className="w-30%">E-mail* :</label>
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
              </div>
              <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
                <div className="flex items-center space-y-1 xl:w-45%">
                   {/* // TODO importer la molecule Input à la place */}
                  <label htmlFor="lastName" className="w-30%">Nom* :</label>
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
                <div className="flex items-center space-y-1 xl:w-45%">
                   {/* // TODO importer la molecule Input à la place */}
                    <label htmlFor="firstName" className="w-30%">Prénom* :</label>
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
              </div>
              <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
                <div className="flex items-center space-y-1 xl:w-45%">
                   {/* // TODO importer la molecule Input à la place */}
                    <label htmlFor="phone" className="w-30%">Téléphone* :</label>
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
                <div className="flex flex-col space-y-1 xl:w-45%">
                  {/* // TODO le message d'erreur ne fonctionne pas 
                  <InputCheckRGPD /> */}
                  <label className="flex justify-center flex-1 my-4">
                    <div className="flex flex-row flex-nowrap w-max">
                      <input
                        type="checkbox"
                        className="mx-4 my-auto border outline-none "
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
      phone: input.phone
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

      <main className="mx-2 md:container md:mx-auto">
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
