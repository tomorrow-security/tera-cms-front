import { LocationMarkerIcon } from '@heroicons/react/outline'
import { format } from 'date-fns'

import LiveLink from "../atoms/LiveLink"
import LinkButton from "../atoms/LinkButton"
import IconFacebook from "../atoms/IconFacebook"
import IconInstagram from "../atoms/IconInstagram"
import IconLinkedin from "../atoms/IconLinkedin"
import IconTwitch from "../atoms/IconTwitch"

const platforms = {
	facebook: {
		url: 'https://www.facebook.com/teracampus',
		logo: <IconFacebook />,
	},
	instagram: {
		url: 'https://www.instagram.com/tera.campus',
		logo: <IconInstagram />,
	},
	linkedin: {
		url: 'https://www.linkedin.com/company/teracampus',
		logo: <IconLinkedin />,
	},
	twitch: {
		url: 'https://www.twitch.tv/teracampus',
		logo: <IconTwitch />,
	},
}

export default function EventLive({
	platform,
	url,
	startDate,
	endDate,
	description,
	title,
}) {

	let eventDate
	if (startDate === endDate) {
		eventDate = <p className="mr-2">Le {format(new Date(startDate), 'dd/MM/yyyy - kk:mm')}</p>
	} else {
		eventDate = <p className="mr-2">Du {format(new Date(startDate), 'dd/MM/yyyy - kk:mm')} au {format(new Date(endDate), 'dd/MM/yyyy - kk:mm')}</p>
	}

	let link
	if (url) {
		link = <LinkButton url={url} label="Je m'inscris" />
	} else {
		link = <LinkButton url="/registration" label="Je m'inscris" />
	}

	let icon
	if (platform === 'URL') {
		icon = <LiveLink name={platform} url={url} logo={<LocationMarkerIcon />} />
	} else {
		icon = <LiveLink name={platform} url={platforms[platform.toLowerCase()].url} logo={platforms[platform.toLowerCase()].logo} />
	}


	return (
		<li className="flex flex-col items-center justify-center w-full px-4 my-2 md:flex-row md:justify-between lg:w-11/12 lg:border lg:border-tc-blue lg:rounded lg:shadow-lg">
			<div className="flex flex-row items-center w-full md:w-3/4">
				{icon}
				<div className="flex flex-col w-5/6 px-2 py-4 xl:ml-2">
					<div className="flex flex-row mb-1">
						{ eventDate }
					</div>
					<div className="text-sm sm:text-base">
						<h3 className="font-bold">{title}</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-1 mb-4 w-max md:w-1/4 md:mx-0 md:mt-4 md:mr-1 xl:mx-2 ">
				{ link }
			</div>
		</li>
	)
}