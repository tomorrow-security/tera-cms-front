import Image from "next/image"

import SubTitle from "../atoms/SubTitle"
// import LittleTitle from "../atoms/LittleTitle"

export default function BlockMethod() {
  return (
    <section id="method" className="pt-10 md:pt-20">
      <div className="md:container md:mx-auto">
        <SubTitle
          title="Les méthodes pédagogiques"
          iconPicture={{ backgroundImage: "url('method.png')" }}
        />
        <div className="flex flex-col">
          <div className="flex-1 mx-4">
            <div className="flex flex-col flex-nowrap md:flex-row-reverse md:justify-around md:items-center md:mx-auto md:p-2">
              <div className="flex flex-col p-2 m-4 space-y-4 bg-opacity-25 rounded xl:space-y-5 flex-nowrap bg-tc-blue md:w-1/2">
                <p>
                  Cours théoriques et exercices d'application en face à face
                  pédagogique en télé-présentiel, dispensés par des consultants
                  qui exercent majoritairement en entreprise{" "}
                </p>
                <p>
                  Projets collaboratifs, supervisés par l'équipe pédagogique{" "}
                </p>
                <p>
                  Périodes d'immersion technologique (bivouacs, projets,
                  hackathons, ...)
                </p>
                <p>Périodes professionnelles en entreprises (alternance)</p>
              </div>
              <div className="h-auto md:w-1/2 xl:m-4">
                <Image
                  src="/entraide-montagne.jpg"
                  alt="deux personnes qui s'aide à gravir une montagne"
                  width={1152}
                  height={768}
                  className="object-cover object-center w-full h-full lg:inline-flex"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
