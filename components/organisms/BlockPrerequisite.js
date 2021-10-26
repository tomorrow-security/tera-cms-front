import SubTitle from "../atoms/SubTitle"
import LittleTitle from "../atoms/LittleTitle"

export default function BlockPrerequisite() {
  return (
    <section id="prerequis" className="py-10 md:pt-10">
      <div className="md:container md:mx-auto">
        <SubTitle
          title="Prérequis"
          iconPicture={{ backgroundImage: "url('pre-requis.png')" }}
        />
        <div className="mx-4 ">
          <LittleTitle children="Accès à la formation" />
          {/* //TODO importer le composant List */}
          <ul className="pl-2 space-y-2 list-inside list-square lg:w-11/12 lg:mx-auto">
            <li>
              Avoir validé une 2ème année (BAC+2) en Informatique ou une
              formation équivalente en France ou à l’international.{" "}
            </li>
            <li>
              Avoir un BAC et une expérience professionnelle à l’appui en
              informatique. Uniquement pour les cas exceptionnels et après
              l’étude du dossier par la Direction Pédagogique.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
