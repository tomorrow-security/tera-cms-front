import Link from 'next/link'

import BlockTitle from '../atoms/BlockTitle'
import LinkButton from '../atoms/LinkButton'
import IconFacebook from '../atoms/IconFacebook'
import IconInstagram from '../atoms/IconInstagram'
import IconLinkedin from '../atoms/IconLinkedin'
import IconTwitch from '../atoms/IconTwitch'
import SocialLink from '../atoms/SocialLink'
import LiveLink from '../atoms/LiveLink'

const platformsLogosDict = {
  'facebook': <IconFacebook />,
  'instagram': <IconInstagram />,
  'linkedin': <IconLinkedin />,
  'twitch': <IconTwitch />,
}

export default function BlockAgenda({ events }) {
	return (
		<section id="agenda" className="py-10 lg:py-20 bg-gray-50">
			<div className="md:container md:mx-auto">
				<BlockTitle title="Agenda" iconPicture={{ backgroundImage: "url('pop-corn.png')" }} />
				<div className="lg:flex lg:flex-row lg:flex-nowrap lg:justify-around lg:items-center lg:text-xl">
					<div className="w-full lg:w-1/2">
						<ul className="flex flex-col justify-center mx-2 sm:justify-start lg:text-lg ">
							{
								events.map((event, index) => (
									<li
										key={index}
										className="flex flex-col items-center justify-center w-full my-2 md:flex-row md:justify-between lg:w-11/12 lg:border lg:border-tc-blue lg:rounded lg:shadow-lg">
										<div className="flex flex-row items-center w-full md:w-3/4">
											<LiveLink
												name={event.platform}
												url={event.url}
												logo={platformsLogosDict[event.platform]}
											/>
											<div className="flex flex-col w-5/6 px-2 py-4 xl:ml-2">
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
                    </div>
                    <div className="mx-auto mt-1 mb-4 w-max md:w-1/4 md:mx-0 md:mt-4">
                      <LinkButton url="registration" label="Je m'inscris" />
                    </div>
                  </li>
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
            <div className="flex flex-row justify-center mt-8 flex-nowrap justify-items-center">
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
