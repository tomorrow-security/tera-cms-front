import PageLink from '../atoms/PageLink'
import HashLink from '../atoms/HashLink'

const links1 = [
	{ id: 'agenda', label: 'Agenda' },
]

const links2 = [
	{ id: 'faq', label: 'Faq' },
]

const pages1 = [
	{ id: 'career', label: 'Carrières' },
	{ id: 'guides', label: 'Nos guides' },
	{ id: 'program', label: 'Programme' },
	{ id: 'join', label: 'Rejoins-nous' },
]

const pages2 = [
	{ id: 'contact', label: 'Contact' },
]

//TODO revoir les space-y en wiew mobile

export default function HeaderNav({click}) {
	return (
		<nav className="pr-2 text-lg text-center lg:flex lg:justify-between">
			<ul className="space-y-2 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
				{
					links1.map(({ id, label }) => (
						<li key={`navmd-${id}`} onClick={click} className="mx-auto text-center w-max">
							<HashLink id={id} label={label} />
						</li>
					))
				}
			</ul>
			<ul className="space-y-2 lg:mx-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
				{
					pages1.map(({ id, label }) => (
						<li key={`navmd-${id}`} onClick={click} className="mx-auto text-center w-max">
							<PageLink id={id} label={label} />
						</li>
					))
				}
			</ul>
			<ul className="space-y-2 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
				{
					links2.map(({ id, label }) => (
						<li key={`navmd-${id}`} onClick={click} className="mx-auto text-center w-max">
							<HashLink id={id} label={label} />
						</li>
					))
				}
			</ul>
			<ul className="space-y-2 lg:mx-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-center">
				{
					pages2.map(({ id, label }) => (
						<li key={`navmd-${id}`} onClick={click} className="mx-auto text-center w-max">
							<PageLink id={id} label={label} />
						</li>
					))
				}
			</ul>
		</nav>
	)
}