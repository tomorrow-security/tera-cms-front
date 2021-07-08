/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'

const pageTitle = 'Test - Tera Campus'
const pageDescription = 'Test de positionnement Tera Campus'
const pageUrl = 'https://tera-campus.com/enrolment/quiz'

const SingleAnswerForm = ({ session, onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {session.question.answers.map(answer => (
                <div  key={answer.body}>
                    <input
                        type="radio"
                        id={`answer${answer.id}`}
                        name="answer"
                        value={answer.id}
                        {...register(`answer${answer.id}`, { required: true })}
                    />
                    <label htmlFor={`answer${answer.id}`}>{answer.body}</label>
                </div>
            ))}
            <input type="submit" />
        </form>
    )
}

const MultipleAnswersForm = ({ session, onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {session.question.answers.map(answer => (
                <div  key={answer.body}>
                    <input
                        type="checkbox"
                        id={`answer${answer.id}`}
                        name={`answer${answer.id}`}
                        value={answer.id}
                        {...register(`answer${answer.id}`, { required: true })}
                    />
                    <label htmlFor={`answer${answer.id}`}>{answer.body}</label>
                </div>
            ))}
            <input type="submit" />
        </form>
    )
}

const NotStartedQuiz = ({ sendQuizResponse }) => (
    <div>
        <button onClick={() => sendQuizResponse()}>Lancer le test !</button>
    </div>
)

const StartedQuiz = ({ session, sendQuizResponse }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()
    
    const onSubmit = data => {
        console.log(data)
        const answers = []
        for (const [key, value] of Object.entries(data)) {
            if (value) {
                answers.push(parseInt(value))
            }
        }
        sendQuizResponse({ question: session.question.id, answers })
    }

    const displayForm = () => {
        switch(session.question.kind) {
            case 'SINGLE':
                return <SingleAnswerForm session={session} onSubmit={onSubmit} />
            case 'MULTIPLE':
                return <MultipleAnswersForm session={session} onSubmit={onSubmit} />
        }
    }

    return (
        <>
            <div><span>{session.question.title}</span></div>
            { displayForm() }
        </>
    )
}

const EndedQuiz = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)
    }, [])

    return (
        <div className="flex flex-col items-center py-4 md:py-20">
            <div className="mb-4 text-2xl text-center md:mb-10 md:text-4xl">
                Test terminé, félicitations  !
            </div>
            <div className="mb-4 text-xl text-center md:text-2xl">
                Planifies maintenant ton entretien de 15mn avec Tera Campus.
            </div>
            <div
                className="w-full min-h-full calendly-inline-widget"
                //redirection vers le calendrier de Lilian
                data-url="https://calendly.com/lilian-tera-campus/ton-entretien-avec-tera-campus-15min?text_color=000000&hide_event_type_details=1"
                // redirection vers le calendrier de Tera-Campus
                // data-url="https://calendly.com/teracampus/enrolment?text_color=000000&hide_event_type_details=1"
                style={{ minWidth: '320px', height: '650px' }}
            />
        </div>
    )
}

//TODO voir pour les endpoints avec Brice
export default function Quiz() {
    const key = new URLSearchParams(useLocation().search).get('key')
    const { isLoading, isError, data, error } = useQuery('fetchQestion', () => axios.get(`/arpette/enrolments/get-quiz/?key=${key}`))
    const mutation = useMutation(data => axios.post(`/arpette/enrolments/send-quiz-response/?key=${key}`, data))
    const [question, setQuestion] = useState({})

    useEffect(() => {
        if (data && data.data !== question) setQuestion(data.data)
    }, [data])

    useEffect(() => {
        if (mutation.data && mutation.data.data !== question) setQuestion(mutation.data.data)
    }, [mutation.isSuccess])

    const sendQuizResponse = (data = {}) => {
        mutation.mutate(data)
    }

    const displayBody = () => {
        if (isLoading) {
            return <h1>Loading ...</h1>
        }

        if (isError) {
            return <h1>{error}</h1>
        }

        if (!question.status) {
            return <h1>Not found</h1>
        }

        switch(question.status) {
            case 'NOT_STARTED':
                return <NotStartedQuiz sendQuizResponse={sendQuizResponse} />
            case 'STARTED':
                return <StartedQuiz session={question} sendQuizResponse={sendQuizResponse} />
            case 'ENDED':
                return <EndedQuiz />
        }
    }

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:description" content={pageDescription} />
            </Helmet>

            <main className="mx-2 md:container md:mx-auto">
                { displayBody() }
            </main>
        </>
    )
}
