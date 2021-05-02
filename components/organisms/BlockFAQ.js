import Head from 'next/head'

import BlockTitle from '../atoms/BlockTitle'

function generateJSONLD(questions) {
  let mainEntity = []
  questions.map(question => {
    mainEntity.push({
      "@type": "Question",
      "name": question.name,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": question.text,
      }
    })
  })
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity,
  }
  return JSON.stringify(jsonld)
}

function Item({ question, answer }) {
  return (
    <div>
      <p className="text-lg md:text-xl font-bold">{question}</p>
      <p className="mt-3 text-justify">{answer}</p>
    </div>
  )
}

export default function BlockFAQ({ questions }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateJSONLD(questions) }}
        />
      </Head>

      <section id="faq" className="py-10 md:py-20">
        <div className="md:container md:mx-auto">
          <BlockTitle title="FAQ" />
          <div className="mx-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {questions.map((item, index) => (
              <Item key={index} question={item.name} answer={item.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
