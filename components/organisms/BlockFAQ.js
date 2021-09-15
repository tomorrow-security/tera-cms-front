import Head from "next/head"

import BlockTitle from "../atoms/BlockTitle"

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
      <p className="text-lg font-bold md:text-xl">{question}</p>
      <p className="mt-3 text-justify">{answer}</p>
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

      <section id="faq" className="py-10 md:py-20">
        <div className="md:container md:mx-auto">
          <BlockTitle
            title="Les réponses à tes questions"
            iconPicture={{ backgroundImage: "url('faq.png')" }}
          />
          <div className="grid grid-cols-1 gap-8 mx-4 lg:grid-cols-2">
            {questions.map((item, index) => (
              <Item key={index} question={item.name} answer={item.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
