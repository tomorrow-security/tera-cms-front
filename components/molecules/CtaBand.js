import Cta from "../atoms/Cta"

export default function CtaBand() {
  return (
    <div className="flex flex-col items-center justify-center p-6 mb-8 space-y-4 md:space-y-0 md:flex-row md:justify-around bg-tc-blue">
      <Cta white title="Candidature en ligne" id="/enrolment" />
      <Cta white title="Télécharger la brochure" id="/catalog" />
    </div>
  )
}
