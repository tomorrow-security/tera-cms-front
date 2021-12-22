export default function ExternalLink({ title, url, aria }) {
	return (
		<div className="flex justify-center pt-8 my-2">
			{/* 
        // TODO faire fonctionner visited 
        */}
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				aria-label={aria}
				className="relative z-10 w-full overflow-hidden rounded-t h-7 md:h-9 md:w-4/5 group md:text-xl bg-tc-blue rounded-b-xl visited:text-tc-red visited:text-opacity-50"
			>
				<span className="absolute z-20 h-full transition-all ease-in delay-150 transform rounded-full w-1/25 left-12/25 bg-tc-red -bottom-full group-hover:duration-700 group-hover:-translate-y-full group-hover:scale-2575"></span>
				<p className="absolute z-30 inline-block w-full h-full font-semibold text-center text-white align-bottom">
					{title}&nbsp;&#x1F517;
				</p>
			</a>
		</div>
	)
}
