
export default function ExternalLink({ title, url }) {
	return (
    <div className="flex justify-center pt-8 my-2">
        {/* 
        // TODO ralentir la transition 
        // TODO ajouter visited 
        */}
        <a href={url} className="relative z-10 w-full overflow-hidden transition rounded-t duration-1500 ease-ease h-7 md:h-9 md:w-4/5 group md:text-xl bg-tc-blue rounded-b-xl">
            <span className="absolute z-20 h-full transition-all delay-150 transform rounded-full w-1/25 left-12/25 bg-tc-red -bottom-full group-hover:-translate-y-full group-hover:scale-2575"></span>
            <p className="absolute z-30 inline-block w-full h-full font-semibold text-center text-white align-bottom">{title}&nbsp;&#x1F517;
            </p>
        </a>
    </div>
	)
}
