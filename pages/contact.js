import axios from "axios"
import Head from "next/head"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"

import ButtonSubmit from "../components/atoms/ButtonSubmit"
import PageLink from "../components/atoms/PageLink"
import BlockTitle from "../components/atoms/BlockTitle"
import SocialNav from "../components/molecules/SocialNav"
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

  //TODO revoir le layout md
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
				<section id="contact" className="pt-10 md:py-20">
					<div className="md:container md:mx-auto">
						<BlockTitle
							title="Contact"
							iconPicture={{ backgroundImage: "url('mobile-sms-blue.png')" }}
						/>
						<div className="flex flex-col flex-nowrap md:flex-row-reverse md:justify-around md:items-center">
							<div className="flex flex-col w-full px-2 space-y-2 md:w-1/2">
								<SocialNav />
								<div className="flex flex-row items-start flex-nowrap">
									<div className="w-4 h-4 m-2 transform rotate-45 bg-tc-red">
										{" "}
									</div>
									<div className="flex flex-col w-11/12">
										<p className="pt-1 pl-2">
											Tera Campus répond à toutes tes questions à l'adresse suivante :
										</p>
										<div className="flex justify-center">
											<a
												href="mailto:contact@tera-campus.com"
												className="p-2 mx-auto text-sm text-center hover:font-semibold w-max md:text-lg hover:text-tc-red"
											>
												&#x1F4E7;contact@tera-campus.com
											</a>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-start justify-start">
									<div className="flex flex-row items-start justify-start flex-nowrap">
										<div className="w-4 h-4 m-2 transform rotate-45 bg-tc-red">
											{" "}
										</div>
										<div className="flex flex-col w-11/12">
											<p className="pt-1 pl-2">
												Ou bien, tu peux poser directement tes questions via le formulaire ci-dessous :
											</p>
											<div className="m-0.5 animate-bounce">
												<div className="w-8 h-8 mx-auto transform -rotate-60">
													<IconCurvedArrowX />
												</div>
											</div>
											<form
												className="grid grid-cols-1 gap-4 pr-2 place-content-center md:pr-0"
												onSubmit={handleSubmit(onSubmit)}
											>
												<label className="block">
													<span>Ton adresse e-mail :</span>
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
															Nous avons besoin de ton adresse e-mail afin de pouvoir te répondre.
														</span>
													)}
													<span className="text-tc-red">
														{errors?.email?.message}
													</span>
												</label>
												<label className="block">
													<span>Ton message :</span>
													<textarea
														placeholder="message"
														className={`block mt-1 w-full p-2 border ${
															errors.message
																? "border-red-500"
																: "border-tc-blue"
														} rounded-none outline-none`}
														rows="5"
														{...register("message", { required: true })}
													/>
													{errors.message && (
														<span className="text-tc-red">
															As-tu oublié ce que tu souhaites nous dire ?
														</span>
													)}
												</label>
												<div className="flex flex-col space-y-1">
													{/* // TODO le message d'erreur ne fonctionne pas 
                        <InputCheckRGPD /> */}
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
																<p className="border-b-2 border-transparent">
																	J'ai lu et j'accepte la&nbsp;
																</p>
																<PageLink
																	id="privacy"
																	label="politique de confidentialité"
																/>
																<p className="border-b-2 border-transparent">
																	&nbsp;de Tera Campus.
																</p>
															</div>
														</div>
													</label>
													{errors.acceptPrivacyRules && (
														<span className="text-tc-red">
															Tu dois accepter la politique de confidentialité pour continuer.
														</span>
													)}
												</div>
												<div className="flex justify-center">
													<ButtonSubmit status={mutation.status} />
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className="flex flex-row items-start flex-nowrap">
									<div className="w-4 h-4 m-2 transform rotate-45 bg-tc-red">
										{" "}
									</div>
									<div className="flex flex-col w-11/12 ">
										<p className="pt-1 pl-2 pr-4 md:pr-0">
											Et tu peux aussi joindre Tera Campus à ce numéro :
										</p>
										<div className="flex justify-center">
											<a
												href="tel:+33469960065"
												className="py-2 mx-auto mb-2 text-sm text-center w-max md:text-lg hover:text-tc-red"
											>
												&#9742;04.69.96.00.65
											</a>
										</div>
									</div>
								</div>
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
					</div>
				</section>
			</main>
		</>
	)
}
