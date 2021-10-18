import PageLink from "../atoms/PageLink"
import SocialLink from "../atoms/SocialLink"
import BlockTitle from "../atoms/BlockTitle"
import SocialNav from "../molecules/SocialNav"
import EventLive from "../molecules/EventLive"
import IconeYoutube from "../atoms/IconeYoutube"

import LiveLink from "../atoms/LiveLink"
import LinkButton from "../atoms/LinkButton"

export default function BlockAgenda(events) {
  const lives = Object.values(events)
  /**
   * bolean of no event in the array
   */
  const notEvent = lives.length === 0
  /**
   * calendar cache if no event in the array
   */
  const invisible = notEvent ? "hidden" : ""

  // console.log("events:", events)
  console.log("lives:", lives)

  const broadcasts = lives.map((live) =>
    live.map(({ column_values }) => Object.values(column_values))
  )

  console.log("broadcasts:", broadcasts)

  /**
   * mise en tableau de l'objet contenant les valeur désirées
   */
  const onTheAir = lives.map((live) =>
    live.map(({ column_values }) =>
      Object.values(column_values).map((i) => Object.values(i))
    )
  )

  console.log("onTheAir:", onTheAir)

  // const test = onTheAir.map((a) => console.log("a:", a))

  // const date = (broadcasts = "statut_1") && { text }

  // console.log("date:", date)
  // TODO voir .find pour récupéré précisement la valuer voulue

  return (
    <section id="agenda" className="py-10 lg:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle
          title="Agenda"
          iconPicture={{ backgroundImage: "url('pop-corn.png')" }}
        />
        <div className="lg:flex lg:flex-row lg:flex-nowrap lg:justify-around lg:items-center lg:text-xl">
          <div className={`w-full lg:w-1/2 ${invisible}`}>
            <ul className="flex flex-col justify-center mx-2 sm:justify-start lg:text-lg">
              {lives.map((live, index) => (
                <div key={index}>
                  {live.map(({ name, id }) => (
                    <div key={id}>
                      <li className="flex flex-col items-center justify-center w-full my-2 md:flex-row md:justify-between lg:w-11/12 lg:border lg:border-tc-blue lg:rounded lg:shadow-lg">
                        <div className="flex flex-row items-center w-full md:w-3/4">
                          {/* <LiveLink
                          name={platform}
                          url={url}
                          logo={platformsLogosDict[platform]}
                        /> */}
                          <div className="flex flex-col w-5/6 px-2 py-4 xl:ml-2">
                            <div className="flex flex-row mb-1">
                              <time
                                className="mr-2"
                                dateTime={broadcasts[0][0].text}
                              >
                                {broadcasts[0][0].text}
                              </time>
                              <time dateTime={broadcasts[0][0].text}>
                                {broadcasts[0][0].text}
                              </time>
                            </div>
                            <div className="text-sm sm:text-base">
                              <h3 className="font-bold">{live.name}</h3>
                              <p>{broadcasts[0][0].text}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mx-auto mt-1 mb-4 w-max md:w-1/4 md:mx-0 md:mt-4">
                          <LinkButton url="registration" label="Je m'inscris" />
                        </div>
                      </li>

                      {/* {broadcasts.map((broadcast, index) => (
                        <EventLive
                          key={index}
                          // url={date}
                          url={broadcast.text}
                          platform={broadcast.text}
                          dateTimeDate={broadcast.text}
                          date={broadcast.text}
                          dateTimeTimetable={broadcast.text}
                          timetable={broadcast.text}
                          description={broadcast.text}
                          title={name}
                        />
                      ))} */}
                    </div>
                  ))}
                </div>
              ))}
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
