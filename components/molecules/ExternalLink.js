
export default function ExternalLink({ title, url }) {
	return (
    <div className="flex justify-center pt-8 my-2">
        {/* 
        // TODO modifier la transition 
        // TODO ajouter visited 
        */}
        <a href={url} className="relative z-10 w-full overflow-hidden transition duration-700 rounded-t h-7 md:h-9 md:w-4/5 group md:text-xl bg-tc-blue rounded-b-xl">
            <span className="absolute left-0 z-20 h-full transition-all delay-100 transform rounded-full bg-tc-red w-1/8 -bottom-full group-hover:-translate-y-full group-hover:scale-200"></span>
            <span className="absolute z-20 h-full transition-all ease-out delay-200 transform rounded-full w-1/8 -bottom-full left-1/8 group-hover:-translate-y-full bg-tc-red group-hover:scale-200"></span>
            <span className="absolute z-20 h-full transition-all ease-in delay-300 transform rounded-full w-1/8 -bottom-full left-2/8 group-hover:-translate-y-full bg-tc-red group-hover:scale-200"></span>
            <span className="absolute z-20 h-full transition-all ease-in transform rounded-full w-1/8 -bottom-full left-3/8 delay-400 group-hover:-translate-y-full bg-tc-red group-hover:scale-200"></span>
            <span className="absolute z-20 h-full transition-all ease-in delay-500 transform rounded-full w-1/8 left-4/8 -bottom-full group-hover:-translate-y-full bg-tc-red group-hover:scale-200"></span>
            <span className="absolute z-20 h-full transition-all ease-in transform rounded-full delay-600 w-1/8 -bottom-full left-5/8 group-hover:-translate-y-full bg-tc-red group-hover:scale-200"></span>
            <span className="absolute z-20 h-full transition-all ease-in delay-700 transform rounded-full w-1/8 -bottom-full left-6/8 group-hover:-translate-y-full bg-tc-red group-hover:scale-200"></span>
            <span className="absolute z-20 h-full transition-all ease-in transform rounded-full w-1/8 -bottom-full left-7/8 delay-800 group-hover:-translate-y-full bg-tc-red group-hover:scale-200"></span>
            <p className="absolute z-30 inline-block w-full h-full font-semibold text-center text-white align-bottom">{title}&nbsp;&#x1F517;
            </p>
        </a>
    </div>
	)
}
