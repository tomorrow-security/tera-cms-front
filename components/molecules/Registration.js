import Cta from "../atoms/Cta"
import IconComputerGraduate from "../atoms/IconComputerGraduate"
import IconBulb from "../atoms/IconBulb"
import IconPhonebook from "../atoms/IconPhonebook"
import IconPlacementTest from "../atoms/IconPlacementTest"
import IconMagnifyingGlass from "../atoms/IconMagnifyingGlass"
import IconHandShake from "../atoms/IconHandShake"

const steps = [
  {
    description: "Candidature en ligne",
    backgroundImage: "etape1.png",
    icon: <IconBulb />,
    stage: 1,
  },
  {
    description:
      "Test de positionnement (valide 1 semaine après l'inscription, prévoir minimum 1H, résultats disponibles à la fin du test)",
    backgroundImage: "etape2.png",
    icon: <IconPhonebook />,
    stage: 2,
  },
  {
    description: "Entretien en visioconférence avec l'un de nos Guides",
    backgroundImage: "etape3.png",
    icon: <IconPlacementTest />,
    stage: 3,
  },
  {
    description:
      "Inscription définitive et choix du contrat (contrat d’apprentissage ou de professionnalisation) ",
    backgroundImage: "etape4.png",
    icon: <IconMagnifyingGlass />,
    stage: 4,
  },
  {
    description: "Suivi régulier pour la recherche d’entreprise",
    backgroundImage: "etape5.png",
    icon: <IconHandShake />,
    stage: 5,
  },
]

const Step = ({ description, image, icon, stage }) => {
  const oddStep = stage % 2 !== 0
  return (
    <div className="border-t border-tc-red md:pt-4 md:w-1/5">
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className="z-0 w-full h-20 my-2 bg-center bg-no-repeat bg-contain md:h-full md:mx-2"
      >
        <div
          className={`flex flex-nowrap justify-around items-center
                ${
                  oddStep ? "flex-row-reverse text-left" : "flex-row text-right"
                }
                md:flex-col-reverse md:text-center bg-white bg-opacity-80 w-full h-full z-10`}
        >
          <div className="z-20 w-12 md:w-8 md:mt-2 text-tc-blue">{icon}</div>
          <div className="z-20 w-2/3 mx-3 md:mx-1 md:w-full">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default function Registration() {
  return (
    <div className="my-4 mt-8 md:container lg:mt-12 md:mx-auto">
      <div className="flex flex-row items-center justify-center mb-2 flex-nowrap md:mb-4">
        <div className="w-12 h-12 text-tc-blue">
          <IconComputerGraduate />
        </div>
        <div className="text-xl font-bold text-center md:text-2xl xl:text-3xl text-tc-red">
          &Eacute;tapes d&apos;inscription
        </div>
      </div>
      <div>
        <div className="md:flex md:flex-row md:justify-center md:mt-4 md:mb-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              description={step.description}
              icon={step.icon}
              image={step.backgroundImage}
              stage={step.stage}
            />
          ))}
        </div>
        <p className="m-2 text-sm italic md:text-right">
          Temps de la procédure d'inscription : 1 semaine
        </p>
      </div>
      <div className="my-8">
        {/* <p>Rentrée scolaire le : 04/10/2021 (premier Bivouac) </p> */}
        <Cta />
      </div>
    </div>
  )
}
