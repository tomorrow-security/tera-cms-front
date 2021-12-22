import Head from "next/head"
import BlockGuides from "../componentsDraft/organisms/BlockGuides"

const pageTitle = "Guides - Tera Campus"
const pageDescription = "Nos guides"
const pageUrl = "https://tera-campus.com/guides"

export default function Guides() {
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
				<BlockGuides />
			</main>
		</>
	)
}
