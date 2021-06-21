import Head from 'next/head'

import BlockTitle from '../components/atoms/BlockTitle'
import EnrolmentForm from '../components/organisms/EnrolmentForm'


const pageTitle = "Inscription - Tera Campus"
const pageDescription = "Inscription"
const pageUrl = 'https://tera-campus.com/enrolment'

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

      <main className="h-full mx-2 lg:container lg:mx-auto">
        <section id="enrolment" className="py-10 md:py-20">
          <div className="md:container md:mx-auto">
            <BlockTitle
              title="Inscription"
              iconPicture={{ backgroundImage: "url('inscription-red-into-blue.png')" }}
            />
            <EnrolmentForm
              // status={mutation.status}
              // onSubmit={onSubmit}
            />
          </div>
        </section>
      </main>
    </>
  )
}
