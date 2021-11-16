// TODO faire fonctionner visited

export default function ExternalLink({ title, url, aria, red, blue, white }) {
  return (
    <div className="flex justify-center my-4">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={aria}
        className={`${red ? "border-tc-red text-tc-red" : ""} ${
          blue ? "border-tc-blue text-tc-blue" : ""
        } ${white ? "border-white text-white" : ""} px-6 py-2 border rounded`}
      >
        {title}
      </a>
    </div>
  )
}
