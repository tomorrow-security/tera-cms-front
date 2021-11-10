import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import { useMutation } from "react-query"

import BlockTitle from "../../components/organisms/BlockTitle"
import Form from "../../components/molecules/Form"

const pageTitle = "Inscription - Tera Campus"
const pageDescription = "Inscription"
const pageUrl = "https://tera-campus.com/enrolment"
const apiUrl = process.env.NEXT_PUBLIC_ARPETTE_URL

export default function Enrolment() {
  const router = useRouter()

  const mutation = useMutation(
    (formData) => {
      axios
        .post(`${apiUrl}/enrolment/create`, formData)
        .then(({ data }) => router.push(`/enrolment/${data.enrolment}`))

        .catch((error) => console.log(error))
    },
    { retry: 3 }
  )

  const onSubmit = (formData) => {
    mutation.mutate(formData)
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

      <main className="md:container md:mx-auto">
        <section id="enrolment" className="py-10">
          <div className="flex flex-col justify-between flex-grow md:container md:mx-auto">
            <BlockTitle
              title="Inscription"
              iconPicture={{
                backgroundImage: "url('inscription-red-into-blue.png')",
              }}
            />
          </div>
          <div className="mx-4 xl:my-12">
            <Form
              status={mutation.status}
              onSubmit={onSubmit}
              mutation={mutation}
            />
          </div>
        </section>
      </main>
    </>
  )
}
