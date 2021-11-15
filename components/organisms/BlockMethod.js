import Image from "next/image"

import Eval from "../molecules/Eval"
import SubTitle from "../atoms/SubTitle"
import LittleTitle from "../atoms/LittleTitle"
import ListUl from "../atoms/ListUl"

export default function BlockMethod() {
  return (
    <section id="method" className="py-5">
      <div className="mx-4">
        <SubTitle
          title="Les méthodes pédagogiques"
          iconPicture={{ backgroundImage: "url('method.png')" }}
        />
        <div className="flex flex-col">
          <div className="flex-1">
            <div className="flex flex-col flex-nowrap md:flex-row-reverse md:justify-around md:items-center md:mx-auto md:p-2">
              <div className="flex flex-col px-2 m-4 flex-nowrap md:w-1/2">
                <LittleTitle>
                  Comment se déroule une année chez Tera Campus ?
                </LittleTitle>
                <ListUl>
                  <li>
                    Cours théoriques et exercices d'application en face à face
                    pédagogique en télé-présentiel, dispensés par des
                    consultants qui exercent majoritairement en entreprise
                  </li>
                  <li>
                    Projets collaboratifs, supervisés par l'équipe pédagogique
                  </li>
                  <li>
                    Périodes d'immersion technologique (bivouacs, projets,
                    hackathons, ...)
                  </li>
                  <li>Périodes professionnelles en entreprises (alternance)</li>
                </ListUl>
                <Eval />
              </div>
              <div className="h-auto md:w-1/2">
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
