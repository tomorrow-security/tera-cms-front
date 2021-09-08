import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
// TODO faire la validation du numéro avec isPossiblePhoneNumber
// import { isPossiblePhoneNumber } from 'react-phone-number-input'

import BlockTitle from "../../components/atoms/BlockTitle";
import InputRadio from "../../components/molecules/InputRadio";
// import InputCheckRGPD from '../components/molecules/InputCheckRGPD'
// import Input from '../components/molecules/Input'
import PageLink from "../../components/atoms/PageLink";

//TODO descendre un peu le submit en view desktop
// TODO layout msg d'erreur des checkbox ()

// TODO importer la molecule EnrolmentForm à la place
const EnrolmentForm = ({ status, onSubmit }) => {
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset();
  }, []);

  // TODO importer la molecule InputButton à la place
  const renderSubmitButton = () => {
    switch (status) {
      case "loading":
        return (
          <div className="w-auto pt-2 mx-auto group">
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
        );
      case "success":
        return (
          <div className="w-auto pt-2 mx-auto group">
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
        );
      default:
        return (
          <div className="w-auto pt-2 mx-auto group">
            <div className="relative z-0 px-4 font-bold text-transparent transition-colors duration-700 border rounded-t shadow outline-none cursor-pointer w-max rounded-b-xl bg-tc-blue-light border-tc-blue-dark group-hover:bg-tc-red-light group-hover:border-tc-red-dark group-hover:shadow-none">
              Envoyer
              <input
                type="submit"
                value="Envoyer"
                className="absolute left-0 z-20 px-4 mx-auto font-bold text-white transition-colors duration-700 transform rounded-t shadow outline-none cursor-pointer -top-15/100 w-max rounded-b-xl bg-tc-blue group-hover:bg-tc-red group-hover:shadow-none group-hover:-top-20/100 active:translate-y-20/100"
              />
            </div>
          </div>
        );
    }
  };

  // TODO style au focue du phoneInput border à enlever à l'intérieur

  return (
    <form className="w-full mx-2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <div className="space-y-1 xl:space-y-8 xl:flex xl:flex-col xl:items-center ">
            <div className="space-y-1 xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="xl:w-45% space-y-1">
                <div className="flex items-center">
                  <div className="w-30%">
                    <label htmlFor="gender" >Civilité* :</label>
                  </div>
                    <InputRadio
                      name="gender"
                      control={control}
                      choices={[
                        { label: 'Mme', value: 'F' },
                        { label: 'M.', value: 'M' },
                      ]}
                    />
                </div>
                {
                  errors.gender ? (
                    <div className="text-center text-tc-red">
                      Vous devez cocher la case qui vous correspond pour continuer votre inscription
                    </div>
                  ) : null
                }
              </div>
              <div className="space-y-1 xl:w-45%">
                {/* // TODO importer la molecule Input à la place */}
                 {/* //* Input composant ne fonctionne pas : à revoir */}
                <div className="flex items-center">
                  <label htmlFor="email" className="w-30%">E-mail* :</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="thomas.anderson@tera-campus.com"
                    className={`p-2 flex-1 border rounded mx-2 outline-none ${errors.email ? 'border-tc-red' : 'border-tc-blue'}`}
                    {...register("email", { required: true })}
                  />
                </div>
                {
                  errors.email ? (
                    <div className="text-center text-tc-red">
                     Vous devez donner votre email pour continuer votre inscription
                    </div>
                  ) : null
                }
              </div>
            </div>
            <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="space-y-1 xl:w-45%">
                {/* // TODO importer la molecule Input à la place */}
                <div className="flex items-center">
                  <label htmlFor="lastName" className="w-30%">Nom* :</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Anderson"
                    className={`mx-2 p-2 flex-1 border rounded outline-none ${errors.lastName ? 'border-tc-red' : 'border-tc-blue'}`}
                    {...register("lastName", { required: true })}
                  />
                </div>
                {
                  errors.lastName ? (
                    <div className="text-center text-tc-red">
                      Vous devez donner votre nom pour continuer votre inscription
                    </div>
                  ) : null
                }
              </div>
              <div className="space-y-1 xl:w-45%">
                {/* // TODO importer la molecule Input à la place */}
                <div className="flex items-center">
                  <label htmlFor="firstName" className="w-30%">Prénom* :</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Thomas"
                    className={`mx-2 p-2 flex-1 border rounded outline-none ${errors.firstName ? 'border-tc-red' : 'border-tc-blue'}`}
                    {...register("firstName", { required: true })}
                  />
                </div>
                {
                  errors.firstName ? (
                    <div className="text-center text-tc-red">
                      Vous devez donner votre prénom pour continuer votre inscription
                    </div>
                  ) : null
                }
              </div>
            </div>
            <div className="xl:flex xl:justify-between xl:w-4/5 xl:flex-nowrap">
              <div className="space-y-1 xl:w-45%">
                <div className="space-y-1">
                 <div className="flex items-center">
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
                      className={`mx-2 p-2 flex-1 border w-65% rounded outline-none ${errors.phone ? 'border-tc-red' : 'border-tc-blue'}`}
                      />
                 </div>
                    {
                  errors.phone ? (
                    <div className="text-center text-tc-red">
                      Vou devez donner votre numéro de téléphone pour continuer votre inscription
                    </div>
                  ) : null
                }
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
              {
                errors.consent ? (
                  <div className="text-center text-tc-red">
                   Vous devez accepter la politique de confidentialité pour continuer votre inscription.
                  </div>
                ) : null
              }
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-4 xl:my-20">
        {renderSubmitButton()}
      </div>
    </form>
  );
};

const pageTitle = "Inscription - Tera Campus";
const pageDescription = "Inscription";
const pageUrl = "https://tera-campus.com/enrolment";
const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL;

export default function Enrolment() {
  const router = useRouter();

  const mutation = useMutation(
    (formData) => {
      axios
        .post(`${apiUrl}/enrolment/create`, formData)
        .then(({ data }) => router.push(`/enrolment/${data.enrolment}`))
        .catch((error) => console.log(error));
    },
    { retry: 3 }
  );

  const onSubmit = (formData) => mutation.mutate(formData);

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
						<EnrolmentForm status={mutation.status} onSubmit={onSubmit} />
					</div>
				</section>
			</main>
		</>
	)
}
