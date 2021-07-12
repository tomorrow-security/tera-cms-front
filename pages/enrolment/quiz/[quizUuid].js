import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import BlockTitle from '../../../components/atoms/BlockTitle'

const pageTitle = "Test de positionnement - Tera Campus"
const pageDescription = "Test de positionnement"
const pageUrl = 'https://tera-campus.com/enrolment/quiz/'

export default function Quiz() {
  const router = useRouter()
  const { quizUuid } = router.query

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
        <section id="quiz" className="py-10 md:py-20">
          <div className="flex flex-col justify-between flex-grow md:container md:mx-auto">
            <BlockTitle
              title="Test de positionnement"
              iconPicture={{ backgroundImage: "url('inscription-red-into-blue.png')" }}
            />
          </div>
          <div className="xl:my-12">
            L'UUID du quiz est {quizUuid}
          </div>
        </section>
      </main>
    </>
  )
}
