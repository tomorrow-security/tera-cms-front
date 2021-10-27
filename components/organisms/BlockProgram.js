import Image from "next/image"

import BlockTitle from "../organisms/BlockTitle"
import Program from "../molecules/Program"

export default function BlockProgramme() {
  return (
    <section id="program" className="py-5">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="BAC+3 Administrateur (rice) des systèmes d’Information"
          iconPicture={{ backgroundImage: "url('programme.png')" }}
        />
        <section className="flex flex-col flex-nowrap md:flex-row md:justify-around md:items-center xl:w-9/12 xl:mx-auto">
          <div className="flex flex-col p-2 m-4 space-y-4 text-center text-white rounded xl:mr-12 2xl:mr-20 flex-nowrap bg-tc-blue md:w-1/2">
            <p className="text-xl">BAC+3</p>
            <h2 className="text-lg font-bold uppercase">
              Admnistrateur(rice) des systèmes d'information
            </h2>
            <div>
              <p>Titre RNCP de Niveau 6</p>
              <p>
                Formation en alternance : 4 jours par semaine en entreprise, 1
                jour à l'école.
              </p>
            </div>
            <p className="text-sm ">
              Contrat d’apprentissage ou de professionnalisation
            </p>
          </div>
          <div className="h-auto md:w-1/2">
            <Image
              src="/developpeurdevantordi.jpg"
              alt="développeur devant un ordinateur"
              width={1152}
              height={768}
              className="object-cover object-center w-full h-full lg:inline-flex"
            />
          </div>
        </section>
        <Program />
      </div>
    </section>
  )
}
