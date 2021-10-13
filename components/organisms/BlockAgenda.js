import PageLink from "../atoms/PageLink"
import SocialLink from "../atoms/SocialLink"
import BlockTitle from "../atoms/BlockTitle"
import SocialNav from "../molecules/SocialNav"
import EventLive from "../molecules/EventLive"
import IconeYoutube from "../atoms/IconeYoutube"

export default function BlockAgenda(events) {
  /**
   * bolean of no event in the array
   */
  const notEvent = events.length === 0
  /**
   * calendar cache if no event in the array
   */
  const invisible = notEvent ? "hidden" : ""

  console.log(events)

  return (
    <section id="agenda" className="py-10 lg:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Agenda"
          iconPicture={{ backgroundImage: "url('pop-corn.png')" }}
        />
        <div className="lg:flex lg:flex-row lg:flex-nowrap lg:justify-around lg:items-center lg:text-xl">
          <div className={`w-full lg:w-1/2 ${invisible}`}>
            {/* <ul className="flex flex-col justify-center mx-2 sm:justify-start lg:text-lg ">
              {events.map((event, index) => (
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
              ))}
            </ul> */}
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
        <div className="flex flex-row flex-wrap items-center justify-center mt-8 text-base lg:mt-12 lg:text-xl">
          <div className="flex">
            <p className="w-max">Retouve tous&nbsp;</p>
            <div>
              {/* // TODO faire la page des live passés */}
              <PageLink id="pastlive" label="nos lives passés" />
            </div>
            <p className="w-max">&nbsp;sur notre chaîne</p>
          </div>
          <div className="m-2">
            <SocialLink
              name="Youtube"
              url="https://www.youtube.com/channel/UCwP2ZwND8Ce4U0qpz03iSeg"
              logo={<IconeYoutube />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
