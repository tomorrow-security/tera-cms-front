import { LocationMarkerIcon } from "@heroicons/react/outline"
import Head from "next/head"
import Block from "../components/atoms/Block"

import { CardOverImage, SeparatorWithTitle } from "."

const pageTitle = "Inscription aux portes ouvertes - Tera Campus"
const pageDescription = "Inscription aux portes ouvertes de Tera Campus"
const pageUrl = "https://tera-campus.com/portes-ouvertes"

export default function Registration() {
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

				<Block darken>
					<div className="flex flex-col lg:flex-row gap-8">
						<div className="w-full lg:w-1/2">
							<CardOverImage
								imageUrl="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/immersion_nxuldw"
								imageAlt="random image"
								chipPrimary="Du 11/01 au 13/01"
								chipSecondary="Colmar, Alsace"
								title="Immersion dans notre projet fil rouge"
								content="Participez au projet fil rouge avec nos étudiants durant une journée entière pour découvrir la méthodologie de projet au coeur de nos Bivouacs."
							/>
						</div>
						<div className="w-full lg:w-1/2">
						<CardOverImage
								imageUrl="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/switch_oo7lkj"
								imageAlt="random image"
								chipPrimary="Le 20/01/2022"
								chipSecondary="Colmar, Alsace"
								title="Découvrez les réseaux informatiques"
								content="Découvrez la pédagogie Tera Campus et apprenez les bases du réseau informatique durant une journée entière avec nos étudiants."
							/>
						</div>
					</div>
				</Block>

				<SeparatorWithTitle title={"Découvrez gratuitement Tera Campus pendant nos Portes Ouvertes à Colmar"} />

				<iframe
					id="registrationJPO"
					src="https://forms.monday.com/forms/embed/c7b0d6540bbe606d63ed538e06e64751?r=use1"
					width="100%"
					height="1100px"
					className="overflow-hidden"
				/>
			
			</main>
		</>
	)
}
