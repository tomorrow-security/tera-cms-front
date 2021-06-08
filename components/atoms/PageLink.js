import Link from 'next/link'

export default function PageLink({ id, label }) {
	return (
		<Link href={`/${id}`}>
			<a className="relative flex items-center justify-center overflow-hidden ease-in transform group border-box focus:font-bold">
				<div className="absolute z-10 text-lg text-transparent transition-all duration-300 ease-in transform border-b-2 border-transparent border-white cursor-pointer -left-full group-hover:translate-x-full">
					{label}
				</div>
				<div className="z-20 text-lg bg-transparent border-b-2 border-transparent cursor-pointer">
					{label}
				</div>
			</a>
		</Link>
	)
}
