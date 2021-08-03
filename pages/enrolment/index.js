import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import 'react-phone-number-input/style.css'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
// TODO faire la validation du numéro avec isPossiblePhoneNumber 
// import { isPossiblePhoneNumber } from 'react-phone-number-input'


import BlockTitle from '../../components/atoms/BlockTitle'
import InputRadio from '../../components/molecules/InputRadio'
import InputButtonMutation from '../../components/molecules/InputButtonMutation'
// import InputCheckRGPD from '../components/molecules/InputCheckRGPD'
// import Input from '../components/molecules/Input'
import PageLink from '../../components/atoms/PageLink'

//TODO importer une molécule Input
//TODO descendre un peu le submit en view desktop
// TODO layout msg d'erreur des checkbox ()


// TODO importer la molecule EnrolmentForm à la place
const EnrolmentForm = ({
  mutation,
  onSubmit
}) => {
  const {reset, register, handleSubmit, control, formState : { errors }} = useForm()
  
  useEffect(() => { reset() }, [])
  
  // TODO style au focus du phoneInput border à enlever à l'intérieur
  return (
    <form className="w-full mx-2" onSubmit={(handleSubmit(onSubmit))}>
      <div>
        <div>
          <div className="space-y-1 xl:space-y-8 xl:flex xl:flex-col xl:items-center ">
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
                <label htmlFor="email" className="w-30%">E-mail* :</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="thomas.anderson@tera-campus.com"
                  className={`p-2 flex-1 border rounded mx-2 outline-none ${errors.email ? 'border-tc-red' : 'border-black'}`}
                  {...register("email", { required: true })}
                />
                <span className="text-tc-red">{errors?.email?.message}</span>
              </div>
            </div>
            <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="flex items-center space-y-1 xl:w-45%">
                <label htmlFor="lastName" className="w-30%">Nom* :</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Anderson"
                  className={`mx-2 p-2 flex-1 border rounded outline-none ${errors.lastName ? 'border-tc-red' : 'border-black'}`}
                  {...register("lastName", { required: true })}
                />
                <span className="text-tc-red">{errors?.lastName?.message}</span>
              </div>
              <div className="flex items-center space-y-1 xl:w-45%">
                <label htmlFor="firstName" className="w-30%">Prénom* :</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Thomas"
                  className={`mx-2 p-2 flex-1 border rounded outline-none ${errors.firstName ? 'border-tc-red' : 'border-black'}`}
                  {...register("firstName", { required: true })}
                />
                <span className="text-tc-red">{errors?.firstName?.message}</span>
              </div>
            </div>
            <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="space-y-1 xl:w-45%">
                <div className="flex items-center ">
                  <label htmlFor="phone" className="w-30%">Téléphone* :</label>
                  {/* //TODO voir pour retirer le border intern au focus */}
                  <PhoneInputWithCountry
                    id="phone"
                    name="phone"
                    defaultCountry="FR"
                    international
                    withCountryCallingCode
                    control={control}
                    rules={{ required: true }}
                    className={`mx-2 p-2 flex-1 border w-65% rounded outline-none ${errors.phone ? 'border-tc-red' : 'border-black'}`}
                    />
                    {/* {errors["phone-input"] && (
                      <span className="text-tc-red">{errors?.phone?.message}</span>
                    )} */}
                </div>
              </div>
          </div>
            <label className="flex flex-col justify-center">
              <div className="flex flex-row pt-8 mx-auto flex-nowrap w-max-full">
                <input
                  id='consent'
                  name="consent"
                  type="checkbox"
                  className="my-auto mr-2 border outline-none "
                  {...register("consent", { required: true })}
                />
                <div>
                  <div className="box-border flex flex-row flex-wrap items-center max-w-full text-xs sm:text-base">
                    <p className="border-b-2 border-transparent">J'ai lu et j'accepte la&nbsp;</p>
                    <PageLink id="privacy" label="politique de confidentialité" />
                    <p className="border-b-2 border-transparent">
                      , et j'accepte d'être recontacté par Tera Campus pour finaliser mon inscription.
                    </p>
                  </div>
                </div>
              </div>
              {
                errors.consent ? (
                  <span className="text-center text-tc-red">
                    Tu dois accepter la politique de confidentialité pour continuer ton inscription.
                  </span>
                ) : null
              }
            </label>
          </div>  
        </div>
      </div>
      <div className="flex items-center justify-center my-4 xl:my-20">
        {/* //* Les status de l'InputButtonMutation ne s'applique pas */}
        <InputButtonMutation
          defaultValue="Envoyer"
          loadingValue="En cours d'envoi' ..."
          successValue="Envoyé"
          mutation={mutation}
        />
      </div>
    </form>
  )
}

const pageTitle = "Inscription - Tera Campus"
const pageDescription = "Inscription"
const pageUrl = 'https://tera-campus.com/enrolment'
const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

export default function Enrolment() {
  const router = useRouter()
  
  const mutation = useMutation(formData => {
    axios
      .post(`${apiUrl}/enrolment/create`, formData)
      .then(({ data }) => router.push(`/enrolment/${data.enrolment}`))
      .catch(error => console.log(error))
  }, { retry: 3 })

  const onSubmit = formData => mutation.mutate(formData)

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
              iconPicture={{ backgroundImage: "url('inscription-red-into-blue.png')" }}
            />
          </div>
          <div className="xl:my-12">
            <EnrolmentForm
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
