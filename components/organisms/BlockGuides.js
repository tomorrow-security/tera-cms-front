import BlockTitle from '../atoms/BlockTitle'

const guides = [
  {
      name: 'Valérian',
      description: '"Après plus de 10 ans à accompagner des étudiants et des professionnels dans \
          le domaine de l\'éducation, il était évident pour moi de fonder une structure \
          d\'éducation répondant aux besoins actuels des entreprises et de la société."',
      imageUrl: '/picture-valerian.jpeg',
  },
  {
      name: 'Brice',
      description: '"Je me lance dans cette aventure pour faire profiter de mon expérience professionnelle \
          internationale à des étudiants passionnés en les aidant à démarrer leur carrière dans la tech et \
          à devenir des experts reconnus dans ce domaine."',
      imageUrl: '/picture-brice.jpeg',
  },
]

const Guide = ({ name, description, imageUrl, reverse }) => (
  <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row' } justify-center items-center mx-4 lg:py-8`}>
        <div className="rounded-full border-1 lg:border-2 borde-solid border-tc-blue">
            <div className="border-2 border-solid rounded-full lg:border-4 border-tc-red">
                <img
                    className="border-opacity-50 border-solid rounded-full w-96 lg:w-auto lg:h-full border-1 lg:border-2 border-tc-blue"
                    src={imageUrl}
                    alt="Guide figure" loading="lazy"
                />
            </div>
        </div>
        <div className={` flex flex-col ${reverse ? 'mr-8' : 'ml-8'}  lg:w-2/3`}>
            <div className={`text-center ${reverse ? 'lg:text-right' : 'lg:text-left'} text-4xl lg:font-bold`}>
                {name}
            </div>
            <p className={`mt-4 ${reverse ? 'lg:text-right' : 'lg:text-left'}`}>
                {description}
            </p>
        </div>
    </div>
)

export default function BlockGuides() {
  return (
    <section id="guides" className="py-10 md:py-20">
        <div className="md:container md:mx-auto">
            <BlockTitle title="Nos guides"  iconPicture={{ backgroundImage: "url('panneaux-direction.png')" }}/>
            <div className="mx-2 lg:px-8 lg:py-8 lg:divide-y-4 lg:divide-tc-blue lg:divide-double lg:w-6/7 lg:mx-auto">
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
