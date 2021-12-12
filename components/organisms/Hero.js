import Link from "next/link"

import IconLogoBig from "../atoms/IconLogoBig"

export default function Hero() {
	return (
		<section
			id="hero"
			style={{ backgroundImage: "url('https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/tera-campeur_mf59vj')" }}
			className="relative px-4 py-8 w-full bg-center bg-no-repeat bg-cover"
		>
			<div className="flex flex-col justify-between items-center gap-16 md:gap-40 lg:gap-96">
				<div className="w-48 md:w-60 lg:w-80">
					<IconLogoBig />
				</div>
				<Link href="/brochure">
					<a className="group p-4 bg-tc-blue hover:bg-tc-blue-navy rounded-full">
						<div className="flex items-center justify-evenly text-center md:text-2xl text-white font-bold uppercase animate-pulse hover:animate-none transition-colors duration-700">
							<p>Découvrez nos formations hybrides en informatique</p>
							<span className="pl-2 sm:pl-4 md:pl-6 text-2xl sm:text-4xl md:text-5xl">&rarr;</span>
						</div>
					</a>
				</Link>
			</div>
		</section>
	)
}
