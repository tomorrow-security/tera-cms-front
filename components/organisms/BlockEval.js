import BlockTitle from "../atoms/BlockTitle"
import LittleTitle from "../atoms/LittleTitle"

export default function BlockEval() {
  return (
    <section id="evaluation" className="py-10 md:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Evaluations"
          iconPicture={{ backgroundImage: "url('pre-requis.png')" }}
        />
        <div className="mx-4 ">
          <LittleTitle children="Les modalités d'évaluation" />
          <ul className="pl-2 space-y-2 list-inside list-square lg:w-11/12 lg:mx-auto">
            <li>Travaux de groupe ou individuels</li>
            <li>Projets techniques</li>
            <li>Projets inter-matières </li>
            <li>Hackathons</li>
            <li>Projets professionnels (alternance) </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
