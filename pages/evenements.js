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
								imageUrl="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/AdobeStock_387443025_agtvgs"
								imageAlt="random image"
								chipPrimary="Jeudi 24 février à 18h00"
								chipSecondary="En ligne"
								title="Réunion d'information"
								content="Découvrez notre école et nos formations hybrides avec l'un de nos guides."
							/>
						</div>
						<div className="w-full lg:w-1/2">
							<CardOverImage
								imageUrl="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/AdobeStock_298275555_dnkpsx"
								imageAlt="random image"
								chipPrimary="Mardi 22 mars à 10h00"
								chipSecondary="En ligne"
								title="Coffee Break"
								content="L'organisation des études à distance."
							/>
						</div>
					</div>
				</Block>

				<SeparatorWithTitle title={"Je m'inscris à un évènement"} />

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
