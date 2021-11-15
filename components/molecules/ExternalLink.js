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
        className="border rounded border-tc-red"
      >
        <p className="px-6 py-2 text-tc-red">{title}</p>
      </a>
    </div>
  )
}
