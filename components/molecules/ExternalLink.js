export default function ExternalLink({ title, url, aria }) {
  return (
    <div className="flex justify-center my-4">
      {/* 
        // TODO faire fonctionner visited 
        */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={aria}
        className="relative z-10 flex items-center justify-center w-full pt-1 overflow-hidden rounded h-7 md:h-9 md:w-3/4 group md:text-xl bg-tc-blue"
      >
        <span className="absolute z-20 h-full transition-all ease-in delay-150 transform rounded-full w-1/25 left-12/25 bg-tc-red -bottom-full group-hover:duration-700 group-hover:-translate-y-full group-hover:scale-2575"></span>
        <p className="absolute z-30 inline-block w-full h-full font-semibold text-center text-white align-bottom">
          {title}&nbsp;&#x1F517;
        </p>
      </a>
    </div>
  )
}
