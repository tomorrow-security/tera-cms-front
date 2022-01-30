import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"
import "swiper/css"

import Button from "../../components/atoms/Button"

const slides = [
	{
		title: "La formation hybride ce n'est pas le futur, c'est le présent !",
		subtitle: "Prenez votre carrière en main et formez-vous aux métiers du numérique.",
		body: "Formations certifiantes BAC+3 et BAC+5.",
		btnLabel: "Nos formations",
		btnUrl: "#",
		image: "tera-campeur_mf59vj",
	},
	{
		title: "Venez nous rencontrer au salon des études supérieures et de l'alternance",
		subtitle: "Le samedi 05 février à Reims",
		body: "Découvrez notre école et nos formations hybrides avec l'un de nos Guides.",
		btnLabel: "Inscription gratuite",
		btnUrl: "https://www.studyrama.com/salons/salon-studyrama-des-etudes-superieures-et-de-l-140",
		image: "centre-congres-reims_uibcst",
	},
]

const Slide = ({title, subtitle, body, btnLabel, btnUrl, additional, image}) => (
	<div className="flex md:gap-x-8">
		<div className="w-full md:w-1/2 h-96 p-4 flex bg-white rounded">
			<div className="p-4 flex-grow border">
				{ title ? <div className="mb-4 text-xl md:text-4xl font-bold">{title}</div> : null }
				{ subtitle ? <div className="mb-4 md:text-xl font-semibold">{subtitle}</div> : null }
				{ body ? <div className="mb-4">{body}</div> : null }
				{ btnLabel && btnUrl ? <div className="mb-4 w-full md:w-max"><Link href={btnUrl}><a><Button label={btnLabel} fullWidth /></a></Link></div> : null }
				{ additional ? <div className="text-sm font-bold">{additional}</div> : null }
			</div>
		</div>
		<div
			className="hidden md:block w-1/2 bg-center bg-no-repeat bg-cover rounded"
			style={{ backgroundImage: `url('https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/${image}')` }}
		/>
	</div>
)

const Slider = () => {
	SwiperCore.use([Autoplay])

	return (
		<div className="rounded-lg">
			<Swiper cssMode={true} centeredSlides={true} autoplay={{delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true}}>
				{
					slides.map((slide, index) => (
						<SwiperSlide key={`slide${index}`}>
							<Slide
								title={slide.title}
								subtitle={slide.subtitle}
								body={slide.body}
								btnLabel={slide.btnLabel}
								btnUrl={slide.btnUrl}
								additional={slide.additional}
								image={slide.image}
							/>
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	)
}

export default function HeroWithSlider() {
	return (
		<section className="py-4 md:py-10 lg:py-16 overflow-hidden bg-tc-blue">
			<div className="container mx-auto px-4">
				<Slider />
			</div>
		</section>
	)
}
