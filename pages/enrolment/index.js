import "react-phone-number-input/style.css"

import axios from "axios"
import { format } from 'date-fns'
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { formatPhoneNumberIntl } from "react-phone-number-input"
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import ButtonSubmit from "../../componentsDraft/atoms/ButtonSubmit"

import Block from "../../components/atoms/Block"
import Stepper from "../../components/organisms/Stepper"

const pageTitle = "Candidature - Tera Campus"
const pageDescription = "Candidature chez Tera Campus"
const pageUrl = "https://tera-campus.com/enrolment"
const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

const requiredErrorMessage = 'Ce champs est requis.'

const schema = yup.object({
  first_name: yup.string().required(requiredErrorMessage),
  last_name: yup.string().required(requiredErrorMessage),
  nationality: yup.string().required(requiredErrorMessage),
  birth_date: yup.date().required(requiredErrorMessage),
  email: yup.string().email('E-mail invalide.').required(requiredErrorMessage),
  phone: yup.string().required(requiredErrorMessage),
  current_situation: yup.string().required(requiredErrorMessage),
  desired_situation: yup.string().required(requiredErrorMessage),
  resume: yup.mixed()
    .test("FILE_PRESENCE", requiredErrorMessage, file => file[0] && file[0].size)
    .test("FILE_SIZE", "Ce fichier est trop gros.", file => file[0].size <= (2*1024*1024)),
  motivation: yup.bool().oneOf([true], requiredErrorMessage),
  consent: yup.bool().oneOf([true], 'Vous devez accepter notre politique de confidentialité pour continuer.'),
}).required()

