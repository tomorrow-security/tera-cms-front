import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import "react-phone-number-input/style.css"
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
// TODO faire la validation du numéro avec isPossiblePhoneNumber
// import { isPossiblePhoneNumber } from 'react-phone-number-input'

import InputRadio from "./InputRadio"
import InputButton from "./InputButton"
import PageLink from "../atoms/PageLink"
// import InputCheckRGPD from "../molecules/InputCheckRGPD"
// TODO importer la molecule Input quand fonctionnera
// import Input from '../molecules/Input'

export default function Form({ mutation, onSubmit }) {
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
                    Vous devez cocher la case qui vous correspond pour continuer
                  </div>
                ) : null}
              </div>
              <div className="space-y-1 xl:w-45%">
                {/* // TODO importer la molecule Input quand fonctionnera */}
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
                    Vous devez donner votre email pour continuer
                  </div>
                ) : null}
              </div>
            </div>
            <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="space-y-1 xl:w-45%">
                {/* // TODO importer la molecule Input quand fonctionnera */}
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
                    Vous devez donner votre nom pour continuer
                  </div>
                ) : null}
              </div>
              <div className="space-y-1 xl:w-45%">
                {/* // TODO importer la molecule Input quand fonctionnera */}
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
                    Vous devez donner votre prénom pour continuer
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
                  {errors.phone ? (
                    <div className="text-center text-tc-red">
                      Vous devez donner votre numéro de téléphone pour continuer
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
                    <p>
                      J'ai lu et j'accepte la
                      <span className="underline">
                        <PageLink
                          id="privacy"
                          label="politique de confidentialité"
                        />
                      </span>
                      et j'accepte d'être recontacté par Tera Campus.
                    </p>
                  </div>
                </div>
              </div>
              {errors.consent ? (
                <div className="text-center text-tc-red">
                  Vous devez accepter la politique de confidentialité pour
                  continuer
                </div>
              ) : null}
            </label>
            {/* // TODO : le message d'erreur ne fonctionne pas */}
            {/* <InputCheckRGPD /> */}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-4 xl:my-20">
        {/* //TODO : les états du button ne fonctionnent plus */}
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
