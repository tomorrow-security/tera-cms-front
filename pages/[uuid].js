import { useState } from 'react';

import EnrolmentTest from '../components/organisms/EnrolmentTest';

import Block from '../components/atoms/Block';
import Stepper from '../components/organisms/Stepper';

const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

export async function getServerSideProps(context) {
	const res = await fetch(`${apiUrl}/enrolment/${context.query.uuid}`);
	if (res.status !== 200) return { notFound: true };
	const data = await res.json();
	return { props: { uuid: context.query.uuid, initialPageData: data } };
}

export default function EnrolmentProcess({ initialPageData, uuid }) {
	const [pageData, setPageData] = useState(initialPageData);

	return (
		<main className="mx-2 md:container md:mx-auto">

			<Stepper />

			<Block>
				<div className="xl:my-12">
					<EnrolmentTest
						applicant={pageData.applicant}
						test={pageData.test}
						uuid={uuid}
						setPageData={setPageData}
					/>
				</div>
			</Block>

		</main>
	);
}
