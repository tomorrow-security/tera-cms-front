import axios from "axios"
import Head from "next/head"
import { useMutation } from "react-query"
import router from "next/router"

import BlockTitle from "../components/organisms/BlockTitle"
import Form from "../components/molecules/Form"

const pageTitle = "Catalog - Tera Campus"
const pageDescription = "Demande de brochure"
const pageUrl = "https://tera-campus.com/catalog"

export default function Catalog() {
  const mutation = useMutation((data) => axios.post("/api/brochure", data), {
    retry: 3,
  })

  const onSubmit = (data) => {
    mutation.mutate(data),
      // TODO faire une condition avec le status success pour router.push
      router.push("/brochuresented")
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
        <section id="brochure" className="py-10">
          <BlockTitle
            title="Demande de brochure"
            iconPicture={{ backgroundImage: "url('brochure icon-blue.png')" }}
          />
          <div className="mx-4">
            <p className="my-8 text-center ">
              Veuillez Remplir le formulaire suivant pour recevoir la brochure
              de Tera Campus par e-mail s'il vous plaît.
            </p>
            <div className="xl:my-12">
              <Form
                status={mutation.status}
                onSubmit={onSubmit}
                mutation={mutation}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
