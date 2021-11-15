import SubTitle from "../atoms/SubTitle"

export default function BlockApproach() {
  return (
    <section id="approach" className="py-5">
      <div className="mx-4">
        <SubTitle
          title="Les plus de Tera Campus"
          iconPicture={{ backgroundImage: "url('plus.png')" }}
        />
        <div className="grid w-full xl:w-3/4 xl:mx-auto grid-programPlusRows grid-programPlusColumns gap-x-6">
          <h2 className="box-border col-start-2 row-start-1 py-2 text-xl font-medium">
            Le monde professionnel
          </h2>
          <div className="box-border flex items-center justify-center w-12 h-12 col-start-1 row-start-3">
            <p
              className="w-full h-full text-center
                              text-xl text-tc-red font-bold p-1.5
                              border-2 border-tc-red rounded-full"
            >
              1
            </p>
          </div>
          <p className="w-full col-start-2 row-span-3 row-start-2 px-2 py-4 text-white rounded bg-tc-blue">
            En complément de cet apprentissage technique, Tera Campus prépare
            tous ses étudiants à s&apos;adapter au monde professionnel
            d&apos;aujourd&apos;hui, pour pouvoir évoluer tout au long de sa
            carrière grâce aux mises en situation pour améliorer son équilibre
            de vie!
          </p>
          <div className="w-1/2 col-start-1 row-span-3 row-start-4 border-r-2 border-tc-red"></div>
          <h2 className="col-start-2 row-start-5 py-2 text-xl font-medium">
            English of course
          </h2>
          <div className="box-border flex items-center justify-center w-12 h-12 col-start-1 row-start-7">
            <p className="w-full h-full text-center text-xl text-tc-red font-bold p-1.5 border-2 border-tc-red rounded-full">
              2
            </p>
          </div>
          <p className="box-border w-full col-start-2 row-span-3 row-start-6 px-2 py-4 text-white rounded bg-tc-blue">
            Le programme Tera Campus est 100% en anglais à partir de la 4ème
            année.&nbsp; En effet, nous pensons que la langue anglaise est
            indispensable&nbsp; à maîtriser pour s&apos;adapter à tout
            environnement international.
          </p>
          <div className="flex flex-row w-1/2 col-start-1 row-span-3 border-r-2 row-start-8 flex-nowrap border-tc-red"></div>
          <h2 className="col-start-2 py-2 text-xl font-medium row-start-9">
            Les outils collaboratifs
          </h2>
          <div className="box-border flex items-center justify-center w-12 h-12 col-start-1 row-start-11">
            <p className="w-full h-full text-center text-xl text-tc-red font-bold p-1.5 border-2 border-tc-red rounded-full">
              3
            </p>
          </div>
          <p className="w-full col-start-2 row-span-3 px-2 py-4 text-white rounded row-start-10 bg-tc-blue">
            Et enfin,&nbsp; le monde d&apos;aujourd&apos;hui nécessite
            d&apos;adapter notre façon de travailler,&nbsp; et de
            collaborer.&nbsp; Tera Campus souhaite mettre un point
            d&apos;honneur à&nbsp; intégrer au sein de la formation,&nbsp;
            l&apos;utilisation des outils de collaboration professionnels&nbsp;
            permettant un travail commun en toute simplicité, même en distanciel
            !
          </p>
        </div>
      </div>
    </section>
  )
}
