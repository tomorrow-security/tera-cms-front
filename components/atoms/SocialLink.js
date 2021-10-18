export default function SocialLink({ name, url, logo }) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			className="relative flex items-center justify-center w-12 h-12 mx-1 rounded-full group"
			aria-label={name}
		>
			<div className="flex items-center justify-center w-12 h-12 transition-all duration-200 ease-out transform scale-100 rounded-full bg-tc-blue group-hover:bg-tc-blue group-hover:scale-0 group-hover:ease-in"></div>
			<div className="absolute w-6 h-6 text-white transform top-3 left-3 group-hover:scale-150 group-hover:text-tc-red group-hover:transition-all group-hover:duration-200 group-hover:ease-in">
				{logo}
			</div>
		</a>
	)
}
