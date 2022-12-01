import Block from "../../components/atoms/Block"
import Stepper from "../../components/organisms/Stepper"

export default function EnrolmentWelcome() {

  return (
    <main>
      <Stepper />

      <Block darken={false}>
        <div className="text-xl md:text-4xl font-bold">
          Merci pour votre pré-inscription chez Tera Campus !
        </div>
        <p className="mt-8 text-lg md:text-2xl">
          Next step ?
        </p>
        <p className="mt-8">
          Rendez-vous dans votre boîte e-mail pour passer le test de positionnement.<br />
          Ce test sous forme de QCM comporte 100 questions sur plusieurs domaines de l'IT.
        </p>
        <p className="mt-8">
          Objectif ? Identifier vos points forts et vos lacunes pour vous assurer le meilleur accompagnement.
        </p>
        <img
          src="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/AdobeStock_233254061-removebg-preview_sje83s.png"
          alt="Happuy dude"
          className="float-right w-1/2 md:w-1/3 lg:w-1/4"
        />
        <p className="mt-8">
          N'oubliez pas c'est un test de positionnement et non d'admission donc TAKE IT EASY !
        </p>
      </Block>
    
    </main>
  )
}
