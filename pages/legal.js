import Head from "next/head"

const pageTitle = "Mentions légales - Tera Campus"
const pageDescription = "Mentions légales"
const pageUrl = "https://tera-campus.com/legal"

export default function Legal() {
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
				<div className="py-10 mx-4 md:container md:mx-auto md:py-20">
					<h1 className="mb-10 text-3xl font-bold text-center md:text-6xl">
						Mentions légales
					</h1>
					<h2 className="my-8 text-2xl md:text-3xl">1. Identification</h2>
					<p className="text-justify">
						Conformément aux dispositions de l&apos;article 6-III 1e de la loi
						numéro 2004-575 du 21 juin 2004 pour la confiance dans
						l&apos;économie numérique, nous vous informons que :
					</p>
					<ul className="mx-4 my-2 list-disc list-inside">
						<li>
							le présent site est la propriété de Tomorrow Security, dont le
							siège social est sis 16 rue des Mirabelliers, 57140 La Maxe.
							Tomorrow Security est une Société par Actions Simplifiée au
							capital de 8 000€, inscrite au Registre du Commerce et des Société
							de Metz sous le numéro 842 571 549 ;
						</li>
						<li>
							le directeur de la publication du site web est Valérian CASTEL, en
							qualité de représentant légal de Tomorrow Security ;
						</li>
						<li>
							l&apos;hébergement du site est assuré par SCALEWAY SAS BP 438
							75366 PARIS CEDEX 08 FRANCE.
						</li>
					</ul>
					<h2 className="my-8 text-2xl md:text-3xl">2. Déclaration CNIL</h2>
					<p className="text-justify">
						Les informations collectées sur Tera Campus sont utilisées
						uniquement dans le cadre légal prévu en France pour le respect de la
						vie privée. La société Tomorrow Security est le destinataire des
						données. Conformément à la loi « informatique et libertés » du 6
						janvier 1978, vous bénéficiez d&apos;un droit d&apos;accès, de
						rectification, de suppression des informations qui vous concernent,
						que vous pouvez exercer en vous adressant à{" "}
						<a href="mailto:dpo@tomorrow-security.com">
							dpo@tomorrow-security.com
						</a>
						.
					</p>
					<br />
					<p>
						Plus d&apos;informations sur :{" "}
						<a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
							https://www.cnil.fr
						</a>
						.
					</p>
					<h2 className="my-8 text-2xl md:text-3xl">3. Propriété</h2>
					<p className="text-justify">
						L&apos;ensemble de ce site est régi par la législation française sur
						le droit d&apos;auteur et la propriété intellectuelle. Le contenu du
						site, incluant, de façon non limitative, les images, graphismes,
						textes, vidéos, logos, et icônes sont la propriété exclusive de la
						société Tomorrow Security à l&apos;exception des marques, logos ou
						contenus appartenant à d&apos;autres sociétés partenaires ou
						auteurs.
					</p>
					<br />
					<p>
						La reproduction, la représentation, le transfert, la distribution,
						ou l&apos;enregistrement de tout ou partie de ces éléments est
						formellement interdite sans l&apos;autorisation expresse de la
						société Tomorrow Security.
					</p>
					<h2 className="my-8 text-2xl md:text-3xl">4. Responsabilité</h2>
					<p className="text-justify">
						Tera Campus comporte des informations mises à disposition par des
						personnes physiques et/ou morales externes ou encore des liens
						hypertextes vers d&apos;autres sites Internet ou blogs qui
						n&apos;ont pas été développés par la société Tomorrow Security. Le
						contenu mis à disposition sur Tera Campus est fourni à titre
						informatif. L&apos;existence d&apos;un lien de ce site vers un autre
						site Internet ne constitue pas une validation de ce site Internet ou
						de son contenu. Il appartient à l&apos;internaute d&apos;utiliser
						ces informations avec discernement et esprit critique. La
						responsabilité de Tomorrow Security ne saurait être engagée du fait
						des informations, des opinions et des recommandations formulées par
						des tiers.
					</p>
					<br />
					<p>
						L&apos;utilisation du site se fait à vos propres risques. Bien que
						Tomorrow Security s&apos;efforce d&apos;assurer au mieux
						l&apos;exactitude des informations diffusées, Tomorrow Security ne
						peut garantir l&apos;exactitude, la véracité ou la complétude des
						informations postées sur le site et/ou à propos des commentaires que
						ces informations peuvent susciter.
					</p>
					<p>
						Par conséquent, la société Tomorrow Security exclut toute
						responsabilité pour n&apos;importe quel préjudice causé directement
						et/ou indirectement, de quelque façon que ce soit, du fait de
						l&apos;utilisation du site. Notamment, Tomorrow Security ne sera en
						aucun cas responsable d&apos;un quelconque préjudice, causé par :
					</p>
					<ul className="mx-4 my-2 list-disc list-inside">
						<li>des faits et actions des tiers ;</li>
						<li>l&apos;impossibilité d&apos;utiliser le site ;</li>
						<li>
							l&apos;utilisation irrégulière du site et/ou des systèmes
							informatiques de Tera Campus par un tiers.
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}
