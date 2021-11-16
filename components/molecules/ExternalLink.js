// TODO faire fonctionner visited

export default function ExternalLink({
  title,
  url,
  aria,
  red,
  blue,
  whiteR,
  whiteB,
}) {
  return (
    <div className="flex justify-center my-4">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={aria}
        className={`${
          whiteR ? "border rounded border-tc-red text-tc-red bg-white" : ""
        } ${
          whiteB ? "border rounded border-tc-blue text-tc-blue bg-white" : ""
        } ${red ? "border rounded border-white text-white bg-tc-red" : ""}${
          blue ? "border rounded border-white text-white bg-tc-blue" : ""
        } px-6 py-2`}
      >
        {title}
      </a>
    </div>
  )
}
