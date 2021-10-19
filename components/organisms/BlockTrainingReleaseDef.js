import LittleTitle from "../atoms/LittleTitle"

export default function BlockReleaseTrainingDef() {
  return (
    <section id="BlockTrainingReleseFunding" className="py-5 lg:py-10">
      <div className="md:container md:mx-auto">
        <div className="mx-4">
          <LittleTitle children=" L'alternance c'est quoi ?" />
          <p className="my-6 md:mx-6 lg:text-lg lg:mx-12 2xl:text-xl">
            Un système de formation qui est fondé sur une phase pratique et une
            phase théorique qui alternent, permettant de se préparer plus
            efficacement à un métier.
          </p>
          <p className="font-bold md:mx-6 lg:mx-12 text-tc-red">
            Étudier gratuitement tout en étant salarié : la vraie force de
            l’alternance !
          </p>
        </div>
      </div>
    </section>
  )
}
