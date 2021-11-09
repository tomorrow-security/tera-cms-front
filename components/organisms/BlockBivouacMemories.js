import SubTitle from "../atoms/SubTitle"
import LittleTitle from "../atoms/LittleTitle"
import Paragraphe from "../atoms/Paragraphe"

export default function BlockBivouacMemories() {
  return (
    <section id="bivouacmemories" className="py-5">
      <div className="md:container md:mx-auto">
        <SubTitle
          title="Souvenir des bivouacs"
          iconPicture={{ backgroundImage: "url('photo.png')" }}
        />
        <div className="flex flex-col lg:flex-row">
          <div className="mx-4 lg:my-12">
            <LittleTitle>
              Souvenirs du premier Bivouac octobre 2021 Ardèche
            </LittleTitle>
            <Paragraphe>
              Deux semaines en présentiel en Ardèche dans un magnifique Gîte “La
              Sardèche”.
            </Paragraphe>
            <Paragraphe>
              Lancement du Projet “Fil Rouge” par groupe et projet “Escape
              room”.
            </Paragraphe>
          </div>
          {/* //TODO faire un diaporama de 4 photos */}
          <div
            className="w-full h-64 bg-center bg-cover lg:w-1/2 lg:h-auto"
            style={{ backgroundImage: "url('TC3-22-ardeche.jpg')" }}
          ></div>
        </div>
      </div>
    </section>
  )
}
