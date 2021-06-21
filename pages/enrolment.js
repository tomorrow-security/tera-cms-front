// import axios from 'axios'
import Head from 'next/head'
// import { useForm } from 'react-hook-form'
// import { useMutation } from 'react-query'

import BlockTitle from '../components/atoms/BlockTitle'
import InputRadio from '../components/molecules/InputRadio'
import Input from '../components/molecules/Input'


// import { yupResolver } from '@hookform/resolvers/yup'

// import React, { useEffect } from 'react'
// import { Helmet } from 'react-helmet'
// import { useHistory } from 'react-router-dom'
// import * as yup from 'yup'


const pageTitle = "Inscription - Tera Campus"
const pageDescription = "Inscription"
const pageUrl = 'https://tera-campus.com/enrolment'

const EnrolmentForm = ({ status, onSubmit }) => {
    // const schema = yup.object().shape({
    //     gender: yup.string().required('Requis'),
    //     email: yup.string().required('Requis').email(),
    //     lastName: yup.string().required('Requis'),
    //     firstName: yup.string().required('Requis'),
    // })

    // const {
    //     reset,
    //     register,
    //     handleSubmit,
    //     control,
    //     errors,
    //     trigger,
    //       } = useForm({
    //          resolver: yupResolver(schema),
    //       })

    // useEffect(() => { reset() }, [])

  // TODO voir pour importer la molecule ImputButton
    const renderSubmitButton = () => {
        switch (status) {
            case 'loading':
                return <input
                    type="submit"
                    value="En cours d'envoi ..."
                    className="w-full p-4 bg-gray-400 outline-none md:col-span-2"
                    disabled
                />
            case 'success':
                return <input
                    type="submit"
                    value="Envoyé !"
                    className="w-full p-4 bg-green-400 outline-none md:col-span-2"
                    disabled
                />
            default:
                return <input
                    type="submit"
                    value="Envoyer"
                    className="w-full p-4 bg-yellow-400 shadow outline-none cursor-pointer md:col-span-2 hover:bg-yellow-500 hover:shadow-none"
                />
        }
    }

    return (
      <form
        // onSubmit={(handleSubmit(onSubmit))}
      >
        <div className="grid grid-cols-1 gap-8 py-10 md:py-20 md:grid-cols-2">
            <div>
              <div>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="thomas.anderson@tera-campus.com"
                  label="E-mail"
                />
                {/* <span className="text-tc-red">{error?.type?.message}</span> */}
              </div>        
              <div>
                <div>
                  <InputRadio
                    name="gender"
                    // control={control}
                    choices={[
                      { label: 'Mme', value: 'F' },
                      { label: 'M.', value: 'M' },
                    ]}
                  />
                  {/* <span className="col-span-2 text-tc-red">{errors?.gender?.message}</span> */}
                </div>
              <div>
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Anderson"
                  label="Nom* :"
                />
                {/* <span className="text-tc-red">{errors?.lastName?.message}</span> */}
              </div>
              <div>
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Thomas"
                  label="Prénom* :"
                />
                {/* <span className="text-tc-red">{errors?.firstName?.message}</span> */}
              </div>
            </div>
          </div>
          { renderSubmitButton() }
            </div>
        </form>
    )
}


export default function Enrolment() {

  // const history = useHistory()
  
  // Removes keys with empty string as value from an object
    // eslint-disable-next-line no-unused-vars
    // const removeEmptyStrings = obj => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ''))

    // const mutation = useMutation(data => axios.post('/arpette/enrolments/', data).then(
    //     ({ data }) => history.push(`/enrolment-quiz?key=${data.quizSession}`)
    // ), { retry: 3 })

    // const onSubmit = formData => mutation.mutate(removeEmptyStrings(formData))


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
