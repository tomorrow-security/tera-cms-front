import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import PageLink from '../components/atoms/PageLink'
import BlockTitle from '../components/atoms/BlockTitle'
import SocialNav from '../components/molecules/SocialNav'
import IconCurvedArrowX from '../components/atoms/IconCurvedArrowX'

const pageTitle = "Contact - Tera Campus"
const pageDescription = "Contacter Tera Campus"
const pageUrl = 'https://tera-campus.com/contact'

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const mutation = useMutation(data => axios.post('/api/contact', data), { retry: 3 })

  const onSubmit = formData => mutation.mutate(formData)

  const submitButtonParams = {
    loading: {
      value: 'En cours d\'envoi ...',
      color: 'bg-tc-red-light',
      shadow: 'bg-tc-red-xlight border border-tc-red-medium',
      disabled: true
    },
    success: {
      value: 'Envoyé !',
      color: 'bg-tc-blue-medium',
      shadow: 'bg-tc-blue-light border border-tc-blue ',
      disabled: true
    },
    default: {
      value: 'Envoyer',
      color: 'bg-tc-blue group-hover:bg-tc-red shadow group-hover:shadow-none cursor-pointer  transition-colors duration-700 group-hover:-top-20/100 transform active:translate-y-20/100',
      shadow: 'bg-tc-blue-medium border border-tc-blue-dark group-hover:bg-tc-red-medium group-hover:border-tc-red-dark shadow group-hover:shadow-none cursor-pointer  transition-colors duration-700',
      disabled: false
    }
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
        <section id="contact" className="py-10 md:py-20">
          <div className="md:container md:mx-auto">
            <BlockTitle
              title="Contact"
              iconPicture={{ backgroundImage: "url('mobile-sms-blue.png')" }}
            />
            <div className="flex flex-col mx-2 flex-nowrap md:flex-row-reverse md:justify-around md:items-center">
              <div className="flex flex-col w-full p-2 space-y-2 md:w-1/2">
                <SocialNav />
                <div className="flex flex-row items-start flex-nowrap">
                  <div className="w-4 h-4 m-2 transform rotate-45 bg-tc-red"> </div>
                  <div className="flex flex-col w-11/12 ">
                    <p className="pt-1 pl-2">Tera Campus répond à toutes tes questions à l'adresse suivante :</p>
                    <div className="relative mx-auto">
                      <a
                        href="mailto:contact@tera-campus.com"
                        className="p-2 mx-auto text-sm text-center hover:font-semibold w-max md:text-lg hover:text-tc-red">
                        &#x1F4E7; contact@tera-campus.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <div className="flex flex-row items-start justify-start flex-nowrap">
                    <div className="w-4 h-4 m-2 transform rotate-45 bg-tc-red"> </div>
                    <p className="w-11/12 pt-1 pl-2">
                      Ou bien, tu peux poser directement tes questions via le formulaire ci-dessous :
                    </p>
                  </div>
                  <div className="m-2 animate-bounce">
                    <div className="w-8 h-8 mx-auto transform -rotate-60">
                      <IconCurvedArrowX />
                    </div>
                  </div>
                </div>
                <form
                  className="grid grid-cols-1 gap-6 place-content-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label className="block">
                    <span>Ton adresse e-mail :</span>
                    <input
                      type="email"
                      placeholder="thomas.anderson@tera-campus.com"
                      className={`block mt-1 w-full p-2 border ${errors.email ? 'border-red-500' : 'border-black'} rounded-none outline-none shadow-button`}
                      {...register("email", { required: true })}
                    />
                    {
                      errors.email && <span className="text-tc-red">
                        Nous avons besoin de ton adresse e-mail afin de pouvoir te répondre.
                      </span>
                    }
                    <span className="text-tc-red">{errors?.email?.message}</span>
                  </label>
                  <label className="block">
                    <span>Ton message :</span>
                    <textarea
                      placeholder="message"
                      className={`block mt-1 w-full p-2 border ${errors.message ? 'border-red-500' : 'border-black'} rounded-none outline-none`}
                      rows="5"
                      {...register("message", { required: true })}
                    />
                    {
                      errors.message && <span className="text-tc-red">
                        As-tu oublié ce que tu souhaites nous dire ?
                      </span>
                    }
                  </label>
                  <label className="block">
                    <div className="flex flex-row content-center align-center w-max">
                      <input
                        type="checkbox"
                        className="my-auto mr-2 border outline-none "
                        {...register("acceptPrivacyRules", { required: true })}
                      />
                      <span className="flex flex-row text-xs flex-nowrap align-items sm:text-base">
                        J'ai lu et j'accepte la&nbsp;
                        <PageLink id="privacy" 
                          label="politique de confidentialité" />
                        &nbsp;de Tera Campus.
                      </span>
                    </div>
                    {
                      errors.acceptPrivacyRules && <span className="text-tc-red">
                        Tu dois accepter la politique de confidentialité pour continuer.
                      </span>
                    }
                  </label>
                  <div className="w-auto pt-2 mx-auto group">
                    {/* // TODO WIP- appliquer un style au bouton comme https://codepen.io/elmsoftware/pen/rdewK */}
                    <div className={`relative z-0 px-4 font-bold text-transparent rounded-t outline-none cursor-pointer w-max rounded-b-xl ${['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].shadow : submitButtonParams['default'].shadow}`}>
                      {['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].value : submitButtonParams['default'].value}
                      <input
                      type="submit"
                      value={['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].value : submitButtonParams['default'].value}
                      className={`absolute left-0 -top-15/100 z-20 w-max px-4 mx-auto
                          outline-none cursor-pointer text-white font-bold rounded-t rounded-b-xl ${['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].color : submitButtonParams['default'].color}`}
                      disabled={['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].disabled : submitButtonParams['default'].disabled }
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/happy-woman-phone.jpg"
                  alt="Femme utilisant un téléphone"
                  width={1152}
                  height={768}
                  className="object-cover object-center w-full h-full md:inline-flex"
                />
            </div>
            </div >
          </div>
        </section>
      </main>
    </>
  )
}
