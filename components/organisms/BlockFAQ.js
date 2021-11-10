import Head from "next/head"

import LitleTitle from "../atoms/LittleTitle"
import Paragraphe from "../atoms/Paragraphe"

function generateJSONLD(questions) {
  let mainEntity = []
  questions.map((question) => {
    mainEntity.push({
      "@type": "Question",
      name: question.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: question.text,
      },
    })
  })
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mainEntity,
  }
  return JSON.stringify(jsonld)
}

function Item({ question, answer }) {
  return (
    <div>
      <LitleTitle>{question}</LitleTitle>
      <Paragraphe>{answer}</Paragraphe>
    </div>
  )
}

export default function BlockFaq({ questions }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateJSONLD(questions) }}
        />
      </Head>

      <section id="faq" className="py-5">
        <div className="grid grid-cols-1 mx-4 lg:grid-cols-2">
          {questions.map((item, index) => (
            <Item key={index} question={item.name} answer={item.text} />
          ))}
        </div>
      </section>
    </>
  )
}
