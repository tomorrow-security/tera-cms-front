import BlockTitle from "../atoms/BlockTitle"

export default function BlockDayReleaseTrainingDef() {
  return (
    <section id="DayReleaseTrainingDef" className="py-10 md:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="L'alternance"
          iconPicture={{ backgroundImage: "url('panneaux-direction.png')" }}
        />
        <div className="mx-4">en construction</div>
      </div>
    </section>
  )
}
