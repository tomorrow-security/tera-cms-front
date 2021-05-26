// import React, { useState } from 'react'

import BlockTitle from '../atoms/BlockTitle'
// import Cta from '../atoms/Cta'
import IconComputerGraduate from '../atoms/IconComputerGraduate'
import IconBulb from '../atoms/IconBulb'
import IconPhonebook from '../atoms/IconPhonebook'
import IconPlacementTest from '../atoms/IconPlacementTest'
import IconMagnifyingGlass from '../atoms/IconMagnifyingGlass'
import IconHandShake from '../atoms/IconHandShake'

const steps = [
    {
        description: 'Soumets ton dossier en ligne',
        backgroundImage: 'etape1.png',
        icon: <IconBulb />,
        stage: 1,
    },
    {
        description: "Fixe un rendez-vous téléphonique avec l'un de nos guides",
        backgroundImage: 'etape2.png',
        icon: <IconPhonebook />,
        stage: 2,
    },
    {
        description: 'Passes gratuitement le test de positionnement',
        backgroundImage: 'etape3.png',
        icon: <IconPlacementTest />,
        stage: 3,
    },
    {
        description: 'Reçois ta réponse sous 48 heures',
        backgroundImage: 'etape4.png',
        icon: <IconMagnifyingGlass />,
        stage: 4,
    },
    {
        description: 'Finalises ton inscription définitive !',
        backgroundImage: 'etape5.png',
        icon: < IconHandShake />,
        stage: 5,
    },
]

const Step = ({ description, image, icon, stage }) => {
    const oddStep = stage % 2 !== 0
    return (
        <div className="border-t border-tc-red md:pt-4 md:w-1/5">
            <div
                style={{ backgroundImage: `url('${image}')` }}
                className="z-0 w-full h-20 my-2 bg-center bg-no-repeat bg-contain md:h-full md:mx-2">
                <div className={`flex flex-nowrap justify-around items-center
                ${oddStep ? 'flex-row-reverse text-left' : 'flex-row text-right'}
                md:flex-col-reverse md:text-center bg-white bg-opacity-80 w-full h-full z-10`}>
                    <div className="z-20 w-12 md:w-8 md:mt-2 text-tc-blue">{icon}</div>
                    <div className="z-20 w-2/3 mx-3 md:mx-1 md:w-full" >{description}</div>
                </div>
            </div>
        </div>
    )
}


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
    //                 <div className="flex justify-center">
                            {/* // TODO ajouter hover et visited */}
    //                     <a
    //                         href="https://www.moncompteformation.gouv.fr/espace-public/financer-sa-formation"
    //                         className="p-2 my-8 font-semibold text-center text-white rounded-t md:text-xl // bg-tc-blue hover:bg-tc-red rounded-b-xl">
    //                         Comment financer ma formation ?
    //                     </a>
    //                 </div>
    //             </>
    //         )
    //     }

        return (
            <>
                <div className="flex flex-row items-center my-2">
                    <div className="w-5 h-5 mr-4 transform rotate-45 bg-tc-red"></div>
                    <h2 className="text-lg font-bold text-tc-blue sm:text-xl xl:text-2xl">
                        Mon parcours en alternance
                    </h2>
                </div>
                <div className="py-2 font-bold">
                    Tes 3 années, en alternance, te coûteront 0 € chacune.
                </div>
                <div className="py-2">
                    <span className="font-bold">
                    En effet, c&apos;est ton entreprise qui prendra en charge le coût de ces années.&nbsp;
                        Tu seras en plus rémunéré(e) mensuellement !
                    </span>
                </div>
                <div className="py-2">
                    Au total, tes études ne te coûteront rien, et tu démarreras ta carrière sans dette !
                </div>
                <div className="flex justify-center my-2">
                     {/* //TODO ajouter hover et visited  */}
                    <a
                        href="https://www.alternance.emploi.gouv.fr/portail_alternance/"
                        className="p-2 mt-8 font-semibold text-center text-white rounded-t md:text-xl bg-tc-blue rounded-b-xl">
                            Comment trouver une entreprise ?
                    </a>
                </div>
            </>
        )
    }

    return (
        <section id="joinus" className="py-10 md:py-20">
            <div className="md:container md:mx-auto">
                <BlockTitle
                    title="Rejoins-nous !"
                    iconPicture={{ backgroundImage: "url('main-ok.png')" }} />
                <div className="mx-2">
                    <div className="md:flex md:flex-row md:flex-nowrap md:justify-center md:content-center md:items-center">
                        <div className="md:w-1/2">
                            <div className="mb-4 text-xl font-bold text-center">Tarifs et financements</div>
                            {/* <div className="text-center">Je souhaite rejoindre Tera Campus en :</div> */}
                            <div className="flex items-center justify-center my-4">
                                {/* <div className="mr-2">1ère année</div>
                                <InputToggle checked={!fullTraining} onClick={() => setfullTraining(!fullTraining)} />
                                <div className="ml-2">3ème année</div> */}
                            </div>
                            <div className="p-4">
                                { displayPricing() }
                            </div>
                        </div>
                        <div className="border rounded md:w-1/2 bg-tc-blue-light">
                            <div className="p-2 text-lg font-bold text-center text-white rounded-t bg-tc-blue">
                                Découvre l&apos;alternance
                                {/* dès la 3ème année */}
                            </div>
                            <div className="p-4 text-sm sm:text-base">
                                <p className="my-1">
                                    Chez Tera Campus, tu seras en moyenne 4 jours par semaine en entreprise. Cela va te
                                    permettre d&apos;acquérir de nombreuses compétences et de mettre en application ton
                                    apprentissage dans un environnement professionnel.
                                </p>
                                <p className="my-1">
                                    Tes frais de scolarité seront intégralement pris en charge grâce à ton contrat
                                    d&apos;alternance. En tant que salarié, tu auras une rémunération basée sur un
                                    pourcentage du SMIC en fonction de ton âge.
                                </p>
                                <p className="my-1">
                                    Bien évidemment Tera Campus va t&apos;accompagner et t&apos;aider dans ta recherche
                                    d&apos;entreprise d&apos;accueil grâce à son réseau établi depuis plusieurs années.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-12">
                        <div className="flex flex-row items-center justify-center mb-2 flex-nowrap md:mb-4">
                            <div className="w-12 h-12 text-tc-blue">
                                <IconComputerGraduate />
                            </div>
                            <div className="text-xl font-bold text-center md:text-2xl xl:text-3xl text-tc-red">
                                &Eacute;tapes d&apos;inscription
                            </div>
                        </div>
                        <div className="md:flex md:flex-row md:justify-center md:mt-4 md:mb-8">
                            {steps.map(step => (
                                <Step key={step.index}
                                    description={step.description}
                                    icon={step.icon}
                                    image={step.backgroundImage}
                                    stage={step.stage} />
                            ))
                            }
                        </div>
                        {/* // TODO decommenter Cta quand routage ok */}
                        {/* <Cta /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
