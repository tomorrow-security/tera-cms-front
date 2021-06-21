// import axios from 'axios'
import Head from 'next/head'
// import { useForm } from 'react-hook-form'
// import { useMutation } from 'react-query'

import BlockTitle from '../components/atoms/BlockTitle'
import InputRadio from '../components/molecules/InputRadio'


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
    //     homeAddressLine1: yup.string().required('Requis'),
    //     homeAddressLine2: yup.string(),
    //     homeZipCode: yup.string().required('Requis').matches(/^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/, 'Invalide'),
    //     homeCity: yup.string().required('Requis'),
    //     homeCountry: yup.string().required('Requis'),
    //     appliedFor: yup.number().integer().required('Requis'),
    //     documentId: yup.array(yup.string()).length(1, 'Requis'),
    //     documentResume: yup.array(yup.string()).length(1, 'Requis'),
    //     schoolReports: yup.array(yup.string()).max(3),
    // })

    // const {
    //     reset,
    //     register,
    //     handleSubmit,
    //     control,
    //     errors,
    //     trigger,
    // } = useForm({
    //     defaultValues: { homeCountry: 'France' },
    //     resolver: yupResolver(schema),
    // })

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
                    {/* <Title>Informations personnelles</Title> */}
                        <div>
                            <label htmlFor="email">E-mail* :</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="thomas.anderson@tera-campus.com"
                                // className={`
                                //     w-full p-2 border
                                //     ${errors.email ? 'border-tc-red' : 'border-black'}
                                //     rounded-none outline-none
                                // `}
                                // ref={register}
                            />
                            {/* <span className="text-tc-red">{errors?.email?.message}</span> */}
                        </div>        
                        <div>
                        <div>
                            <label htmlFor="gender">Civilité* :</label>
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
                            <label htmlFor="lastName">Nom* :</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Anderson"
                                // className={`
                                //     w-full p-2 border
                                //     ${errors.lastName ? 'border-tc-red' : 'border-black'}
                                //     rounded-none outline-none
                                // `}
                                // ref={register}
                            />
                            {/* <span className="text-tc-red">{errors?.lastName?.message}</span> */}
                        </div>
                        <div>
                            <label htmlFor="firstName">Prénom* :</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="Thomas"
                                // className={`
                                //     w-full p-2 border
                                //     ${errors.firstName ? 'border-tc-red' : 'border-black'}
                                //     rounded-none outline-none
                                // `}
                                // ref={register}
                            />
                            {/* <span className="text-tc-red">{errors?.firstName?.message}</span> */}
                        </div>
                    </div>
                </div>

                {/* <div>
                    // // <Title>Adresse de résidence</Title>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4 space-y-1">
                            <label htmlFor="homeAddressLine1">Adresse* :</label>
                            <input
                                id="homeAddressLine1"
                                name="homeAddressLine1"
                                type="text"
                                placeholder="144 chemin du Mont-Durand"
                                className={`
                                    w-full p-2 border
                                    ${errors.homeAddressLine1 ? 'border-tc-red' : 'border-black'}
                                    rounded-none outline-none
                                `}
                                ref={register}
                            />
                            <span className="text-tc-red">{errors?.homeAddressLine1?.message}</span>
                        </div>
                        <div className="col-span-4 space-y-1">
                            <label htmlFor="homeAddressLine2">Complément d&apos;adresse :</label>
                            <input
                                id="homeAddressLine2"
                                name="homeAddressLine2"
                                type="text"
                                placeholder="Résidence Les Mésanges"
                                className="w-full p-2 border border-black rounded-none outline-none"
                                ref={register}
                            />
                        </div>
                        <div className="col-span-4 space-y-1 md:col-span-1">
                            <label htmlFor="homeZipCode">CP* :</label>
                            <input
                                id="homeZipCode"
                                name="homeZipCode"
                                type="text"
                                placeholder="74450"
                                className={`
                                    w-full p-2 border
                                    ${errors.homeZipCode ? 'border-tc-red' : 'border-black'}
                                    rounded-none outline-none
                                `}
                                ref={register}
                            />
                            <span className="text-tc-red">{errors?.homeZipCode?.message}</span>
                        </div>
                        <div className="col-span-4 space-y-1 md:col-span-3">
                            <label htmlFor="homeCity">Ville* :</label>
                            <input
                                id="homeCity"
                                name="homeCity"
                                type="text"
                                placeholder="Saint-Jean-de-Sixt"
                                className={`
                                    w-full p-2 border
                                    ${errors.homeCity ? 'border-tc-red' : 'border-black'}
                                    rounded-none outline-none
                                `}
                                ref={register}
                            />
                            <span className="text-tc-red">{errors?.homeCity?.message}</span>
                        </div>
                        <div className="col-span-4 space-y-1">
                            <label htmlFor="homeCountry">Pays* :</label>
                            <input
                                id="homeCountry"
                                name="homeCountry"
                                type="text"
                                placeholder="59000"
                                className="block w-full p-2 mt-1 border border-black rounded-none outline-none"
                                ref={register}
                                readOnly
                            />
                        </div>
                    </div>
                </div> */}

                {/* <div>
                    // // <Title>Parcours précédent</Title>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4 space-y-1">
                            <label htmlFor="previousSchoolName">Nom de l&apos;établissement :</label>
                            <input
                                id="previousSchoolName"
                                name="previousSchoolName"
                                type="text"
                                placeholder="Lycée Marie Curie"
                                className="w-full p-2 border border-black rounded-none outline-none"
                                ref={register}
                            />
                        </div>
                        <div className="col-span-4 space-y-1">
                            <label htmlFor="previousSchoolAddressLine1">Adresse :</label>
                            <input
                                id="previousSchoolAddressLine1"
                                name="previousSchoolAddressLine1"
                                type="text"
                                placeholder="47 Boulevard Pierre de Coubertin"
                                className="w-full p-2 border border-black rounded-none outline-none"
                                ref={register}
                            />
                        </div>
                        <div className="col-span-4 space-y-1">
                            <label htmlFor="previousSchoolAddressLine2">Complément d&apos;adresse :</label>
                            <input
                                id="previousSchoolAddressLine2"
                                name="previousSchoolAddressLine2"
                                type="text"
                                placeholder="Pôle scientifique"
                                className="w-full p-2 border border-black rounded-none outline-none"
                                ref={register}
                            />
                        </div>
                        <div className="col-span-4 space-y-1 md:col-span-1">
                            <label htmlFor="previousSchoolZipCode">CP :</label>
                            <input
                                id="previousSchoolZipCode"
                                name="previousSchoolZipCode"
                                type="text"
                                placeholder="60180"
                                className="w-full p-2 border border-black rounded-none outline-none"
                                ref={register}
                            />
                        </div>
                        <div className="col-span-4 space-y-1 md:col-span-3">
                            <label htmlFor="previousSchoolCity">Ville :</label>
                            <input
                                id="previousSchoolCity"
                                name="previousSchoolCity"
                                type="text"
                                placeholder="Nogent-sur-Oise"
                                className="w-full p-2 border border-black rounded-none outline-none"
                                ref={register}
                            />
                        </div>
                        <div className="col-span-4 space-y-1">
                            <label htmlFor="previousSchoolCountry">Pays :</label>
                            <input
                                id="previousSchoolCountry"
                                name="previousSchoolCountry"
                                type="text"
                                placeholder="France"
                                className="w-full p-2 border border-black rounded-none outline-none"
                                ref={register}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    // // <Title>Choix de l&apos;année</Title>
                    <div className="space-y-1">
                        <label htmlFor="appliedFor">Je souhaite rejoindre Tera Campus en* :</label>
                        <InputRadio
                            name="appliedFor"
                            control={control}
                            choices={[
                                { label: 'Première année', value: 1 },
                                { label: 'Troisième année', value: 3 },
                            ]}
                        />
                        <span className="col-span-2 text-tc-red">{errors?.appliedFor?.message}</span>
                    </div>
                </div> */}

                {/* <div>
                    <Title>Documents</Title>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                            <label htmlFor="documentId">Document d&apos;identité* :</label>
                            <InputFiles
                                id="documentId"
                                name="documentId"
                                control={control}
                                trigger={trigger}
                                maxFiles={1}
                            />
                            <span className="text-tc-red">{errors?.documentId?.message}</span>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="documentResume">CV* :</label>
                            <InputFiles
                                id="documentResume"
                                name="documentResume"
                                control={control}
                                trigger={trigger}
                                maxFiles={1}
                            />
                            <span className="text-tc-red">{errors?.documentResume?.message}</span>
                        </div>
                    </div>
                </div> */}

                {/* <div>
                    // // <Title>Informations complémentaires</Title>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-1">
                            <label htmlFor="linkedin">URL de ton profil Linkedin :</label>
                            <input
                                id="linkedin"
                                name="linkedin"
                                type="url"
                                placeholder="https://www.linkedin.com/in/thomas-anderson-b13445202"
                                className="w-full p-2 border border-black rounded-none outline-none"
                                ref={register}
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="schoolReports">Derniers bulletins de notes :</label>
                            <InputFiles
                                id="schoolReports"
                                name="schoolReports"
                                control={control}
                                trigger={trigger}
                                maxFiles={3}
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="comment">Commentaire libre :</label>
                            <textarea
                                id="comment"
                                name="comment"
                                rows="5"
                                className="w-full p-2 border border-black rounded-none outline-none"
                                ref={register}
                            />
                        </div>
                    </div>
                </div> */}

                { renderSubmitButton() }

            </div>

        </form>
    )
}


export default function Enrolment() {

  // const history = useHistory()

  //   const orderDocuments = input => {
  //       const output = { ...input }
  //       delete output.documentId
  //       delete output.documentResume
  //       delete output.schoolReports
  //       output.documents = []
  //       if (input.documentId?.length > 0) {
  //           output.documents.push({ kind: 'IDENTITY', key: input.documentId[0] })
  //       }
  //       if (input.documentResume?.length > 0) {
  //           output.documents.push({ kind: 'RESUME', key: input.documentResume[0] })
  //       }
  //       if (input.schoolReports?.length > 0) {
  //           input.schoolReports.map(
  //               filename => output.documents.push({ kind: 'SCHOOL_REPORT', key: filename }),
  //           )
  //       }
  //       return output
  // }
  
  // Removes keys with empty string as value from an object
    // eslint-disable-next-line no-unused-vars
    // const removeEmptyStrings = obj => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ''))

    // const mutation = useMutation(data => axios.post('/arpette/enrolments/', data).then(
    //     ({ data }) => history.push(`/enrolment-quiz?key=${data.quizSession}`)
    // ), { retry: 3 })

    // const onSubmit = formData => mutation.mutate(orderDocuments(removeEmptyStrings(formData)))


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
