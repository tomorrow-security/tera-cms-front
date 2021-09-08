import Head from "next/head"

const pageTitle = "Alternance - Tera Campus"
const pageDescription = "Les études en alternance"
const pageUrl = "https://tera-campus.com/alternation"

export default function Enrolment() {
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
				<div className="flex justify-center mt-24 text-xl font bold">
					Page en construction
				</div>
			</main>
		</>
	)
}
