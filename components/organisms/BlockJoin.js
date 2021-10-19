// import React, { useState } from 'react'
import BlockTitle from "../atoms/BlockTitle"
import ExternalLink from "../molecules/ExternalLink"

import Registration from "../molecules/Registration"

export default function BlockJoin() {
  // const [fullTraining, setfullTraining] = useState(true)

  const displayPricing = () => {
    //     if (fullTraining) {
    //         return (
    //             <>
    //                 <div className="flex flex-row items-center my-2">
    //                     <div className="w-5 h-5 mr-4 transform rotate-45 bg-tc-red"></div>
    //                     <h2 className="text-lg font-bold text-tc-blue sm:text-xl xl:text-2xl">
    //                         Mon parcours en initiale
    //                     </h2>
    //                 </div>
    //                 <div className="py-2 font-bold">
    //                     Ta première et ta deuxième année en formation initiale te coûteront 6000 € chacune.
    //                 </div>
    //                 <div className="py-2">
    //                     Les années suivantes, en alternance, te coûteront 0 € chacune.
    //                 </div>
    //                 <div className="py-2">
    //                     En effet, c&apos;est ton entreprise qui prendra en charge le coût de ces années.&nbsp;
    //                     Tu seras en plus rémunéré(e) mensuellement !
    //                 </div>
    //                 <div className="py-2">
    //                     Au final, le coût de tes études sera amorti grâce à la rémunération de ton alternance !
    //                 </div>
    //                  <ExternalLink
    //                      title="Comment financer ma formation ?"
    //                      url="https://www.moncompteformation.gouv.fr/espace-public/financer-sa-formation"
    // aria="site gouvernemental du financement des formations"
    // />
    //              </>
    //          )
    //      }

    return (
      <>
        <div className="flex flex-row items-center my-2">
          <div className="w-5 h-5 mr-4 transform rotate-45 bg-tc-red"></div>
          <div className="w-5/6">
            <h2 className="text-lg font-bold text-tc-blue sm:text-xl xl:text-2xl">
              Mon parcours en alternance
            </h2>
          </div>
        </div>
        <div className="w-5/6 ml-8">
          <div className="py-2 font-bold">
            Tes 3 années de formation en alternance seront entièrement financées
            par ton entreprise ! Ton reste à charge sera donc de 0 euro.
          </div>
          <div className="py-2">
            <span className="font-bold">
              Tu seras en plus rémunéré(e) mensuellement pour ton travail et en
              fonction de ta situation
            </span>
          </div>
          <div className="py-2">
            Le choix du télé-présentiel, couplé au financement de ta formation
            par l'entreprise, te permettra donc d'entamer ta carrière
            sereinement, et sans aucune dettes !
          </div>
        </div>
        <ExternalLink
          title="Comment trouver une entreprise ?"
          url="https://www.alternance.emploi.gouv.fr/portail_alternance/"
          aria="site gouvernemental de l'alternance"
        />
      </>
    )
  }

  return (
    <section id="joinus" className="py-10 md:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Rejoins-nous !"
          iconPicture={{ backgroundImage: "url('main-ok.png')" }}
        />
        <div className="mx-2">
          <div className="md:flex md:flex-row md:flex-nowrap md:justify-center md:content-center md:items-center">
            <div className="md:w-1/2">
              <div className="mb-4 text-xl font-bold text-center">
                Tarifs et financements
              </div>
              {/* <div className="text-center">Je souhaite rejoindre Tera Campus en :</div> */}
              <div className="flex items-center justify-center my-4">
                {/* <div className="mr-2">1ère année</div>
                                <InputToggle checked={!fullTraining} onClick={() => setfullTraining(!fullTraining)} />
                                <div className="ml-2">3ème année</div> */}
              </div>
              <div className="p-4">{displayPricing()}</div>
            </div>
            <div className="mx-4 bg-opacity-25 border rounded md:w-1/2 bg-tc-blue">
              <div className="p-2 text-lg font-bold text-center text-white rounded-t bg-tc-blue">
                Découvre l&apos;alternance
                {/* dès la 3ème année */}
              </div>
              <div className="p-4 text-sm sm:text-base">
                <p className="my-1">
                  Chez Tera Campus, ta semaine type sera en moyenne de 4 jours
                  en entreprise pour un en formation. Cela va te permettre
                  d&apos;acquérir de nombreuses compétences et de mettre en
                  application ton apprentissage dans un environnement
                  professionnel.
                </p>
                <p className="my-1">
                  Tes frais de scolarité seront intégralement pris en charge
                  grâce à ton contrat d&apos;alternance. En tant que salarié, tu
                  percevras une rémunération basée sur un pourcentage du SMIC en
                  fonction de ton âge.
                </p>
                <p className="my-1">
                  Bien évidemment, Tera Campus va t&apos;accompagner et
                  t&apos;aider dans ta recherche d&apos;entreprise
                  d&apos;accueil grâce à son réseau établi depuis plusieurs
                  années.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Registration />
      </div>
    </section>
  )
}
