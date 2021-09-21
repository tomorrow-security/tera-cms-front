import BlockTitle from "../atoms/BlockTitle"

export default function BlockDayReleaseTraining() {
  return (
    <section id="DayReleaseTrainingDef" className="py-10 md:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="L'alternance"
          iconPicture={{ backgroundImage: "url('alternance.png')" }}
        />
        <div className="mx-4">
          <section>
            <h2 className="pb-2 text-lg font-bold">
              L'alternance chez <span className="uppercase">Tera Campus</span>
            </h2>
            <p>
              Dès la troisième année (BAC +2/3), l'ensemble des formations Tera
              Campus sont dispensées à 100% par alternance. Cette période est
              rythmée sur un cycle hebdomadaire de{" "}
              <em>
                1 jour de cours en télé-présentiel et 4 jours en entreprise
              </em>
            </p>
            <div className="w-full">
              <img
                src="/public/groupeordi.jpg"
                alt="groupe devant un ordinateur"
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
