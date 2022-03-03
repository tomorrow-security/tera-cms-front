import FooterNav from "../molecules/FooterNav"
import IconLogo from "../atoms/IconLogo"

export default function Footer() {
	const today = new Date()
	return (
		<footer className="py-10 text-white bg-tc-blue">
			<div className="relative mx-2 md:container md:mx-auto md:px-2">
				<div className="flex flex-col items-center justify-between lg:flex-row">
					<div className="flex items-center">
						<div className="w-10 mr-2">
							<IconLogo />
						</div>
						<div>
							<div className="text-xl">Tera Campus</div>
							<a href="tel:+33469960065" className="text-sm">
								04.69.96.00.65
							</a>
						</div>
					</div>
					<FooterNav />
					<div className="text-center">
						© 2020-{today.getFullYear()} Tera Campus
					</div>
				</div>
				<div className="mt-4 flex justify-center">
					<img src="https://res.cloudinary.com/teracampus/image/upload/q_auto:low/v1638972870/cms/logo-qualiopi_bjqgit" className="w-1/3 md:w-1/6 xl:w-1/12" />
				</div>
			</div>
		</footer>
	)
}
