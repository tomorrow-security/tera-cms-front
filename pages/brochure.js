import axios from "axios"
import Head from "next/head"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import "react-phone-number-input/style.css"
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import router from "next/router"

import BlockTitle from "./../components/atoms/BlockTitle"
import InputRadio from "./../components/molecules/InputRadio"
import PageLink from "./../components/atoms/PageLink"

// TODO importer la molecule Form à la place (molécule à faire)
const EnrolmentForm = ({ status, onSubmit }) => {
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

  // TODO importer la molecule InputButton à la place
  const renderSubmitButton = () => {
    switch (status) {
      case "loading":
        return (
          <div className="w-auto pt-2 mx-auto group">
            <div className="relative z-0 px-4 font-bold text-transparent bg-opacity-25 border border-t-0 rounded-t outline-none cursor-pointer w-max rounded-b-xl bg-tc-red border-tc-red-dark">
              En cours d'envoi ...
              <input
                type="submit"
                value="En cours d'envoi ..."
                className="absolute top-0 left-0 z-20 px-4 mx-auto font-bold text-white bg-opacity-75 rounded-t outline-none cursor-pointer w-max rounded-b-xl bg-tc-red"
                disabled
              />
            </div>
          </div>
        )
      case "success":
        return (
          <div className="w-auto pt-2 mx-auto group">
            <div className="relative z-0 px-4 font-bold text-transparent bg-opacity-25 border border-t-0 rounded-t outline-none cursor-pointer w-max rounded-b-xl bg-tc-blue border-tc-blue">
              Envoyé !
              <input
                type="submit"
                value="Envoyé !"
                className="absolute left-0 z-20 px-4 mx-auto font-bold text-white bg-opacity-75 rounded-t outline-none cursor-pointer bg-tc-blue -top-20/100 w-max rounded-b-xl"
                disabled
              />
            </div>
          </div>
        )
      default:
        return (
          <div className="w-auto pt-2 mx-auto group">
            <div className="relative z-0 px-4 font-bold text-transparent transition-colors duration-700 bg-opacity-50 border rounded-t shadow outline-none cursor-pointer w-max rounded-b-xl bg-tc-blue border-tc-blue-dark group-hover:bg-tc-red group-hover:border-tc-red-dark group-hover:shadow-none">
              Envoyer
              <input
                type="submit"
                value="Envoyer"
                className="absolute left-0 z-20 px-4 mx-auto font-bold text-white transition-colors duration-700 transform rounded-t shadow outline-none cursor-pointer -top-15/100 w-max rounded-b-xl bg-tc-blue group-hover:bg-tc-red group-hover:shadow-none group-hover:-top-20/100 active:translate-y-20/100"
              />
            </div>
          </div>
        )
    }
  }

  return (
    <form className="w-full mx-2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <div className="space-y-1 xl:space-y-8 xl:flex xl:flex-col xl:items-center ">
            <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="flex items-center space-y-1 xl:w-45%">
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
                <span className="text-tc-red">{errors?.email?.message}</span>
              </div>
              <div className="flex items-center space-y-1 xl:w-45%">
                <label htmlFor="gender" className="w-30%">
                  Civilité* :
                </label>
                <InputRadio
                  name="gender"
                  control={control}
                  choices={[
                    { label: "Mme", value: "F" },
                    { label: "M.", value: "M" },
                  ]}
                />
                <span className=" text-tc-red">{errors?.gender?.message}</span>
              </div>
            </div>
            <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="flex items-center space-y-1 xl:w-45%">
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
                <span className="text-tc-red">{errors?.lastName?.message}</span>
              </div>
              <div className="flex items-center space-y-1 xl:w-45%">
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
                <span className="text-tc-red">
                  {errors?.firstName?.message}
                </span>
              </div>
            </div>
            <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="space-y-1 xl:w-45%">
                <div className="flex items-center ">
                  <label htmlFor="phone" className="w-30%">
                    Téléphone* :
                  </label>
                  {/* //TODO voir pour retirer le border interne au focus */}
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
              </div>
            </div>
            <label className="flex flex-col justify-center">
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
                    <p className="border-b-2 border-transparent">
                      J'ai lu et j'accepte la&nbsp;
                    </p>
                    <PageLink
                      id="privacy"
                      label="politique de confidentialité"
                    />
                    <p className="border-b-2 border-transparent">
                      &nbsp;et j'accepte d'être recontacté par Tera Campus.
                    </p>
                  </div>
                </div>
              </div>
              {errors.consent ? (
                <span className="text-center text-tc-red">
                  Tu dois accepter la politique de confidentialité pour recevoir
                  la brochure.
                </span>
              ) : null}
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-4 xl:my-20">
        {renderSubmitButton()}
      </div>
    </form>
  )
}

const pageTitle = "Brochure - Tera Campus"
const pageDescription = "Demande de brochure"
const pageUrl = "https://tera-campus.com/brochure"

export default function Brochure() {
  const mutation = useMutation((data) => axios.post("/api/brochure", data), {
    retry: 3,
  })

  const onSubmit = (data) => {
    mutation.mutate(data),
      // TODO faire une condition avec le satus success pour router.push
      router.push("/brochuresented")
    //   console.log("data :", data)
    // console.log("mutation :", mutation)
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

      <main className="mx-2 md:container md:mx-auto">
        <section id="brochure" className="py-10 md:py-20">
          <div className="flex flex-col justify-between flex-grow md:container md:mx-auto">
            <BlockTitle
              title="Demande de brochure"
              iconPicture={{ backgroundImage: "url('brochure icon-blue.png')" }}
            />
          </div>
          <p className="my-8 text-center ">
            Remplir le formulaire suivant pour recevoir la brochure de Tera
            Campus par e-mail.
          </p>
          <div className="xl:my-12">
            <EnrolmentForm status={mutation.status} onSubmit={onSubmit} />
          </div>
        </section>
      </main>
    </>
  )
}
