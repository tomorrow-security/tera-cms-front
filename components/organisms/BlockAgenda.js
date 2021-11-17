import SubTitle from "../atoms/SubTitle"
import SocialNav from "../molecules/SocialNav"
import EventLive from "../molecules/EventLive"

export default function BlockAgenda({ events }) {
  /**
   * bolean of no event in the array
   */
  const notEvent = events.length === 0
  /**
   * calendar cache if no event in the array
   */
  const invisible = notEvent ? "hidden" : ""
  return (
    <section id="agenda" className="py-5">
      <SubTitle
        title="Actualités"
        iconPicture={{ backgroundImage: "url('calendrier-blue.png')" }}
      />
      <h3 className="text-2xl text-center md:text-3xl">
        JPO,Thursday Tech Live,coaching alternance…
      </h3>
      <div className="my-2 lg:flex lg:flex-row lg:flex-nowrap lg:justify-around lg:items-center lg:text-xl">
        <div className={`w-full lg:w-1/2 ${invisible}`}>
          <ul className="flex flex-col justify-center mx-2 sm:justify-start lg:text-lg ">
            {events.map((event, index) => (
              <EventLive
                key={index}
                url={event.url}
                platform={event.platform}
                datetime={event.datetime}
                description={event.description}
                title={event.name}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center mt-8 space-y-10">
          <p className="flex flex-col justify-center mx-auto space-y-2 font-bold text-center lg:text-2xl">
            <span className="animate-wiggle">Abonnez vous&nbsp;</span>
            <span>et&nbsp;</span>
            <span>suivez en direct toutes nos actualités :</span>
          </p>
          <SocialNav />
        </div>
      </div>
    </section>
  )
}
