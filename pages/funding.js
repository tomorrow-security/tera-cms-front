import Head from "next/head"

const pageTitle = "Financement - Tera Campus"
const pageDescription = "Le financement de mon cursus"
const pageUrl = "https://tera-campus.com/funding"

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
