export default function BlockEval() {
  // TODO faire fonctionner le group-focus
  return (
    <section className="py-10">
      <div className="mx-4 group">
        <div className="flex justify-center ">
          <p className="p-4 font-semibold text-white rounded cursor-pointer bg-tc-blue w-max">
            Les modalités d'évaluation
          </p>
        </div>
        <div className="hidden w-11/12 p-2 m-auto space-y-2 list-inside rounded group-focus:justify-center group-focus:flex lg:mx-auto">
          <ul className="p-2 border rounded list-square w-max border-tc-blue">
            <li>Travaux de groupe ou individuels</li>
            <li>Projets techniques</li>
            <li>Projets inter-matières</li>
            <li>Hackathons</li>
            <li>Projets professionnels (alternance) </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
