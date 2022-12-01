import IconLogo from '../atoms/IconLogo';

export default function Header() {
	return (
		<header className="py-2 flex items-center justify-center text-white bg-tc-blue">
			<div className="w-10 mr-2"><IconLogo /></div>
			<div className="text-lg font-bold uppercase">Tera Campus</div>
		</header>
	)
}
