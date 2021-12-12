import { BookOpenIcon, ChevronDownIcon, LibraryIcon, MailIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from "next/link"
import { useState } from "react"

import IconLogo from "../atoms/IconLogo"

const menu = [
	{
		label: 'Notre école',
		children: [
			{
				label: 'A propos de Tera Campus',
				url: '/#concept',
			},
			{
				label: 'Nos guides',
				url: '/guides',
			},
			{
				label: 'FAQ',
				url: '/#faq',
			},
		]
	},
	{
		label: 'Le programme',
		url: '/program',
		children: [
			{
				label: 'Programme général',
				url: '/program',
			},
			{
				label: 'Les carrières',
				url: '/career',
			},
		]
	},
	{
		label: 'Actualités',
		url: '/#agenda',
	},
	{
		label: 'Rejoignez nous',
		url: '/join',
	},
]

const FirstLevelLink = ({ label, url, isDropdown, closeMenu }) => {
	if (isDropdown) {
		return (
			<div className="p-4 flex justify-center xl:justify-start items-center w-full cursor-default xl:hover:bg-tc-blue-navy">
				<span>{label}</span>
				<span className="ml-2"><ChevronDownIcon className="w-5 h-5" /></span>
			</div>
		)
	}

	return (
		<Link href={`${url}`}>
			<a className="p-4 flex justify-center xl:justify-start items-center w-full xl:hover:bg-tc-blue-navy" onClick={() => closeMenu()}>
				{label}
			</a>
		</Link>
	)
}

const SecondLevelLink = ({ label, url, closeMenu }) => (
	<Link href={`${url}`}>
		<a className="px-2 py-4 flex justify-center xl:justify-start items-center w-full bg-tc-blue-navy xl:bg-tc-blue xl:hover:bg-tc-blue-navy" onClick={() => closeMenu()}>
			{label}
		</a>
	</Link>
)

const DropDown = ({ item, closeMenu}) => {
	const [isRolledOut, setIsRolledOut] = useState(false)

	return (
		<div className="z-0 group">
			<div onClick={() => setIsRolledOut(!isRolledOut)}>
				<FirstLevelLink key={item.label} label={item.label} url={item.url} isDropdown={item.children} />
			</div>
			{
				item.children
					? (
						<div
							className={`relative ${isRolledOut ? 'block' : 'hidden'} xl:hidden xl:group-hover:block z-10`}
						>
							<ul className="xl:absolute min-w-full w-full xl:w-max">
								{
									item.children.map(child => (
										<li key={child.label}>
											<SecondLevelLink label={child.label} url={child.url} closeMenu={closeMenu} />
											</li>
									))
								}
							</ul>
						</div>
					)
					: null
			}
		</div>
	)
}

const SpecialLink = ({ icon, label, url, closeMenu }) => (
	<Link href={url}>
		<a className="px-4 py-1 flex flex-row xl:flex-col items-center" onClick={() => closeMenu()}>
			<span className="mr-2 xl:mr-0">{icon}</span>
			<span>{label}</span>
		</a>
	</Link>
)

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	const closeMenu = () => setIsOpen(false)

	return (
		<header className="text-white bg-tc-blue border-b-2 border-tc-red">
			<div className="md:container md:mx-auto">
				<div className="relative flex flex-col xl:flex-row items-center justify-between">

					{/* Logo and Mobile button */}
					<div className="py-2 flex items-center justify-between w-full xl:w-max">
						{/* Logo */}
						<div className="mr-12 w-max">
							<Link href="/">
								<a className="flex items-center">
									<div className="w-10 mr-2"><IconLogo /></div>
									<div className="text-lg font-bold uppercase">Tera Campus</div>
								</a>
							</Link>
						</div>
						{/* Mobile button */}
						<div className="w-12 xl:hidden" onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
						</div>
					</div>

					{/* Navigation */}
					<nav className={`${!isOpen ? 'hidden' : 'flex flex-col'} absolute xl:relative mt-14 xl:mt-0 w-full bg-tc-blue xl:flex xl:flex-row xl:flex-grow xl:justify-between items-center z-10`}>
						{/* Menu */}
						<div className="flex-grow w-full">
							<ul className="flex flex-col xl:flex-row">
								{ menu.map(item => <li key={item.label} className="w-full xl:w-max"><DropDown item={item} closeMenu={closeMenu} /></li>) }
							</ul>
						</div>
						{/* Calls To Action */}
						<div className="flex-none">
							<ul className="flex flex-col xl:flex-row">
								<li className="p-4 flex justify-center xl:justify-start xl:py-0 w-full xl:w-max text-yellow-300 xl:hover:bg-tc-blue-navy">
									<SpecialLink icon={<LibraryIcon className="w-6 h-6" />} label="Admission" url="/enrolment" closeMenu={closeMenu} />
								</li>
								<li className="p-4 flex justify-center xl:justify-start xl:py-0 w-full xl:w-max xl:hover:bg-tc-blue-navy">
									<SpecialLink icon={<BookOpenIcon className="w-6 h-6" />} label="Brochure" url="/brochure" closeMenu={closeMenu} />
								</li>
								<li className="p-4 flex justify-center xl:justify-start xl:py-0 w-full xl:w-max xl:hover:bg-tc-blue-navy">
									<SpecialLink icon={<MailIcon className="w-6 h-6" />} label="Contact" url="/contact" closeMenu={closeMenu} />
								</li>
							</ul>
						</div>
					</nav>

				</div>
			</div>
		</header>
	)
}
