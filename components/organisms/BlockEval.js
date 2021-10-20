import IconCurvedArrow from "../atoms/IconCurvedArrow"

const modes = [
  "Travaux de groupe ou individuels",
  "Projets techniques",
  "Projets inter-matières",
  "Hackathons",
  "Projets professionnels (alternance)",
]

export default function BlockEval() {
  return (
    <section className="py-5 md:py-10">
      <div className="flex flex-col justify-center mx-4 md:w-1/2 lg:w-1/3 2xl:w-1/4 md:mx-auto">
        <div className="w-8 h-8 mx-auto my-4 transform rotate-270">
          <IconCurvedArrow />
        </div>
        <button className="group">
          <div className="flex justify-center">
            <p className="p-4 font-semibold text-white rounded cursor-pointer group-focus:rounded-t-none bg-tc-blue w-max">
              Les modalités d'évaluation
            </p>
          </div>
          <div className="justify-center hidden w-11/12 p-2 m-auto space-y-2 group-focus:flex lg:mx-auto">
            <ul className="p-2 list-none w-max">
              {modes.map((mode, index) => (
                <li key={index}>{mode}</li>
              ))}
            </ul>
          </div>
        </button>
      </div>
    </section>
  )
}