export default function Enrolment() {
  const { reset, register, handleSubmit, setError, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const router = useRouter()

  useEffect(() => { reset() }, [])

  const mutation = useMutation(formData => {
    return axios
      .post(`${apiUrl}/enrolment/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => router.push('/enrolment/welcome'))
  }, {
    onError: (error) => {
      if (error.response) {
        for (const [key, value] of Object.entries(error.response.data)) {
          if (key === 'email' && value.includes('This field must be unique.')) {
            const index = value.indexOf('This field must be unique.')
            value[index] = 'Cette adresse e-mail est déjà utilisée.'
          }
          setError(key, {type: "manual", message: value})
        }
      }
    }
  })

  const onSubmit = (formData) => {
    formData.birth_date = format(formData.birth_date, 'yyyy-MM-dd')
    formData.phone = formatPhoneNumberIntl(formData.phone).replaceAll(/\s/g,'')
    formData.resume = formData.resume[0]
    formData.source = localStorage.getItem('tc_ft_medium') ? localStorage.getItem('tc_ft_medium') : 'undefined'
    let data = new FormData()
    for (const [key, value] of Object.entries(formData)) {
      data.append(key, value)
    }
    mutation.mutate(data)
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

      <main>
        <Stepper />

        <Block darken={false}>
          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="hidden md:flex flex-col bg-tc-lavender rounded-l">
              <div className="w-full overflow-hidden rounded-tl">
                <img src="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/yaaay_zpidbm" className="w-full h-96 object-cover object-center"/>
              </div>
              <div className="grow-1 flex flex-grow items-center px-8">
                <p className="text-left md:text-center text-lg italic">
                  Empruntez le sentier de la réussite avec Tera Campus et misez sur une formation professionnalisante
                  dans un domaine en constante progression. Nos guides sont là pour vous accompagner dans votre montée
                  en compétences alors n'attendez plus, inscrivez-vous !
                </p>
              </div>
            </div>

            <div className="px-8 py-8 bg-tc-blue-navy rounded-r">
              <form method="post" onSubmit={handleSubmit(onSubmit)}>

                <div>
                  <p className="text-white">Prénom :</p>
                  <input name="first_name" type="text" placeholder="Thomas" className="p-2 w-full rounded" {...register("first_name")} />
                </div>
                {errors.first_name ? (<div className="text-tc-red">{errors.first_name?.message}</div>) : null}

                <div className="mt-4">
                  <p className="text-white">Nom :</p>
                  <input name="last_name" type="text" placeholder="Anderson" className="p-2 w-full rounded" {...register("last_name")} />
                </div>
                {errors.last_name ? (<div className="text-tc-red">{errors.last_name?.message}</div>) : null}

                <div className="mt-4">
                  <p className="text-white">Date de naissance :</p>
                  <input name="birth_date" type="date" className="p-2 w-full rounded" {...register("birth_date")} />
                </div>
                {errors.birth_date ? (<div className="text-tc-red">{errors.birth_date?.message}</div>) : null}

                <div className="mt-4">
                  <p className="text-white">Nationalité :</p>
                  <select name="nationality" className="p-2 w-full rounded" {...register("nationality")}>
                    <option value="FRENCH">Française</option>
                    <option value="EUROPEAN">Européenne</option>
                    <option value="NON_EUROPEAN_WITH_VISA">Hors EU avec titre de séjour</option>
                    <option value="NON_EUROPEAN_NO_VISA">Hors EU sans titre de séjour</option>
                  </select>
                </div>
                {errors.nationality ? (<div className="text-tc-red">{errors.nationality?.message}</div>) : null}

                <div className="mt-4">
                  <p className="text-white">Email :</p>
                  <input name="email" type="email" placeholder="thomas.anderson@tera-campus.com" className="p-2 w-full rounded" {...register("email")} />
                </div>
                {errors.email ? (<div className="text-tc-red">{errors.email?.message}</div>) : null}

                <div className="mt-4">
                  <p className="text-white">Téléphone :</p>
                  <PhoneInputWithCountry
                    name="phone"
                    international={true}
                    countries={["FR"]}
                    defaultCountry="FR"
                    withCountryCallingCode={true}
                    countryCallingCodeEditable={false}
                    control={control}
                    rules={{ required: true }}
                    className="px-2 bg-white rounded"
                  />
                </div>
                {errors.phone ? (<div className="text-tc-red">{errors.phone?.message}</div>) : null}

                <div className="mt-4">
                  <p className="text-white">Actuellement :</p>
                  <select name="current_situation" className="p-2 w-full rounded" {...register("current_situation")}>
                    <option value="HIGH_SCHOOL">BAC</option>
                    <option value="BAC2">BAC+2</option>
                    <option value="BAC3">BAC+3</option>
                    <option value="PROFESSIONAL_RETRAINING">Reconversion professionnelle</option>
                  </select>
                </div>
                {errors.current_situation ? (<div className="text-tc-red">{errors.current_situation?.message}</div>) : null}

                <div className="mt-4">
                  <p className="text-white">Je souhaite m'inscrire en :</p>
                  <select name="desired_situation" className="p-2 w-full rounded" {...register("desired_situation")}>
                    <option value="FIRST_YEAR">Cycle Préparatoire</option>
                    <option value="THIRD_YEAR">Cycle Bachelor</option>
                    <option value="FOURTH_YEAR">Cycle Master</option>
                  </select>
                </div>
                {errors.desired_situation ? (<div className="text-tc-red">{errors.desired_situation?.message}</div>) : null}

                <div className="mt-4">
                  <p className="text-white">Mon CV (au format PDF, 2Mo maximum) :</p>
                  <div className="p-2 w-full bg-white rounded">
                    <input
                      type="file"
                      name="resume"
                      accept="application/pdf"
                      {...register("resume", { required: true })}
                    />
                  </div>
                </div>
                {errors.resume ? (<div className="text-tc-red">{errors.resume?.message}</div>) : null}

                <div className="mt-4">
                  <input type="checkbox" name="motivation" className="mr-2 -mt-1 appearance-none outline-none h-5 w-5 rounded-md border-transparent" {...register("motivation")} />
                  <label htmlFor="consent" className="text-white">
                    Je suis motivé(e) pour suivre la formation hybride Tera Campus.
                  </label>
                </div>
                {errors.motivation ? (<div className="text-tc-red">{errors.motivation?.message}</div>) : null}

                <div className="mt-4">
                  <input type="checkbox" name="consent" className="mr-2 -mt-1 appearance-none outline-none h-5 w-5 rounded-md border-transparent" {...register("consent")} />
                  <label htmlFor="consent" className="text-white">
                    J'ai lu et j'accepte la <Link href="/privacy"><a target="_blank" className="underline">politique de confidentialité</a></Link> et j'accepte d'être recontacté(e) par Tera Campus pour finaliser mon inscription.
                  </label>
                </div>
                {errors.consent ? (<div className="text-tc-red">{errors.consent?.message}</div>) : null}

                <div className="mt-10">
                  <ButtonSubmit status={mutation.status} />
                </div>

              </form>
            </div>

          </div>
        </Block>
      
      </main>
    </>
  )
}
