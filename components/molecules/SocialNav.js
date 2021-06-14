import SocialLink from '../atoms/SocialLink'
import IconFacebook from '../atoms/IconFacebook'
import IconInstagram from '../atoms/IconInstagram'
import IconLinkedin from '../atoms/IconLinkedin'
import IconTwitch from '../atoms/IconTwitch'

const socialNetworks = [
  {
    label: 'linkedin',
    url: 'https://www.linkedin.com/company/teracampus',
    logo: <IconLinkedin />,
  },
  {
    label: 'facebook',
    url: 'https://www.facebook.com/teracampus',
    logo: <IconFacebook />,
  },
  {
    label: 'instagram',
    url: 'https://www.instagram.com/tera.campus',
    logo: <IconInstagram />,
  },
  {
    label: 'twitch',
    url: 'https://www.twitch.tv/teracampus',
    logo: <IconTwitch />,
  },
]

export default function SocialNav() {
  return (
   <ul className="flex flex-row justify-center mt-8 flex-nowrap justify-items-center">
      {
        socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.label}>
            <SocialLink
                    name={socialNetwork.label}
                    url={socialNetwork.url}
                    logo={socialNetwork.logo}
            />
          </li>
        ))
      }
   </ul>
  )
}