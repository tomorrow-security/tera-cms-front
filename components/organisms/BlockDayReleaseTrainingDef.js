import BlockTitle from "../atoms/BlockTitle"

export default function BlockDayReleaseTrainingDef() {
  return (
    <section id="DayReleaseTrainingDef" className="py-10 md:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="L'alternance"
          iconPicture={{ backgroundImage: "url('panneaux-direction.png')" }}
        />
        <div className="mx-4 lg:px-8 lg:py-8 lg:divide-y-4 lg:divide-tc-blue lg:divide-double lg:w-6/7 lg:mx-auto">
          {guides.map((guide, index) => (
            <Guide
              key={`guide-${index}`}
              name={guide.name}
              description={guide.description}
              imageUrl={guide.imageUrl}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
