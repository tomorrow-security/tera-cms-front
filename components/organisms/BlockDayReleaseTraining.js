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
            <div className="flex flex-col md:flex-row md:justify-around lg:justify-evenly">
              <div className="mx-4 md:mx-0 md:w-1/2 xl:w-1/3 ">
                <h2 className="text-lg font-bold lg:text-xl 2xl:text-2xl">
                  L'alternance chez{" "}
                  <span className="uppercase">Tera Campus</span>
                </h2>
                <p className="my-6 lg:text-lg 2xl:text-xl">
                  Dès la troisième année (BAC +2/3), l'ensemble des formations
                  Tera Campus sont dispensées à 100% par alternance. Cette
                  période est rythmée sur un cycle hebdomadaire de{" "}
                  <em className="not-italic font-semibold">
                    1 jour de cours en télé-présentiel et 4 jours en entreprise
                  </em>
                </p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat bg-cover sm:bg-contain h-72md:w-1/2 lg:w-1/3 md:h-auto md:mx-2"
                style={{ backgroundImage: "url('groupe-ordi.jpg')" }}
              ></div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
