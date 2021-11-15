import LittleTitle from "../atoms/LittleTitle"
import ListUl from "../atoms/ListUl"

const modes = [
  "Travaux de groupe ou individuels",
  "Projets techniques",
  "Projets inter-matières",
  "Hackathons",
  "Projets professionnels (alternance)",
]

export default function Eval() {
  return (
    <section className="py-2">
      <LittleTitle children="Les modalités d'évaluation" />
      <ListUl>
        {modes.map((mode, index) => (
          <li key={index}>{mode}</li>
        ))}
      </ListUl>
    </section>
  )
}
