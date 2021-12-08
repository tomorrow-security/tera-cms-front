import Head from "next/head"

import ExternalQuestionnaire from "../components/molecules/ExternalQuestionnaire"

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
				<div>
					<ExternalQuestionnaire
						name="registrationJPO"
						url="https://forms.monday.com/forms/embed/c7b0d6540bbe606d63ed538e06e64751?r=use1"
					/>
				</div>
			</main>
		</>
	)
}
