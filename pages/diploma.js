import Head from "next/head"

import BlockTitle from "../components/atoms/BlockTitle"

const pageTitle = "Diplômes - Tera Campus"
const pageDescription = "Les diplômes chez Tera Campus"
const pageUrl = "https://tera-campus.com/diploma"

export default function Diploma() {
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
				<section id="diploma" className="py-10 md:py-20">
					<div className="md:container md:mx-auto">
						<BlockTitle
							title="Les diplômes"
							iconPicture={{ backgroundImage: "url('diploma-blue.png')" }}
						/>
						<div className="flex justify-center mt-24 text-xl font bold">
							Page en construction
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
