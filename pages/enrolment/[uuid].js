import Head from 'next/head'
import { useState } from 'react'

import BlockTitle from '../../components/atoms/BlockTitle'
import EnrolmentTest from '../../components/organisms/EnrolmentTest'

const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

export async function getServerSideProps(context) {
  const res = await fetch(`${apiUrl}/enrolment/${context.query.uuid}`)
  const data = await res.json()
  if (!data.step) return {notFound: true}
  return { props: {uuid: context.query.uuid ,initialPageData: data}}
}

export default function EnrolmentProcess({ initialPageData, uuid }) {
  const pageTitle = "Inscription - Tera Campus"
  const pageDescription = "Inscription"
  const pageUrl = `https://tera-campus.com/enrolment/${uuid}`

  const [pageData, setPageData] = useState(initialPageData)

  const renderBody = () => {
    switch(pageData.step) {
      case 1:
      case 2:
        return <EnrolmentTest applicant={pageData.applicant} test={pageData.test} uuid={uuid} setPageData={setPageData} />
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
        <section id="test" className="py-10 md:py-20">
          <div className="flex flex-col justify-between flex-grow md:container md:mx-auto">
            <BlockTitle
              title={pageDescription}
              iconPicture={{ backgroundImage: "url('/inscription-red-into-blue.png')" }}
            />
          </div>
          <div className="xl:my-12">
            { renderBody() }
          </div>
        </section>
      </main>
    </>
  )
}
