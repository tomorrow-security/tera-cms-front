import PageLink from '../atoms/PageLink'
import HashLink from '../atoms/HashLink'

const links1 = [
	{ id: 'agenda', label: 'Agenda' },
]

const links2 = [
	{ id: 'faq', label: 'Questions' },
]

const pages = [
	{ id: 'career', label: 'Carrières' },
	{ id: 'guides', label: 'Nos guides' },
	{ id: 'program', label: 'Programme' },
	{ id: 'join', label: 'Rejoins-nous' },
	{ id: 'contact', label: 'Contact' },
]

export default function HeaderNav({click}) {
	return (
		<nav className="pr-2 text-center lg:flex lg:justify-between text-lg">
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
					pages.map(({ id, label }) => (
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
		</nav>
	)
}