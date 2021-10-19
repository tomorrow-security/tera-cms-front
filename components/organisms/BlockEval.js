export default function BlockEval() {
  // TODO suppr le grand cadre au focus
  return (
    <section className="py-10">
      <div className="flex flex-col justify-center mx-4 md:w-1/2 lg:w-1/3 2xl:w-1/4 md:mx-auto">
        <button className="group">
          <div className="flex justify-center">
            <p className="p-4 font-semibold text-white rounded cursor-pointer group-focus:rounded-t-none bg-tc-blue w-max">
              Les modalités d'évaluation
            </p>
          </div>
          <div className="justify-center hidden w-11/12 p-2 m-auto space-y-2 group-focus:flex lg:mx-auto">
            <ul className="p-2 list-none w-max">
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
