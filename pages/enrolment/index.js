import "react-phone-number-input/style.css"

import axios from "axios"
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
  firstName: yup.string().required(requiredErrorMessage),
  lastName: yup.string().required(requiredErrorMessage),
  email: yup.string().email('E-mail invalide.').required(requiredErrorMessage),
  phone: yup.string().required(requiredErrorMessage),
  cohort: yup.string().required(requiredErrorMessage),
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
      .post(`${apiUrl}/enrolment/create`, formData)
      .then(({ data }) => router.push(`/enrolment/${data.enrolment}`))
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
    formData.phone = formatPhoneNumberIntl(formData.phone).replaceAll(/\s/g,'')
    mutation.mutate(formData)
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

            <div className="px-8 py-16 bg-tc-blue-navy rounded-r">
              <form method="post" onSubmit={handleSubmit(onSubmit)}>

                <div className="mt-4">
                  <input name="firstName" type="text" placeholder="Prénom" className="p-2 w-full rounded" {...register("firstName")} />
                </div>
                {errors.firstName ? (<div className="text-tc-red">{errors.firstName?.message}</div>) : null}

                <div className="mt-4">
                  <input name="lastName" type="text" placeholder="Nom" className="p-2 w-full rounded" {...register("lastName")} />
                </div>
                {errors.lastName ? (<div className="text-tc-red">{errors.lastName?.message}</div>) : null}

                <div className="mt-4">
                  <input name="email" type="email" placeholder="E-mail" className="p-2 w-full rounded" {...register("email")} />
                </div>
                {errors.email ? (<div className="text-tc-red">{errors.email?.message}</div>) : null}

                <div className="mt-4">
                  <PhoneInputWithCountry
                    name="phone"
                    international={true}
                    defaultCountry="FR"
                    withCountryCallingCode={true}
                    control={control}
                    rules={{ required: true }}
                    className="p-2 bg-white rounded"
                  />
                </div>
                {errors.phone ? (<div className="text-tc-red">{errors.phone?.message}</div>) : null}

                <div className="mt-8">
                  <p className="text-white">Je souhaite m'inscrire en :</p>
                  <select name="cohort" className="p-2 w-full rounded" {...register("cohort")}>
                    <option value="1">1ère année</option>
                    <option value="2">2ème année</option>
                    <option value="3">3ème année</option>
                    <option value="4">4ème année</option>
                  </select>
                </div>
                {errors.cohort ? (<div className="text-tc-red">{errors.cohort?.message}</div>) : null}

                <div className="mt-8">
                  <input type="checkbox" name="consent" className="mr-2 -mt-1 appearance-none outline-none h-5 w-5 rounded-md border-transparent" {...register("consent")} />
                  <label htmlFor="consent" className="text-white">
                    J'ai lu et j'accepte la <Link href="/privacy"><a target="_blank" className="underline">politique de confidentialité</a></Link> et j'accepte d'être recontacté par Tera Campus pour finaliser mon inscription.
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
