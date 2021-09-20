import Head from "next/head"
import BlockCareer from "../components/organisms/BlockCareer"

const pageTitle = "Débouchés professionnels - Tera Campus"
const pageDescription = "Débouchés professionnels"
const pageUrl = "https://tera-campus.com/career"

export default function Career() {
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
				<BlockCareer />
			</main>
		</>
	)
}
