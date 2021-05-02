import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import IconFacebook from '../components/atoms/IconFacebook'
import IconInstagram from '../components/atoms/IconInstagram'
import IconLinkedin from '../components/atoms/IconLinkedin'
import IconTwitch from '../components/atoms/IconTwitch'
import SocialLink from '../components/atoms/SocialLink'

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
    default: { value: 'Envoyer', color: 'bg-yellow-400 hover:bg-yellow-500 shadow hover:shadow-none cursor-pointer', disabled: false }
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
        <section className="pt-8 md:py-20">
          <div className="md:container md:mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="mx-2 flex flex-col space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-center space-x-2">
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
                  <div className="text-center">
                    <a href="mailto:contact@tera-campus.com" className="text-xl text-blue-600 underline">
                      contact@tera-campus.com
                    </a>
                  </div>
                </div>
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit(onSubmit)}>
                  <label className="block">
                    <span>Ton adresse e-mail :</span>
                    <input
                      type="email"
                      placeholder="thomas.anderson@tera-campus.com"
                      className={`block mt-1 w-full p-2 border ${errors.email ? 'border-red-500' : 'border-black'} outline-none`}
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
                      className={`block mt-1 w-full p-2 border ${errors.message ? 'border-red-500' : 'border-black'} outline-none`}
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
                        J'ai lu et j'accepte la <Link href="/privacy"><a className="underline">politique de confidentialité</a></Link>
                      </span>
                    </div>
                    {
                      errors.acceptPrivacyRules && <span className="text-tc-red">
                        Tu dois accepter la politique de confidentialité pour continuer.
                      </span>
                    }
                  </label>
                  <input
                    type="submit"
                    value={['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].value : submitButtonParams['default'].value}
                    className={`w-full p-4 outline-none ${['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].color : submitButtonParams['default'].color}`}
                    disabled={['loading', 'success'].includes(mutation.status) ? submitButtonParams[mutation.status].disabled : submitButtonParams['default'].disabled }
                  />
                </form>
              </div>
              <div className="relative min-w-min flex">
                <Image
                  src="/happy-woman-phone.jpg"
                  alt="Femme utilisant un téléphone"
                  width={1152}
                  height={768}
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
