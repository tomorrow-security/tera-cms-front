import BlockTitle from "../atoms/BlockTitle"
import LittleTitle from "../atoms/LittleTitle"

export default function BlockDayReleaseTraining() {
  return (
    <section id="DayReleaseTraining" className="py-10 lg:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="L'alternance"
          iconPicture={{ backgroundImage: "url('alternance.png')" }}
        />
        <section className="md:mx-4 md:flex md:flex-row md:justify-between md:items-center">
          <div className="mx-4 md:mx-0 md:mr-6 md:w-1/2">
            <LittleTitle children="L'alternance chez TERA CAMPUS" />
            <p className="my-6 lg:text-lg 2xl:text-xl">
              Dès la troisième année (BAC +2/3), l’ensemble des formations Tera
              Campus sont dispensées à 100% par alternance. Cette période est
              rythmée sur un cycle hebdomadaire de&nbsp;
              <em className="not-italic font-semibold">
                1 jour de cours en télé-présentiel et 4 jours en entreprise
              </em>
            </p>
          </div>
          <div
            className="w-screen bg-center bg-no-repeat bg-cover h-33vh sm:h-50vh md:bg-contain md:bg-right md:w-1/2"
            style={{ backgroundImage: "url('groupe-ordi.jpg')" }}
          ></div>
        </section>
      </div>
    </section>
  )
}
