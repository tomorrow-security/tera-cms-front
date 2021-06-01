import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import BlockTitle from '../components/atoms/BlockTitle'
import IconFacebook from '../components/atoms/IconFacebook'
import IconInstagram from '../components/atoms/IconInstagram'
import IconLinkedin from '../components/atoms/IconLinkedin'
import IconTwitch from '../components/atoms/IconTwitch'
import SocialLink from '../components/atoms/SocialLink'
import IconCurvedArrowX from '../components/atoms/IconCurvedArrowX'

const pageTitle = "Contact - Tera Campus"
const pageDescription = "Contacter Tera Campus"
const pageUrl = 'https://tera-campus.com/contact'

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const mutation = useMutation(data => axios.post('/api/contact', data), { retry: 3 })

  const onSubmit = formData => mutation.mutate(formData)

  const submitButtonParams = {
    loading: { value: 'En cours d\'envoi ...', color: 'bg-gray-400', disabled: true },
    success: { value: 'Envoyé !', color: 'bg-green-400', disabled: true },
    default: { value: 'Envoyer', color: 'bg-tc-blue hover:bg-tc-red shadow hover:shadow-none cursor-pointer  transition-colors duration-700', disabled: false }
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
                <div className="flex flex-row items-center justify-center space-x-4 flex-nowrap">
                  <SocialLink
                    name="linkedin"
                    url="https://www.linkedin.com/company/teracampus"
                    logo={<IconLinkedin />}
                  />
                  <SocialLink
                    name="facebook"
                    url="https://www.facebook.com/teracampus"
                    logo={<IconFacebook />}
                  />
                  <SocialLink
                    name="instagram"
                    url="https://www.instagram.com/tera.campus"
                    logo={<IconInstagram />}
                  />
                  <SocialLink
                    name="twitch"
                    url="https://www.twitch.tv/teracampus"
                    logo={<IconTwitch />}
                  />
                </div>
                <div className="flex flex-row items-start flex-nowrap">
                  <div className="w-4 h-4 m-2 transform rotate-45 bg-tc-red"> </div>
                  <div className="flex flex-col w-11/12 ">
                    <p className="pt-1 pl-2">Tera Campus répond à tes questions</p>
                    <div className="relative mx-auto">
                      <a
                        href="mailto:contact@tera-campus.com"
                        className="p-2 mx-auto text-sm text-center underline hover:font-semibold w-max md:text-lg hover:text-tc-red">
                        &#x1F4E7; contact@tera-campus.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <div className="flex flex-row items-start justify-start flex-nowrap">
                    <div className="w-4 h-4 m-2 transform rotate-45 bg-tc-red"> </div>
                    <p className="w-11/12 pt-1 pl-2">
                      Pose tes questions directement via le formulaire
                    </p>
                  </div>
                  <div className="m-2 animate-bounce">
                    <div className="w-8 h-8 mx-auto transform -rotate-60">
                      <IconCurvedArrowX />
                    </div>
                  </div>
                </div>
                <form
                  className="grid grid-cols-1 gap-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label className="block">
                    <span>Ton adresse e-mail :</span>
                    <input
                      type="email"
                      placeholder="thomas.anderson@tera-campus.com"
                      className={`block mt-1 w-full p-2 border ${errors.email ? 'border-red-500' : 'border-black'} rounded-none outline-none`}
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
                      placeholder="thomas.anderson@tera-campus.com"
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
                    <div>
                      <input
                        type="checkbox"
                        className="mr-2 border outline-none"
                        {...register("acceptPrivacyRules", { required: true })}
                      />
                      <span className="text-xs sm:text-base">
                        J'ai lu et j'accepte la
                        <Link href="/privacy">
                          <a className="underline">
                            politique de confidentialité
                          </a>
                        </Link>
                      </span>
                    </div>
                    {
                      errors.acceptPrivacyRules && <span className="text-tc-red">
                        Tu dois accepter la politique de confidentialité pour continuer.
                      </span>
                    }
                  </label>
                  <div className="w-auto mx-auto my-2">
                    <input
                      type="submit"
                      value={['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].value : submitButtonParams['default'].value}
                      className={`w-max px-4
                          outline-none cursor-pointer text-white font-bold rounded-t rounded-b-xl ${['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].color : submitButtonParams['default'].color}`}
                      disabled={['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].disabled : submitButtonParams['default'].disabled }
                    />
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
