import BlockTitle from '../atoms/BlockTitle'

const partners = [
    {
        name: 'Stormshield',
        logoUrl: '/logo-stormshield.svg',
    },
    {
        name: 'Scaleway',
        logoUrl: '/logo-scaleway.svg',
    },
    {
        name: 'Sap',
        logoUrl: '/logo-sap.svg',
    },
    {
        name: 'ENI',
        logoUrl: '/logo-eni.svg',
    },
]
const partners2 = [
    {
        name: 'Microsoft',
        logoUrl: '/logo-microsoft.svg',
    },
    {
        name: 'Github',
        logoUrl: '/logo-github.svg',
    },
    {
        name: 'Atlassian',
        logoUrl: '/logo-atlassian.svg',
    },
    {
        name: 'Zoom',
        logoUrl: '/logo-zoom.svg',
    },
]

const cursus = [
    {
        number: '1',
        exp: 'ère',
        topics: [
            "Système d'exploitation Windows",
            "Système d'exploitation Linux",
            'Algorithmique',
            'Développement Web',
            'Introduction aux bases de données',
            'Introduction au réseau',
            'Introduction au Cloud',
            'Introduction à la cybersécurité',
            'Gestion de projets',
            'Savoir-être et intelligence émotionnelle',
            'Anglais',
        ],
    },
    {
        number: '2',
        exp: 'ème',
        topics: [
            'Administration serveur',
            'Méthodologie de développement',
            "Développement d'applications",
            'Introduction à la Data Science',
            'Administration de base de données',
            'Administration réseau',
            'Administration Cloud',
            'Cybersécurité : Ethical Hacking',
            'Gestion de projets',
            'Savoir-être et intelligence émotionnelle',
            'Anglais',
        ],
    },
    {
        number: '3',
        exp: 'ème',
        topics: [
            'Expertise serveur',
            'Développement mobile',
            'Data science : Intelligence artificielle',
            'Architecture de bases de données',
            'Architecture réseau',
            'Architecture Cloud',
            'Cybersécurité : Defense in Depth',
            'Gestion de projets',
            'Savoir-être et intelligence émotionnelle',
            'Anglais',
        ],
    },
    {
        number: '4',
        exp: 'ème',
        topics: [
            "Systèmes d'exploitation alternatifs",
            'Développement et organisation',
            'Data science : Machine learning',
            'Expertise base de données',
            'Expertise réseau',
            'Automatisation Cloud',
            'DevOps',
            "Sécurité de l'information",
            'Gestion de projets',
            'Savoir-être et intelligence émotionnelle',
            'Anglais',
        ],
    },
    {
        number: '5',
        exp: 'ème',
        topics: [
            "Évolution d'un système d'exploitation",
            'Management du développement',
            'Data Science : Big Data',
            'Base de données : scaling',
            'Architecture et choix technologiques',
            'Création de Cloud',
            'Sécurité et conformité (RGPD, ISO)',
            'Management et économie des entreprises',
            'Anglais',
        ],
    },
]

const axes = [
    'La technique',
    'Les soft skills',
    'La collaboration',
]

const Strong = ({ children }) => <strong className="font-bold text-tc-red">{children}</strong>

const Paragraph = ({ gutterBottom, children }) => (
    <p className={`${gutterBottom && 'mb-4 md:mb-8 py-4 px-2'}`}>{children}</p>
)

