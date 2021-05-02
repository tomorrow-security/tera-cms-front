import BlockTitle from '../atoms/BlockTitle'
import IconFacebook from '../atoms/IconFacebook'
import IconInstagram from '../atoms/IconInstagram'
import IconLinkedin from '../atoms/IconLinkedin'
import IconTwitch from '../atoms/IconTwitch'
import SocialLink from '../atoms/SocialLink'

const platformsLogosDict = {
  'facebook': <IconFacebook />,
  'instagram': <IconInstagram />,
  'linkedin': <IconLinkedin />,
  'twitch': <IconTwitch />,
}

export default function BlockAgenda({ events }) {
  return (
    <section id="agenda" className="py-10 md:py-20">
      <div className="md:container md:mx-auto">
        <BlockTitle title="Agenda" />
        <div className="md:flex md:flex-row md:flex-nowrap md:justify-around md:text-xl">
          <div>
            <ul className="mx-2 flex flex-col justify-center sm:justify-start md:text-lg">
            {events.map((event, index) => (
              <li
                key={index}
                className="my-2 flex flex-row items-center md:border md:border-tc-blue md:rounded md:shadow-lg"
              >
                <div className="w-6 h-6 sm:ml-4 text-tc-red">
                  {platformsLogosDict[event.platform]}
                </div>
                <div className="flex flex-col py-4 px-2 w-3/4 xl:ml-2">
                  <div className="flex flex-row mb-1">
                    <time
                      className="mr-2"
                      dateTime={event.dateTimeDate}>
                      {event.date}
                    </time>
                    <time dateTime={event.dateTimeTimetable}>
                      {event.timetable}
                    </time>
                  </div>
                  <div className="text-sm sm:text-base">
                    <h3 className="font-bold">{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              </li>
            ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-col justify-center md:space-y-10">
            <p className="mx-auto text-center font-bold md:text-2xl md:flex md:flex-col md:justify-center md:space-y-2">
              <span>Abonne toi&nbsp;</span>
              <span>et&nbsp;</span>
              <span>suis en direct toutes nos actualités :</span>
            </p>
            <div className="flex flex-row flex-nowrap justify-center justify-items-center mt-8">
              <SocialLink
                name="linkedin"
                url="https://www.linkedin.com/company/teracampus"
                logo={platformsLogosDict["linkedin"]}
              />
              <SocialLink
                name="facebook"
                url="https://www.facebook.com/teracampus"
                logo={platformsLogosDict["facebook"]}
              />
              <SocialLink
                name="instagram"
                url="https://www.instagram.com/tera.campus"
                logo={platformsLogosDict["instagram"]}
              />
              <SocialLink
                name="twitch"
                url="https://www.twitch.tv/teracampus"
                logo={platformsLogosDict["twitch"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
