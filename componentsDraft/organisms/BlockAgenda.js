import SocialNav from "../molecules/SocialNav"
import EventLive from "../molecules/EventLive"

export default function BlockAgenda({ events }) {
	const notEvent = events.length === 0
	const invisible = notEvent ? "hidden" : ""

	return (
		<section id="agenda" className="py-10 lg:py-20">
			<div className="md:container md:mx-auto">
				<div className="lg:flex lg:flex-row lg:flex-nowrap lg:justify-around lg:items-center lg:text-xl">
					<div className={`w-full lg:w-1/2 ${invisible}`}>
						<ul className="flex flex-col justify-center mx-2 sm:justify-start lg:text-lg ">
							{events.map((event, index) => (
								<EventLive
									key={index}
									url={event.url}
									platform={event.platform}
									startDate={event.startDate}
									endDate={event.endDate}
									description={event.description}
									title={event.name}
								/>
							))}
						</ul>
					</div>
					<div className="flex flex-col justify-center mt-8 space-y-10">
						<p className="flex flex-col justify-center mx-auto space-y-2 font-bold text-center lg:text-2xl">
							<span className="animate-wiggle">Abonnez-vous</span>
							<span>et</span>
							<span>suivez en direct toutes nos actualités :</span>
						</p>
						<SocialNav />
					</div>
				</div>
			</div>
		</section>
	)
}
