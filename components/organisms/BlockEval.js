const modes = [
  "Travaux de groupe ou individuels",
  "Projets techniques",
  "Projets inter-matières",
  "Hackathons",
  "Projets professionnels (alternance)",
]

export default function BlockEval() {
  return (
    <section className="py-5">
      <div className="flex flex-col justify-center mx-auto w-max">
        <div className="border-2 rounded border-tc-blue">
          <div className="flex justify-center">
            <p className="w-full py-4 mx-4 font-semibold text-center text-white rounded-b bg-tc-blue">
              Les modalités d'évaluation
            </p>
          </div>
          <div className="flex justify-center mx-auto space-y-2">
            <ul className="p-4 list-none w-max">
              {modes.map((mode, index) => (
                <li key={index}>{mode}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
