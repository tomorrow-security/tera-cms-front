import LiveLink from "../atoms/LiveLink"
import LinkButton from "../atoms/LinkButton"
import IconFacebook from "../atoms/IconFacebook"
import IconInstagram from "../atoms/IconInstagram"
import IconLinkedin from "../atoms/IconLinkedin"
import IconTwitch from "../atoms/IconTwitch"
// TODO importer Incone Youtube quand fait

//TODO voir pour regrouper ces tableaux avec celui de SocialNav
const platformsLogos = {
  Facebook: <IconFacebook />,
  Instagram: <IconInstagram />,
  Linkedin: <IconLinkedin />,
  Twitch: <IconTwitch />,
  // TODO ajouter Youtube
}

const platformsLink = {
  Facebook: "https://www.facebook.com/teracampus",
  Instagram: "https://www.instagram.com/tera.campus",
  Linkedin: "https://www.linkedin.com/company/teracampus",
  Twitch: "https://www.twitch.tv/teracampus",
  // TODO ajouter Youtube
}

export default function EventLive({
  url,
  platform,
  dateTimeDate,
  date,
  description,
  title,
}) {
  return (
    <li className="flex flex-col items-center justify-center w-full my-2 md:flex-row md:justify-between lg:w-11/12 lg:border lg:border-tc-blue lg:rounded lg:shadow-lg">
      <div className="flex flex-row items-center w-full md:w-3/4">
        <LiveLink
          name={platform}
          url={platformsLink[platform]}
          logo={platformsLogos[platform]}
        />
        <div className="flex flex-col w-5/6 px-2 py-4 xl:ml-2">
          <div className="flex flex-row mb-1">
            <time className="mr-2" dateTime={dateTimeDate}>
              {date}
            </time>
          </div>
          <div className="text-sm sm:text-base">
            <h3 className="font-bold">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-1 mb-4 w-max md:w-1/4 md:mx-0 md:mt-4">
        <LinkButton url="registration" label="Je m'inscris" />
      </div>
    </li>
  )
}
