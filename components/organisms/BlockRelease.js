import DayReleaseTraining from "../molecules/DayReleaseTraining"
import ReleaseTrainingDef from "../molecules/ReleaseTrainingDef"

export default function BlockRelease() {
  return (
    <section id="blockrelease" className="py-5 lg:py-10">
      <DayReleaseTraining />
      <ReleaseTrainingDef />
    </section>
  )
}
