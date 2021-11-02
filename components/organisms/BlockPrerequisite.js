import SubTitle from "../atoms/SubTitle"
import LittleTitle from "../atoms/LittleTitle"
import List from "../atoms/List"

// TODO  faire une molécule TC3 (en prévision de l'ouverture des autres années) & y mettre le liens vers la fiche RNCP
export default function BlockPrerequisite() {
  return (
    <section id="prerequis" className="py-5">
      <div className="md:container md:mx-auto">
        <SubTitle
          title="Prérequis"
          iconPicture={{ backgroundImage: "url('pre-requis.png')" }}
        />
        <div className="mx-4 ">
          <LittleTitle children="Accès à la formation" />
          <List>
            <li>
              Avoir validé une 2ème année (BAC+2) en Informatique ou une
              formation équivalente en France ou à l’international.
            </li>
            <li>
              Avoir un BAC et une expérience professionnelle à l’appui en
              informatique. Uniquement pour les cas exceptionnels et après
              l’étude du dossier par la Direction Pédagogique.
            </li>
          </List>
        </div>
      </div>
    </section>
  )
}
