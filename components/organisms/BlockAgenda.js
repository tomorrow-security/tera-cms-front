import BlockTitle from '../atoms/BlockTitle'
import SocialNav from '../molecules/SocialNav'
import EventLive from '../molecules/EventLive'


export default function BlockAgenda({ events }) {
  /**
   * bolean of no event in the array
   */
  const notEvent = events.length === 0
  /**
   * calendar cache if no event in the array
   */
  const invisible = notEvent ? 'hidden' : ''
	return (
		<section id="agenda" className="py-10 lg:py-20 bg-gray-50">
			<div className="md:container md:mx-auto">
				<BlockTitle title="Agenda" iconPicture={{ backgroundImage: "url('pop-corn.png')" }} />
				<div className="lg:flex lg:flex-row lg:flex-nowrap lg:justify-around lg:items-center lg:text-xl">
					<div className={`w-full lg:w-1/2 ${invisible}`}>
						<ul className="flex flex-col justify-center mx-2 sm:justify-start lg:text-lg ">
							{
								events.map((event, index) => (
									<EventLive
										key={index}
										url={event.url}
										platform={event.platform}
										dateTimeDate={event.dateTimeDate}
										date={event.date}
										dateTimeTimetable={event.dateTimeTimetable}
										timetable={event.timetable}
										description={event.description}
										title={event.title}
									/>
                ))
              }
            </ul>
          </div>
          <div className="flex flex-col justify-center mt-8 space-y-10">
            <p className="flex flex-col justify-center mx-auto space-y-2 font-bold text-center lg:text-2xl">
              <span className="animate-wiggle">Abonne toi&nbsp;</span>
              <span>et&nbsp;</span>
              <span>suis en direct toutes nos actualités :</span>
            </p>
            <SocialNav />
          </div>
        </div>
      </div>
    </section>
  )
}
