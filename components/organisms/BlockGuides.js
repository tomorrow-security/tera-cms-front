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
  <div className={`flex ${reverse && 'flex-row-reverse lg:flex-row'} items-center`}>
      <div>
          <img
              className="
                  w-96
                  rounded-full 
                  border-4 
                  border-solid 
                  border-tc-red 
                  border-opacity-75"
              src={imageUrl}
              alt="Guide figure" loading="lazy"
          />
      </div>
      <div className={`${reverse ? 'mr-8 lg:mr-0 lg:ml-8' : 'ml-8'}`}>
          <div className="text-4xl text-center lg:text-left">{name}</div>
          <p className="mt-4 text-justify">{description}</p>
      </div>
  </div>
)

export default function BlockGuides() {
  return (
    <section id="guides" className="py-10 md:py-20 bg-tc-blue">
      <div className="md:container md:mx-auto">
        <BlockTitle title="Nos guides" />
        <div className="mx-2 grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
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
