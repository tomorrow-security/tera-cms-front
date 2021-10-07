export default function BlockEval() {
  // TODO suppr le grand cadre au focus
  return (
    <section className="py-10">
      <div className="flex flex-col justify-center mx-4">
        <button className="group">
          <div className="flex justify-center">
            <p className="p-4 font-semibold text-white rounded cursor-pointer bg-tc-blue w-max">
              Les modalités d'évaluation
            </p>
          </div>
          <div className="justify-center hidden w-11/12 p-2 m-auto space-y-2 group-focus:flex lg:mx-auto">
            <ul className="p-2 list-none border rounded w-max border-tc-blue">
              <li>Travaux de groupe ou individuels</li>
              <li>Projets techniques</li>
              <li>Projets inter-matières</li>
              <li>Hackathons</li>
              <li>Projets professionnels (alternance) </li>
            </ul>
          </div>
        </button>
      </div>
    </section>
  )
}
