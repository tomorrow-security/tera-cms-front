import axios from "axios"
import Head from "next/head"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"

import ButtonSubmit from "../components/atoms/ButtonSubmit"
import PageLink from "../components/atoms/PageLink"
import BlockTitle from "../components/organisms/BlockTitle"
import Bullet from "../components/atoms/Bullet"
import IconCurvedArrowX from "../components/atoms/IconCurvedArrowX"

const pageTitle = "Contact - Tera Campus"
const pageDescription = "Contacter Tera Campus"
const pageUrl = "https://tera-campus.com/contact"

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const mutation = useMutation((data) => axios.post("/api/contact", data), {
    retryDelay: 30000,
  })
  const onSubmit = (formData) => mutation.mutate(formData)

  //TODO vérifier le fonctionnement du InputButton
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <main className="md:container md:mx-auto">
        <section id="contact" className="py-10">
          <BlockTitle
            title="Contact"
            iconPicture={{ backgroundImage: "url('mobile-sms-blue.png')" }}
          />
          <div className="flex flex-col flex-nowrap md:flex-row-reverse md:justify-around md:items-center">
            <div className="flex flex-col mx-4 md:w-1/2">
              <Bullet>
                Tera Campus répond à toutes vos questions à l'adresse suivante :
              </Bullet>
              <a
                href="mailto:contact@tera-campus.com"
                className="p-2 mx-auto text-lg font-semibold text-center w-max md:text-lg hover:text-tc-red"
              >
                &#x1F4E7;contact@tera-campus.com
              </a>
              <Bullet>
                Ou bien, vous pouvez poser directement vos questions via le
                formulaire ci-dessous :
              </Bullet>
              <div className="my-0.5 animate-bounce mx-auto">
                <div className="w-8 h-8 mx-auto transform -rotate-60">
                  <IconCurvedArrowX />
                </div>
              </div>
              <form
                className="grid grid-cols-1 gap-4 pr-2 mx-2 md:mx-6 place-content-center md:pr-0"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className="block">
                  <span>Votre adresse e-mail :</span>
                  <input
                    type="email"
                    placeholder="thomas.anderson@tera-campus.com"
                    className={`block mt-1 w-full p-2 border ${
                      errors.email ? "border-red-500" : "border-tc-blue"
                    } rounded-none outline-none shadow-button`}
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-tc-red">
                      Nous avons besoin de votre adresse e-mail afin de pouvoir
                      vous répondre.
                    </span>
                  )}
                  <span className="text-tc-red">{errors?.email?.message}</span>
                </label>
                <label className="block">
                  <span>Votre message :</span>
                  <textarea
                    placeholder="message"
                    className={`block mt-1 w-full p-2 border ${
                      errors.message ? "border-red-500" : "border-tc-blue"
                    } rounded-none outline-none`}
                    rows="5"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-tc-red">
                      Avez-vous oublié ce que vous souhaitiez nous dire ?
                    </span>
                  )}
                </label>
                <div className="flex flex-col space-y-1">
                  <label className="flex justify-center flex-1 my-4">
                    <div className="flex flex-row flex-nowrap w-max-full">
                      <input
                        type="checkbox"
                        className="mx-4 my-auto border outline-none "
                        {...register("acceptPrivacyRules", {
                          required: true,
                        })}
                      />
                      <div className="flex flex-row flex-wrap items-center max-w-full text-xs sm:text-base">
                        <p>J'ai lu et j'accepte la</p>
                        <PageLink
                          id="privacy"
                          label="politique de confidentialité"
                        />
                        <p>de Tera Campus.</p>
                      </div>
                    </div>
                  </label>
                  {errors.acceptPrivacyRules && (
                    <span className="text-tc-red">
                      Tu dois accepter la politique de confidentialité pour
                      continuer.
                    </span>
                  )}
                </div>
                <div className="flex justify-center">
                  <ButtonSubmit status={mutation.status} />
                </div>
              </form>
              <Bullet>
                Et vous pouvez aussi joindre Tera Campus à ce numéro :
              </Bullet>
              <a
                href="tel:+33469960065"
                className="py-2 mx-auto mb-2 text-lg font-semibold text-center w-max hover:text-tc-red"
              >
                &#9742;04.69.96.00.65
              </a>
            </div>
            <div className="h-auto md:w-1/2">
              <Image
                src="/happy-woman-phone.jpg"
                alt="Femme utilisant un téléphone"
                width={1152}
                height={768}
                className="object-cover object-center w-full h-full md:inline-flex"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
