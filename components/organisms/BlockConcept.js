const Paragraph = ({ bold, gutterBottom, children }) => (
  <p className={`${gutterBottom && 'mb-4 md:mb-8'} text-justify ${bold && 'font-bold'}`}>{children}</p>
)

const Strong = ({ children }) => <strong className="font-bold text-tc-red">{children}</strong>

export default function BlockConcept() {
  return (
    <section id="concept" className="pt-10 md:py-20">
      <div className="md:container md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mx-2 md:mx-0">
            <Paragraph gutterBottom>
              Tera Campus propose des formations diplômantes validées par un agrément officiel
              d&apos;État (RNCP niveau 6 et 7). Nos cursus de 3 à 5 années orientés sur les technologies
              de l&apos;information, réalisés et validés par des professionnels du secteur, te permettront
              d&apos;acquérir non seulement de fortes <Strong>compétences techniques</Strong>, mais aussi
              des <Strong>méthodes d&apos;organisation</Strong>, de <Strong>collaboration</Strong> et
              de <Strong>communication</Strong> indispensables à toute carrière professionnelle !
            </Paragraph>
            <Paragraph gutterBottom>
              La formation Tera Campus peut être suivie de n&apos;importe où, le seul pré-requis : un
              ordinateur et une connexion Internet.
            </Paragraph>
            <Paragraph bold gutterBottom>
              Tout au long de l&apos;année, Tera Campus organise trois <Strong>Bivouacs</Strong> de
              deux semaines complètes.
            </Paragraph>
            <Paragraph>
              En octobre, en février puis en mai, tu rejoindras les autres étudiants de Tera Campus pour
              partager, créer et construire un esprit d&apos;équipe au travers d&apos;exercices
              de <Strong>team building</Strong> et de <Strong>Hackathons</Strong>. En améliorant la
              cohésion de groupe, nous améliorerons aussi ton apprentissage pour mieux t&apos;intégrer dans
              le monde professionnel.
            </Paragraph>
          </div>
          <div
            className="w-full h-64 md:h-full bg-cover bg-center"
            style={{ backgroundImage: "url('students-collaboration.jpg')" }}
          />
          <div className="mx-2 md:mx-0 row-start-2 md:col-span-2 p-4 border border-black rounded shadow-lg text-center text-lg font-bold">
            Prochaine rentrée académique le lundi 04 octobre 2021
          </div>
        </div>
      </div>
    </section>
  )
}
