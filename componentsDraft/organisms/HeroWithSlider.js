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
		btnLabel: "Notre bachelor",
		btnUrl: "/diplomes/administrateur-systemes-information",
		image: "tera-campeur_mf59vj",
	},
	{
		title: "Venez nous rencontrer au salon des études supérieures et de l'alternance",
		subtitle: "Le samedi 05 février à Reims",
		body: "Découvrez notre école et nos formations hybrides avec l'un de nos Guides.",
		btnLabel: "Inscription gratuite",
		btnUrl: "https://www.studyrama.com/salons/salon-studyrama-des-etudes-superieures-et-de-l-140",
		btnExternal: true,
		image: "centre-congres-reims_uibcst",
	},
]

const Slide = ({title, subtitle, body, btnLabel, btnUrl, btnExternal, additional, image}) => (
	<div className="flex flex-col lg:flex-row lg:gap-x-8 gap-y-4 lg:gap-y-0">
		<div className="h-96 w-full lg:w-1/3 p-4 flex bg-white rounded">
			<div className="p-4 flex-grow border">
				{ title ? <div className="mb-4 text-xl lg:text-2xl font-bold">{title}</div> : null }
				{ subtitle ? <div className="mb-4 lg:text-lg font-semibold">{subtitle}</div> : null }
				{ body ? <div className="mb-4">{body}</div> : null }
				{ btnLabel && btnUrl
					? btnExternal
						? <div className="mb-4 w-full lg:w-max"><a href={btnUrl} target="_blank" rel="noopener noreferrer"><Button label={btnLabel} fullWidth /></a></div>
						: <div className="mb-4 w-full lg:w-max"><Link href={btnUrl}><a><Button label={btnLabel} fullWidth /></a></Link></div> 
					: null
				}
				{ additional ? <div className="text-sm font-bold">{additional}</div> : null }
			</div>
		</div>
		<div
			className="h-96 w-full lg:w-2/3 bg-center bg-no-repeat bg-cover rounded"
			style={{ backgroundImage: `url('https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/${image}')` }}
		/>
	</div>
)

const Slider = () => {
	SwiperCore.use([Autoplay])

	return (
		<div className="rounded-lg">
			<Swiper cssMode={true} centeredSlides={true} spaceBetween={30} autoplay={{delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true}}>
				{
					slides.map((slide, index) => (
						<SwiperSlide key={`slide${index}`}>
							<Slide
								title={slide.title}
								subtitle={slide.subtitle}
								body={slide.body}
								btnLabel={slide.btnLabel}
								btnUrl={slide.btnUrl}
								btnExternal={slide.btnExternal}
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
