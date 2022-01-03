import Head from "next/head"
import { useState } from "react"

import EnrolmentAppointment from "../../componentsDraft/organisms/EnrolmentAppointment"
import EnrolmentTest from "../../componentsDraft/organisms/EnrolmentTest"

import Block from "../../components/atoms/Block"
import Stepper from "../../components/organisms/Stepper"

const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

export async function getServerSideProps(context) {
	const res = await fetch(`${apiUrl}/enrolment/${context.query.uuid}`)
	const data = await res.json()
	if (!data.step) return { notFound: true }
	return { props: { uuid: context.query.uuid, initialPageData: data } }
}

export default function EnrolmentProcess({ initialPageData, uuid }) {
	const pageTitle = "Inscription - Tera Campus"
	const pageDescription = "Inscription"
	const pageUrl = `https://tera-campus.com/enrolment/${uuid}`

	const [pageData, setPageData] = useState(initialPageData)

	const renderBody = () => {
		switch (pageData.step) {
			case 1:
			case 2:
			case 3:
				return (
					<EnrolmentTest
						applicant={pageData.applicant}
						test={pageData.test}
						uuid={uuid}
						setPageData={setPageData}
					/>
				)
			case 4:
				return <EnrolmentAppointment />
		}
	}

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={pageDescription} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:description" content={pageDescription} />
			</Head>

			<main className="mx-2 md:container md:mx-auto">

				<Stepper />

				<Block>
					<div className="xl:my-12">{renderBody()}</div>
				</Block>

			</main>
		</>
	)
}
