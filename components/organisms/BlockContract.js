import Traineeship from "../molecules/Traineeship"
import BlockTitle from "../atoms/BlockTitle"
import Professionalization from "../molecules/Professionalization"
import LittleTitle from "../atoms/LittleTitle"
import Paragraphe from "../atoms/Paragraphe"

export default function BlockContract() {
  return (
    <section id="contratc" className="py-5">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Les types de contrats"
          iconPicture={{ backgroundImage: "url('contract.png')" }}
        />
        <div className="mx-4">
          <Traineeship />
          <Professionalization />
          <LittleTitle children="Aides spécifiques" />
          <Paragraphe>
            Des aides spécifiques peuvent également être attribuées aux
            alternants... (APL, l’aide “Mobili jeune”)
          </Paragraphe>
        </div>
      </div>
    </section>
  )
}
