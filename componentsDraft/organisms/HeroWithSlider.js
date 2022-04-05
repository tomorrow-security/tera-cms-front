import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"
import "swiper/css"

import Button from "../../components/atoms/Button"

const slides = [
	{
		title: "Votre formation hybride commence ici.",
		subtitle: "Prenez votre carrière en main et formez-vous aux métiers du numérique.",
		body: "Formations certifiantes BAC+3 et BAC+5.",
		btnLabel: "Découvrir notre bachelor",
		btnUrl: "/diplomes/administrateur-systemes-information",
		image: "AdobeStock_198098295_iwchao",
	},
	{
		title: "Réunion d'information",
		subtitle: "Découvrez notre école et nos formations hybrides avec l'un de nos guides.",
		body: "Jeudi 28 avril à 18h00.",
		btnLabel: "Participer",
		btnUrl: "/evenements",
		image: "AdobeStock_387443025_agtvgs",
	},
]

const Slide = ({title, subtitle, body, btnLabel, btnUrl, btnExternal, additional, image}) => (
	<div className="flex flex-col lg:flex-row lg:gap-x-8 gap-y-4 lg:gap-y-0">
		<div className="h-96 w-full lg:w-1/3 flex bg-white rounded">
			<div className="py-4 flex-grow">
				{ title ? <div className="px-4 py-8 text-xl lg:text-2xl font-bold text-white bg-tc-blue-navy">{title}</div> : null }
				{ subtitle ? <div className="p-4 lg:text-lg font-semibold">{subtitle}</div> : null }
				{ body ? <div className="mb-8 px-4">{body}</div> : null }
				{ btnLabel && btnUrl
					? btnExternal
						? <div className="mb-4 px-4 w-full lg:w-max"><a href={btnUrl} target="_blank" rel="noopener noreferrer"><Button label={btnLabel} fullWidth /></a></div>
						: <div className="mb-4 px-4 w-full flex justify-center"><div className="w-full lg:w-max"><Link href={btnUrl}><a><Button label={btnLabel} fullWidth /></a></Link></div></div> 
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
			<Swiper cssMode={true} centeredSlides={true} spaceBetween={30} autoplay={{delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true}}>
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
