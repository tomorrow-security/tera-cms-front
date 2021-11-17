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
          whiteR
            ? "border rounded border-tc-red text-tc-red bg-white hover:bg-tc-blue"
            : ""
        } ${
          whiteB
            ? "border rounded border-tc-blue text-tc-blue bg-white hover:bg-tc-red hover:bg-opacity-50"
            : ""
        } ${
          red
            ? "border rounded border-white text-white bg-tc-red hover:bg-tc-blue hover:bg-opacity-50"
            : ""
        }${
          blue
            ? "border rounded border-white text-white bg-tc-blue hover:bg-tc-red"
            : ""
        } px-6 py-2 transition-colors duration-700 ease-in-out`}
      >
        {title}
      </a>
    </div>
  )
}
