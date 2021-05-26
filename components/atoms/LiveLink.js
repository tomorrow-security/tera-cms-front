export default function LiveLink({ name, url, logo }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center"
      aria-label={name}
    >
      <div className="w-6 h-6 sm:ml-4 text-tc-red">{logo}</div>
    </a>
  )
}