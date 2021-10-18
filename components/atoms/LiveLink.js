export default function LiveLink({ name, url, logo }) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			className="flex items-center justify-center w-12 h-12 mx-1"
			aria-label={name}
		>
			<div className="w-6 h-6 text-tc-red">{logo}</div>
		</a>
	)
}
