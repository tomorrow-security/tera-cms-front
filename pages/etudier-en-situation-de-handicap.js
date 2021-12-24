import { AcademicCapIcon } from "@heroicons/react/outline"
import Head from "next/head"
import Block from "../components/atoms/Block"

const pageTitle = "Étudier en situation de handicap - Tera Campus"
const pageDescription = "Étudier en situation de handicap chez Tera Campus"
const pageUrl = "https://tera-campus.com/etudier-en-situation-de-handicap"

export default function Handicap() {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={pageDescription} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:description" content={pageDescription} />
			</Head>

			<main>

				<img src="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/handicap-studies_ywjxcz" className="w-full h-48 md:h-96 object-cover object-center" />

				<Block>
					<h1 className="mb-10 text-center text-3xl md:text-5xl font-bold">Étudier en situation de handicap chez Tera Campus</h1>
					<p className="mb-10 text-justify">
					  Tera Campus mène une politique d'égalité des chances, et souhaite favoriser l'accès aux personnes en situation de handicap. Toutes
						les parties prenantes de Tera Campus travaillent jour après jour afin d'offrir des solutions pertinentes, et un confort de travail égalitaire pour tous.
					</p>
					<div className="mb-10">
						<div className="font-bold text-xl">
							<AcademicCapIcon className="inline -ml-1 mr-2 h-8 text-red-500" />
							<span>Si vous êtes en situation de handicap temporaire ou permanent, notre référant handicap est à votre disposition pour :</span>
						</div>
						<ul className="my-2 list-disc list-inside">
							<li>Vous accompagner dans toutes vos démarches, qu'elles soient internes ou externes (Agefiph, MDPH, etc …)</li>
							<li>Servir d'interface avec les différents services de l'école</li>
							<li>Vous proposer des solutions spécifiques et des aménagements techniques</li>
							<li>Résoudre vos problèmes d'accessibilité</li>
							<li>Accompagner au mieux et de façon personnalisée pour suivre la formation Tera Campus et passer les examens</li>
						</ul>
						<p>Notre référent handicap sera votre interlocuteur privilégié, et vous assurera un suivi adapté du début jusqu'à la fin de votre formation.</p>
					</div>
					<div className="">
						<div className="font-bold text-xl">
							<AcademicCapIcon className="inline -ml-1 mr-2 h-8 text-red-500" />
							<span>Comment se passe l'admission pour le public en situation de handicap ?</span>
						</div>
						<ul className="my-2 list-disc list-inside">
							<li>Envoyez un e-mail à <a href="mailto:handicap@tera-campus.com" className="underline text-blue-500">handicap@tera-campus.com</a> en expliquant votre situation</li>
							<li>Notre référent reviendra vers vous pour fixer un rendez-vous afin d'étudier en détail vos possibilités d'intégration</li>
							<li>A l'issue de cet entretien, vous aurez tous les éléments nécessaires à votre éventuelle admission au sein de notre école</li>
						</ul>
						<p>Pour toute autre question n'hésitez pas à nous contacter via : <a href="mailto:handicap@tera-campus.com" className="underline text-blue-500">handicap@tera-campus.com</a></p>
					</div>
				</Block>
			
			</main>
		</>
	)
}