export default function BlockProgramme () {
    return (
        <section id="programme" className="py-10 md:py-20">
        <div className="md:container md:mx-auto">
            <BlockTitle title="Notre programme" iconPicture={{ backgroundImage: "url('programme.png')" }} />
            <div className="mx-2">
                <div className="text-lg text-center">
                    <Strong>
                        Le programme Tera Campus s&apos;articule sur trois principaux axes de développement :
                    </Strong>
                </div>
                <ul className="w-full my-12 md:my-14">
                    {
                        axes.map(axe => (
                            <li
                                key={axe.index}
                                className="flex flex-row items-center justify-center w-full my-4 md:my-8">
                                <div className="w-5 h-5 mr-4 transform rotate-45 bg-tc-red"></div>
                                <div className="py-1 text-2xl text-center text-white rounded-t w-52 md:w-1/3 bg-tc-blue rounded-b-xl">
                                    {axe}
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <Paragraph gutterBottom>
                    A travers ses partenaires,&nbsp;
                    Tera Campus veut te donner l&apos;opportunité
                    d&apos;apprendre de tous les acteurs du marché.&nbsp;
                    Notre approche est conceptuelle :&nbsp;
                    <Strong>
                        nous ne nous focalisons pas sur des technologies spécifiques,&nbsp;
                        mais formons nos étudiants à savoir s&apos;adapter à n&apos;importe laquelle.
                    </Strong>
                </Paragraph>
                <Paragraph gutterBottom>
                    Chez Tera Campus,&nbsp;
                    il est possible d&apos;en apprendre plus sur l&apos;écosystème technique européen&nbsp;
                    et nous privilégions les partenaires nationaux lorsque cela est possible.
                </Paragraph>
                <div className="flex flex-wrap items-center justify-center mb-8 md:flex-nowrap md:justify-between">
                    {
                        partners.map(partner => (
                            <div key={partner.name} className="w-5/12 mx-2 mt-2 mb-6 md:w-max">
                                <img
                                    src={partner.logoUrl}
                                    alt={`logo ${partner.name}`}
                                    width={200}
                                    height={100}
                                    loading="lazy"
                                />
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className="flex flex-row items-center max-w-full my-4 md:my-8">
                        <div className="w-5 h-5 ml-5 transform rotate-45 bg-tc-red"></div>
                        <div className="py-1 ml-4 text-xl font-bold md:text-2xl">
                            Les plus de Tera Campus
                        </div>
                    </div>
                    <div className="grid w-full 2xl:w-11/12 2xl:mx-auto grid-programPlusRows grid-programPlusColumns gap-x-6">
                        <h2 className="box-border col-start-2 row-start-1 py-2 text-xl font-medium">
                            Le monde professionnel
                        </h2>
                        <div className= "box-border flex items-center justify-center w-12 h-12 col-start-1 row-start-3">
                            <p className="w-full h-full text-center
                            text-xl text-tc-red font-bold p-1.5
                            border-2 border-tc-red rounded-full">
                                1
                            </p>
                        </div>
                        <p className="w-full col-start-2 row-span-3 row-start-2 px-2 py-4 text-white rounded bg-tc-blue">
                            En complément de cet apprentissage technique, Tera Campus prépare tous ses étudiants à
                            s&apos;adapter au monde professionnel d&apos;aujourd&apos;hui, pour pouvoir évoluer tout
                            au long de sa carrière grâce aux mises en situation pour améliorer son équilibre
                            de vie!
                        </p>
                        <div className="w-1/2 col-start-1 row-span-3 row-start-4 border-r-2 border-tc-red">
                        </div>
                        <h2 className="col-start-2 row-start-5 py-2 text-xl font-medium">
                            English of course
                        </h2>
                        <div className= "box-border flex items-center justify-center w-12 h-12 col-start-1 row-start-7">
                            <p className="w-full h-full text-center
                            text-xl text-tc-red font-bold p-1.5
                            border-2 border-tc-red rounded-full">
                                2
                            </p>
                        </div>
                        <p className="box-border w-full col-start-2 row-span-3 row-start-6 px-2 py-4 text-white rounded bg-tc-blue">
                        Le programme Tera Campus est 100% en anglais à partir de la 4ème année.&nbsp;
                        En effet, nous pensons que la langue anglaise est indispensable&nbsp;
                        à maîtriser pour s&apos;adapter à tout environnement international.
                        </p>
                        <div className="flex flex-row w-1/2 col-start-1 row-span-3 border-r-2 row-start-8 flex-nowrap border-tc-red">
                        </div>
                        <h2 className="col-start-2 py-2 text-xl font-medium row-start-9">
                            Les outils collaboratifs
                        </h2>
                        <div className= "box-border flex items-center justify-center w-12 h-12 col-start-1 row-start-11">
                            <p className="w-full h-full text-center
                            text-xl text-tc-red font-bold p-1.5
                            border-2 border-tc-red rounded-full">
                                3
                            </p>
                        </div>
                        <p className="w-full col-start-2 row-span-3 px-2 py-4 text-white rounded row-start-10 bg-tc-blue">
                            Et enfin,&nbsp;
                            le monde d&apos;aujourd&apos;hui nécessite d&apos;adapter notre façon de travailler,&nbsp;
                            et de collaborer.&nbsp;
                            Tera Campus souhaite mettre un point d&apos;honneur à&nbsp;
                            intégrer au sein de la formation,&nbsp;
                            l&apos;utilisation des outils de collaboration professionnels&nbsp;
                            permettant un travail commun en toute simplicité, même en distanciel !
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center my-8 md:flex-nowrap md:justify-between">
                    {
                        partners2.map(partner => (
                            <div key={partner.name} className="w-5/12 mx-2 mt-2 mb-6 md:w-max">
                                <img
                                    src={partner.logoUrl}
                                    alt={`logo ${partner.name}`}
                                    width={200}
                                    height={100}
                                    loading="lazy"
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {
                        cursus.map(year => (
                            <div key={year.label} className="rounded shadow">
                                <h3 className="p-2 text-2xl font-bold text-center text-white rounded-t bg-tc-red">
                                    {year.number}
                                    <sup>{year.exp}</sup>
                                    &nbsp;année
                                </h3>
                                <ul className="p-2">
                                    {
                                        year.topics.map((topic, index) => (
                                            <li key={`${index}-${topic}`} className="my-2 text-sm">{topic}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}