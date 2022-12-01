import Link from "next/link"
import IconLogo from "../atoms/IconLogo"

export default function Header() {
	return (
		<header className="text-white bg-tc-blue">
			<div className="py-2 flex items-center justify-center">
				<div className="mr-12 w-max">
					<Link href="/">
						<a className="flex items-center">
							<div className="w-10 mr-2"><IconLogo /></div>
							<div className="text-lg font-bold uppercase">Tera Campus</div>
						</a>
					</Link>
				</div>
			</div>
		</header>
	)
}
