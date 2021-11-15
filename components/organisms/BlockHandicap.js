import Paragraphe from "../atoms/Paragraphe"
import LittleTitle from "../atoms/LittleTitle"
import ListUl from "../atoms/ListUl"

export default function BlockHandicap() {
  return (
    <section id="handicap" className="py-5">
      <div className="mx-4">
        <Paragraphe>
          Tera Campus mène une politique d’égalité des chances, et souhaite
          favoriser l’accès aux personnes en situation de handicap. Toutes les
          parties prenantes de Tera Campus travaillent jour après jour afin
          d’offrir des solutions pertinentes, et un confort de travail
          égalitaire pour tous.
        </Paragraphe>
        <LittleTitle>
          Si vous êtes en situation d’handicap temporaire ou permanent, notre
          référant handicap est à votre disposition pour :
        </LittleTitle>
        <ListUl>
          <li>
            Vous accompagner dans toutes vos démarches, qu’elles soient internes
            ou externes (Agefipph, MDPH…)
          </li>
          <li>Servir d’interface avec les différents services de l’école</li>
          <li>
            Vous proposer des solutions spécifiques et des aménagements
            techniques
          </li>
          <li>Résoudre vos problèmes d’accessibilité </li>
          <li>
            Accompagner au mieux et de façon personnalisée pour suivre la
            formation Tera Campus et passer les examens
          </li>
        </ListUl>
        <Paragraphe>
          Notre référent handicap sera votre interlocuteur privilégié, et vous
          assurera un suivi adapté du début jusqu’à la fin de votre formation.
        </Paragraphe>
        <LittleTitle>
          Comment se passe l’admission pour le public en situation de hadicap ?
        </LittleTitle>
        <ListUl>
          <li>
            Envoyez un e-mail à&nbsp;
            <a
              href="mailto:handicap@tera-campus.com"
              className="underline hover:text-tc-red"
            >
              handicap@tera-campus .com
            </a>
            &nbsp;en expliquant votre situation
          </li>
          <li>
            Notre référent reviendra vers-vous par téléphone ou par mail pour
            fixer un rendez-vous afin d’étudier en détail vos possibilités
            d’intégration
          </li>
          <li>
            A l’issue de cet entretien, vous aurez tous les éléments nécessaires
            à votre éventuelle admission au sein de notre école
          </li>
        </ListUl>
        <Paragraphe>
          Pour toute autre question n’hésitez pas à nous contacter via :&nbsp;
          <a
            href="mailto:handicap@tera-campus.com"
            className="underline hover:text-tc-red"
          >
            handicap@tera-campus.com
          </a>
        </Paragraphe>
      </div>
    </section>
  )
}
