import 'react-phone-number-input/style.css';

import axios from 'axios';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { formatPhoneNumberIntl } from 'react-phone-number-input';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Block from '../components/atoms/Block';
import ButtonSubmit from '../components/atoms/ButtonSubmit';
import Stepper from '../components/organisms/Stepper';

const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL;
const requiredErrorMessage = 'Ce champs est requis.';

const schema = yup.object({
  first_name: yup.string().required(requiredErrorMessage),
  last_name: yup.string().required(requiredErrorMessage),
  nationality: yup.string().required(requiredErrorMessage),
  birth_date: yup.date().required(requiredErrorMessage),
  email: yup.string().email('E-mail invalide.').required(requiredErrorMessage),
  phone: yup.string().required(requiredErrorMessage),
  desired_situation: yup.string().required(requiredErrorMessage),
  desired_start: yup.string().required(requiredErrorMessage),
  motivation: yup.bool().oneOf([true], requiredErrorMessage),
  consent: yup.bool().oneOf([true], 'Vous devez accepter notre politique de confidentialité pour continuer.'),
}).required();

function Index() {
  const router = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    reset();
  }, []);

  const mutation = useMutation(formData => {
    return axios
      .post(`${apiUrl}/enrolment/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => router.push('/enrolment/welcome'));
  }, {
    onError: (error) => {
      if (error.response) {
        for (const [key, value] of Object.entries(error.response.data)) {
          if (key === 'email' && value.includes('This field must be unique.')) {
            const index = value.indexOf('This field must be unique.');
            value[index] = 'Cette adresse e-mail est déjà utilisée.';
          }
          setError(key, {type: "manual", message: value});
        }
      }
    }
  })

  const onSubmit = (formData) => {
    formData.birth_date = format(formData.birth_date, 'yyyy-MM-dd');
    formData.phone = formatPhoneNumberIntl(formData.phone).replaceAll(/\s/g,'');
    formData.utm_source = localStorage.getItem('tc_ft_source') ? localStorage.getItem('tc_ft_source') : 'undefined';
    formData.utm_medium = localStorage.getItem('tc_ft_medium') ? localStorage.getItem('tc_ft_medium') : 'undefined';
    formData.utm_campaign = localStorage.getItem('tc_ft_campaign') ? localStorage.getItem('tc_ft_campaign') : 'undefined';
    let data = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      data.append(key, value);
    }
    mutation.mutate(data);
  }

  return (
    <main>
      <Stepper />

      <Block>
        <div className="grid grid-cols-1 lg:grid-cols-2">

          <div className="hidden lg:flex flex-col bg-tangaroa rounded-l">
            <div className="grow-1 flex flex-grow items-center px-8">
              <p className="text-left md:text-center text-3xl xl:text-3xl italic text-aqua">
                Empruntez le sentier de la réussite avec Tera Campus et misez sur une formation professionnalisante
                dans un domaine en constante progression. Nos guides sont là pour vous accompagner dans votre montée
                en compétences alors n'attendez plus, inscrivez-vous !
              </p>
            </div>
          </div>

          <div className="px-8 py-8 bg-tangaroa rounded-r">
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
                <p className="text-white">Je souhaite rejoindre Tera Campus en :</p>
                <select name="desired_situation" className="p-2 w-full rounded" {...register("desired_situation")}>
                  <option value="B_ASI">Bachelor</option>
                  <option value="M_CLOUD">Master Cloud</option>
                  <option value="M_CYBERSEC">Master Cybersecurity</option>
                </select>
              </div>
              {errors.desired_situation ? (<div className="text-tc-red">{errors.desired_situation?.message}</div>) : null}

              <div className="mt-4">
                <p className="text-white">Je souhaite rejoindre Tera Campus à la rentrée du :</p>
                <select name="desired_start" className="p-2 w-full rounded" {...register("desired_start")}>
                  <option value="E23">30 janvier 2023</option>
                  <option value="M23">29 mai 2023</option>
                  <option value="L23">25 septembre 2023</option>
                  <option value="E24">22 janvier 2024</option>
                </select>
              </div>
              {errors.desired_start ? (<div className="text-tc-red">{errors.desired_start?.message}</div>) : null}

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
                  J'ai lu et j'accepte la <a href="https://www.tera-campus.com/politique-de-confidentialite" target="_blank" className="underline">politique de confidentialité</a> et j'accepte d'être recontacté(e) par Tera Campus pour finaliser mon inscription.
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
  )
}

export default Index
