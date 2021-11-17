import SubTitle from "../atoms/SubTitle"

const guides = [
  {
    name: "Valérian",
    description:
      "\"Après plus de 10 ans à accompagner des étudiants et des professionnels dans \
          le domaine de l'éducation, il était évident pour moi de fonder une structure \
          d'éducation répondant aux besoins actuels des entreprises et de la société.\"",
    imageUrl: "/picture-valerian.jpeg",
  },
  {
    name: "Brice",
    description:
      '"Je me lance dans cette aventure pour faire profiter de mon expérience professionnelle \
          internationale à des étudiants passionnés en les aidant à démarrer leur carrière dans la tech et \
          à devenir des experts reconnus dans ce domaine."',
    imageUrl: "/picture-brice.jpeg",
  },
]

const Guide = ({ name, description, imageUrl, reverse }) => (
  <div
    className={`md:flex ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } md:justify-center md:items-center lg:py-8 my-4`}
  >
    <div className="border-2 rounded-full borde-solid border-tc-blue">
      <div className="border-2 border-solid rounded-full lg:border-4 border-tc-red">
        <img
          className="border-2 border-opacity-50 border-solid rounded-full w-52 lg:w-auto lg:h-full border-tc-blue"
          src={imageUrl}
          alt="Guide figure"
          loading="lazy"
        />
      </div>
    </div>
    <div
      className={` flex flex-col ${reverse ? "md:mr-8" : "md:ml-8"} lg:w-2/3`}
    >
      <div
        className={`text-center ${
          reverse ? "lg:text-right" : "lg:text-left"
        } text-4xl lg:font-bold`}
      >
        {name}
      </div>
      <p className={`mt-4 ${reverse ? "lg:text-right" : "lg:text-left"}`}>
        {description}
      </p>
    </div>
  </div>
)

export default function BlockGuides() {
  return (
    <section id="guides" className="py-5">
      <div className="mx-4">
        <SubTitle
          title="Les guides"
          iconPicture={{ backgroundImage: "url('panneaux-direction.png')" }}
        />
        <div className="mx-10 lg:py-8 lg:divide-y-4 lg:divide-tc-blue lg:divide-double lg:w-6/7">
          {guides.map((guide, index) => (
            <Guide
              key={`guide-${index}`}
              name={guide.name}
              description={guide.description}
              imageUrl={guide.imageUrl}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
