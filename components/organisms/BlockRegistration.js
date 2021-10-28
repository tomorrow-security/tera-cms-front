import IconBulb from "../atoms/IconBulb"
import IconPhonebook from "../atoms/IconPhonebook"
import IconPlacementTest from "../atoms/IconPlacementTest"
import IconMagnifyingGlass from "../atoms/IconMagnifyingGlass"
import IconHandShake from "../atoms/IconHandShake"
import SubTitle from "../atoms/SubTitle"
import StartOfTheSchool from "../molecules/StartOfTheSchool"

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
    <div className="flex-1">
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className="z-0 w-full h-32 bg-center bg-no-repeat bg-contain md:h-full "
      >
        <div
          className={`flex flex-nowrap justify-around md:justify-between items-center
                ${
                  oddStep ? "flex-row-reverse text-left" : "flex-row text-right"
                }
                md:flex-col-reverse md:text-center bg-white bg-opacity-70 w-full h-full z-10`}
        >
          <div className="z-20 w-12 md:w-8 md:mt-2 text-tc-blue">{icon}</div>
          <div className="z-20 w-2/3 m-2 md:m-1 md:w-full">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default function BlockRegistration() {
  return (
    <section id="registration" className="py-5">
      <div className="md:container md:mx-auto">
        <SubTitle
          title="&Eacute;tapes d'inscription"
          iconPicture={{ backgroundImage: "url('computer-graduate.png')" }}
        />
        <div>
          <div className="my-4 divide-y divide-dashed divide-tc-red md:divide-y-0 md:flex md:flex-row md:justify-evenly md:my-8">
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
        <div className="p-4 mx-auto mt-8 text-xl border rounded w-max border-tc-red bg-tc-red bg-opacity-5">
          <StartOfTheSchool />
        </div>
      </div>
    </section>
  )
}
