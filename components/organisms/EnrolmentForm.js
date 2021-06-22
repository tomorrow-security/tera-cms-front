// TODO faire fonctionner

// import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import InputRadio from '../molecules/InputRadio'
import Input from '../molecules/Input'

import React, { useEffect } from 'react'
// import { Helmet } from 'react-helmet'
// import { useHistory } from 'react-router-dom'

 

export default function EnrolmentForm ({status}) {
  const schema = yup.object().shape({
    gender: yup.string().required('Requis'),
    email: yup.string().required('Requis').email(),
    lastName: yup.string().required('Requis'),
    firstName: yup.string().required('Requis'),
  })

  const {
    reset,
    register,
    handleSubmit,
    control,
    errors,
    trigger,
  } = useForm({resolver: yupResolver(schema)})

  useEffect(() => { reset() }, [])
  
  // const history = useHistory()
  
  // Removes keys with empty string as value from an object
  // eslint-disable-next-line no-unused-vars
  // const removeEmptyStrings = obj => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ''))

  // const mutation = useMutation(data => axios.post('/arpette/enrolments/', data).then(
  //   ({ data }) => history.push(`/enrolment-quiz?key=${data.quizSession}`)
  // ), { retry: 3 })

  // const onSubmit = formData => mutation.mutate(removeEmptyStrings(formData))

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
      <fieldset>
        <legend className="w-full my-8 text-xl font-bold text-center">
          Ton identité
        </legend>
        <div className="w-2/3 mx-auto">
          <div className="m-2">
            <Input
            id="email"
            type="email"
            name="email"
            placeholder="thomas.anderson@tera-campus.com"
            label="E-mail :"
            />
            <span className="text-tc-red">{errors?.type?.message}</span>
          </div>        
          <div>
            <div className="m-2">
              <InputRadio
                name="gender"
                control={control}
                choices={[
                  { label: 'Mme', value: 'F' },
                  { label: 'M.', value: 'M' },
                ]}
              />
              <span className="col-span-2 text-tc-red">{errors?.gender?.message}</span>
            </div>
            <div className="m-2">
            <Input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Anderson"
            label="Nom* :"
            />
            <span className="text-tc-red">{errors?.lastName?.message}</span>
          </div>
            <div className="m-2">
            <Input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Thomas"
            label="Prénom* :"
            />
            <span className="text-tc-red">{errors?.firstName?.message}</span>
          </div>
          </div>
        </div>
        <div className="m-8">{ renderSubmitButton() }</div>
      </fieldset>
    </form>
  )
}